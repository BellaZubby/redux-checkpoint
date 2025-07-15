# React Redux ToDo App

A simple and efficient ToDo application built with **React** and **Redux** for state management. Users can add tasks, edit them, filter by completion status, and delete task.

---

## Features

- Add new tasks with a description
- Edit existing tasks
- Mark tasks as completed or not completed
- Filter tasks by status: All / Done / Not Done
- Deletion of tasks
- Global state management using Redux

---

## Components

### `AddTask`
- Have a controlled input to enter a task
- Dispatch an action to Redux to add the task
- Automatically generate an ID and set isDone to false.

### `ListTask`
- Pull all tasks from Redux state
- Display them using the Task component
- Include filter buttons: “All”, “Done”, “Not Done”
- Respond dynamically when the user selects a filter


### `Task`
- Show task description and completion status
- Allow toggling of isDone
- Allow inline editing of task description
- Allow for deletion of task
- Dispatch updates to Redux


---

## Technologies Used

- React (Functional Components)
- Redux Toolkit
- React Redux
- Tailwind css for styling

---

## How It Works

- Tasks are stored in Redux with attributes:
  - `id`: unique identifier
  - `description`: task details
  - `isDone`: boolean for completion status
- On app load, task list is pulled from Redux store.
- State updates trigger re-render and UI changes.

