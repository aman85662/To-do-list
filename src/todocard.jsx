const Task_Priority_Classes = {
    high: "bg-red-200 border-red-400 hover:bg-red-300",
    medium: "bg-yellow-100 border-yellow-300 hover:bg-yellow-200",
    low: "bg-green-100 border-green-300 hover:bg-green-200"
};

const Task_Priority_Text_Classes = {
    high: "text-red-900 font-bold",
    medium: "text-yellow-900 font-bold",
    low: "text-green-900 font-bold"
};
 
function TodoCard({ task, priority }) {
    return (
        <div 
            className={`
                w-full max-w-md mx-auto 
                border-2 rounded-lg 
                p-6 mb-4 
                transition-all duration-200 
                hover:shadow-xl 
                ${Task_Priority_Classes[priority]}
            `}
        >
            <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold text-gray-800">
                    {task}
                </p>
                <span 
                    className={`
                        inline-block px-2 py-1 
                        rounded-md text-sm font-medium 
                        ${Task_Priority_Text_Classes[priority]}
                    `}
                >
                    {priority}
                </span>
            </div>
        </div>
    );
}

export default TodoCard;