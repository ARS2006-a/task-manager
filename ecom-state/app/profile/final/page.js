'use client'
import { useRouter } from 'next/navigation'
import { useProfile } from '../../contexts/ProfileContext'

export default function FinalProfile() {
  const { profile, resetProfile } = useProfile()
  const router = useRouter()

  const handleReset = () => {
    resetProfile()
    router.push('/profile/create')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-green-600">Profile Complete!</h1>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-800">Name</h3>
              <p className="text-gray-600">{profile.name}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">{profile.email}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Bio</h3>
              <p className="text-gray-600">{profile.bio || 'No bio provided'}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Skills</h3>
              <p className="text-gray-600">{profile.skills || 'No skills listed'}</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-3">
          <p className="text-gray-600">Your profile has been successfully created!</p>
          <div className="flex gap-2">
            <button
              onClick={() => router.push('/profile/review')}
              className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Back to Review
            </button>
            <button
              onClick={handleReset}
              className="flex-1 bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}