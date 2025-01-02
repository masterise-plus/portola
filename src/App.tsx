import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import CacheBuster from 'react-cache-buster'
import { version } from '../package.json'
import LoginPage from './pages/LoginPage/LoginPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import PrivateRoute from './components/PrivateRoute'
import Dashboard from './pages/Dashboard/Dashboard'
import { BackButtonProvider } from './context/BackButtonContext'

const Loading = () => <div>Loading...</div>

function App() {
  const isProduction = process.env.NODE_ENV === 'production'
  const [isAuthenticated] = useState(true) // Temporary - replace with actual auth logic

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={isProduction}
      isVerboseMode={false}
      loadingComponent={<Loading />}
    >
      <BackButtonProvider>
        <BrowserRouter>
          <Routes>
          {/* Public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />

          {/* Private routes */}
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<Dashboard />} />
          </Route>

          {/* Catch-all route */}
          <Route path="*" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </BackButtonProvider>
    </CacheBuster>
  )
}

export default App
