import * as React from "react";
import { Pencil, Trash2, CalendarDays, Clock, X } from "lucide-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import toast from "react-hot-toast";

// Confirm Delete Toast
const confirmDelete = (task, handleDelete) => {
  toast((t) => (
    <span className="flex flex-col items-center justify-between">
      Are you sure you want to delete This Task?
      <button
        onClick={() => {
          handleDelete();
          toast.dismiss(t.id);
        }}
        className="m-2 font-bold px-2 py- bg-red-600 text-white rounded"
      >
        Confirm
      </button>
    </span>
  ));
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
};

const Task = ({
  task,
  index,
  setCompletedFunction,
  setEditTask,
  notify,
  setDeleteTask,
  isDarkTheme,
}) => {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleOpen = () => {
    setTitle(task.title);
    setDescription(task.description);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const EditedTask = {
      ...task,
      title,
      description,
    };
    setEditTask(EditedTask);
    notify();
    handleClose();
  };

  const handleDelete = () => {
    setDeleteTask(task);
    handleClose();
  };

  return (
    <div
      key={index}
      className={`h-[50px] hover:h-[130px] px-3 flex flex-col items-center justify-around border-b-2 ${
        isDarkTheme
          ? "border-gray-500 hover:border-gray-200"
          : "border-gray-300 hover:border-gray-400"
      } hover:scale-101 duration-300 overflow-hidden w-full lg:w-5/6`}
    >
      {/* Top Section */}
      <div className="w-full p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="checkbox-wrapper-46">
            <input
              type="checkbox"
              id={`cbx-${index}`}
              className="inp-cbx"
              onChange={() => setCompletedFunction(task)}
              checked={task.completed}
            />
            <label htmlFor={`cbx-${index}`} className="cbx">
              <span>
                <svg viewBox="0 0 12 10" height="10px" width="12px">
                  <polyline points="1.5 6 4.5 9 10.5 1" />
                </svg>
              </span>
              <span></span>
            </label>
          </div>
          <p
            className={`text-base font-bold ${
              task.completed
                ? `line-through ${
                    isDarkTheme ? "text-gray-400" : "text-gray-500"
                  }`
                : isDarkTheme
                ? "text-white"
                : "text-gray-900"
            }`}
          >
            {task.title}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={handleOpen}
            className={`${
              isDarkTheme
                ? "text-gray-400 hover:text-amber-300"
                : "text-gray-500 hover:text-amber-600"
            } duration-500`}
          >
            <Pencil />
          </button>
          <button
            onClick={() => confirmDelete(task, handleDelete)}
            className={`${
              isDarkTheme
                ? "text-gray-400 hover:text-red-700"
                : "text-gray-500 hover:text-red-600"
            } duration-500`}
          >
            <Trash2 />
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={`w-full flex justify-between items-end ${
          isDarkTheme ? "text-gray-500" : "text-gray-600"
        } text-sm`}
      >
        <p className="w-2/5 pb-3 text-start">
          <span className={isDarkTheme ? "text-gray-400" : "text-gray-500"}>
            Description:{" "}
          </span>
          {task.description}
        </p>
        <div className="flex gap-2 font-light">
          <p className="flex items-center gap-1">
            <Clock size={16} /> {task.time}
          </p>
          |
          <p className="flex items-center gap-1">
            <CalendarDays size={16} /> {task.date}
          </p>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...modalStyle,
            bgcolor: isDarkTheme ? "rgb(17, 24, 39)" : "white",
            border: `2px solid ${isDarkTheme ? "#fff" : "#000"}`,
          }}
          className={`${
            isDarkTheme ? "text-white" : "text-gray-900"
          } rounded-md flex flex-col items-center`}
        >
          <button
            onClick={handleClose}
            className={`w-full flex justify-end ${
              isDarkTheme
                ? "text-gray-400 hover:text-red-700"
                : "text-gray-500 hover:text-red-600"
            }`}
          >
            <X size={26} strokeWidth={2.25} />
          </button>
          <h2 className="text-2xl font-bold text-center">Edit Task</h2>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-4 mt-4"
          >
            <TextField
              label="Title"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputLabelProps={{
                style: { color: isDarkTheme ? "white" : "black" },
              }}
              InputProps={{ style: { color: isDarkTheme ? "white" : "black" } }}
              className="w-full"
            />
            <TextField
              label="Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{
                style: { color: isDarkTheme ? "white" : "black" },
              }}
              InputProps={{ style: { color: isDarkTheme ? "white" : "black" } }}
              className="w-full"
            />
            <Button
              type="submit"
              variant="contained"
              className={`w-2/5 ${
                isDarkTheme
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Apply Edit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Task;
