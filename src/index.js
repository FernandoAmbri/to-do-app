import "./styles.css";
import {
  createCardTodo,
  createCardProjects,
  createSelectOptions,
} from "./components";

import {
  getValuesFromForm,
  getValuesFormUpdate,
  getValuesFromNavbar,
  showInfoFormUpdate,
} from "./formContent";

import Project from "./project";
import Storage from "./localStorage";

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

const btnAddTodo = document.querySelector(".add-task");
const btnFormCancel = document.querySelector(".btn-cancel");
const btnCancelProject = document.querySelector(".btn-cancel-project");
const btnCancelUpdateForm = document.querySelector(".btn-cancel-update");
const btnCancelFormNavbar = document.querySelector(".btn-cancel-navbar");
const btnAddProject = document.getElementById("add-project");
const btnAddTodoNavbar = document.getElementById("add-todo-navbar");
const btnHome = document.getElementById("btn-home");

const selectProject = document.getElementById("select-project");
const selectUpdateProject = document.getElementById("select-project-update");
const selectProjectNavbar = document.getElementById("select-project-navbar");

let sectionTitle = document.querySelector(".task-container").firstElementChild;

const storage = new Storage();

let indexCardTodo = 0;
let arrayTodosDOM = [];

initApp();

/**
 * TODO OPERATIONS
 */

function addTodoFromForm(todoObj) {
  if (todoObj.getTitle().trim() !== "") {
    if (todoObj.getProjectName().trim() === "") {
      const project = getSectionObject(sectionTitle.textContent);
      const today = storage.getProjectStorage("Today");

      if (project.getName() !== today.getName()) {
        todoObj.setProjectName(project.getName());
      }
    }
    storage.addTodoStorage(todoObj);
  }
}

function updateTodoFromForm(valuesTodo) {
  if (valuesTodo.getTitle().trim() !== "") {
    const project = getSectionObject(sectionTitle.textContent);
    const today = storage.getProjectStorage("Today");
    if (project.getName() !== today.getName()) {
      storage.updateTodoTodayStorage(
        indexCardTodo,
        valuesTodo,
        project.getName()
      );
    } else {
      storage.updateTodoFromTodayStorage(indexCardTodo, valuesTodo);
    }
  }
}

function getDataTodoCard(indexCard) {
  const project = getSectionObject(sectionTitle.textContent);
  return project.todos[indexCard];
}

function updateTodoCardDOM() {
  arrayTodosDOM = Array.from(document.querySelectorAll(".task"));
  document.querySelectorAll(".task").forEach((task, index) => {
    task.lastElementChild.addEventListener("click", (e) => {
      showTodoList();
      containerTodoList.removeChild(arrayTodosDOM[index]);
      indexCardTodo = index;
      closeFormAddTask();
      createSelectOptions(storage.getAllProjects(), selectUpdateProject);
      showFormUpdateCard(arrayTodosDOM, index);
      showInfoFormUpdate(getDataTodoCard(index));
    });
  });
}

function deleteTodoDOM() {
  document.querySelectorAll(".task").forEach((task, i) => {
    task.firstElementChild.addEventListener("change", (e) => {
      if (e.target.checked) {
        const project = getSectionObject(sectionTitle.textContent);
        const today = storage.getProjectStorage("Today");
        if (project.getName() !== today.getName()) {
          storage.deleteTodoTodayStorage(i, project.getName());
        } else {
          storage.deleteTodoFromTodayStorage(i);
        }
        showTodoList();
        showCurrentTodos();
      }
    });
  });
}

function getSectionObject(projectName) {
  return storage.getProjectStorage(projectName);
}

function showTodoList() {
  cleanTodosContainer();
  const object = getSectionObject(sectionTitle.textContent);
  if (object) {
    object.todos.forEach((todo, i) => createCardTodo(i, todo));
    updateTodoCardDOM();
    deleteTodoDOM();
  }
}

function showCurrentTodos() {
  const spanNumberTodos = document.querySelectorAll("#number-of-tasks");
  spanNumberTodos.forEach((item, i) => {
    const todosQuantity = storage.getAllProjects()[i].todos.length;
    item.textContent = "";
    if (todosQuantity > 0) {
      item.textContent = todosQuantity;
    }
  });
}

