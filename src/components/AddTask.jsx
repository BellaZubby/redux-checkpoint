import React from 'react'
// used to dispatch actions to Redux store
import { useDispatch } from 'react-redux'
// importing my named addTask action creator from taskSlice
import { addTask } from '../JS/reducers/taskSlice'
import { useState } from 'react'

const AddTask = () => {
    // tracking the task description entry and  validation error
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    // this is a Redux Hook used to dispatch actions
    const dispatch = useDispatch()

    // console.log(dispatch)
    
    const handleAddTask = (e) => {
        e.preventDefault();
        // valiadtion to ensure description field is not empty
        if (!description.trim()) {
            setError(true);
            setErrorMessage("Please enter a task");
            return;
        }

        // create a local object for task

        const newTask = {
                id: Date.now(),
                description,
                isDone: false
            }

        // but if all things checks, we dispatch an action
        dispatch(
            addTask(newTask)
        );
        console.log("Task", newTask)
        setError(false);
        setDescription("");
    }
  return (
     <div className="p-4 max-w-md mx-auto flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold mb-4 text-center">Add a New Task</h2>
      <form onSubmit={handleAddTask} className="flex gap-2">
        <div>
            <input
          type="text"
          placeholder="Enter task description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="flex-grow p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {
            error && <p className='text-[11px] text-red-500'>{errorMessage}</p>
        }
        </div>
        
        <button
          type='submit'
        //   onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all h-10"
        >
          Add
        </button>
      </form>
    </div>

  )
}

export default AddTask

// This component is going to be used to dispatch actions to the store
// Key features include
// 1. Have a controlled input to enter a task
// 2. Dispatch an action to Redux to add the task
// 3. Automatically generate an ID and set isDone to false.