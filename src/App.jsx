// External imports
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Sun, Moon, Plus } from "lucide-react";

// CSS
import "./App.css";

// Components
import DisplayingBoxComponent from "./Components/displayingBoxComponent";
import SearchBarComponent from "./Components/searchBarComponent";
import BasicModal from "./Components/BasicModal";

function App() {
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle completed status
  function setCompletedFunction(task) {
    const UpdatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(UpdatedTasks);
  }

  // Edit task
  function setEditTask(task) {
    const UpdatedTasks = tasks.map((t) =>
      t.id === task.id
        ? { ...t, title: task.title, description: task.description }
        : t
    );
    setTasks(UpdatedTasks);
  }

  // Delete task
  function setDeleteTask(task) {
    const UpdatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(UpdatedTasks);
  }

  // Filter and search logic
  const SettingFilter = () => {
    let filtered = tasks;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply other filters
    if (filter === "Completed") {
      filtered = filtered.filter((task) => task.completed);
    } else if (filter === "unCompleted") {
      filtered = filtered.filter((task) => !task.completed);
    } else if (filter === "DateCreated") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
      );
    } else if (filter === "Alphabetical") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredTasks(filtered);
  };

  // Run filter when filter, tasks, or search query changes
  useEffect(() => {
    SettingFilter();
  }, [filter, tasks, searchQuery]);

  // Update theme class on body
  useEffect(() => {
    document.body.className = isDarkTheme ? "dark" : "light";
  }, [isDarkTheme]);

  return (
    <div
      className={`App container-fluid overflow-y-scroll ${
        isDarkTheme ? "bg-gray-900" : "bg-gray-100"
      } h-full w-full p-10 flex flex-col items-center relative`}
    >
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkTheme(!isDarkTheme)}
        className={`fixed top-4 right-10 p-2 rounded-lg border-2 ${
          isDarkTheme ? "border-gray-700" : "border-gray-200"
        } hover:scale-105 duration-300 transition-all z-50`}
      >
        {isDarkTheme ? (
          <Sun className="text-white w-6 h-6" />
        ) : (
          <Moon className="text-gray-900 w-6 h-6" />
        )}
      </button>

      <div className="flex flex-col items-center container p-5">
        <h1
          className={`font-extrabold text-3xl ${
            isDarkTheme ? "text-white" : "text-gray-900"
          }`}
        >
          TODO LIST
        </h1>

        <SearchBarComponent
          setFilter={setFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <h1
              className={`text-2xl font-bold ${
                isDarkTheme ? "text-gray-500" : "text-gray-700"
              }`}
            >
              No tasks available
            </h1>
            <p className={isDarkTheme ? "text-gray-400" : "text-gray-600"}>
              Add a task to get started!
            </p>
          </div>
        ) : null}

        <DisplayingBoxComponent
          tasks={tasks}
          setCompletedFunction={setCompletedFunction}
          setEditTask={setEditTask}
          setDeleteTask={setDeleteTask}
          filteredTasks={filteredTasks}
          isDarkTheme={isDarkTheme}
        />

        {/* Create Task Button */}


        <BasicModal
          setTasks={setTasks}
          isDarkTheme={isDarkTheme}
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
        <Toaster />
      </div>
    </div>
  );
}

export default App;
