# Modern Todo List Web Application

A sleek, responsive Todo List application built with React that helps you stay organized and productive. Features a beautiful dark/light theme, real-time search, and advanced filtering capabilities.

✨ **Key Features:**

- 📝 Create, edit, and manage tasks with ease
- 🔍 Real-time search functionality
- 🎨 Dark/Light theme with smooth transitions
- 📊 Multiple filter options (All, Completed, Uncompleted, Date, Alphabetical)
- 📱 Fully responsive design
- ⚡ Built with modern React and Vite
- 🎯 Clean and intuitive user interface

Perfect for personal task management, project tracking, or daily organization. Try it out and boost your productivity today!

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/todo-list-app.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Built with ❤️ using React, Vite, TailwindCSS, and Material-UI.

## Features

- **Task Management**

  - Create new tasks with title and description
  - Edit existing tasks
  - Delete tasks with confirmation
  - Mark tasks as completed/uncompleted
  - View task creation date and time

- **Search and Filtering**

  - Real-time search by task title
  - Multiple filter options:
    - All tasks
    - Completed tasks
    - Uncompleted tasks
    - Sort by date created
    - Sort alphabetically

- **Theme Support**

  - Dark/Light theme toggle
  - Theme persists across sessions
  - Responsive design for all screen sizes

- **User Experience**
  - Smooth animations and transitions
  - Toast notifications for actions
  - Intuitive interface
  - Responsive layout

## Tech Stack

- **Frontend**

  - React 19
  - Vite
  - TailwindCSS
  - Material-UI
  - Lucide React (Icons)
  - React Hot Toast

- **Development Tools**
  - ESLint
  - Prettier
  - Git

## Project Structure

```
src/
├── Components/
│   ├── BasicModal.jsx      # Modal for creating/editing tasks
│   ├── displayingBoxComponent.jsx  # Container for task list
│   ├── searchBarComponent.jsx      # Search and filter controls
│   └── Task.jsx            # Individual task component
├── App.jsx                 # Main application component
├── App.css                 # Application styles
├── index.css              # Global styles
└── main.jsx               # Application entry point
```

## Component Documentation

### App.jsx

The main application component that manages:

- Task state
- Theme state
- Filter and search logic
- Modal state
- Global layout

### BasicModal.jsx

Handles task creation and editing with:

- Form validation
- Task submission
- Modal controls

### displayingBoxComponent.jsx

Displays the list of tasks with:

- Task rendering
- Empty state handling
- Responsive layout

### searchBarComponent.jsx

Provides search and filtering functionality:

- Real-time search
- Filter dropdown
- Theme-aware styling

### Task.jsx

Individual task component featuring:

- Task display
- Completion toggle
- Edit and delete actions
- Date and time display

## Usage

1. **Creating a Task**

   - Click the "+" button in the bottom right corner
   - Fill in the task title and description
   - Click "Create" to add the task

2. **Managing Tasks**

   - Click the checkbox to mark a task as completed
   - Click the pencil icon to edit a task
   - Click the trash icon to delete a task
   - Hover over a task to see more details

3. **Searching and Filtering**

   - Use the search bar to find tasks by title
   - Use the filter dropdown to sort and filter tasks
   - Combine search and filters for precise results

4. **Theme Toggle**
   - Click the sun/moon icon in the top right to switch themes
   - Theme preference is saved across sessions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)
- [Lucide React](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)
