// creating my taskSlice
import { createSlice } from "@reduxjs/toolkit"

// initializing my app state

const initialState = {
    list: [],
}
// using the createSlice which generate a store slice,
// Takes in name, the initialState and reducer function as parameters
// And it returns reducer, action types, and action creators.
const taskSlice = createSlice({
    // the name key mostly used to prefix action types
    name: "tasks",
    initialState,
    // this creates the reducer function which takes the current state of the action and dispatched action as parameters and returns a new state based on the dispatched action
    reducers: {
        addTask: (state, action) => {
            // because of Immer.js built into the Redux toolkit, 
            // we can write a function that seems to be mutating state directly but under hood Immer.Js handles the immutability principle for us.
            state.list.push(action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.list.find((t) => t.id === action.payload);
            if (task) task.isDone = !task.isDone
        },
        editTask: (state, action) => {
            // using destructuring to extract id and description from the action.payload (which is an object)
            const {id, description} = action.payload;
            const task = state.list.find((t) => t.id === id);
            if (task) task.description = description
        }
    }
})

export const {addTask, toggleTask, editTask} = taskSlice.actions;

// default exports the reducer anonymously
export default taskSlice.reducer