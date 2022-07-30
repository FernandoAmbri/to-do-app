import { compareAsc, format } from "date-fns";
import "./styles.css";
import {
  createCardTodo,
  createCardProjects,
  createSelectOptions,
} from "./components.js";

import {
  getValuesFromForm,
  getValuesFormUpdate,
  getValuesFromNavbar,
  showInfoFormUpdate,
} from "./formContent.js";

import {
  addTodo,
  updateTodo,
  deleteTodo,
  getDataTodoCard,
} from "./todoPerformance.js";

import { Project } from "./project.js";
import { Projects } from "./projects.js";
import { Tasks } from "./tasks.js";

const inboxSection = document.querySelector(".inbox");
const todaySection = document.querySelector(".today");

const formUpdateTodo = document.getElementById("form-update-task");
const formAddProject = document.getElementById("form-add-project");
const formAddTodo = document.getElementById("form-task-card");
const formAddTodoNavbar = document.getElementById("form-add-todo-navbar");

const containerTodoList = document.querySelector(".task-list");
const containerProjects = document.querySelector(".container-projects");
const containerAddProject = document.querySelector(".container-add-project");
const containerAddTodoNavbar = document.querySelector(".container-fixed");

const sectionTodo = document.querySelectorAll(".section");
const showProjectsBar = document.getElementById("show-projects");

const btnAddTodo = document.querySelector(".add-task");
const btnFormCancel = document.querySelector(".btn-cancel");
const btnCancelProject = document.querySelector(".btn-cancel-project");
const btnCancelUpdateForm = document.querySelector(".btn-cancel-update");
const btnCancelFormNavbar = document.querySelector(".btn-cancel-navbar");
const btnAddProject = document.getElementById("add-project");
const btnAddTodoNavbar = document.getElementById("add-todo-navbar");
const btnToggleSidebar = document.getElementById("toggle-sidebar");
const btnHome = document.getElementById("btn-home");

const inputProjectName = document.getElementById("project-name");
const selectProject = document.getElementById("select-project");
const selectUpdateProject = document.getElementById("select-project-update");
const selectProjectNavbar = document.getElementById("select-project-navbar");

let sectionTitle = document.querySelector(".task-container").firstElementChild;

let inbox = new Tasks();
let today = new Tasks();
let projects = new Projects();

let indexCardTodo = 0;
let arrayTodosDOM = [];
let arrayProjectsDOM = [];

createSelectOptions(projects.projects, selectProject);

function closeFormAddTask() {
  formAddTodo.reset();
  formAddTodo.style.display = "none";
}

function showFormAddTask() {
  const formAddTodo = document.getElementById("form-task-card");
  formAddTodo.style.display = "block";
}

function closeFormUpdateTask() {
  formUpdateTodo.style.display = "none";
}

function showFormUpdateTask() {
  const formUpdateTodo = document.getElementById("form-update-task");
  formUpdateTodo.style.display = "block";
}

function currentDate() {
  const dateObject = new Date();
  let year = dateObject.getFullYear();
  let month = dateObject.getMonth() + 1;
  let date = dateObject.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (date < 10) {
    date = "0" + date;
  }

  return `${year}-${month}-${date}`;
}

function deleteTodoDOM() {
  document.querySelectorAll(".task").forEach((task, i) => {
    task.firstElementChild.addEventListener("change", (e) => {
      if (e.target.checked) {
        deleteTodo(i);
        containerTodoList.removeChild(task);
      }
    });
  });
}

function showTodoList() {
  containerTodoList.textContent = "";
  const object = getSectionObject(sectionTitle.textContent);

  if (object !== null) {
    object.todos.forEach((todo, i) => createCardTodo(i, todo));
    updateTodoCardDOM();
    deleteTodoDOM();
  }
}

function addTodoFromForm(valuesTodo) {
  if (valuesTodo["title"].trim() !== "" && valuesTodo["dueDate"] !== "") {
    addTodo(valuesTodo, valuesTodo["projectName"]);
  }
}

function formOperations() {
  createSelectOptions(projects.projects, selectProject);
  closeFormUpdateTask();
  showTodoList();
  showFormAddTask();
}

function updateTodoCard(indexCard, todoData) {
  const divContainer = document.querySelectorAll(".task")[indexCard];
  if (divContainer) {
    divContainer.style.cssText = `border: 2px solid ${todoData["priority"]}`;

    const titleTask = divContainer.children[1].firstElementChild;
    const descriptionTask = divContainer.children[1].lastElementChild;

    titleTask.textContent = todoData["title"];
    descriptionTask.textContent = todoData["description"];
  }
}

function getSectionObject(objName) {
  if (arguments.length === 0) {
    objName = sectionTitle.textContent;
  }

  if (objName === "Inbox") {
    return inbox;
  } else if (objName === "Today") {
    return today;
  } else {
    return projects.getProject(objName);
  }
}

function showFormUpdateCard(arrayTask, indexCard) {
  if (arrayTask.length === 1) {
    containerTodoList.appendChild(formUpdateTodo);
  } else if (arrayTask.length - 1 === indexCard) {
    containerTodoList.appendChild(formUpdateTodo);
  } else {
    containerTodoList.insertBefore(formUpdateTodo, arrayTask[indexCard + 1]);
  }
  formUpdateTodo.style.display = "block";
  showInfoFormUpdate(getDataTodoCard(indexCard));

  btnCancelUpdateForm.addEventListener("click", () => {
    formUpdateTodo.style.display = "none";
    showTodoList();
  });
}

