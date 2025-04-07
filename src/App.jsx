import { useState,useEffect } from "react"
import TodoCard from "./todocard.jsx"
import toast, { Toaster } from "react-hot-toast"


function App() {
  const [tasks , setTasks] = useState({
    task : "",
    priority : "high",
})
const [taskList, setTaskList] = useState([])
  useEffect(() => {
    if (taskList.length == 0) return;

    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("taskList") || "[]" );
    setTaskList(storedTasks);
}, []);

const onDelete = (index) => {
  const updatedTasks = taskList.filter((_,i)=> i !== index );
   setTaskList(updatedTasks);   
   toast.success('Task deleted successfully!');
  localStorage.setItem("taskList", JSON.stringify(updatedTasks));
   };
   const [showtab,setshowtab] = useState("All");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 flex flex-col">
    
      <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-md shadow-md">
        {/* Title Section */}
        <div className="w-full px-4 py-3 md:py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold 
            bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 
            bg-clip-text text-transparent
            hover:scale-[1.01] transition-transform duration-300">
            My To-Do List
          </h1>
        </div>

        {/* Toast Container */}
        <div><Toaster position="top-center" /></div>

        {/* Tabs Section */}
        <div className="flex justify-center items-center gap-2 md:gap-3 
          px-4 py-3 md:py-4 
          bg-white/60 backdrop-blur-md 
          border-t border-gray-100">
          {["All", "Medium", "High", "Low"].map((tab, i) => (
            <span 
              key={i}
              onClick={() => setshowtab(tab)}
              className={`
                px-4 py-2 md:px-6
                rounded-full text-sm md:text-base font-medium
                cursor-pointer select-none
                transition-all duration-200 ease-in-out
                border border-gray-200
                hover:shadow-md hover:scale-105 active:scale-95
                ${tab === showtab 
                  ? "bg-blue-500 text-white border-transparent shadow-blue-200/50" 
                  : "bg-white hover:bg-gray-50 active:bg-gray-100"}
              `}
            >
              {tab}
            </span>
          ))}
        </div>
      </header>

              
      {/* Task List Container */}
      <div className="flex-1 container mx-auto px-3 sm:px-4 pb-28 sm:pb-24 pt-4 overflow-y-auto">
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {taskList.map((tasks, index) => {
            const { task, priority } = tasks;
            if(showtab !== "All" && priority !== showtab.toLowerCase()) {
              return null;
            }
            return (
              <TodoCard key={index} task={task} priority={priority} index={index} onDelete={onDelete} />
            );
          })}
        </div>
      </div>
      
      {/* Footer Input Section */}
      <footer className="w-full fixed bottom-0 left-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-100 p-3 sm:p-4">
        <div className="w-full max-w-3xl mx-auto px-2">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <div className="relative flex-1">
              <input 
                type="text" 
                onChange={(event) => {
                  setTasks({...tasks, task: event.target.value })
                }}
                className="w-full h-11 sm:h-12 px-4 pr-12 text-base sm:text-lg 
                  border border-gray-200 rounded-full 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                  shadow-sm transition-all duration-200
                  hover:border-gray-300"
                placeholder="What do you need to do?"
                value={tasks.task}
              />
              {/* Add Task Button */}
              <button 
                onClick={() => {
                  if (!tasks.priority || !tasks.task) {
                    toast.error('Please enter task and priority!');
                    return;
                  }

                  setTaskList([...taskList, tasks]);
                  setTasks({ task: "", priority: "" });
                  toast.success('Task added successfully!');
                }}
                className="absolute top-1/2 -translate-y-1/2 right-2 
                  h-8 w-8 sm:h-9 sm:w-9
                  bg-blue-500 text-white rounded-full shadow
                  hover:bg-blue-600 active:bg-blue-700
                  hover:scale-105 active:scale-95
                  transition-all duration-200"
              >
                +
              </button>
            </div>
            {/* Priority Selector */}
            <select
              className="h-11 sm:h-12 px-3 sm:px-4
                w-full sm:w-32 
                border border-gray-200 rounded-full 
                text-base sm:text-lg bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent
                shadow-sm transition-all duration-200
                hover:border-gray-300
                cursor-pointer"
              aria-label="Choose Priority"
              onChange={(event) => {
                setTasks({ ...tasks, priority: event.target.value })
              }}
              value={tasks.priority}
            >
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
