'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Task Manager</h1>
        <div className="space-y-4">
          <a href="/add-task" className="block w-full bg-blue-500 text-white text-center py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Add New Task
          </a>
          <a href="/task-list" className="block w-full bg-gray-500 text-white text-center py-3 rounded-lg hover:bg-gray-600 transition-colors">
            View All Tasks
          </a>
          <a href="/task-summary" className="block w-full bg-green-500 text-white text-center py-3 rounded-lg hover:bg-green-600 transition-colors">
            Task Summary
          </a>
        </div>
      </div>
    </div>
  )
}