function updateTodoCardDOM() {
  arrayTodosDOM = Array.from(document.querySelectorAll(".task"));
  document.querySelectorAll(".task").forEach((task, index) => {
    task.lastElementChild.addEventListener("click", (e) => {
      containerTodoList.removeChild(arrayTodosDOM[index]);
      indexCardTodo = index;
      createSelectOptions(projects.projects, selectUpdateProject);
      showFormUpdateCard(arrayTodosDOM, index);
      closeFormAddTask();
    });
  });
}

function chooseObjectList(object) {
  sectionTitle.textContent = object.children[0].lastElementChild.textContent;
  closeFormAddTask();
  closeFormUpdateTask();
  showSectionTodo(object);
  containerTodoList.textContent = "";
  showTodoList();
}

function showFormAddTodoNavbar() {
  createSelectOptions(projects.projects, selectProjectNavbar);
  containerAddTodoNavbar.classList.add("show-form");
}

function closeFormAddTodoNavbar() {
  containerAddTodoNavbar.classList.remove("show-form");
}

function showSectionTodo(section) {
  const sectionArray = Array.from(sectionTodo);
  sectionArray.concat(arrayProjectsDOM).forEach((item) => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
}

/*
PROJECTS
*/

function addProject(projectName) {
  if (projectName !== "") {
    const newProject = new Project(projectName);
    projects.addProject(newProject);
  }
}

function addProjectDOM(projectName) {
  if (projectName !== "") {
    const projectCard = createCardProjects(projectName);
    containerProjects.appendChild(projectCard);
    arrayProjectsDOM.push(projectCard);
  }
}

function deleteProject(index) {
  projects.removeProject(index);
}

function deleteProjectDOM(index) {
  arrayProjectsDOM.splice(index, 1);
}

function showFormAddProject() {
  formAddProject.style.display = "flex";
  containerAddProject.classList.add("show-form");

  btnCancelProject.addEventListener("click", (e) => {
    formAddProject.reset();
    formAddProject.style.display = "none";
    containerAddProject.classList.remove("show-form");
  });
}

function projectOperations() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", (e) => {
      chooseObjectList(project);
    });
  });
  document.querySelectorAll("#delete-project").forEach((project, index) => {
    project.addEventListener("click", (e) => {
      deleteProject(index);
      deleteProjectDOM(index);
      showProjectsList();
    });
  });
}

function showProjectsList() {
  containerProjects.textContent = "";
  if (arrayProjectsDOM.length > 0) {
    arrayProjectsDOM.forEach((projectCard) =>
      containerProjects.appendChild(projectCard)
    );
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

formAddTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoFromForm(getValuesFromForm());
  showTodoList();
  formAddTodo.reset();
});

formAddTodoNavbar.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodoFromForm(getValuesFromNavbar());
  showTodoList();
  formAddTodoNavbar.reset();
});

formUpdateTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const valuesTodo = getValuesFormUpdate();
  if (valuesTodo["title"].trim() !== "" && valuesTodo["dueDate"] !== "") {
    updateTodo(indexCardTodo, valuesTodo);
    updateTodoCard(indexCardTodo, valuesTodo);
  }
  formUpdateTodo.style.display = "none";
  showTodoList();
});

formAddProject.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = inputProjectName.value.trim();

  addProject(projectName);
  addProjectDOM(projectName);
  projectOperations();

  createSelectOptions(projects.projects, selectProject);
  createSelectOptions(projects.projects, selectUpdateProject);
  createSelectOptions(projects.projects, selectProjectNavbar);

  formAddProject.reset();
  formAddProject.style.display = "none";
  containerAddProject.classList.remove("show-form");
});

inboxSection.addEventListener("click", (e) => chooseObjectList(e.target));
todaySection.addEventListener("click", (e) => chooseObjectList(e.target));

btnAddTodo.addEventListener("click", formOperations);
btnFormCancel.addEventListener("click", closeFormAddTask);
btnAddTodoNavbar.addEventListener("click", showFormAddTodoNavbar);
btnCancelFormNavbar.addEventListener("click", closeFormAddTodoNavbar);
btnAddProject.addEventListener("click", showFormAddProject);

btnHome.addEventListener("click", (e) => {
  sectionTitle.textContent = "Today";
  showSectionTodo(todaySection);
  showTodoList();
});

btnToggleSidebar.addEventListener("click", (e) => {
  //document.querySelector(".sidebar").classList.toggle("content-hidden");
});

(function setCurrentDate() {
  const dueDate = document.getElementById("dueDate");
  const dueDateUpdate = document.getElementById("dueDate-update");
  const dueDateNavbar = document.getElementById("duedate-navbar");

  dueDate.setAttribute("min", currentDate());
  dueDateUpdate.setAttribute("min", currentDate());
  dueDateNavbar.setAttribute("min", currentDate());
})();

//crear una función que guarde los proyectos y todos

//Crear una función que guarde los proyectos o todos cada vez que un nuevo
//todo es creado.
function storeData() {}

//Crear una función que elimine todos desde localstorage

function removeStoredData() {}

//También tenemos que crear otra función que busque todos cuando se cargue por
//primera vez la app.

/* 
Make sure your app doesn’t crash if the data 
you may want retrieve from localStorage isn’t there!
*/

export { inbox, today, projects, getSectionObject, currentDate };
