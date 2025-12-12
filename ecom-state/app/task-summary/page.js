'use client'
import { useState } from 'react'
import { useTaskStore } from '../../store/taskStore'
import Link from 'next/link'

export default function TaskSummary() {
  const tasks = useTaskStore((state) => state.tasks)
  const [filter, setFilter] = useState('all')

  const completedTasks = tasks.filter(task => task.completed)
  const pendingTasks = tasks.filter(task => !task.completed)

  const filteredTasks = filter === 'completed' ? completedTasks : 
                       filter === 'pending' ? pendingTasks : tasks

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Task Summary</h1>
        
        <div className="mb-6 space-x-4">
          <Link href="/add-task" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Task
          </Link>
          <Link href="/task-list" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Task List
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-lg font-semibold mb-4">Statistics</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-blue-100 p-4 rounded">
              <div className="text-2xl font-bold text-blue-600">{tasks.length}</div>
              <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="bg-green-100 p-4 rounded">
              <div className="text-2xl font-bold text-green-600">{completedTasks.length}</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div className="bg-yellow-100 p-4 rounded">
              <div className="text-2xl font-bold text-yellow-600">{pendingTasks.length}</div>
              <div className="text-sm text-gray-600">Pending</div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Filter Tasks</h2>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border rounded px-3 py-1"
            >
              <option value="all">All Tasks</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          <div className="space-y-3">
            {filteredTasks.length === 0 ? (
              <p className="text-gray-500">No tasks found for this filter.</p>
            ) : (
              filteredTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                      {task.title}
                    </h3>
                    {task.description && (
                      <p className={`text-sm ${task.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                        {task.description}
                      </p>
                    )}
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    task.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}