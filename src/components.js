/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
function createCardTodo(index, objTodo) {
  const divTask = document.createElement("div");
  const divTaskInfo = document.createElement("div");
  const iconUpdateTask = document.createElement("i");

  divTask.innerHTML = `<input type="checkbox" id="task-finished" />`;
  divTaskInfo.innerHTML = `<h2 class="task-name" id="task-name-card">${objTodo.getTitle()}</h2>
  <p class="task-description-card" id="task-description-card">${objTodo.getDescription()}</p>
  <p>${objTodo.getDueDate()}</p>`;

  iconUpdateTask.classList.add("fa-regular", "fa-pen-to-square");

  divTask.classList.add("task");
  divTask.setAttribute("index-todo", index);
  divTask.style.cssText = `border-left: 2px solid ${objTodo.getPriority()}`;

  divTask.appendChild(divTaskInfo);
  divTask.appendChild(iconUpdateTask);

  document.querySelector(".task-list").appendChild(divTask);
}

function createCardProjects(projectName) {
  const divProject = document.createElement("div");
  const divInfo = document.createElement("div");
  const iconDelete = document.createElement("i");
  const spanNumberTodos = document.createElement("span");

  divInfo.innerHTML = `<i class="fa-regular fa-file"></i>
  <p id="project-name">${projectName}</p>`;

  spanNumberTodos.setAttribute("id", "number-of-tasks");

  iconDelete.classList.add("fa-regular", "fa-trash-can");
  iconDelete.setAttribute("id", "delete-project");

  divProject.classList.add("project", "section");

  divProject.appendChild(divInfo);
  divProject.appendChild(spanNumberTodos);
  divProject.appendChild(iconDelete);

  return divProject;
}

function createSelectOptions(arrayProjects, select) {
  select.textContent = "";

  const optionHidden = document.createElement("option");
  optionHidden.value = "";
  optionHidden.setAttribute("hidden", "hidden");
  optionHidden.textContent = "Choose a project";

  select.appendChild(optionHidden);

  if (arrayProjects.length) {
    arrayProjects.forEach((project) => {
      if (project.getName() !== "Today") {
        const option = document.createElement("option");
        option.value = project.name;
        option.textContent = project.name;
        select.appendChild(option);
      }
    });
  }
}

function createShowTodos(todosArray) {
  const searchedTodos = document.getElementById("search-todos-container");
  const inboxTitle = "Inbox";
  const todayTitle = "Today";
  searchedTodos.innerHTML = `<div class="recently-searched">Recently searched:</div>`;
  if (todosArray.length) {
    for (const todo of todosArray) {
      const divTodo = document.createElement("div");
      const projectTodo = document.createElement("div");
      const infoTodo = document.createElement("p");
      const projectName = document.createElement("p");
      const iconProject = document.createElement("i");

      projectName.textContent = todo.projectName;

      if (todo.projectName === inboxTitle) {
        iconProject.classList.add("fa-solid", "fa-inbox");
      } else if (todo.projectName === "") {
        projectName.textContent = todayTitle;
        iconProject.classList.add("fa-solid", "fa-calendar-check");
      } else {
        iconProject.classList.add("fa-regular", "fa-file");
      }

      projectTodo.classList.add("todo-searched-project");
      projectTodo.appendChild(iconProject);
      projectTodo.appendChild(projectName);

      infoTodo.textContent = todo.title;

      divTodo.classList.add("todo-searched");
      divTodo.setAttribute("id", "todo-searched");
      divTodo.appendChild(infoTodo);
      divTodo.appendChild(projectTodo);

      searchedTodos.appendChild(divTodo);
    }
  }
  return searchedTodos;
}

export {
  createCardTodo,
  createCardProjects,
  createSelectOptions,
  createShowTodos,
};
