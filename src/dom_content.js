import { Todo } from "./todo";
import { Tasks } from "./tasks";
import { createCardTodo } from "./components";
import { createCardProjects } from "./components";
import "./styles.css";
import { Project } from "./project";
import { Projects } from "./projects";

const inboxSection = document.querySelector(".inbox");
const todaySection = document.querySelector(".today");

const btnAddTodo = document.querySelector(".add-task");
const formAddTodo = document.querySelector("#form-task-card");
const formUpdateTodo = document.querySelector("#form-update-task");

const task_name_update = document.getElementById("task-name-update");
const task_description_update = document.getElementById(
  "task-description-update"
);
const task_dueDate_update = document.getElementById("dueDate-update");
const choose_project_update = document.getElementById("select-project-update");
const task_priority_update = document.getElementById("task-priority-update");

const btn_cancel = document.querySelector(".btn-cancel");
const btn_cancel_update = document.querySelector(".btn-cancel-update");

const section_todo = document.querySelectorAll(".section");

const task_name = document.getElementById("task-name");
const task_description = document.getElementById("task-description");
const task_dueDate = document.getElementById("dueDate");
const choose_project = document.getElementById("select-project");
const task_priority = document.getElementById("task-priority");

const task_list_container = document.querySelector(".task-list");
const btnAddProject = document.getElementById("add-project");
const btnCancelProject = document.querySelector(".btn-cancel-project");
const containerAddProject = document.querySelector(".container-add-project");
const formAddProject = document.getElementById("form_add_project");
const showProjectsBar = document.getElementById("show-projects");
const containerProjects = document.querySelector(".container-projects");
const inputName = document.getElementById("project-name");

let todo_section_title =
  document.querySelector(".task-container").firstElementChild;

let inbox = new Tasks();
let today = new Tasks();
let projects = new Projects();

let indexTodoCard = 0;
let taskCardContainer = null;

function showForm() {
  formAddTodo.style.display = "block";
  formUpdateTodo.style.display = "none";
  if (taskCardContainer) {
    taskCardContainer.style.display = "flex";
  }
}

function closeForm() {
  formAddTodo.style.display = "none";
  if (taskCardContainer) {
    taskCardContainer.style.display = "flex";
  }
}

function showInfoInFormUpdate(todo) {
  task_name_update.value = todo["title"];
  task_description_update.value = todo["description"];
  task_dueDate_update.value = todo["dueDate"];
  choose_project_update.value = todo["projectName"];
  task_priority_update.value = todo["priority"];
}

function controlDOM(taskContainer) {
  let arrayTask = Array.from(document.querySelectorAll(".task"));
  let index = Number(taskContainer.getAttribute("index-todo"));
  let objectSection = getSectionObject();
  let todo = objectSection.todos[index];

  taskContainer.style.display = "none";
  formAddTodo.style.display = "none";

  if (arrayTask.length === 1) {
    task_list_container.appendChild(formUpdateTodo);
  } else if (arrayTask.length - 1 === index) {
    task_list_container.appendChild(formUpdateTodo);
  } else {
    task_list_container.insertBefore(formUpdateTodo, arrayTask[index + 1]);
  }
  showInfoInFormUpdate(todo);

  formUpdateTodo.style.display = "block";
  btn_cancel_update.addEventListener("click", () => {
    formUpdateTodo.style.display = "none";
    taskContainer.style.display = "flex";
  });
}

function getValuesFormUpdate() {
  let title = task_name_update.value;
  let description = task_description_update.value;
  let dueDate = task_dueDate_update.value;
  let projectName =
    choose_project_update.options[choose_project_update.selectedIndex].value;
  let priority =
    task_priority_update.options[task_priority_update.selectedIndex].value;
  return {
    title,
    description,
    dueDate,
    projectName,
    priority,
    taskFinished: false,
  };
}

function updateTaskData() {
  let object = getSectionObject();
  object.updateTodo(indexTodoCard, getValuesFormUpdate());
  return { index: indexTodoCard, task: getValuesFormUpdate() };
}

function updateTaskDataDOM() {
  const todoData = updateTaskData();
  const divContainer = task_list_container.children[todoData["index"]];
  divContainer.style.cssText = `border: 1px solid ${todoData["task"]["priority"]}`;

  const titleTask = divContainer.children[1].firstElementChild;
  const descriptionTask = divContainer.children[1].lastElementChild;

  titleTask.textContent = todoData["task"]["title"];
  descriptionTask.textContent = todoData["task"]["description"];
}

