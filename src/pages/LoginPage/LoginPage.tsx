import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import Logo from "@/components/shared/Logo/Logo"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset errors
    setEmailError('')
    setPasswordError('')
    
    // Validate email
    if (!email.includes('@')) {
      setEmailError('Please enter a valid email address')
      setTimeout(() => setEmailError(''), 3000)
      return
    }
    
    // Validate password
    if (!password.trim()) {
      setPasswordError('Password cannot be empty')
      return
    }
    
    // If validation passes, proceed with login
    // Add your login logic here
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Logo />

      {/* Login Form */}
      <div className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-8">Login</h1>
        
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                type="email"
                placeholder="Email"
                className={`h-12 bg-gray-50 border-0 ${emailError ? 'border border-red-500' : ''}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-sm text-[#ff4d4f] mt-1">{emailError}</p>}
            </div>
          
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 bg-gray-50 border-0 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-sm text-[#ff4d4f] mt-1">{passwordError}</p>}
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

          <div className="text-right">
            <a 
              href="/forgot-password"
              className="text-sm text-[#ff4d4f] hover:text-[#ff7875]"
            >
              Forgot Password?
            </a>
          </div>

          <Button 
            type="submit" 
            className="w-full h-12 bg-[#f8ff35] hover:bg-[#e6ed20] text-black font-medium"
          >
            Login
          </Button>

          {/* Social Login */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          <Button 
            type="button"
            variant="outline"
            className="w-full h-12 font-medium"
            onClick={() => {/* Add Google OAuth logic */}}
          >
            <img
              src="/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </Button>

          <Button 
            type="button"
            variant="outline"
            className="w-full h-12 font-medium mt-4"
            onClick={() => {/* Add Meta OAuth logic */}}
          >
            <img
              src="/meta.svg"
              alt="Meta"
              className="w-5 h-5 mr-2"
            />
            Sign in with Meta
          </Button>

          <div className="text-center text-gray-600 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="w-full h-12 mt-2 inline-flex items-center justify-center rounded-md border-2 border-[#f8ff35] font-medium hover:bg-[#f8ff35]/10"
            >
              Registration
            </button>
            <div className="text-center text-gray-400 text-xs mt-4">
              v0.0.0
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
