function createCardTodo(index, objTodo) {
  const divTask = document.createElement("div");
  const divTaskInfo = document.createElement("div");
  const iconUpdateTask = document.createElement("i");

  divTask.innerHTML = `<input type="checkbox" id="task-finished" />`;
  divTaskInfo.innerHTML = `<h2 class="task-name" id="task-name">${objTodo["title"]}</h2>
  <p class="task-description" id="task-name">${objTodo["description"]}</p>`;

  iconUpdateTask.classList.add("fa-regular", "fa-pen-to-square");

  divTask.classList.add("task");
  divTask.setAttribute("index-todo", index);
  divTask.style.cssText = `border: 1px solid ${objTodo["priority"]}`;

  divTask.appendChild(divTaskInfo);
  divTask.appendChild(iconUpdateTask);

  document.querySelector(".task-list").appendChild(divTask);
}

export { createCardTodo };
