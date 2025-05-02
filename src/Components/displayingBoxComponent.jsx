// External libraries
import toast, { Toaster } from "react-hot-toast";

// Components
import Task from "./Task";

// Notification function
const notify = () => toast.success("Task Edited Successfully!");

export default function DisplayingBoxComponent({
  tasks,
  setCompletedFunction,
  setEditTask,
  setDeleteTask,
  filteredTasks,
  isDarkTheme,
}) {
  return (
    <div
      className={`displaying-box my-3 search flex flex-col items-center justify-around gap-3 
                 w-full sm:w-full md:w-full lg:w-3/5 p-3`}
    >
      {/* Render each task */}
      {filteredTasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          index={index}
          setCompletedFunction={setCompletedFunction}
          setEditTask={setEditTask}
          setDeleteTask={setDeleteTask}
          notify={notify}
          isDarkTheme={isDarkTheme}
        />
      ))}

      {/* Toast notification */}
      <Toaster />
    </div>
  );
}
