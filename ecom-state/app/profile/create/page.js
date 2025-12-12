'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useProfile } from '../../contexts/ProfileContext'

export default function CreateProfile() {
  const { profile, updateProfile } = useProfile()
  const router = useRouter()
  const [formData, setFormData] = useState(profile)

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile(formData)
    router.push('/profile/review')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Create Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              className="w-full p-2 border rounded-md h-20"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Skills</label>
            <input
              type="text"
              placeholder="e.g. React, Node.js, Python"
              value={formData.skills}
              onChange={(e) => setFormData({...formData, skills: e.target.value})}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Next: Review Profile
          </button>
        </form>
      </div>
    </div>
  )
}