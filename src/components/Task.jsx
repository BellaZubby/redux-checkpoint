import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTask, editTask } from '../JS/reducers/taskSlice'


const Task = ({task}) => {

    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);

    // logic for toggle
    const handleToggle = () => {
        // updates the task status 
        dispatch(toggleTask(task.id))
    }

    // logic for edit
    const handleEdit = () => {
        // checks if there is a new description (edit) then it uses the dispatch function to dispatch action to the store to update the state.
        if (newDescription.trim()) {
            dispatch(editTask({ id: task.id, description: newDescription }));
        }
        setIsEditing(false);
    }
  return (
     <li className="flex items-center justify-between p-2 border rounded bg-white shadow">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="h-5 w-5 text-blue-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border rounded p-1 focus:outline-none focus:ring-2"
          />
        ) : (
          <span
            className={`text-sm ${
              task.isDone ? 'line-through text-gray-500' : 'text-gray-800'
            }`}
          >
            {task.description}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1">
        {isEditing ? (
          <button
            onClick={handleEdit}
            className="text-green-600 hover:text-green-800 text-sm"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Edit
          </button>
        )}
      </div>
    </li>
  )
}

export default Task

// Features of this component
// - Show task description and completion status
// - Allow toggling of isDone
// - Allow inline editing of task description
// - Dispatch updates to Redux
// - Style with Tailwind for clarity and responsiveness
