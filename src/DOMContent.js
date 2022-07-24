import "./styles.css";
import { createCardTodo, createCardProjects } from "./components";
import { Project } from "./project";
import { Projects } from "./projects";
import { Todo } from "./todo";
import { Tasks } from "./tasks";

const inboxSection = document.querySelector(".inbox");
const todaySection = document.querySelector(".today");

const formUpdateTodo = document.getElementById("form-update-task");
const formAddProject = document.getElementById("form_add_project");
const formAddTodo = document.getElementById("form-task-card");

const containerTodoList = document.querySelector(".task-list");
const containerProjects = document.querySelector(".container-projects");
const containerAddProject = document.querySelector(".container-add-project");

const sectionTodo = document.querySelectorAll(".section");
const showProjectsBar = document.getElementById("show-projects");

const btnAddTodo = document.querySelector(".add-task");
const btnFormCancel = document.querySelector(".btn-cancel");
const btnAddProject = document.getElementById("add-project");
const btnCancelProject = document.querySelector(".btn-cancel-project");
const btnCancelUpdateForm = document.querySelector(".btn-cancel-update");

let sectionTitle = document.querySelector(".task-container").firstElementChild;

let inbox = new Tasks();
let today = new Tasks();
let projects = new Projects();
let indexCardTodo = 0;
let arrayTodos = [];

function closeFormAddTask() {
  formAddTodo.style.display = "none";
}

function showFormAddTask() {
  const formAddTodo = document.getElementById("form-task-card");
  formAddTodo.style.display = "block";
  return formAddTodo;
}

function closeFormUpdateTask() {
  const formUpdateTodo = document.getElementById("form-update-task");
  formUpdateTodo.style.display = "none";
  return formUpdateTodo;
}

function showFormUpdateTask() {
  const formUpdateTodo = document.getElementById("form-update-task");
  formUpdateTodo.style.display = "block";
  return formUpdateTodo;
}

function addTask(todoObject) {
  const todo = new Todo(
    todoObject["title"],
    todoObject["description"],
    todoObject["dueDate"],
    todoObject["projectName"],
    todoObject["priority"],
    todoObject["taskFinished"]
  );
  const objectSection = getSectionObject(sectionTitle.textContent);
  objectSection.addTodo(todo);
}

function deleteTodo(index) {
  const object = getSectionObject(sectionTitle.textContent);
  object.removeTodo(index);
}

function deleteTodoDOM() {
  document.querySelectorAll(".task").forEach((task) => {
    task.firstElementChild.addEventListener("change", (e) => {
      if (e.target.checked) {
        const index = Number(e.target.parentElement.getAttribute("index-todo"));
        deleteTodo(index);
        containerTodoList.removeChild(e.target.parentElement);
      }
    });
  });
}

function showTodoList() {
  containerTodoList.textContent = "";

  const object = getSectionObject(sectionTitle.textContent);
  object.todos.forEach((todo, i) => createCardTodo(i, todo));

  updateTaskCardDOM();
  deleteTodoDOM();
}

function getValuesFromForm() {
  const title = document.getElementById("task-name").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("dueDate").value;
  const chooseProject = document.getElementById("select-project");
  const taskPriority = document.getElementById("task-priority");

  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;

  return {
    title,
    description,
    dueDate,
    projectName,
    priority,
    taskFinished: false,
  };
}

function addTodoFromForm() {
  const valuesTodo = getValuesFromForm();
  if (valuesTodo["title"].trim() !== "" && valuesTodo["dueDate"] !== "") {
    addTask(valuesTodo);
  }
}

function formOperations() {
  closeFormUpdateTask();

  const form = showFormAddTask();
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodoFromForm();
    showTodoList();
    form.reset();
  });
}

function getFormUpdateInputs() {
  const inputTitle = document.getElementById("task-name-update");
  const inputDescription = document.getElementById("task-description-update");
  const inputDueDate = document.getElementById("dueDate-update");
  const inputChooseProject = document.getElementById("select-project-update");
  const inputPriority = document.getElementById("task-priority-update");

  return {
    inputTitle,
    inputDescription,
    inputDueDate,
    inputChooseProject,
    inputPriority,
  };
}

