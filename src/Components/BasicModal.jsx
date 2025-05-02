// React & MUI Imports
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { BadgePlus } from "lucide-react";

// Icons
import { X } from "lucide-react";

// Modal Box Styling
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ setTasks }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  // Open & Reset Form
  const handleOpen = () => {
    setTitle("");
    setDescription("");
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  // New Task Object (Memoized)
  const newTask = React.useMemo(
    () => ({
      id: new Date(),
      title,
      description,
      completed: false,
      date: new Date().toLocaleDateString(),
      time: new Date()
        .toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
        .replace(":00", ""),
    }),
    [title, description]
  );

  // Add Task Handler


  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("Please enter a title");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setOpen(false);
  };

  return (
    <div>
      <Button className="bg-red-700" variant="contained" onClick={handleOpen}>
        <BadgePlus />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="text-white bg-gray-900 rounded-md flex flex-col justify-center items-center"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="w-full flex justify-end text-gray-400 hover:text-red-700 duration-500"
          >
            <X size={26} strokeWidth={2.25} />
          </button>

          {/* Title */}
          <h2 className="text-center text-2xl font-bold">Add New Task</h2>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-4 m-2"
          >
            <TextField
              label="Title"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              className="w-full"
            />

            <TextField
              label="Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              className="w-full"
            />

            <Button type="submit" variant="contained" className="mt-4 w-1/3">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
