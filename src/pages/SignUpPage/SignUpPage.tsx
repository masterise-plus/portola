import { useState, useEffect } from "react"
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { EyeIcon, EyeOffIcon, ArrowLeft } from 'lucide-react'
import { useBackButton } from '../../context/BackButtonContext'
import packageJson from '../../../package.json'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (emailError) {
      const timer = setTimeout(() => setEmailError(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [emailError])

  useEffect(() => {
    if (passwordError) {
      const timer = setTimeout(() => setPasswordError(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [passwordError])

  useEffect(() => {
    if (confirmPasswordError) {
      const timer = setTimeout(() => setConfirmPasswordError(''), 3000)
      return () => clearTimeout(timer)
    }
  }, [confirmPasswordError])

  const validateForm = () => {
    let isValid = true

    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address')
      isValid = false
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters')
      isValid = false
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match')
      isValid = false
    }

    return isValid
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        {useBackButton().isVisible && (
          <button 
            onClick={() => window.history.back()} 
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
        )}
        <div className="flex items-center gap-2 mx-auto pr-8">
          <div className="w-6 h-6 bg-black rounded-full" />
          <span className="text-xl font-semibold">Stockvest</span>
        </div>
      </div>

      {/* Sign Up Form */}
      <div className="w-full max-w-sm mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">Sign Up</h1>
        
        <form className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              className={`h-12 bg-gray-50 ${emailError ? 'border-red-500' : 'border-0'}`}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          
          <div className="space-y-1">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className={`h-12 bg-gray-50 ${passwordError ? 'border-red-500' : 'border-0'} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 px-1">Maximum of 6 characters with numbers</p>
          </div>

          <div className="space-y-1">
            <div className="relative">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
                className={`h-12 bg-gray-50 ${confirmPasswordError ? 'border-red-500' : 'border-0'} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 px-1">Maximum of 6 characters with numbers</p>
          </div>

          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}

          <Button 
            type="submit" 
            className="w-full h-12 bg-[#f8ff35] hover:bg-[#e6ed20] text-black font-medium"
            disabled={isSubmitting}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault()
              setIsSubmitting(true)
              if (validateForm()) {
                // Handle form submission
              }
              setIsSubmitting(false)
            }}
          >
            Registration
          </Button>

          <Button 
            type="button"
            variant="outline"
            className="w-full h-12 font-medium border-2"
            onClick={() => {/* Add Google OAuth logic */}}
          >
            <img
              src="/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            With Google
          </Button>

          <div className="text-center text-gray-500 text-sm">
            Already have an account?{' '}
            <a 
              href="/login" 
              className="w-full h-12 mt-2 inline-flex items-center justify-center rounded-md border-2 border-[#f8ff35] font-medium hover:bg-[#f8ff35]/10"
            >
              Login
            </a>
          </div>
        </form>
      </div>
      <div className="fixed bottom-0 left-0 right-0 text-center py-4 bg-white">
        <div className="text-gray-400 text-xs">
          v{packageJson.version}
        </div>
      </div>
    </div>
  )
}
