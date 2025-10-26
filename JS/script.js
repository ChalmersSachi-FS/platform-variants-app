document.addEventListener("DOMContentLoaded", () => {
  const tasks = [
    {
      id: 1,
      title: "Meal prep for the week",
      notes: "Created List",
      completed: false,
    },
    {
      id: 2,
      title: "Buy Yarn",
      notes: "Check colors for sample",
      completed: true,
    },
    {
      id: 3,
      title: "Start Crocheting Products",
      notes: "Gather all supplies needed",
      completed: false,
    },
  ];

  const tasksUl = document.getElementById("tasks");
  const detailDiv = document.getElementById("detail");
  const platformLabel = document.getElementById("platform-label");
  const addTaskBtn = document.getElementById("add-task-btn");

  function detectPlatform() {
    const width = window.innerWidth;
    if (width < 768) return "Mobile";
    if (width < 1024) return "Tablet";
    return "Desktop";
  }

  function renderTasks() {
    tasksUl.innerHTML = "";
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.textContent = task.title + (task.completed ? " ✅" : "");
      li.addEventListener("click", () => showTaskDetail(task));
      tasksUl.appendChild(li);
    });
  }

  function showTaskDetail(task) {
    detailDiv.innerHTML = `
      <h3>${task.title}</h3>
      <p><strong>Notes:</strong> ${task.notes || "None"}</p>
      <p><strong>Status:</strong> ${
        task.completed ? "Completed" : "Incomplete"
      }</p>
    `;
  }

  addTaskBtn.addEventListener("click", () => {
    const newTask = {
      id: tasks.length + 1,
      title: "New Task",
      notes: "",
      completed: false,
    };
    tasks.push(newTask);
    renderTasks();
  });

  // Init
  platformLabel.textContent = `Platform: ${detectPlatform()}`;
  renderTasks();

  // Update platform label on resize
  window.addEventListener("resize", () => {
    platformLabel.textContent = `Platform: ${detectPlatform()}`;
  });
});
