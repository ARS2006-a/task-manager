'use client'
import { createContext, useContext, useReducer } from 'react'

const ProfileContext = createContext()

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_PROFILE':
      return { ...state, ...action.payload }
    case 'RESET_PROFILE':
      return { name: '', email: '', bio: '', skills: '' }
    default:
      return state
  }
}

export const ProfileProvider = ({ children }) => {
  const [profile, dispatch] = useReducer(profileReducer, {
    name: '',
    email: '',
    bio: '',
    skills: ''
  })

  const updateProfile = (data) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: data })
  }

  const resetProfile = () => {
    dispatch({ type: 'RESET_PROFILE' })
  }

  return (
    <ProfileContext.Provider value={{ profile, updateProfile, resetProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export const useProfile = () => {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }
  return context
}