function getValuesFormUpdate() {
  const inputsFormUpdate = getFormUpdateInputs();

  const title = inputsFormUpdate["inputTitle"].value;
  const description = inputsFormUpdate["inputDescription"].value;
  const dueDate = inputsFormUpdate["inputDueDate"].value;
  const chooseProject = inputsFormUpdate["inputChooseProject"];
  const taskPriority = inputsFormUpdate["inputPriority"];

  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;

  return {
    title,
    description,
    dueDate,
    projectName,
    priority,
    taskFinished: false,
  };
}

function updateTodo(index, valuesTodo) {
  const object = getSectionObject(sectionTitle.textContent);
  object.updateTodo(index, valuesTodo);
}

function updateTodoCard(indexCard, todoData) {
  const divContainer = document.querySelectorAll(".task")[indexCard];
  divContainer.style.cssText = `border: 2px solid ${todoData["priority"]}`;

  const titleTask = divContainer.children[1].firstElementChild;
  const descriptionTask = divContainer.children[1].lastElementChild;

  titleTask.textContent = todoData["title"];
  descriptionTask.textContent = todoData["description"];
}

function getSectionObject(objName) {
  if (objName === "Inbox") {
    return inbox;
  } else if (objName === "Today") {
    return today;
  } else {
    return projects.getProject(objName);
  }
}

function getDataTaskCard(indexCard) {
  const objectSection = getSectionObject(sectionTitle.textContent);
  const arrayTodo = objectSection.todos[indexCard];
  return arrayTodo;
}

function showInfoFormUpdate(indexCard) {
  const inputsFormUpdate = getFormUpdateInputs();
  const todo = getDataTaskCard(indexCard);
  inputsFormUpdate["inputTitle"].value = todo.title;
  inputsFormUpdate["inputDescription"].value = todo.description;
  inputsFormUpdate["inputDueDate"].value = todo.dueDate;
  inputsFormUpdate["inputChooseProject"].value = todo.projectName;
  inputsFormUpdate["inputPriority"].value = todo.priority;
}

formUpdateTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  const valuesTodo = getValuesFormUpdate();
  if (valuesTodo["title"].trim() !== "" && valuesTodo["dueDate"] !== "") {
    updateTodo(indexCardTodo, valuesTodo);
    updateTodoCard(indexCardTodo, valuesTodo);
  }
  closeFormUpdateTask();
  arrayTodos.forEach((task) => (task.style.display = "flex"));
});

function controlTaskCard(arrayTask, indexCard) {
  if (arrayTask.length === 1) {
    containerTodoList.appendChild(showFormUpdateTask());
  } else if (arrayTask.length - 1 === indexCard) {
    containerTodoList.appendChild(showFormUpdateTask());
  } else {
    containerTodoList.insertBefore(
      showFormUpdateTask(),
      arrayTask[indexCard + 1]
    );
  }

  showInfoFormUpdate(indexCard);

  btnCancelUpdateForm.addEventListener("click", () => {
    closeFormUpdateTask();
    arrayTask.forEach((card) => (card.style.display = "flex"));
  });
}

function updateTaskCardDOM() {
  arrayTodos = Array.from(document.querySelectorAll(".task"));
  document.querySelectorAll(".task").forEach((task) => {
    task.lastElementChild.addEventListener("click", (e) => {
      arrayTodos.forEach((card) => (card.style.display = "flex"));
      task.style.display = "none";
      indexCardTodo = Number(task.getAttribute("index-todo"));
      //showInfoFormUpdate(indexCardTodo);
      controlTaskCard(arrayTodos, indexCardTodo);
      closeFormAddTask();
    });
  });
}

function chooseObjectList(e) {
  const sectionObject = e.target.children[0].lastElementChild.textContent;
  containerTodoList.textContent = "";
  return sectionObject;
}

inboxSection.addEventListener("click", showTodoList);
todaySection.addEventListener("click", showTodoList);

btnAddTodo.addEventListener("click", formOperations);
btnFormCancel.addEventListener("click", closeFormAddTask);

function showSectionTodo(section) {
  sectionTodo.forEach((item) => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
}

sectionTodo.forEach((section) => {
  section.addEventListener("click", (e) => {
    showSectionTodo(section);
    sectionTitle.textContent = section.children[0].lastElementChild.textContent;
    //console.log(sectionTitle.textContent);
  });
});

/*
PROJECTS
*/

function showProjectDOM(projectObj) {
  sectionTitle.textContent = projectObj["name"];
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
  //mostrar la información en el DOM.
  containerProjects.textContent = ""; //no va aquí

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

export { addTask };
