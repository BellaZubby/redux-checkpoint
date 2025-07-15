import AddTask from "./components/AddTask"
import ListTask from "./components/ListTask"
const App = () => {
 
  return (
    <>
     <h1 className="text-center text-3xl font-bold mt-12">TO DO APP</h1>
     <AddTask/>
     <ListTask/>
    </>
  )
}

export default App