function updateTodo() {
  document.querySelectorAll(".task").forEach((task) => {
    task.lastElementChild.addEventListener("click", (e) => {
      if (
        taskCardContainer !== null &&
        taskCardContainer !== e.target.parentElement
      ) {
        formUpdateTodo.style.display = "none";
        taskCardContainer.style.display = "flex";
        taskCardContainer = task;
        return;
      }
      taskCardContainer = task;
      indexTodoCard = Number(taskCardContainer.getAttribute("index-todo"));
      controlDOM(taskCardContainer);
    });
  });
}

function deleteTodo() {
  document.querySelectorAll(".task").forEach((task) => {
    task.firstElementChild.addEventListener("change", (e) => {
      if (e.target.checked) {
        let index = Number(e.target.parentElement.getAttribute("index-todo"));
        let objectSection = getSectionObject();
        objectSection.removeTodo(index);
        task_list_container.removeChild(e.target.parentElement);
      }
    });
  });
}

function showTodo(array) {
  task_list_container.textContent = "";

  array.forEach((todo, i) => {
    createCardTodo(i, todo);
  });

  deleteTodo();
  updateTodo();
}

function getValuesFromForm() {
  let title = task_name.value;
  let description = task_description.value;
  let date = task_dueDate.value;
  let chooseProject =
    choose_project.options[choose_project.selectedIndex].value;
  let priority = task_priority.options[task_priority.selectedIndex].value;

  return { title, description, date, chooseProject, priority };
  //new Todo(title, description, date, chooseProject, priority, false); no va aquí
  //sólo es obtener información
}

function getSectionObject(objName) {
  //objName = container_title_section.textContent
  if (objName === "Inbox") {
    return inbox;
  } else if (objName === "Today") {
    return today;
  } else {
    return projects.getProject(objName);
  }
}

function addTask() {
  let todo = getValuesForm();
  let objectSection = getSectionObject();
  objectSection.addTodo(todo);
  //showTodo(objectSection.todos);no va aquí porque solamente se debe agregar la
  //tarea
}

function showSectionTodo(section) {
  section_todo.forEach((item) => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
}

section_todo.forEach((section) => {
  section.addEventListener("click", (e) => {
    showSectionTodo(section);
    todo_section_title.textContent =
      section.children[0].lastElementChild.textContent;
    closeForm();
  });
});

function makeDecisionSection(e) {
  const sectionObject = e.target.children[0].lastElementChild.textContent;
  todo_section_title.textContent = sectionObject;
  task_list_container.textContent = "";
  const object = getSectionObject();
  showTodo(object.todos);
}

function showProjectDOM(projectObj) {
  todo_section_title.textContent = projectObj["name"];
  showTodo(projectObj["todos"]);
}

function addProject(name) {
  if (name.trim() !== "") {
    let projectName = name.trim();
    let newProject = new Project(projectName);
    projects.addProject(newProject);
    //showProjectDOM(newProject); no va aquí
  }
}

function addTodoProject() {
  containerAddProject.classList.add("show-form");

  formAddProject.addEventListener("submit", (e) => {
    e.preventDefault();
    addProject();
    formAddProject.reset();
    containerAddProject.classList.remove("show-form");
  });

  btnCancelProject.addEventListener("click", (e) => {
    formAddProject.reset();
    containerAddProject.classList.remove("show-form");
  });
}

function showProjectsList() {
  containerProjects.textContent = "";
  if (projects.projects.length > 0) {
    projects.projects.forEach((project, index) => {
      createCardProjects(index, project);
    });
  }
}

showProjectsBar.addEventListener("click", (e) => {
  if (e.target.classList[1] === "fa-chevron-right") {
    showProjectsBar.classList.remove("fa-chevron-right");
    showProjectsBar.classList.add("fa-chevron-down");
    containerProjects.classList.add("show-content");
    showProjectsList();
  } else if (e.target.classList[1] === "fa-chevron-down") {
    showProjectsBar.classList.remove("fa-chevron-down");
    showProjectsBar.classList.add("fa-chevron-right");
    containerProjects.classList.remove("show-content");
  }
});

btnAddProject.addEventListener("click", (e) => {
  addTodoProject();
});

btnAddTodo.addEventListener("click", showForm);
btn_cancel.addEventListener("click", closeForm);

inboxSection.addEventListener("click", (e) => {
  makeDecisionSection(e);
});
todaySection.addEventListener("click", (e) => {
  makeDecisionSection(e);
});

formAddTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
  formAddTodo.reset();
});

formUpdateTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  updateTaskDataDOM();
  formUpdateTodo.style.display = "none";
  taskCardContainer.style.display = "flex";
});

export { addTask };
