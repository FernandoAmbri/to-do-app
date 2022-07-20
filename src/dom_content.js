import { Todo } from "./todo";
import { Tasks } from "./tasks";
import { createCardTodo } from "./components";
import "./styles.css";

const btn_addTodo = document.querySelector(".add-task");
const form_addTodo = document.querySelector("#form-task-card");
const form_updateTodo = document.querySelector("#form-update-task");

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

let todo_section_title =
  document.querySelector(".task-container").firstElementChild;

let inbox = new Tasks();
let today = new Tasks();
let indexTodoCard = 0;
let taskCardContainer = null;

function showForm() {
  form_addTodo.style.display = "block";
  form_updateTodo.style.display = "none";
  if (taskCardContainer) {
    taskCardContainer.style.display = "none";
  }
}

function closeForm() {
  form_addTodo.style.display = "none";
}

function controlDOM(taskContainer) {
  let arrayTask = Array.from(document.querySelectorAll(".task"));
  let index = Number(taskContainer.getAttribute("index-todo"));
  let todo = inbox.todos[index];

  taskContainer.style.display = "none";
  form_addTodo.style.display = "none";

  task_name_update.value = todo["title"];
  task_description_update.value = todo["description"];
  task_dueDate_update.value = todo["dueDate"];
  choose_project_update.value = todo["projectName"];
  task_priority_update.value = todo["priority"];

  if (arrayTask.length === 1) {
    task_list_container.appendChild(form_updateTodo);
  } else if (arrayTask.length - 1 === index) {
    task_list_container.appendChild(form_updateTodo);
  } else {
    task_list_container.insertBefore(form_updateTodo, arrayTask[index + 1]);
  }

  form_updateTodo.style.display = "block";
  btn_cancel_update.addEventListener("click", () => {
    form_updateTodo.style.display = "none";
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
  inbox.updateTodo(indexTodoCard, getValuesFormUpdate());
}

function updateTodo() {
  document.querySelectorAll(".task").forEach((task) => {
    task.lastElementChild.addEventListener("click", (e) => {
      indexTodoCard = Number(e.target.parentElement.getAttribute("index-todo"));
      if (taskCardContainer == null) {
        taskCardContainer = task;
      } else if (e.target.parentElement !== taskCardContainer) {
        form_updateTodo.style.display = "none";
        taskCardContainer.style.display = "flex";
      }
      controlDOM(taskCardContainer);
      console.log(e.target.parentElement);
      console.log(taskCardContainer);
    });
  });
}

function deleteTodo() {
  document.querySelectorAll(".task").forEach((task) => {
    task.firstElementChild.addEventListener("change", (e) => {
      if (e.target.checked) {
        let index = Number(e.target.parentElement.getAttribute("index-todo"));
        inbox.removeTodo(index);
        document
          .querySelector(".task-list")
          .removeChild(e.target.parentElement);
      }
    });
  });
}

function showTodo(array) {
  document.querySelector(".task-list").textContent = "";

  array.forEach((todo, i) => {
    createCardTodo(i, todo);
  });

  deleteTodo();
  updateTodo();
}

function getValuesForm() {
  let title = task_name.value;
  let description = task_description.value;
  let date = task_dueDate.value;
  let chooseProject =
    choose_project.options[choose_project.selectedIndex].value;
  let priority = task_priority.options[task_priority.selectedIndex].value;
  return new Todo(title, description, date, chooseProject, priority, false);
}

function addTask() {
  let todo = getValuesForm();
  if (todo_section_title.textContent === "Inbox") {
    inbox.addTodo(todo);
    showTodo(inbox.todos);
  } else if (todo_section_title.textContent === "Today") {
    today.addTodo(todo);
    showTodo(inbox.todos);
  }
}

function showSectionTodo(section) {
  section_todo.forEach((item) => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
}

btn_addTodo.addEventListener("click", showForm);
btn_cancel.addEventListener("click", closeForm);

section_todo.forEach((section) => {
  section.addEventListener("click", (e) => {
    showSectionTodo(section);
    todo_section_title.textContent = section.lastElementChild.textContent;
    closeForm();
  });
});

form_addTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
  form_addTodo.reset();
});

form_updateTodo.addEventListener("submit", (e) => {
  e.preventDefault();
  updateTaskData();
  form_updateTodo.style.display = "none";
  taskCardContainer.style.display = "flex";
});

export { addTask };
