function createCardTodo(index, objTodo) {
  const divTask = document.createElement("div");
  const divTaskInfo = document.createElement("div");
  const iconUpdateTask = document.createElement("i");

  divTask.innerHTML = `<input type="checkbox" id="task-finished" />`;
  divTaskInfo.innerHTML = `<h2 class="task-name" id="task-name-card">${objTodo["title"]}</h2>
  <p class="task-description-card" id="task-description-card">${objTodo["description"]}</p>
  <p>${objTodo["dueDate"]}</p>`;

  iconUpdateTask.classList.add("fa-regular", "fa-pen-to-square");

  divTask.classList.add("task");
  divTask.setAttribute("index-todo", index);
  divTask.style.cssText = `border: 2px solid ${objTodo["priority"]}`;

  divTask.appendChild(divTaskInfo);
  divTask.appendChild(iconUpdateTask);

  document.querySelector(".task-list").appendChild(divTask);
}

function createCardProjects(projectName) {
  const containerProjects = document.querySelector(".container-projects");
  const divProject = document.createElement("div");
  const divInfo = document.createElement("div");
  const iconDelete = document.createElement("i");

  divInfo.innerHTML = `<i class="fa-regular fa-file"></i>
  <p id="project-name">${projectName}</p>`;

  iconDelete.classList.add("fa-regular", "fa-trash-can");
  iconDelete.setAttribute("id", "delete-project");

  divProject.classList.add("project", "section");
  //divProject.setAttribute("index-todo", index);

  divProject.appendChild(divInfo);
  divProject.appendChild(iconDelete);

  return divProject;
}

function createSelectOptions(arrayProjects, select) {
  select.textContent = "";

  const optionHidden = document.createElement("option");
  optionHidden.value = "";
  optionHidden.setAttribute("hidden", "hidden");
  optionHidden.textContent = "Choose a project";

  const optionInbox = document.createElement("option");
  optionInbox.value = "Inbox";
  optionInbox.textContent = "Inbox";

  select.appendChild(optionHidden);
  select.appendChild(optionInbox);

  if (arrayProjects.length > 0) {
    arrayProjects.forEach((project) => {
      const option = document.createElement("option");
      option.value = project.name;
      option.textContent = project.name;
      select.appendChild(option);
    });
  }
}

export { createCardTodo, createCardProjects, createSelectOptions };
