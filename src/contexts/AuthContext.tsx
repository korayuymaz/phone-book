import React, { createContext, useState, ReactNode } from 'react'

interface AuthContextType {
  isLoggedIn: boolean
  setIsLoggedIn: (value: boolean) => void
  token: string | null
  setToken: (value: string | null) => void
  userID: string | null
  setUserID: (value: string) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userID, setUserID] = useState<string>('')
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  )

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, token, setToken, userID, setUserID }}
    >
      {children}
    </AuthContext.Provider>
  )
}
