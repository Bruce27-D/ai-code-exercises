// taskManager.js

let tasks = [];

// Initialize tasks
function initApp() {
  console.log("Task Manager initialized");
  tasks = [
    { id: 1, name: "Complete project proposal", completed: false },
    { id: 2, name: "Meeting with team", completed: true }
  ];
  return tasks;
}

// Add task
function addTask(taskName) {
  const newTask = {
    id: Date.now(),
    name: taskName,
    completed: false
  };

  tasks.push(newTask);
  console.log("Task added:", newTask);

  return tasks;
}

// Display tasks
function displayTasks() {
  if (typeof document !== 'undefined') {
    const taskListElement = document.getElementById('task-list');
    if (taskListElement) {
      taskListElement.innerHTML = '';

      tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.textContent = task.name;
        taskListElement.appendChild(taskElement);
      });
    }
  }

  return tasks;
}

// Toggle task
function toggleTaskStatus(taskId) {
  tasks = tasks.map(task =>
    task.id === taskId
      ? { ...task, completed: !task.completed }
      : task
  );

  return tasks;
}

// Delete task
function deleteTask(taskId) {
  tasks = tasks.filter(task => task.id !== taskId);
  return tasks;
}

// Get all tasks
function getAllTasks() {
  return tasks;
}

// Reset tasks
function resetTasks() {
  tasks = [];
  return tasks;
}

module.exports = {
  initApp,
  addTask,
  displayTasks,
  toggleTaskStatus,
  deleteTask,
  getAllTasks,
  resetTasks
};
