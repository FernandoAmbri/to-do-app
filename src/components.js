function createCardTodo(index, objTodo) {
  const divTask = document.createElement("div");
  const divTaskInfo = document.createElement("div");
  const iconUpdateTask = document.createElement("i");

  divTask.innerHTML = `<input type="checkbox" id="task-finished" />`;
  divTaskInfo.innerHTML = `<h2 class="task-name" id="task-name-card">${objTodo["title"]}</h2>
  <p class="task-description-card" id="task-description-card">${objTodo["description"]}</p>`;

  iconUpdateTask.classList.add("fa-regular", "fa-pen-to-square");

  divTask.classList.add("task");
  divTask.setAttribute("index-todo", index);
  divTask.style.cssText = `border: 2px solid ${objTodo["priority"]}`;

  divTask.appendChild(divTaskInfo);
  divTask.appendChild(iconUpdateTask);

  document.querySelector(".task-list").appendChild(divTask);
}

function createCardProjects(index, objectProject) {
  const containerProjects = document.querySelector(".container-projects");
  const divProject = document.createElement("div");
  const divInfo = document.createElement("div");
  const iconDelete = document.createElement("i");

  divInfo.innerHTML = `<i class="fa-regular fa-file"></i>
  <p id="project-name">${objectProject["name"]}</p>`;

  iconDelete.classList.add("fa-regular", "fa-trash-can");
  iconDelete.setAttribute("id", "delete-project");

  divProject.classList.add("project", "section");
  divProject.setAttribute("index-todo", index);

  divProject.appendChild(divInfo);
  divProject.appendChild(iconDelete);

  containerProjects.appendChild(divProject);
}

export { createCardTodo, createCardProjects };
