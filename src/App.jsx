import { useState } from "react"
import TodoCard from "./todocard.jsx"
function App() {
  const [tasks , setTasks] = useState({
    task : "",
    priority : "high",
})
const [taskList, setTaskList] = useState([
  {
    task: "Buy groceries",
    priority: "high",
  },
  {
    task: "Clean the house",
    priority: "medium",
  },
  {
    task: "Finish project report",
    priority: "high",
  },
  {
    task: "Call mom",
    priority: "low",
  }
])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white flex flex-col">
      <header className="w-full p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <h1 className="text-4xl text-center font-bold text-gray-800 drop-shadow-sm hover:text-gray-700 transition-colors">
          My To-Do List
        </h1>
      </header>
              
      <div className="flex-1 container mx-auto px-2 sm:px-4 pb-28 sm:pb-24 pt-4 sm:pt-6 overflow-y-auto">
        {taskList.map((tasks, index) => {
          const { task, priority } = tasks;
          return (
            <TodoCard key={index} task={task} priority={priority} />
          );
        })}
      </div>
      
      <footer className="w-full fixed bottom-0 left-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100 p-3 sm:p-4 md:p-5">
        <div className="w-full max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:space-x-3">
            <div className="relative w-full sm:flex-grow">
              <input 
                type="text" 
                onChange={(event) => {
                  setTasks({...tasks, task: event.target.value })
                }}
                className="w-full h-11 sm:h-12 pl-4 sm:pl-5 pr-16 sm:pr-20 text-base sm:text-lg 
                  border border-gray-200 rounded-full 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                  shadow-sm transition-all duration-200 ease-out
                  hover:border-gray-300"
                placeholder="What do you need to do?"
                value={tasks.task}
              />
              <button 
                onClick={() => {
                  setTaskList([...taskList, tasks])
                  setTasks({ task: "", priority: "" })
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2 h-9 w-9 sm:h-10 sm:w-10 
                  bg-blue-500 text-white rounded-full shadow
                  hover:bg-blue-600 active:bg-blue-700 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                  transform transition-all duration-200 ease-out
                  hover:scale-105 active:scale-95
                  text-lg sm:text-xl"
              >
                +
              </button>
            </div>
            <select
              className="w-full sm:w-auto h-11 sm:h-12 px-3 sm:px-4 
                border border-gray-300 rounded-full 
                text-base sm:text-lg bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Choose Priority"
              onChange={(event) => {
                setTasks({ ...tasks, priority: event.target.value })
              }}
              value={tasks.priority}
            >
              <option value="">Set-Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>      
              <option value="low">Low</option>
            </select>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
