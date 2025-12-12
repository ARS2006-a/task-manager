'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useProfile } from '../../contexts/ProfileContext'

export default function ReviewProfile() {
  const { profile, updateProfile } = useProfile()
  const router = useRouter()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(profile)

  const handleSave = () => {
    updateProfile(formData)
    setIsEditing(false)
  }

  const handleFinalize = () => {
    router.push('/profile/final')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Review Profile</h1>
        
        {!isEditing ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Name</h3>
              <p className="text-gray-700">{profile.name}</p>
            </div>
            <div>
              <h3 className="font-medium">Email</h3>
              <p className="text-gray-700">{profile.email}</p>
            </div>
            <div>
              <h3 className="font-medium">Bio</h3>
              <p className="text-gray-700">{profile.bio || 'No bio provided'}</p>
            </div>
            <div>
              <h3 className="font-medium">Skills</h3>
              <p className="text-gray-700">{profile.skills || 'No skills listed'}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
              >
                Edit
              </button>
              <button
                onClick={handleFinalize}
                className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
              >
                Finalize
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
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
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(false)}
                className="flex-1 bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}