function updateTodoCard(indexCard, todoData) {
  const divContainer = document.querySelectorAll(".task")[indexCard];
  if (divContainer) {
    divContainer.style.cssText = `border: 2px solid ${todoData.priority}`;

    const titleTask = divContainer.children[1].firstElementChild;
    const descriptionTask = divContainer.children[1].lastElementChild;

    titleTask.textContent = todoData.title;
    descriptionTask.textContent = todoData.description;
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

  showFormUpdateTask();

  btnCancelUpdateForm.addEventListener("click", () => {
    closeFormUpdateTask();
    showTodoList();
  });
}

function selectProjectSection(project) {
  sectionTitle.textContent = project.children[0].lastElementChild.textContent;
  closeFormAddTask();
  closeFormUpdateTask();
  showSectionProject(project);
  cleanTodosContainer();
  showTodoList();
}

function startFormOperations() {
  closeFormUpdateTask();
  showTodoList();
  createSelectOptions(storage.getAllProjects(), selectProject);
  showFormAddTask();
}

/*
 * PROJECT OPERATIONS
 */

function addProject(projectName) {
  if (projectName !== "") {
    const newProject = new Project(projectName);
    storage.addProjectStorage(newProject);
  }
}

const deleteProject = (projectName) => {
  storage.removeProjectStorage(projectName);
};

function performDeleteProject(e) {
  const projectName =
    e.target.parentElement.children[0].children[1].textContent;
  deleteProject(projectName);
  showProjectsList();
  showCurrentTodos();
}

function projectOperations() {
  const projectsDOM = document.querySelectorAll(".project");
  const deleteProjects = document.querySelectorAll("#delete-project");
  projectsDOM.forEach((project) => {
    project.addEventListener("click", (e) => selectProjectSection(project));
  });
  deleteProjects.forEach((icon) => {
    icon.addEventListener("click", (e) => performDeleteProject(e));
  });
}

function showProjectsList() {
  cleanContainerProjects();
  storage.getAllProjects().forEach((project) => {
    if (project.getName() !== "Inbox" && project.getName() !== "Today") {
      containerProjects.appendChild(createCardProjects(project.getName()));
    }
  });
  projectOperations();
}

function displayProjectsBar() {
  const showProjectsBar = document.getElementById("show-projects");

  showProjectsBar.addEventListener("click", (e) => {
    showProjectsBar.classList.toggle("fa-chevron-right");
    showProjectsBar.classList.toggle("fa-chevron-down");
    containerProjects.classList.toggle("show-content");

    if (showProjectsBar.classList.contains("fa-chevron-down")) {
      showProjectsList();
      showCurrentTodos();
    }
  });
}

function showSectionProject(section) {
  const sectionArray = Array.from(sectionTodo);
  const projects = Array.from(containerProjects.children);
  sectionArray.concat(projects).forEach((item) => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
}

function showFormAddProject() {
  containerAddProject.classList.add("show-form");
  btnCancelProject.addEventListener("click", (e) => {
    formAddProject.reset();
    containerAddProject.classList.remove("show-form");
  });
}

/**
 * FORM TASKS
 */

function performAddTodo(e) {
  e.preventDefault();
  storage.loadDataStorage();
  addTodoFromForm(getValuesFromForm());
  showTodoList();
  showCurrentTodos();
  formAddTodo.reset();
}

function performUpdateTodo(e) {
  e.preventDefault();
  updateTodoFromForm(getValuesFormUpdate());
  updateTodoCard(indexCardTodo, getValuesFormUpdate());
  closeFormUpdateTask();
  showTodoList();
  showCurrentTodos();
}

function performAddTodoNav(e) {
  e.preventDefault();
  addTodoFromForm(getValuesFromNavbar());
  showTodoList();
  showCurrentTodos();
  formAddTodoNavbar.reset();
}

function performAddProject(e) {
  e.preventDefault();
  const inputProjectName = document.getElementById("project-name");
  const projectName = inputProjectName.value.trim();

  addProject(projectName);
  showProjectsList();
  projectOperations();

  createSelectOptions(storage.getAllProjects(), selectProject);
  createSelectOptions(storage.getAllProjects(), selectUpdateProject);
  createSelectOptions(storage.getAllProjects(), selectProjectNavbar);

  formAddProject.reset();
  containerAddProject.classList.remove("show-form");
}

/**
 * DISPLAY FORMS
 */

function showFormAddTodoNavbar() {
  createSelectOptions(storage.getAllProjects(), selectProjectNavbar);
  containerAddTodoNavbar.classList.add("show-form");
}

function closeFormAddTodoNavbar() {
  containerAddTodoNavbar.classList.remove("show-form");
}

function closeFormAddTask() {
  formAddTodo.reset();
  formAddTodo.classList.remove("show-content");
}

function showFormAddTask() {
  formAddTodo.classList.add("show-content");
}

function closeFormUpdateTask() {
  formUpdateTodo.classList.remove("show-content");
}

function showFormUpdateTask() {
  formUpdateTodo.classList.add("show-content");
}

function cleanTodosContainer() {
  containerTodoList.textContent = "";
}

function cleanContainerProjects() {
  containerProjects.textContent = "";
}

/**
 * EVENTS
 */

formAddTodoNavbar.addEventListener("submit", (e) => performAddTodoNav(e));
formUpdateTodo.addEventListener("submit", (e) => performUpdateTodo(e));
formAddProject.addEventListener("submit", (e) => performAddProject(e));
formAddTodo.addEventListener("submit", (e) => performAddTodo(e));

inboxSection.addEventListener("click", (e) => selectProjectSection(e.target));
todaySection.addEventListener("click", (e) => selectProjectSection(e.target));

btnAddTodo.addEventListener("click", startFormOperations);
btnFormCancel.addEventListener("click", closeFormAddTask);
btnAddTodoNavbar.addEventListener("click", showFormAddTodoNavbar);
btnCancelFormNavbar.addEventListener("click", closeFormAddTodoNavbar);
btnAddProject.addEventListener("click", showFormAddProject);

btnHome.addEventListener("click", (e) => {
  sectionTitle.textContent = "Today";
  showSectionProject(todaySection);
  showTodoList();
});

/**
 * DISPLAY CURRENT DATE
 */

function getCurrentDate() {
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

function setCurrentDate() {
  const dueDate = document.getElementById("dueDate");
  const dueDateUpdate = document.getElementById("dueDate-update");
  const dueDateNavbar = document.getElementById("duedate-navbar");

  dueDate.setAttribute("min", getCurrentDate());
  dueDateUpdate.setAttribute("min", getCurrentDate());
  dueDateNavbar.setAttribute("min", getCurrentDate());
}

function initApp() {
  storage.loadDataStorage();
  createSelectOptions(storage.getAllProjects(), selectProject);
  displayProjectsBar();
  showTodoList();
  showCurrentTodos();
  setCurrentDate();
}
