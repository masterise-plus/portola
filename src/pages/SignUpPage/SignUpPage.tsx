import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { EyeIcon, EyeOffIcon, ArrowLeft } from 'lucide-react'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col px-4 py-6">
      {/* Header */}
      <div className="flex items-center mb-8">
        <button 
          onClick={() => window.history.back()} 
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
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
              className="h-12 bg-gray-50 border-0"
            />
          </div>
          
          <div className="space-y-1">
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-12 bg-gray-50 border-0 pr-10"
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
                className="h-12 bg-gray-50 border-0 pr-10"
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

          <Button 
            type="submit" 
            className="w-full h-12 bg-[#f8ff35] hover:bg-[#e6ed20] text-black font-medium"
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
    </div>
  )
}

