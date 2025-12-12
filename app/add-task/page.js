'use client'
import { useState } from 'react'
import { useTaskStore } from '../../store/taskStore'
import Link from 'next/link'

export default function AddTask() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const addTask = useTaskStore((state) => state.addTask)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      addTask({ title, description })
      setTitle('')
      setDescription('')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Add New Task</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border rounded-lg text-gray-900"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-900">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-lg h-24 text-gray-900"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </form>
        
        <div className="mt-6 space-y-2">
          <Link href="/task-list" className="block text-center bg-gray-500 text-white p-2 rounded hover:bg-gray-600">
            View Tasks
          </Link>
          <Link href="/task-summary" className="block text-center bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Task Summary
          </Link>
        </div>
      </div>
    </div>
  )
}