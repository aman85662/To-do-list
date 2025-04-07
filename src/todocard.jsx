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
 
function TodoCard({ task, priority, onDelete, index }) {
    return (
        <div 
            className={`
                w-full max-w-md mx-auto 
                border-2 rounded-lg 
                p-4 sm:p-6 mb-3 sm:mb-4 
                transition-all duration-200 
                hover:shadow-xl hover:scale-[1.02]
                ${Task_Priority_Classes[priority]}
            `}
        >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                    <p className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 
                        break-words overflow-wrap-anywhere line-clamp-2">
                        {task}
                    </p>
                    <span 
                        className={`
                            inline-block px-3 py-1 
                            rounded-full text-sm font-medium 
                            transition-colors duration-200
                            whitespace-nowrap
                            ${Task_Priority_Text_Classes[priority]}
                        `}
                    >
                        {priority}
                    </span>
                </div>
                <button 
                    onClick={() => onDelete(index)}
                    className="
                        px-4 py-2 rounded-full
                        text-sm font-medium
                        text-red-500 hover:text-white
                        hover:bg-red-500
                        transition-all duration-200
                        border border-red-500
                        hover:shadow-md
                        whitespace-nowrap
                        flex-shrink-0
                    "
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TodoCard;