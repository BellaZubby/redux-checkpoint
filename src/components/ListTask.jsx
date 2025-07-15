import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'


const ListTask = () => {
    // the useSelector is used to pull task from the global state
    const tasks = useSelector((state) => state.tasks.list);
    console.log(tasks)
    const [filter, setFilter] = useState("All");

    // creating my filter logic
    const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true; // 'all'
  });

  return (
   <div className="p-4 max-w-md mx-auto">
      <div className="flex justify-center gap-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('done')}
          className={`px-3 py-1 rounded ${filter === 'done' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
        >
          Done
        </button>
        <button
          onClick={() => setFilter('notDone')}
          className={`px-3 py-1 rounded ${filter === 'notDone' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
        >
          Not Done
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks found.</p>
      ) : (
        <ul className="space-y-2">
          {filteredTasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      )}
    </div>

  )
}

export default ListTask

// Features of this component:
// - Pull all tasks from Redux state
// - Display them using the Task component
// - Include filter buttons: “All”, “Done”, “Not Done”
// - Respond dynamically when the user selects a filter
