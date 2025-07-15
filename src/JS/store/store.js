// creating my redux store using the reduxToolkit
import { configureStore } from "@reduxjs/toolkit";
// import taskReducer from "../features/task/TaskSlice";
// within our store we import the anonymous default export and assign it a name of our choice
import taskReducer from "../reducers/taskSlice";

// initialize my store using the configureStore which takes in an object

export const store = configureStore({
    reducer: {
        // tasks is a slice of our app state, managed by taskSlice.js
        // This key (tasks) becomes the state slice name accessible via useSelector((state) => state.tasks)
        tasks: taskReducer
    }
})