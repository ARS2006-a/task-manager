'use client'
import { useTaskStore } from '../../store/taskStore'
import Link from 'next/link'

export default function TaskList() {
  const { tasks, toggleTask, deleteTask } = useTaskStore()

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Task List</h1>
        
        <div className="mb-6 space-x-4">
          <Link href="/add-task" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add Task
          </Link>
          <Link href="/task-summary" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Summary
          </Link>
        </div>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-500">No tasks yet. Add your first task!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5"
                    />
                    <div>
                      <h3 className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-600'}`}>
                          {task.description}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}