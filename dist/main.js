/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCardProjects": () => (/* binding */ createCardProjects),
/* harmony export */   "createCardTodo": () => (/* binding */ createCardTodo),
/* harmony export */   "createSelectOptions": () => (/* binding */ createSelectOptions),
/* harmony export */   "createShowTodos": () => (/* binding */ createShowTodos)
/* harmony export */ });
/* eslint-disable no-param-reassign */

/* eslint-disable no-restricted-syntax */
function createCardTodo(index, objTodo) {
  const divTask = document.createElement("div");
  const divTaskInfo = document.createElement("div");
  const iconUpdateTask = document.createElement("i");
  divTask.innerHTML = "<input type=\"checkbox\" id=\"task-finished\" />";
  divTaskInfo.innerHTML = "<h2 class=\"task-name\" id=\"task-name-card\">".concat(objTodo.getTitle(), "</h2>\n  <p class=\"task-description-card\" id=\"task-description-card\">").concat(objTodo.getDescription(), "</p>\n  <p>").concat(objTodo.getDueDate(), "</p>");
  iconUpdateTask.classList.add("fa-regular", "fa-pen-to-square");
  divTask.classList.add("task");
  divTask.setAttribute("index-todo", index);
  divTask.style.cssText = "border-left: 2px solid ".concat(objTodo.getPriority());
  divTask.appendChild(divTaskInfo);
  divTask.appendChild(iconUpdateTask);
  document.querySelector(".task-list").appendChild(divTask);
}

function createCardProjects(projectName) {
  const divProject = document.createElement("div");
  const divInfo = document.createElement("div");
  const iconDelete = document.createElement("i");
  const spanNumberTodos = document.createElement("span");
  divInfo.innerHTML = "<i class=\"fa-regular fa-file\"></i>\n  <p id=\"project-name\">".concat(projectName, "</p>");
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
    arrayProjects.forEach(project => {
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
  searchedTodos.innerHTML = "<div class=\"recently-searched\">Recently searched:</div>";

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



/***/ }),

/***/ "./src/formContent.js":
/*!****************************!*\
  !*** ./src/formContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValuesFormUpdate": () => (/* binding */ getValuesFormUpdate),
/* harmony export */   "getValuesFromForm": () => (/* binding */ getValuesFromForm),
/* harmony export */   "getValuesFromNavbar": () => (/* binding */ getValuesFromNavbar),
/* harmony export */   "showInfoFormUpdate": () => (/* binding */ showInfoFormUpdate)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


function getValuesFromForm() {
  const title = document.getElementById("task-name").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("dueDate").value.replace(/-/g, "/");
  const chooseProject = document.getElementById("select-project");
  const taskPriority = document.getElementById("task-priority");
  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;
  return new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, projectName, priority);
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
    inputPriority
  };
}

function showInfoFormUpdate(dataObject) {
  const inputsFormUpdate = getFormUpdateInputs();
  inputsFormUpdate.inputTitle.value = dataObject.getTitle();
  inputsFormUpdate.inputDescription.value = dataObject.getDescription();
  inputsFormUpdate.inputDueDate.value = dataObject.getDueDate().replace(/(\/)/g, "-");
  inputsFormUpdate.inputChooseProject.value = dataObject.getProjectName();
  inputsFormUpdate.inputPriority.value = dataObject.getPriority();
}

function getValuesFormUpdate() {
  const inputsFormUpdate = getFormUpdateInputs();
  const title = inputsFormUpdate.inputTitle.value;
  const description = inputsFormUpdate.inputDescription.value;
  const dueDate = inputsFormUpdate.inputDueDate.value.replace(/-/g, "/");
  const chooseProject = inputsFormUpdate.inputChooseProject;
  const taskPriority = inputsFormUpdate.inputPriority;
  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;
  return new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, projectName, priority);
}

function getValuesFromNavbar() {
  const title = document.getElementById("task-name-navbar").value;
  const description = document.getElementById("task-description-navbar").value;
  const dueDate = document.getElementById("duedate-navbar").value.replace(/-/g, "/");
  const chooseProject = document.getElementById("select-project-navbar");
  const taskPriority = document.getElementById("task-priority-navbar");
  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;
  return new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, projectName, priority);
}



/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* eslint-disable comma-dangle */

/* eslint-disable class-methods-use-this */



class Storage {
  loadDataStorage() {
    if (!localStorage.length) {
      const projects = new _projects__WEBPACK_IMPORTED_MODULE_0__["default"]();
      projects.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Inbox"));
      projects.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Today"));
      this.saveProjectsStorage(projects);
    }
  }

  saveProjectsStorage(dataProjects) {
    localStorage.setItem("projects", JSON.stringify(dataProjects));
  }

  getProjectsStorage() {
    const projects = Object.assign(new _projects__WEBPACK_IMPORTED_MODULE_0__["default"](), JSON.parse(localStorage.getItem("projects")));
    projects.setProjects(projects.getProjects().map(project => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_1__["default"](), project)));
    projects.getProjects().forEach(project => {
      project.setTodos(project.getTodos().map(todo => Object.assign(new _todo__WEBPACK_IMPORTED_MODULE_2__["default"](), todo)));
    });
    return projects;
  }

  getAllProjects() {
    const projects = this.getProjectsStorage();
    return projects.getProjects();
  }

  addProjectStorage(project) {
    const projects = this.getProjectsStorage();
    projects.addProject(project);
    this.saveProjectsStorage(projects);
  }

  removeProjectStorage(projectName) {
    const projects = this.getProjectsStorage();
    projects.deleteAllTodos(projectName);
    projects.removeProject(projectName);
    this.saveProjectsStorage(projects);
  }

  addTodoStorage(todoObj) {
    const projects = this.getProjectsStorage();
    projects.addTodoFromProject(todoObj);
    this.saveProjectsStorage(projects);
  }

  updateTodoTodayStorage(index, todoObj, projectName) {
    const projects = this.getProjectsStorage();
    projects.updateTodoToday(index, todoObj, projectName);
    this.saveProjectsStorage(projects);
  }

  updateTodoFromTodayStorage(index, todoObj) {
    const projects = this.getProjectsStorage();
    projects.updateTodoFromToday(index, todoObj);
    this.saveProjectsStorage(projects);
  }

  deleteTodoTodayStorage(index, projectName) {
    const projects = this.getProjectsStorage();
    projects.deleteTodoToday(index, projectName);
    this.saveProjectsStorage(projects);
  }

  deleteTodoFromTodayStorage(index) {
    const projects = this.getProjectsStorage();
    projects.deleteTodoFromToday(index);
    this.saveProjectsStorage(projects);
  }

  getProjectStorage(projectName) {
    const projects = this.getProjectsStorage();
    return projects.getProject(projectName);
  }

}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
  constructor() {
    let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    this.name = name;
    this.todos = [];
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getTodos() {
    return this.todos;
  }

  setTodos(todosArray) {
    this.todos = todosArray;
  }

  getTodo(title) {
    const todo = this.todos.find(item => item.getTitle() === title);
    return todo || false;
  }

  getIndexTodo(todo) {
    return this.todos.findIndex(item => item.getTitle() === todo.getTitle());
  }

  addTodo(todo) {
    if (!this.getTodo(todo.getTitle())) {
      if (this.getName() === todo.getProjectName()) {
        this.todos = [...this.todos, todo];
        return true;
      }
    }

    return false;
  }

  removeTodo(todoTitle) {
    const index = this.todos.findIndex(item => item.getTitle() === todoTitle);
    this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)];
  }

  updateTodo(index, todo) {
    if (todo.getProjectName() === this.name && this.getTodo(todo.getTitle())) {
      this.todos[index] = todo;
      return true;
    }

    this.removeTodo(todo.getTitle());
    return false;
  }

}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* eslint-disable no-param-reassign */

/* eslint-disable no-prototype-builtins */

class Projects {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  setProjects(projectsArray) {
    this.projects = projectsArray;
  }

  getProject(name) {
    const project = this.projects.find(item => item.name === name);
    return project || false;
  }

  addProject(project) {
    if (!this.getProject(project.getName())) {
      this.projects.push(project);
    }
  }

  getProjectIndex(projectName) {
    return this.projects.findIndex(project => project.getName() === projectName);
  }

  removeProject(projectName) {
    this.projects = this.projects.filter(item => item.getName() !== projectName);
  }

  addTodoFromProject(todo) {
    const todayTitle = "Today";
    const project = this.getProject(todo.getProjectName());
    const today = this.getProject(todayTitle);
    const projectAdded = project ? project.addTodo(todo) : false;

    if (projectAdded) {
      todo.searchTodo = {
        projectSearch: todo.getProjectName(),
        todoTitle: todo.getTitle()
      };
    } else {
      todo.setProjectName("");
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.getDueDate()))) {
      today.todos.push(todo);
    }
  }

  findTodoToday(project, todoTitle) {
    const todayTitle = "Today";
    const today = this.getProject(todayTitle);
    let indexTodo = -1;
    today.todos.forEach((item, i) => {
      if (item.hasOwnProperty("searchTodo")) {
        if (item.searchTodo.projectSearch === project.getName() && item.searchTodo.todoTitle === todoTitle) {
          indexTodo = i;
        }
      }
    });
    return indexTodo;
  }

  updateTodoToday(index, todoObj, projectName) {
    const todayTitle = "Today";
    const today = this.getProject(todayTitle);
    const project = this.getProject(projectName);
    const todoTitle = project.getTodos()[index].getTitle();
    const lowestIndex = 0;
    let updatedTodo = null;

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todoObj.getDueDate()))) {
      const todoIndex = this.findTodoToday(project, todoTitle);
      todoObj.searchTodo = {
        projectSearch: project.getName(),
        todoTitle: todoObj.getTitle()
      };

      if (todoIndex >= lowestIndex) {
        today.todos[todoIndex] = todoObj;
      } else {
        today.todos.push(todoObj);
      }

      updatedTodo = project.updateTodo(index, todoObj);

      if (updatedTodo === false) {
        today.removeTodo(todoObj.getTitle());
        this.addTodoFromProject(todoObj);
      }
    } else {
      updatedTodo = project.updateTodo(index, todoObj);
      const todoIndex = this.findTodoToday(project, todoTitle);

      if (todoIndex >= lowestIndex) {
        today.removeTodo(todoTitle);
      }

      if (updatedTodo === false) {
        this.addTodoFromProject(todoObj);
      }
    }
  }

  updateTodoFromToday(index, todoObj) {
    const todayTitle = "Today";
    const todoProperty = "searchTodo";
    const today = this.getProject(todayTitle);
    const todoValues = today.getTodos()[index];

    if (todoValues.hasOwnProperty(todoProperty)) {
      todoObj.searchTodo = todoValues.searchTodo;
    }

    if (todoObj.hasOwnProperty(todoProperty)) {
      const {
        projectSearch,
        todoTitle
      } = todoObj.searchTodo;
      const project = this.getProject(projectSearch);
      const indexSearch = project.getIndexTodo(project.getTodo(todoTitle));
      const updatedTodo = project.updateTodo(indexSearch, todoObj);

      if (updatedTodo === false) {
        today.removeTodo(todoTitle);
        this.addTodoFromProject(todoObj);
        return;
      }
    } else {
      const project = this.getProject(todoObj.getProjectName());
      const todoAdded = project ? project.addTodo(todoObj) : false;

      if (todoAdded) {
        todoObj.searchTodo = {
          projectSearch: todoObj.getProjectName(),
          todoTitle: todoObj.getTitle()
        };
      }
    }

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todoObj.getDueDate()))) {
      today.todos[index] = todoObj;
    } else {
      today.removeTodo(todoValues.getTitle());
    }
  }

  deleteTodoFromToday(index) {
    const todayTitle = "Today";
    const todoProperty = "searchTodo";
    const today = this.getProject(todayTitle);
    const todoObj = today.getTodos()[index];

    if (todoObj.hasOwnProperty(todoProperty)) {
      const {
        projectSearch,
        todoTitle
      } = todoObj.searchTodo;
      const project = this.getProject(projectSearch);

      if (project) {
        project.removeTodo(todoTitle);
      }
    }

    today.removeTodo(todoObj.getTitle());
  }

  deleteAllTodos(projectName) {
    const project = this.getProject(projectName);

    if (project) {
      project.getTodos().forEach((todo, i) => {
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.getDueDate()))) {
          const index = i;
          this.deleteTodoToday(index, projectName, true);
        }
      });
    }
  }

  deleteTodoToday(index, projectName) {
    const todayTitle = "Today";
    const project = this.getProject(projectName);
    const today = this.getProject(todayTitle);
    const todoTitle = project.getTodos()[index].getTitle();
    const indexTodo = this.findTodoToday(project, todoTitle);

    if (indexTodo >= 0) {
      today.removeTodo(todoTitle);
    }

    if (arguments.length < 3) {
      project.removeTodo(todoTitle);
    }
  }

}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* eslint-disable comma-dangle */
class Todo {
  constructor() {
    let title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    let description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let dueDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    let projectName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    let priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.priority = priority;
  }

  getTitle() {
    return this.title;
  }

  setTitle(title) {
    this.title = title;
  }

  getDescription() {
    return this.description;
  }

  setDescription(description) {
    this.description = description;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getProjectName() {
    return this.projectName;
  }

  setProjectName(projectName) {
    this.projectName = projectName;
  }

  getPriority() {
    return this.priority;
  }

  setPriority(priority) {
    this.priority = priority;
  }

}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background: #a3e635;\r\n}\r\n\r\n.navbar {\r\n  width: 1280px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n}\r\n\r\n.navbar ul {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.navbar ul a {\r\n  text-decoration: none;\r\n}\r\n\r\nul a i {\r\n  font-size: 1.8rem;\r\n  color: #fff;\r\n  padding: 5px;\r\n}\r\n\r\nul a i:hover {\r\n  background: rgba(255, 255, 255, 0.4);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-container {\r\n  height: 30px;\r\n  min-width: 220px;\r\n  padding: 5px;\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 5px;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=text] {\r\n  opacity: 0.4;\r\n  padding: 7px 10px 7px 0;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: text;\r\n}\r\n\r\n.search-todo:focus {\r\n  width: 400px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.sidebar {\r\n  background: #f7fee7;\r\n  width: 335px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.container {\r\n  padding: 5px 5px 5px 45px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.section {\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.section div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.section span {\r\n  font-size: 1.3rem;\r\n  color: #555;\r\n}\r\n\r\n.section-active,\r\n.section:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.today {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.projects {\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.projects>div {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects>i {\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.projects .fa-plus:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.container-projects {\r\n  display: none;\r\n  overflow: auto;\r\n  font-size: 1.5rem;\r\n  height: 220px;\r\n}\r\n\r\n.container-projects .project {\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n}\r\n\r\n.project div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.project .fa-trash-can {\r\n  cursor: pointer;\r\n}\r\n\r\n#show-projects {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n\r\nMain content \r\n\r\n*/\r\n\r\n.content {\r\n  width: 100%;\r\n  padding: 30px 0;\r\n}\r\n\r\n.task-container {\r\n  width: 75%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\nbutton.add-task {\r\n  text-align: start;\r\n  padding: 10px 0;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton.add-task:hover {\r\n  color: #84cc16;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 6px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task input[type=checkbox] {\r\n  width: 18px;\r\n  height: 18px;\r\n  accent-color: white;\r\n  cursor: pointer;\r\n  border: 1px solid #333;\r\n}\r\n\r\n.task div {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 10px;\r\n}\r\n\r\n.task-description-card {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.task i {\r\n  padding: 5px;\r\n  font-size: 1.7rem;\r\n  color: #333;\r\n  border-radius: 4px;\r\n}\r\n\r\n.task i:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-task-card,\r\n.form-update-task {\r\n  display: none;\r\n}\r\n\r\nform .task-card {\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.task-card input[type=text] {\r\n  padding: 5px 0;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  height: 40px;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 5px 0;\r\n}\r\n\r\n.selectors {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=date] {\r\n  padding: 1px;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ninput[type=date]:hover {\r\n  background: #eee;\r\n  border: 1px solid #333;\r\n}\r\n\r\nselect {\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 3px;\r\n  outline: none;\r\n}\r\n\r\nselect:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons-card {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.buttons-card button {\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  font-family: 'Poppins', sans-serif;\r\n  width: 80px;\r\n}\r\n\r\nbutton.btn-cancel,\r\nbutton.btn-cancel-project,\r\nbutton.btn-cancel-update {\r\n  background: #f7fee7;\r\n  border: 1px solid #eee;\r\n  border-radius: 6px;\r\n}\r\n\r\nbutton.btn-add,\r\nbutton.btn-save {\r\n  background: #a3e635;\r\n  color: #fff;\r\n  border-radius: 6px;\r\n  border: 1px solid #a3e635;\r\n}\r\n\r\n/*\r\n\r\nAdd task from navbar \r\n\r\n*/\r\n\r\n.container-fixed {\r\n  width: 100%;\r\n  height: 55%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-fixed form {\r\n  width: 600px;\r\n  padding: 15px;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.container-fixed .task-card {\r\n  border: none;\r\n}\r\n\r\n/*\r\nAdd project form\r\n*/\r\n\r\n.container-add-project {\r\n  width: 100%;\r\n  height: 65%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-add-project form {\r\n  width: 400px;\r\n  height: 160px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.8rem;\r\n  gap: 5px;\r\n}\r\n\r\n.container-add-project input[type=text] {\r\n  padding: 6px;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n  border: 1px solid #333;\r\n  border-radius: 6px;\r\n}\r\n\r\n.show-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.content-hidden {\r\n  display: none;\r\n}\r\n\r\n.show-content {\r\n  display: block;\r\n}\r\n\r\n.search-todos-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 115px;\r\n  width: 435px;\r\n  min-height: 50px;\r\n  max-height: 200px;\r\n  padding: 10px;\r\n  border: 1px solid #333;\r\n  border-radius: 5px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.search-todos-container .todo-searched {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  min-width: 400px;\r\n  height: 30px;\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.recently-searched {\r\n  padding: 5px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.not-visible {\r\n  display: none;\r\n}\r\n\r\n.todo-searched:hover {\r\n  background-color: #eee;\r\n}\r\n\r\n.todo-searched-project {\r\n  display: flex;\r\n  min-width: 50px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-searched-project>p {\r\n  margin-left: 5px;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background: #a3e635;\r\n}\r\n\r\n.navbar {\r\n  width: 1280px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n}\r\n\r\n.navbar ul {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.navbar ul a {\r\n  text-decoration: none;\r\n}\r\n\r\nul a i {\r\n  font-size: 1.8rem;\r\n  color: #fff;\r\n  padding: 5px;\r\n}\r\n\r\nul a i:hover {\r\n  background: rgba(255, 255, 255, 0.4);\r\n  border-radius: 4px;\r\n}\r\n\r\n.search-container {\r\n  height: 30px;\r\n  min-width: 220px;\r\n  padding: 5px;\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  gap: 5px;\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=text] {\r\n  opacity: 0.4;\r\n  padding: 7px 10px 7px 0;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: text;\r\n}\r\n\r\n.search-todo:focus {\r\n  width: 400px;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.sidebar {\r\n  background: #f7fee7;\r\n  width: 335px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.container {\r\n  padding: 5px 5px 5px 45px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.section {\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.section div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.section span {\r\n  font-size: 1.3rem;\r\n  color: #555;\r\n}\r\n\r\n.section-active,\r\n.section:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.today {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.projects {\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.projects>div {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects>i {\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.projects .fa-plus:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.container-projects {\r\n  display: none;\r\n  overflow: auto;\r\n  font-size: 1.5rem;\r\n  height: 220px;\r\n}\r\n\r\n.container-projects .project {\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n}\r\n\r\n.project div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.project .fa-trash-can {\r\n  cursor: pointer;\r\n}\r\n\r\n#show-projects {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n\r\nMain content \r\n\r\n*/\r\n\r\n.content {\r\n  width: 100%;\r\n  padding: 30px 0;\r\n}\r\n\r\n.task-container {\r\n  width: 75%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\nbutton.add-task {\r\n  text-align: start;\r\n  padding: 10px 0;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton.add-task:hover {\r\n  color: #84cc16;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 6px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task input[type=checkbox] {\r\n  width: 18px;\r\n  height: 18px;\r\n  accent-color: white;\r\n  cursor: pointer;\r\n  border: 1px solid #333;\r\n}\r\n\r\n.task div {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 10px;\r\n}\r\n\r\n.task-description-card {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.task i {\r\n  padding: 5px;\r\n  font-size: 1.7rem;\r\n  color: #333;\r\n  border-radius: 4px;\r\n}\r\n\r\n.task i:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-task-card,\r\n.form-update-task {\r\n  display: none;\r\n}\r\n\r\nform .task-card {\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.task-card input[type=text] {\r\n  padding: 5px 0;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  height: 40px;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 5px 0;\r\n}\r\n\r\n.selectors {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=date] {\r\n  padding: 1px;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ninput[type=date]:hover {\r\n  background: #eee;\r\n  border: 1px solid #333;\r\n}\r\n\r\nselect {\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 3px;\r\n  outline: none;\r\n}\r\n\r\nselect:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons-card {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.buttons-card button {\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  font-family: 'Poppins', sans-serif;\r\n  width: 80px;\r\n}\r\n\r\nbutton.btn-cancel,\r\nbutton.btn-cancel-project,\r\nbutton.btn-cancel-update {\r\n  background: #f7fee7;\r\n  border: 1px solid #eee;\r\n  border-radius: 6px;\r\n}\r\n\r\nbutton.btn-add,\r\nbutton.btn-save {\r\n  background: #a3e635;\r\n  color: #fff;\r\n  border-radius: 6px;\r\n  border: 1px solid #a3e635;\r\n}\r\n\r\n/*\r\n\r\nAdd task from navbar \r\n\r\n*/\r\n\r\n.container-fixed {\r\n  width: 100%;\r\n  height: 55%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-fixed form {\r\n  width: 600px;\r\n  padding: 15px;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.container-fixed .task-card {\r\n  border: none;\r\n}\r\n\r\n/*\r\nAdd project form\r\n*/\r\n\r\n.container-add-project {\r\n  width: 100%;\r\n  height: 65%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-add-project form {\r\n  width: 400px;\r\n  height: 160px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.8rem;\r\n  gap: 5px;\r\n}\r\n\r\n.container-add-project input[type=text] {\r\n  padding: 6px;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n  border: 1px solid #333;\r\n  border-radius: 6px;\r\n}\r\n\r\n.show-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.content-hidden {\r\n  display: none;\r\n}\r\n\r\n.show-content {\r\n  display: block;\r\n}\r\n\r\n.search-todos-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: #fff;\r\n  position: absolute;\r\n  top: 50px;\r\n  left: 115px;\r\n  width: 435px;\r\n  min-height: 50px;\r\n  max-height: 200px;\r\n  padding: 10px;\r\n  border: 1px solid #333;\r\n  border-radius: 5px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.search-todos-container .todo-searched {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  cursor: pointer;\r\n  min-width: 400px;\r\n  height: 30px;\r\n  padding: 5px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.recently-searched {\r\n  padding: 5px;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.2rem;\r\n  font-weight: bold;\r\n}\r\n\r\n.not-visible {\r\n  display: none;\r\n}\r\n\r\n.todo-searched:hover {\r\n  background-color: #eee;\r\n}\r\n\r\n.todo-searched-project {\r\n  display: flex;\r\n  min-width: 50px;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-searched-project>p {\r\n  margin-left: 5px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */

function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/components.js");
/* harmony import */ var _formContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formContent */ "./src/formContent.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage.js");
/* eslint-disable no-shadow */

/* eslint-disable function-paren-newline */

/* eslint-disable comma-dangle */

/* eslint-disable implicit-arrow-linebreak */

/* eslint-disable operator-linebreak */

/* eslint-disable no-param-reassign */

/* eslint-disable no-use-before-define */

/* eslint-disable no-restricted-syntax */





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
const inputSearch = document.getElementById("search-todo");
const searchResult = document.getElementById("search-todos-container");
const sectionTitle = document.querySelector(".task-container").firstElementChild;
const storage = new _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"]();
let indexCardTodo = 0;
let arrayTodosDOM = [];
initApp();
/**
 * SEARCH OPERATIONS
 */

function searchTodo(e) {
  const searchValue = e.target.value.toLowerCase().trim();
  const projects = storage.getAllProjects();
  const todaySection = "Today";
  let searchResultArray = [];
  let todosArray = [];
  let todosToday = [];
  let searchResult;

  if (!searchValue) {
    (0,_components__WEBPACK_IMPORTED_MODULE_1__.createShowTodos)([]);
    return;
  }

  projects.forEach(project => {
    if (project.name === todaySection) {
      todosToday = [...project.todos];
    } else {
      todosArray = [...todosArray, ...project.todos];
    }
  });
  const foundTodos = todosArray.filter(todo => todo.title.toLowerCase().includes(searchValue));
  const foundTodosToday = todosToday.filter(todo => todo.title.toLowerCase().includes(searchValue));

  if (foundTodos.length) {
    console.log("foundTodos");
    searchResult = (0,_components__WEBPACK_IMPORTED_MODULE_1__.createShowTodos)(foundTodos);
    searchResultArray = new Array(...searchResult.children);
  } else if (foundTodosToday.length) {
    console.log("foundTodosToday");
    searchResult = (0,_components__WEBPACK_IMPORTED_MODULE_1__.createShowTodos)(foundTodosToday);
    searchResultArray = new Array(...searchResult.children);
  } else {
    searchResult = (0,_components__WEBPACK_IMPORTED_MODULE_1__.createShowTodos)([]);
    searchResultArray = [];
  } // eslint-disable-next-line no-use-before-define


  showSearchedSection(searchResultArray);
}

function showSearchedSection(arrayResult) {
  const arraySections = arrayResult.slice(1);

  for (const elem of arraySections) {
    const currentSection = elem.childNodes[1].childNodes[1].textContent;
    elem.addEventListener("click", () => {
      sectionTitle.textContent = currentSection;
      showTodoList();
    });
  }
}
/**
 * TODO OPERATIONS
 */


function addTodoFromForm(todoObj) {
  if (todoObj.getTitle().trim()) {
    if (!todoObj.getProjectName().trim()) {
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
  if (valuesTodo.getTitle().trim()) {
    const project = getSectionObject(sectionTitle.textContent);
    const today = storage.getProjectStorage("Today");

    if (project.getName() !== today.getName()) {
      storage.updateTodoTodayStorage(indexCardTodo, valuesTodo, project.getName());
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
    task.lastElementChild.addEventListener("click", () => {
      showTodoList();
      containerTodoList.removeChild(arrayTodosDOM[index]);
      indexCardTodo = index;
      closeFormAddTask();
      (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectUpdateProject);
      showFormUpdateCard(arrayTodosDOM, index);
      (0,_formContent__WEBPACK_IMPORTED_MODULE_2__.showInfoFormUpdate)(getDataTodoCard(index));
    });
  });
}

function deleteTodoDOM() {
  document.querySelectorAll(".task").forEach((task, i) => {
    task.firstElementChild.addEventListener("change", e => {
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
    object.todos.forEach((todo, i) => (0,_components__WEBPACK_IMPORTED_MODULE_1__.createCardTodo)(i, todo));
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
    divContainer.style.cssText = "border: 2px solid ".concat(todoData.priority);
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
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProject);
  showFormAddTask();
}
/*
 * PROJECT OPERATIONS
 */


function addProject(projectName) {
  if (projectName !== "") {
    const newProject = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](projectName);
    storage.addProjectStorage(newProject);
  }
}

const deleteProject = projectName => {
  storage.removeProjectStorage(projectName);
};

function performDeleteProject(e) {
  const projectName = e.target.parentElement.children[0].children[1].textContent;
  deleteProject(projectName);
  showProjectsList();
  showCurrentTodos();
}

function projectOperations() {
  const projectsDOM = document.querySelectorAll(".project");
  const deleteProjects = document.querySelectorAll("#delete-project");
  projectsDOM.forEach(project => {
    project.addEventListener("click", () => selectProjectSection(project));
  });
  deleteProjects.forEach(icon => {
    icon.addEventListener("click", e => performDeleteProject(e));
  });
}

function showProjectsList() {
  cleanContainerProjects();
  storage.getAllProjects().forEach(project => {
    if (project.getName() !== "Inbox" && project.getName() !== "Today") {
      containerProjects.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_1__.createCardProjects)(project.getName()));
    }
  });
  projectOperations();
}

function displayProjectsBar() {
  const showProjectsBar = document.getElementById("show-projects");
  showProjectsBar.addEventListener("click", () => {
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
  sectionArray.concat(projects).forEach(item => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
}

function showFormAddProject() {
  containerAddProject.classList.add("show-form");
  btnCancelProject.addEventListener("click", () => {
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
  addTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFromForm)());
  showTodoList();
  showCurrentTodos();
  formAddTodo.reset();
}

function performUpdateTodo(e) {
  e.preventDefault();
  updateTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFormUpdate)());
  updateTodoCard(indexCardTodo, (0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFormUpdate)());
  closeFormUpdateTask();
  showTodoList();
  showCurrentTodos();
}

function performAddTodoNav(e) {
  e.preventDefault();
  addTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFromNavbar)());
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
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProject);
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectUpdateProject);
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProjectNavbar);
  formAddProject.reset();
  containerAddProject.classList.remove("show-form");
}
/**
 * DISPLAY FORMS
 */


function showFormAddTodoNavbar() {
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProjectNavbar);
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


formAddTodoNavbar.addEventListener("submit", e => performAddTodoNav(e));
formUpdateTodo.addEventListener("submit", e => performUpdateTodo(e));
formAddProject.addEventListener("submit", e => performAddProject(e));
formAddTodo.addEventListener("submit", e => performAddTodo(e));
inboxSection.addEventListener("click", () => selectProjectSection(inboxSection));
todaySection.addEventListener("click", () => selectProjectSection(todaySection));
btnAddTodo.addEventListener("click", startFormOperations);
btnFormCancel.addEventListener("click", closeFormAddTask);
btnAddTodoNavbar.addEventListener("click", showFormAddTodoNavbar);
btnCancelFormNavbar.addEventListener("click", closeFormAddTodoNavbar);
btnAddProject.addEventListener("click", showFormAddProject);
btnHome.addEventListener("click", () => {
  sectionTitle.textContent = "Today";
  showSectionProject(todaySection);
  showTodoList();
});
inputSearch.addEventListener("input", e => searchTodo(e));
inputSearch.addEventListener("focus", () => {
  searchResult.classList.remove("not-visible");
});
inputSearch.addEventListener("focusout", () => {
  inputSearch.value = "";
});
window.addEventListener("click", e => {
  if (e.target !== inputSearch) {
    searchResult.classList.add("not-visible");
  }
});
/**
 * DISPLAY CURRENT DATE
 */

function getCurrentDate() {
  const dateObject = new Date();
  const year = dateObject.getFullYear();
  let month = dateObject.getMonth() + 1;
  let date = dateObject.getDate();

  if (month < 10) {
    month = "0".concat(month);
  }

  if (date < 10) {
    date = "0".concat(date);
  }

  return "".concat(year, "-").concat(month, "-").concat(date);
}

function setCurrentDate() {
  const dueDate = document.getElementById("dueDate");
  const dueDateUpdate = document.getElementById("dueDate-update");
  const dueDateNavbar = document.getElementById("duedate-navbar");
  dueDate.setAttribute("min", getCurrentDate());
  dueDateUpdate.setAttribute("min", getCurrentDate());
  dueDateNavbar.setAttribute("min", getCurrentDate());
}
/**
 * START APP
 */


function initApp() {
  storage.loadDataStorage(); // get data from localStorage API

  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProject);
  displayProjectsBar();
  showTodoList();
  showCurrentTodos();
  setCurrentDate();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcs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O0FBRUEsU0FBU3BGLE9BQVQsR0FBbUI7RUFDakJILE9BQU8sQ0FBQ3hHLGVBQVIsR0FEaUIsQ0FDVTs7RUFDM0JqRCxnRUFBbUIsQ0FBQ3lKLE9BQU8sQ0FBQ3JGLGNBQVIsRUFBRCxFQUEyQjhFLGFBQTNCLENBQW5CO0VBQ0EyRSxrQkFBa0I7RUFDbEIzQyxZQUFZO0VBQ1pnQixnQkFBZ0I7RUFDaEJzRCxjQUFjO0FBQ2YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZm9ybUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZFRvZG8oaW5kZXgsIG9ialRvZG8pIHtcclxuICBjb25zdCBkaXZUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkaXZUYXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvblVwZGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgZGl2VGFzay5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay1maW5pc2hlZFwiIC8+YDtcclxuICBkaXZUYXNrSW5mby5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrLW5hbWUtY2FyZFwiPiR7b2JqVG9kby5nZXRUaXRsZSgpfTwvaDI+XHJcbiAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uLWNhcmRcIiBpZD1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiPiR7b2JqVG9kby5nZXREZXNjcmlwdGlvbigpfTwvcD5cclxuICA8cD4ke29ialRvZG8uZ2V0RHVlRGF0ZSgpfTwvcD5gO1xyXG5cclxuICBpY29uVXBkYXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXBlbi10by1zcXVhcmVcIik7XHJcblxyXG4gIGRpdlRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgZGl2VGFzay5zZXRBdHRyaWJ1dGUoXCJpbmRleC10b2RvXCIsIGluZGV4KTtcclxuICBkaXZUYXNrLnN0eWxlLmNzc1RleHQgPSBgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAke29ialRvZG8uZ2V0UHJpb3JpdHkoKX1gO1xyXG5cclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGRpdlRhc2tJbmZvKTtcclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGljb25VcGRhdGVUYXNrKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIikuYXBwZW5kQ2hpbGQoZGl2VGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0TmFtZSkge1xyXG4gIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGljb25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHJcbiAgZGl2SW5mby5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWZpbGVcIj48L2k+XHJcbiAgPHAgaWQ9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3ROYW1lfTwvcD5gO1xyXG5cclxuICBzcGFuTnVtYmVyVG9kb3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJudW1iZXItb2YtdGFza3NcIik7XHJcblxyXG4gIGljb25EZWxldGUuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS10cmFzaC1jYW5cIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1wcm9qZWN0XCIpO1xyXG5cclxuICBkaXZQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwic2VjdGlvblwiKTtcclxuXHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChkaXZJbmZvKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHNwYW5OdW1iZXJUb2Rvcyk7XHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChpY29uRGVsZXRlKTtcclxuXHJcbiAgcmV0dXJuIGRpdlByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbnMoYXJyYXlQcm9qZWN0cywgc2VsZWN0KSB7XHJcbiAgc2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgb3B0aW9uSGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb25IaWRkZW4udmFsdWUgPSBcIlwiO1xyXG4gIG9wdGlvbkhpZGRlbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XHJcbiAgb3B0aW9uSGlkZGVuLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XHJcblxyXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25IaWRkZW4pO1xyXG5cclxuICBpZiAoYXJyYXlQcm9qZWN0cy5sZW5ndGgpIHtcclxuICAgIGFycmF5UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IFwiVG9kYXlcIikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaG93VG9kb3ModG9kb3NBcnJheSkge1xyXG4gIGNvbnN0IHNlYXJjaGVkVG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC10b2Rvcy1jb250YWluZXJcIik7XHJcbiAgY29uc3QgaW5ib3hUaXRsZSA9IFwiSW5ib3hcIjtcclxuICBjb25zdCB0b2RheVRpdGxlID0gXCJUb2RheVwiO1xyXG4gIHNlYXJjaGVkVG9kb3MuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyZWNlbnRseS1zZWFyY2hlZFwiPlJlY2VudGx5IHNlYXJjaGVkOjwvZGl2PmA7XHJcbiAgaWYgKHRvZG9zQXJyYXkubGVuZ3RoKSB7XHJcbiAgICBmb3IgKGNvbnN0IHRvZG8gb2YgdG9kb3NBcnJheSkge1xyXG4gICAgICBjb25zdCBkaXZUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgcHJvamVjdFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpbmZvVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICBjb25zdCBpY29uUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0b2RvLnByb2plY3ROYW1lO1xyXG5cclxuICAgICAgaWYgKHRvZG8ucHJvamVjdE5hbWUgPT09IGluYm94VGl0bGUpIHtcclxuICAgICAgICBpY29uUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1pbmJveFwiKTtcclxuICAgICAgfSBlbHNlIGlmICh0b2RvLnByb2plY3ROYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSB0b2RheVRpdGxlO1xyXG4gICAgICAgIGljb25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWNhbGVuZGFyLWNoZWNrXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGljb25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtZmlsZVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJvamVjdFRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tc2VhcmNoZWQtcHJvamVjdFwiKTtcclxuICAgICAgcHJvamVjdFRvZG8uYXBwZW5kQ2hpbGQoaWNvblByb2plY3QpO1xyXG4gICAgICBwcm9qZWN0VG9kby5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICBpbmZvVG9kby50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcblxyXG4gICAgICBkaXZUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlYXJjaGVkXCIpO1xyXG4gICAgICBkaXZUb2RvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1zZWFyY2hlZFwiKTtcclxuICAgICAgZGl2VG9kby5hcHBlbmRDaGlsZChpbmZvVG9kbyk7XHJcbiAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQocHJvamVjdFRvZG8pO1xyXG5cclxuICAgICAgc2VhcmNoZWRUb2Rvcy5hcHBlbmRDaGlsZChkaXZUb2RvKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHNlYXJjaGVkVG9kb3M7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgY3JlYXRlQ2FyZFRvZG8sXHJcbiAgY3JlYXRlQ2FyZFByb2plY3RzLFxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMsXHJcbiAgY3JlYXRlU2hvd1RvZG9zLFxyXG59O1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9ybSgpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtVXBkYXRlSW5wdXRzKCkge1xyXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dENob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LXVwZGF0ZVwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0VGl0bGUsXHJcbiAgICBpbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgaW5wdXREdWVEYXRlLFxyXG4gICAgaW5wdXRDaG9vc2VQcm9qZWN0LFxyXG4gICAgaW5wdXRQcmlvcml0eSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5mb0Zvcm1VcGRhdGUoZGF0YU9iamVjdCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlID0gZGF0YU9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZSA9IGRhdGFPYmplY3RcclxuICAgIC5nZXREdWVEYXRlKClcclxuICAgIC5yZXBsYWNlKC8oXFwvKS9nLCBcIi1cIik7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3QudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByb2plY3ROYW1lKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5LnZhbHVlID0gZGF0YU9iamVjdC5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3Q7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5O1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tTmF2YmFyKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLW5hdmJhclwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpXHJcbiAgICAudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1uYXZiYXJcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0VmFsdWVzRnJvbUZvcm0sXHJcbiAgZ2V0VmFsdWVzRm9ybVVwZGF0ZSxcclxuICBnZXRWYWx1ZXNGcm9tTmF2YmFyLFxyXG4gIHNob3dJbmZvRm9ybVVwZGF0ZSxcclxufTtcclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgbG9hZERhdGFTdG9yYWdlKCkge1xyXG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XHJcbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJJbmJveFwiKSk7XHJcbiAgICAgIHByb2plY3RzLmFkZFByb2plY3QobmV3IFByb2plY3QoXCJUb2RheVwiKSk7XHJcbiAgICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzYXZlUHJvamVjdHNTdG9yYWdlKGRhdGFQcm9qZWN0cykge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShkYXRhUHJvamVjdHMpKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzU3RvcmFnZSgpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAgbmV3IFByb2plY3RzKCksXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSlcclxuICAgICk7XHJcblxyXG4gICAgcHJvamVjdHMuc2V0UHJvamVjdHMoXHJcbiAgICAgIHByb2plY3RzXHJcbiAgICAgICAgLmdldFByb2plY3RzKClcclxuICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgcHJvamVjdC5zZXRUb2RvcyhcclxuICAgICAgICBwcm9qZWN0LmdldFRvZG9zKCkubWFwKCh0b2RvKSA9PiBPYmplY3QuYXNzaWduKG5ldyBUb2RvKCksIHRvZG8pKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsUHJvamVjdHMoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICByZXR1cm4gcHJvamVjdHMuZ2V0UHJvamVjdHMoKTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3RTdG9yYWdlKHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmFkZFByb2plY3QocHJvamVjdCk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdFN0b3JhZ2UocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZUFsbFRvZG9zKHByb2plY3ROYW1lKTtcclxuICAgIHByb2plY3RzLnJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9TdG9yYWdlKHRvZG9PYmopIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvVG9kYXlTdG9yYWdlKGluZGV4LCB0b2RvT2JqLCBwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMudXBkYXRlVG9kb1RvZGF5KGluZGV4LCB0b2RvT2JqLCBwcm9qZWN0TmFtZSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaW5kZXgsIHRvZG9PYmopIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Ub2RheVN0b3JhZ2UoaW5kZXgsIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5kZWxldGVUb2RvVG9kYXkoaW5kZXgsIHByb2plY3ROYW1lKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlVG9kb0Zyb21Ub2RheShpbmRleCk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdFN0b3JhZ2UocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHJldHVybiBwcm9qZWN0cy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSA9IFwiXCIpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIHNldE5hbWUobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICB9XHJcblxyXG4gIGdldFRvZG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XHJcbiAgfVxyXG5cclxuICBzZXRUb2Rvcyh0b2Rvc0FycmF5KSB7XHJcbiAgICB0aGlzLnRvZG9zID0gdG9kb3NBcnJheTtcclxuICB9XHJcblxyXG4gIGdldFRvZG8odGl0bGUpIHtcclxuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSA9PT0gdGl0bGUpO1xyXG4gICAgcmV0dXJuIHRvZG8gfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleFRvZG8odG9kbykge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRvZG8uZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIGlmICghdGhpcy5nZXRUb2RvKHRvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgaWYgKHRoaXMuZ2V0TmFtZSgpID09PSB0b2RvLmdldFByb2plY3ROYW1lKCkpIHtcclxuICAgICAgICB0aGlzLnRvZG9zID0gWy4uLnRoaXMudG9kb3MsIHRvZG9dO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvKHRvZG9UaXRsZSkge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0b2RvVGl0bGUpO1xyXG4gICAgdGhpcy50b2RvcyA9IFtcclxuICAgICAgLi4udGhpcy50b2Rvcy5zbGljZSgwLCBpbmRleCksXHJcbiAgICAgIC4uLnRoaXMudG9kb3Muc2xpY2UoaW5kZXggKyAxKSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvKGluZGV4LCB0b2RvKSB7XHJcbiAgICBpZiAodG9kby5nZXRQcm9qZWN0TmFtZSgpID09PSB0aGlzLm5hbWUgJiYgdGhpcy5nZXRUb2RvKHRvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgdGhpcy50b2Rvc1tpbmRleF0gPSB0b2RvO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmdldFRpdGxlKCkpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cclxuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIHNldFByb2plY3RzKHByb2plY3RzQXJyYXkpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChuYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgcmV0dXJuIHByb2plY3QgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGlmICghdGhpcy5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKSkge1xyXG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0SW5kZXgocHJvamVjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJUb2RheVwiO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkZWQgPSBwcm9qZWN0ID8gcHJvamVjdC5hZGRUb2RvKHRvZG8pIDogZmFsc2U7XHJcblxyXG4gICAgaWYgKHByb2plY3RBZGRlZCkge1xyXG4gICAgICB0b2RvLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgcHJvamVjdFNlYXJjaDogdG9kby5nZXRQcm9qZWN0TmFtZSgpLFxyXG4gICAgICAgIHRvZG9UaXRsZTogdG9kby5nZXRUaXRsZSgpLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kby5zZXRQcm9qZWN0TmFtZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIHRvZGF5LnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSkge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiVG9kYXlcIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgbGV0IGluZGV4VG9kbyA9IC0xO1xyXG5cclxuICAgIHRvZGF5LnRvZG9zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXRlbS5zZWFyY2hUb2RvLnByb2plY3RTZWFyY2ggPT09IHByb2plY3QuZ2V0TmFtZSgpICYmXHJcbiAgICAgICAgICBpdGVtLnNlYXJjaFRvZG8udG9kb1RpdGxlID09PSB0b2RvVGl0bGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGluZGV4VG9kbyA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleFRvZG87XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJUb2RheVwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHByb2plY3QuZ2V0VG9kb3MoKVtpbmRleF0uZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGxvd2VzdEluZGV4ID0gMDtcclxuICAgIGxldCB1cGRhdGVkVG9kbyA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb09iai5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgIHByb2plY3RTZWFyY2g6IHByb2plY3QuZ2V0TmFtZSgpLFxyXG4gICAgICAgIHRvZG9UaXRsZTogdG9kb09iai5nZXRUaXRsZSgpLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodG9kb0luZGV4ID49IGxvd2VzdEluZGV4KSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3NbdG9kb0luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4LCB0b2RvT2JqKTtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gbG93ZXN0SW5kZXgpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5KGluZGV4LCB0b2RvT2JqKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJUb2RheVwiO1xyXG4gICAgY29uc3QgdG9kb1Byb3BlcnR5ID0gXCJzZWFyY2hUb2RvXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGNvbnN0IHRvZG9WYWx1ZXMgPSB0b2RheS5nZXRUb2RvcygpW2luZGV4XTtcclxuXHJcbiAgICBpZiAodG9kb1ZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0b2RvUHJvcGVydHkpKSB7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHRvZG9WYWx1ZXMuc2VhcmNoVG9kbztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eSh0b2RvUHJvcGVydHkpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIGNvbnN0IGluZGV4U2VhcmNoID0gcHJvamVjdC5nZXRJbmRleFRvZG8ocHJvamVjdC5nZXRUb2RvKHRvZG9UaXRsZSkpO1xyXG4gICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleFNlYXJjaCwgdG9kb09iaik7XHJcblxyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgICBjb25zdCB0b2RvQWRkZWQgPSBwcm9qZWN0ID8gcHJvamVjdC5hZGRUb2RvKHRvZG9PYmopIDogZmFsc2U7XHJcbiAgICAgIGlmICh0b2RvQWRkZWQpIHtcclxuICAgICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvT2JqLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgICB0b2RvVGl0bGU6IHRvZG9PYmouZ2V0VGl0bGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb09iai5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICB0b2RheS50b2Rvc1tpbmRleF0gPSB0b2RvT2JqO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVmFsdWVzLmdldFRpdGxlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb0Zyb21Ub2RheShpbmRleCkge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiVG9kYXlcIjtcclxuICAgIGNvbnN0IHRvZG9Qcm9wZXJ0eSA9IFwic2VhcmNoVG9kb1wiO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCB0b2RvT2JqID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcblxyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkodG9kb1Byb3BlcnR5KSkge1xyXG4gICAgICBjb25zdCB7IHByb2plY3RTZWFyY2gsIHRvZG9UaXRsZSB9ID0gdG9kb09iai5zZWFyY2hUb2RvO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RTZWFyY2gpO1xyXG4gICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVBbGxUb2Rvcyhwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICBwcm9qZWN0LmdldFRvZG9zKCkuZm9yRWFjaCgodG9kbywgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gaTtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlVG9kb1RvZGF5KGluZGV4LCBwcm9qZWN0TmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIlRvZGF5XCI7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gcHJvamVjdC5nZXRUb2RvcygpW2luZGV4XS5nZXRUaXRsZSgpO1xyXG4gICAgY29uc3QgaW5kZXhUb2RvID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcblxyXG4gICAgaWYgKGluZGV4VG9kbyA+PSAwKSB7XHJcbiAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykge1xyXG4gICAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUgPSBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxyXG4gICAgZHVlRGF0ZSA9IFwiXCIsXHJcbiAgICBwcm9qZWN0TmFtZSA9IFwiXCIsXHJcbiAgICBwcmlvcml0eSA9IDFcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1pbi13aWR0aDogMjIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kbzpmb2N1cyB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzM1cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG9zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwcHg7XFxyXFxuICBsZWZ0OiAxMTVweDtcXHJcXG4gIHdpZHRoOiA0MzVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2Rvcy1jb250YWluZXIgLnRvZG8tc2VhcmNoZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50bHktc2VhcmNoZWQge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ub3QtdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZC1wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4td2lkdGg6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZC1wcm9qZWN0PnAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixT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OEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEyODBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBtaW4td2lkdGg6IDIyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG86Zm9jdXMge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgd2lkdGg6IDMzNXB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tYWN0aXZlLFxcclxcbi5zZWN0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RheSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5kaXYge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmkge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgLmZhLXBsdXM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG93LXByb2plY3RzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5NYWluIGNvbnRlbnQgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICBjb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYWNjZW50LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLWNhcmQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIGkge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10YXNrLWNhcmQsXFxyXFxuLmZvcm0tdXBkYXRlLXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG4gIHBhZGRpbmc6IDFweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtcHJvamVjdCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC11cGRhdGUge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tYWRkLFxcclxcbmJ1dHRvbi5idG4tc2F2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbkFkZCB0YXNrIGZyb20gbmF2YmFyIFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCBwcm9qZWN0IGZvcm1cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgZm9ybSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2Rvcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MHB4O1xcclxcbiAgbGVmdDogMTE1cHg7XFxyXFxuICB3aWR0aDogNDM1cHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kb3MtY29udGFpbmVyIC50b2RvLXNlYXJjaGVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudGx5LXNlYXJjaGVkIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LXZpc2libGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VhcmNoZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VhcmNoZWQtcHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VhcmNoZWQtcHJvamVjdD5wIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cclxuLyogZXNsaW50LWRpc2FibGUgZnVuY3Rpb24tcGFyZW4tbmV3bGluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgaW1wbGljaXQtYXJyb3ctbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5pbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDYXJkVG9kbyxcclxuICBjcmVhdGVDYXJkUHJvamVjdHMsXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyxcclxuICBjcmVhdGVTaG93VG9kb3MsXHJcbn0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRWYWx1ZXNGcm9tRm9ybSxcclxuICBnZXRWYWx1ZXNGb3JtVXBkYXRlLFxyXG4gIGdldFZhbHVlc0Zyb21OYXZiYXIsXHJcbiAgc2hvd0luZm9Gb3JtVXBkYXRlLFxyXG59IGZyb20gXCIuL2Zvcm1Db250ZW50XCI7XHJcblxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBTdG9yYWdlIGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuY29uc3QgaW5ib3hTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcclxuY29uc3QgdG9kYXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcclxuXHJcbmNvbnN0IGZvcm1VcGRhdGVUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXVwZGF0ZS10YXNrXCIpO1xyXG5jb25zdCBmb3JtQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgZm9ybUFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFzay1jYXJkXCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1hZGQtdG9kby1uYXZiYXJcIik7XHJcblxyXG5jb25zdCBjb250YWluZXJUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xyXG5jb25zdCBjb250YWluZXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXByb2plY3RzXCIpO1xyXG5jb25zdCBjb250YWluZXJBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFRvZG9OYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1maXhlZFwiKTtcclxuXHJcbmNvbnN0IHNlY3Rpb25Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uXCIpO1xyXG5cclxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbmNvbnN0IGJ0bkZvcm1DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWxcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtcHJvamVjdFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsVXBkYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC11cGRhdGVcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbEZvcm1OYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtbmF2YmFyXCIpO1xyXG5jb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcclxuY29uc3QgYnRuQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tbmF2YmFyXCIpO1xyXG5jb25zdCBidG5Ib21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4taG9tZVwiKTtcclxuXHJcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0XCIpO1xyXG5jb25zdCBzZWxlY3RVcGRhdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC11cGRhdGVcIik7XHJcbmNvbnN0IHNlbGVjdFByb2plY3ROYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LW5hdmJhclwiKTtcclxuXHJcbmNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtdG9kb1wiKTtcclxuY29uc3Qgc2VhcmNoUmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtdG9kb3MtY29udGFpbmVyXCIpO1xyXG5cclxuY29uc3Qgc2VjdGlvblRpdGxlID1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuY29uc3Qgc3RvcmFnZSA9IG5ldyBTdG9yYWdlKCk7XHJcblxyXG5sZXQgaW5kZXhDYXJkVG9kbyA9IDA7XHJcbmxldCBhcnJheVRvZG9zRE9NID0gW107XHJcblxyXG5pbml0QXBwKCk7XHJcblxyXG4vKipcclxuICogU0VBUkNIIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBzZWFyY2hUb2RvKGUpIHtcclxuICBjb25zdCBzZWFyY2hWYWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHRvZGF5U2VjdGlvbiA9IFwiVG9kYXlcIjtcclxuXHJcbiAgbGV0IHNlYXJjaFJlc3VsdEFycmF5ID0gW107XHJcbiAgbGV0IHRvZG9zQXJyYXkgPSBbXTtcclxuICBsZXQgdG9kb3NUb2RheSA9IFtdO1xyXG4gIGxldCBzZWFyY2hSZXN1bHQ7XHJcblxyXG4gIGlmICghc2VhcmNoVmFsdWUpIHtcclxuICAgIGNyZWF0ZVNob3dUb2RvcyhbXSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC5uYW1lID09PSB0b2RheVNlY3Rpb24pIHtcclxuICAgICAgdG9kb3NUb2RheSA9IFsuLi5wcm9qZWN0LnRvZG9zXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG9zQXJyYXkgPSBbLi4udG9kb3NBcnJheSwgLi4ucHJvamVjdC50b2Rvc107XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvdW5kVG9kb3MgPSB0b2Rvc0FycmF5LmZpbHRlcigodG9kbykgPT5cclxuICAgIHRvZG8udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSlcclxuICApO1xyXG5cclxuICBjb25zdCBmb3VuZFRvZG9zVG9kYXkgPSB0b2Rvc1RvZGF5LmZpbHRlcigodG9kbykgPT5cclxuICAgIHRvZG8udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hWYWx1ZSlcclxuICApO1xyXG5cclxuICBpZiAoZm91bmRUb2Rvcy5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZm91bmRUb2Rvc1wiKTtcclxuICAgIHNlYXJjaFJlc3VsdCA9IGNyZWF0ZVNob3dUb2Rvcyhmb3VuZFRvZG9zKTtcclxuICAgIHNlYXJjaFJlc3VsdEFycmF5ID0gbmV3IEFycmF5KC4uLnNlYXJjaFJlc3VsdC5jaGlsZHJlbik7XHJcbiAgfSBlbHNlIGlmIChmb3VuZFRvZG9zVG9kYXkubGVuZ3RoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZvdW5kVG9kb3NUb2RheVwiKTtcclxuICAgIHNlYXJjaFJlc3VsdCA9IGNyZWF0ZVNob3dUb2Rvcyhmb3VuZFRvZG9zVG9kYXkpO1xyXG4gICAgc2VhcmNoUmVzdWx0QXJyYXkgPSBuZXcgQXJyYXkoLi4uc2VhcmNoUmVzdWx0LmNoaWxkcmVuKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2VhcmNoUmVzdWx0ID0gY3JlYXRlU2hvd1RvZG9zKFtdKTtcclxuICAgIHNlYXJjaFJlc3VsdEFycmF5ID0gW107XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICBzaG93U2VhcmNoZWRTZWN0aW9uKHNlYXJjaFJlc3VsdEFycmF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NlYXJjaGVkU2VjdGlvbihhcnJheVJlc3VsdCkge1xyXG4gIGNvbnN0IGFycmF5U2VjdGlvbnMgPSBhcnJheVJlc3VsdC5zbGljZSgxKTtcclxuICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyYXlTZWN0aW9ucykge1xyXG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBlbGVtLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFNlY3Rpb247XHJcbiAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBUT0RPIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvRnJvbUZvcm0odG9kb09iaikge1xyXG4gIGlmICh0b2RvT2JqLmdldFRpdGxlKCkudHJpbSgpKSB7XHJcbiAgICBpZiAoIXRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKS50cmltKCkpIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICAgICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiVG9kYXlcIik7XHJcblxyXG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IHRvZGF5LmdldE5hbWUoKSkge1xyXG4gICAgICAgIHRvZG9PYmouc2V0UHJvamVjdE5hbWUocHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBzdG9yYWdlLmFkZFRvZG9TdG9yYWdlKHRvZG9PYmopO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0Zyb21Gb3JtKHZhbHVlc1RvZG8pIHtcclxuICBpZiAodmFsdWVzVG9kby5nZXRUaXRsZSgpLnRyaW0oKSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICAgIGNvbnN0IHRvZGF5ID0gc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShcIlRvZGF5XCIpO1xyXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSB0b2RheS5nZXROYW1lKCkpIHtcclxuICAgICAgc3RvcmFnZS51cGRhdGVUb2RvVG9kYXlTdG9yYWdlKFxyXG4gICAgICAgIGluZGV4Q2FyZFRvZG8sXHJcbiAgICAgICAgdmFsdWVzVG9kbyxcclxuICAgICAgICBwcm9qZWN0LmdldE5hbWUoKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZS51cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleENhcmRUb2RvLCB2YWx1ZXNUb2RvKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFUb2RvQ2FyZChpbmRleENhcmQpIHtcclxuICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBwcm9qZWN0LnRvZG9zW2luZGV4Q2FyZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkRE9NKCkge1xyXG4gIGFycmF5VG9kb3NET00gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgICAgIGNvbnRhaW5lclRvZG9MaXN0LnJlbW92ZUNoaWxkKGFycmF5VG9kb3NET01baW5kZXhdKTtcclxuICAgICAgaW5kZXhDYXJkVG9kbyA9IGluZGV4O1xyXG4gICAgICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICAgICAgc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VG9kb3NET00sIGluZGV4KTtcclxuICAgICAgc2hvd0luZm9Gb3JtVXBkYXRlKGdldERhdGFUb2RvQ2FyZChpbmRleCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9ET00oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiVG9kYXlcIik7XHJcbiAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSB0b2RheS5nZXROYW1lKCkpIHtcclxuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kb1RvZGF5U3RvcmFnZShpLCBwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25PYmplY3QocHJvamVjdE5hbWUpIHtcclxuICByZXR1cm4gc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb2RvTGlzdCgpIHtcclxuICBjbGVhblRvZG9zQ29udGFpbmVyKCk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIGlmIChvYmplY3QpIHtcclxuICAgIG9iamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiBjcmVhdGVDYXJkVG9kbyhpLCB0b2RvKSk7XHJcbiAgICB1cGRhdGVUb2RvQ2FyZERPTSgpO1xyXG4gICAgZGVsZXRlVG9kb0RPTSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKVtpXS50b2Rvcy5sZW5ndGg7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGlmICh0b2Rvc1F1YW50aXR5ID4gMCkge1xyXG4gICAgICBpdGVtLnRleHRDb250ZW50ID0gdG9kb3NRdWFudGl0eTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkLCB0b2RvRGF0YSkge1xyXG4gIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpbmRleENhcmRdO1xyXG4gIGlmIChkaXZDb250YWluZXIpIHtcclxuICAgIGRpdkNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYGJvcmRlcjogMnB4IHNvbGlkICR7dG9kb0RhdGEucHJpb3JpdHl9YDtcclxuXHJcbiAgICBjb25zdCB0aXRsZVRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICB0aXRsZVRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS50aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uVGFzay50ZXh0Q29udGVudCA9IHRvZG9EYXRhLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VGFzaywgaW5kZXhDYXJkKSB7XHJcbiAgaWYgKGFycmF5VGFzay5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2UgaWYgKGFycmF5VGFzay5sZW5ndGggLSAxID09PSBpbmRleENhcmQpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGFpbmVyVG9kb0xpc3QuaW5zZXJ0QmVmb3JlKGZvcm1VcGRhdGVUb2RvLCBhcnJheVRhc2tbaW5kZXhDYXJkICsgMV0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Zvcm1VcGRhdGVUYXNrKCk7XHJcblxyXG4gIGJ0bkNhbmNlbFVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gIGNsb3NlRm9ybUFkZFRhc2soKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1NlY3Rpb25Qcm9qZWN0KHByb2plY3QpO1xyXG4gIGNsZWFuVG9kb3NDb250YWluZXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRGb3JtT3BlcmF0aW9ucygpIHtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIHNob3dGb3JtQWRkVGFzaygpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBQUk9KRUNUIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKHByb2plY3ROYW1lICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgc3RvcmFnZS5hZGRQcm9qZWN0U3RvcmFnZShuZXdQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBzdG9yYWdlLnJlbW92ZVByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1EZWxldGVQcm9qZWN0KGUpIHtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RPcGVyYXRpb25zKCkge1xyXG4gIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGUtcHJvamVjdFwiKTtcclxuICBwcm9qZWN0c0RPTS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZWxlY3RQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSk7XHJcbiAgfSk7XHJcbiAgZGVsZXRlUHJvamVjdHMuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHBlcmZvcm1EZWxldGVQcm9qZWN0KGUpKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzTGlzdCgpIHtcclxuICBjbGVhbkNvbnRhaW5lclByb2plY3RzKCk7XHJcbiAgc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJJbmJveFwiICYmIHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRvZGF5XCIpIHtcclxuICAgICAgY29udGFpbmVyUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3QuZ2V0TmFtZSgpKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcHJvamVjdE9wZXJhdGlvbnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzQmFyKCkge1xyXG4gIGNvbnN0IHNob3dQcm9qZWN0c0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1wcm9qZWN0c1wiKTtcclxuXHJcbiAgc2hvd1Byb2plY3RzQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImZhLWNoZXZyb24tcmlnaHRcIik7XHJcbiAgICBzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImZhLWNoZXZyb24tZG93blwiKTtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93LWNvbnRlbnRcIik7XHJcblxyXG4gICAgaWYgKHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QuY29udGFpbnMoXCJmYS1jaGV2cm9uLWRvd25cIikpIHtcclxuICAgICAgc2hvd1Byb2plY3RzTGlzdCgpO1xyXG4gICAgICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTZWN0aW9uUHJvamVjdChzZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2VjdGlvbkFycmF5ID0gQXJyYXkuZnJvbShzZWN0aW9uVG9kbyk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGNvbnRhaW5lclByb2plY3RzLmNoaWxkcmVuKTtcclxuICBzZWN0aW9uQXJyYXkuY29uY2F0KHByb2plY3RzKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRQcm9qZWN0KCkge1xyXG4gIGNvbnRhaW5lckFkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcInNob3ctZm9ybVwiKTtcclxuICBidG5DYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xyXG4gICAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRk9STSBUQVNLU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1BZGRUb2RvKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc3RvcmFnZS5sb2FkRGF0YVN0b3JhZ2UoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbUZvcm0oKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1VcGRhdGVUb2RvKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXBkYXRlVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zvcm1VcGRhdGUoKSk7XHJcbiAgdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkVG9kbywgZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtQWRkVG9kb05hdihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGFkZFRvZG9Gcm9tRm9ybShnZXRWYWx1ZXNGcm9tTmF2YmFyKCkpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICBmb3JtQWRkVG9kb05hdmJhci5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtQWRkUHJvamVjdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0UHJvamVjdE5hbWUudmFsdWUudHJpbSgpO1xyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgcHJvamVjdE9wZXJhdGlvbnMoKTtcclxuXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdE5hdmJhcik7XHJcblxyXG4gIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogRElTUExBWSBGT1JNU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdE5hdmJhcik7XHJcbiAgY29udGFpbmVyQWRkVG9kb05hdmJhci5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVGFzaygpIHtcclxuICBmb3JtQWRkVG9kby5yZXNldCgpO1xyXG4gIGZvcm1BZGRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkVGFzaygpIHtcclxuICBmb3JtQWRkVG9kby5jbGFzc0xpc3QuYWRkKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1VcGRhdGVUYXNrKCkge1xyXG4gIGZvcm1VcGRhdGVUb2RvLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtVXBkYXRlVGFzaygpIHtcclxuICBmb3JtVXBkYXRlVG9kby5jbGFzc0xpc3QuYWRkKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhblRvZG9zQ29udGFpbmVyKCkge1xyXG4gIGNvbnRhaW5lclRvZG9MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Db250YWluZXJQcm9qZWN0cygpIHtcclxuICBjb250YWluZXJQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFVkVOVFNcclxuICovXHJcblxyXG5mb3JtQWRkVG9kb05hdmJhci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtQWRkVG9kb05hdihlKSk7XHJcbmZvcm1VcGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1VcGRhdGVUb2RvKGUpKTtcclxuZm9ybUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gcGVyZm9ybUFkZFByb2plY3QoZSkpO1xyXG5mb3JtQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtQWRkVG9kbyhlKSk7XHJcblxyXG5pbmJveFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgc2VsZWN0UHJvamVjdFNlY3Rpb24oaW5ib3hTZWN0aW9uKVxyXG4pO1xyXG50b2RheVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XHJcbiAgc2VsZWN0UHJvamVjdFNlY3Rpb24odG9kYXlTZWN0aW9uKVxyXG4pO1xyXG5cclxuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRGb3JtT3BlcmF0aW9ucyk7XHJcbmJ0bkZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRhc2spO1xyXG5idG5BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5DYW5jZWxGb3JtTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm1BZGRUb2RvTmF2YmFyKTtcclxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1BZGRQcm9qZWN0KTtcclxuXHJcbmJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XHJcbiAgc2hvd1NlY3Rpb25Qcm9qZWN0KHRvZGF5U2VjdGlvbik7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbn0pO1xyXG5cclxuaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiBzZWFyY2hUb2RvKGUpKTtcclxuaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcclxuICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC12aXNpYmxlXCIpO1xyXG59KTtcclxuaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsICgpID0+IHtcclxuICBpbnB1dFNlYXJjaC52YWx1ZSA9IFwiXCI7XHJcbn0pO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldCAhPT0gaW5wdXRTZWFyY2gpIHtcclxuICAgIHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QuYWRkKFwibm90LXZpc2libGVcIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBESVNQTEFZIENVUlJFTlQgREFURVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xyXG4gIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlT2JqZWN0LmdldEZ1bGxZZWFyKCk7XHJcbiAgbGV0IG1vbnRoID0gZGF0ZU9iamVjdC5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IGRhdGVPYmplY3QuZ2V0RGF0ZSgpO1xyXG5cclxuICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgbW9udGggPSBgMCR7bW9udGh9YDtcclxuICB9XHJcbiAgaWYgKGRhdGUgPCAxMCkge1xyXG4gICAgZGF0ZSA9IGAwJHtkYXRlfWA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEN1cnJlbnREYXRlKCkge1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XHJcbiAgY29uc3QgZHVlRGF0ZVVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZS11cGRhdGVcIik7XHJcbiAgY29uc3QgZHVlRGF0ZU5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZS1uYXZiYXJcIik7XHJcblxyXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIGdldEN1cnJlbnREYXRlKCkpO1xyXG4gIGR1ZURhdGVVcGRhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIGdldEN1cnJlbnREYXRlKCkpO1xyXG4gIGR1ZURhdGVOYXZiYXIuc2V0QXR0cmlidXRlKFwibWluXCIsIGdldEN1cnJlbnREYXRlKCkpO1xyXG59XHJcblxyXG4vKipcclxuICogU1RBUlQgQVBQXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gaW5pdEFwcCgpIHtcclxuICBzdG9yYWdlLmxvYWREYXRhU3RvcmFnZSgpOyAvLyBnZXQgZGF0YSBmcm9tIGxvY2FsU3RvcmFnZSBBUElcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdCk7XHJcbiAgZGlzcGxheVByb2plY3RzQmFyKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIHNldEN1cnJlbnREYXRlKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhcmRUb2RvIiwiaW5kZXgiLCJvYmpUb2RvIiwiZGl2VGFzayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpdlRhc2tJbmZvIiwiaWNvblVwZGF0ZVRhc2siLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsImdldERlc2NyaXB0aW9uIiwiZ2V0RHVlRGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiY3NzVGV4dCIsImdldFByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ2FyZFByb2plY3RzIiwicHJvamVjdE5hbWUiLCJkaXZQcm9qZWN0IiwiZGl2SW5mbyIsImljb25EZWxldGUiLCJzcGFuTnVtYmVyVG9kb3MiLCJjcmVhdGVTZWxlY3RPcHRpb25zIiwiYXJyYXlQcm9qZWN0cyIsInNlbGVjdCIsInRleHRDb250ZW50Iiwib3B0aW9uSGlkZGVuIiwidmFsdWUiLCJsZW5ndGgiLCJmb3JFYWNoIiwicHJvamVjdCIsImdldE5hbWUiLCJvcHRpb24iLCJuYW1lIiwiY3JlYXRlU2hvd1RvZG9zIiwidG9kb3NBcnJheSIsInNlYXJjaGVkVG9kb3MiLCJnZXRFbGVtZW50QnlJZCIsImluYm94VGl0bGUiLCJ0b2RheVRpdGxlIiwidG9kbyIsImRpdlRvZG8iLCJwcm9qZWN0VG9kbyIsImluZm9Ub2RvIiwiaWNvblByb2plY3QiLCJ0aXRsZSIsIlRvZG8iLCJnZXRWYWx1ZXNGcm9tRm9ybSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInJlcGxhY2UiLCJjaG9vc2VQcm9qZWN0IiwidGFza1ByaW9yaXR5Iiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJwcmlvcml0eSIsImdldEZvcm1VcGRhdGVJbnB1dHMiLCJpbnB1dFRpdGxlIiwiaW5wdXREZXNjcmlwdGlvbiIsImlucHV0RHVlRGF0ZSIsImlucHV0Q2hvb3NlUHJvamVjdCIsImlucHV0UHJpb3JpdHkiLCJzaG93SW5mb0Zvcm1VcGRhdGUiLCJkYXRhT2JqZWN0IiwiaW5wdXRzRm9ybVVwZGF0ZSIsImdldFByb2plY3ROYW1lIiwiZ2V0VmFsdWVzRm9ybVVwZGF0ZSIsImdldFZhbHVlc0Zyb21OYXZiYXIiLCJQcm9qZWN0cyIsIlByb2plY3QiLCJTdG9yYWdlIiwibG9hZERhdGFTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwicHJvamVjdHMiLCJhZGRQcm9qZWN0Iiwic2F2ZVByb2plY3RzU3RvcmFnZSIsImRhdGFQcm9qZWN0cyIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvamVjdHNTdG9yYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0UHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsIm1hcCIsInNldFRvZG9zIiwiZ2V0VG9kb3MiLCJnZXRBbGxQcm9qZWN0cyIsImFkZFByb2plY3RTdG9yYWdlIiwicmVtb3ZlUHJvamVjdFN0b3JhZ2UiLCJkZWxldGVBbGxUb2RvcyIsInJlbW92ZVByb2plY3QiLCJhZGRUb2RvU3RvcmFnZSIsInRvZG9PYmoiLCJhZGRUb2RvRnJvbVByb2plY3QiLCJ1cGRhdGVUb2RvVG9kYXlTdG9yYWdlIiwidXBkYXRlVG9kb1RvZGF5IiwidXBkYXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UiLCJ1cGRhdGVUb2RvRnJvbVRvZGF5IiwiZGVsZXRlVG9kb1RvZGF5U3RvcmFnZSIsImRlbGV0ZVRvZG9Ub2RheSIsImRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlIiwiZGVsZXRlVG9kb0Zyb21Ub2RheSIsImdldFByb2plY3RTdG9yYWdlIiwiZ2V0UHJvamVjdCIsImNvbnN0cnVjdG9yIiwidG9kb3MiLCJzZXROYW1lIiwiZ2V0VG9kbyIsImZpbmQiLCJpdGVtIiwiZ2V0SW5kZXhUb2RvIiwiZmluZEluZGV4IiwiYWRkVG9kbyIsInJlbW92ZVRvZG8iLCJ0b2RvVGl0bGUiLCJzbGljZSIsInVwZGF0ZVRvZG8iLCJpc1RvZGF5IiwicHJvamVjdHNBcnJheSIsInB1c2giLCJnZXRQcm9qZWN0SW5kZXgiLCJmaWx0ZXIiLCJ0b2RheSIsInByb2plY3RBZGRlZCIsInNlYXJjaFRvZG8iLCJwcm9qZWN0U2VhcmNoIiwic2V0UHJvamVjdE5hbWUiLCJEYXRlIiwiZmluZFRvZG9Ub2RheSIsImluZGV4VG9kbyIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImxvd2VzdEluZGV4IiwidXBkYXRlZFRvZG8iLCJ0b2RvSW5kZXgiLCJ0b2RvUHJvcGVydHkiLCJ0b2RvVmFsdWVzIiwiaW5kZXhTZWFyY2giLCJ0b2RvQWRkZWQiLCJhcmd1bWVudHMiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0RHVlRGF0ZSIsInNldFByaW9yaXR5IiwiaW5ib3hTZWN0aW9uIiwidG9kYXlTZWN0aW9uIiwiZm9ybVVwZGF0ZVRvZG8iLCJmb3JtQWRkUHJvamVjdCIsImZvcm1BZGRUb2RvIiwiZm9ybUFkZFRvZG9OYXZiYXIiLCJjb250YWluZXJUb2RvTGlzdCIsImNvbnRhaW5lclByb2plY3RzIiwiY29udGFpbmVyQWRkUHJvamVjdCIsImNvbnRhaW5lckFkZFRvZG9OYXZiYXIiLCJzZWN0aW9uVG9kbyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5BZGRUb2RvIiwiYnRuRm9ybUNhbmNlbCIsImJ0bkNhbmNlbFByb2plY3QiLCJidG5DYW5jZWxVcGRhdGVGb3JtIiwiYnRuQ2FuY2VsRm9ybU5hdmJhciIsImJ0bkFkZFByb2plY3QiLCJidG5BZGRUb2RvTmF2YmFyIiwiYnRuSG9tZSIsInNlbGVjdFByb2plY3QiLCJzZWxlY3RVcGRhdGVQcm9qZWN0Iiwic2VsZWN0UHJvamVjdE5hdmJhciIsImlucHV0U2VhcmNoIiwic2VhcmNoUmVzdWx0Iiwic2VjdGlvblRpdGxlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJzdG9yYWdlIiwiaW5kZXhDYXJkVG9kbyIsImFycmF5VG9kb3NET00iLCJpbml0QXBwIiwiZSIsInNlYXJjaFZhbHVlIiwidGFyZ2V0IiwidG9Mb3dlckNhc2UiLCJ0cmltIiwic2VhcmNoUmVzdWx0QXJyYXkiLCJ0b2Rvc1RvZGF5IiwiZm91bmRUb2RvcyIsImluY2x1ZGVzIiwiZm91bmRUb2Rvc1RvZGF5IiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiY2hpbGRyZW4iLCJzaG93U2VhcmNoZWRTZWN0aW9uIiwiYXJyYXlSZXN1bHQiLCJhcnJheVNlY3Rpb25zIiwiZWxlbSIsImN1cnJlbnRTZWN0aW9uIiwiY2hpbGROb2RlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93VG9kb0xpc3QiLCJhZGRUb2RvRnJvbUZvcm0iLCJnZXRTZWN0aW9uT2JqZWN0IiwidXBkYXRlVG9kb0Zyb21Gb3JtIiwidmFsdWVzVG9kbyIsImdldERhdGFUb2RvQ2FyZCIsImluZGV4Q2FyZCIsInVwZGF0ZVRvZG9DYXJkRE9NIiwiZnJvbSIsInRhc2siLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZUZvcm1BZGRUYXNrIiwic2hvd0Zvcm1VcGRhdGVDYXJkIiwiZGVsZXRlVG9kb0RPTSIsImNoZWNrZWQiLCJzaG93Q3VycmVudFRvZG9zIiwiY2xlYW5Ub2Rvc0NvbnRhaW5lciIsIm9iamVjdCIsInRvZG9zUXVhbnRpdHkiLCJ1cGRhdGVUb2RvQ2FyZCIsInRvZG9EYXRhIiwiZGl2Q29udGFpbmVyIiwidGl0bGVUYXNrIiwiZGVzY3JpcHRpb25UYXNrIiwiYXJyYXlUYXNrIiwiaW5zZXJ0QmVmb3JlIiwic2hvd0Zvcm1VcGRhdGVUYXNrIiwiY2xvc2VGb3JtVXBkYXRlVGFzayIsInNlbGVjdFByb2plY3RTZWN0aW9uIiwic2hvd1NlY3Rpb25Qcm9qZWN0Iiwic3RhcnRGb3JtT3BlcmF0aW9ucyIsInNob3dGb3JtQWRkVGFzayIsIm5ld1Byb2plY3QiLCJkZWxldGVQcm9qZWN0IiwicGVyZm9ybURlbGV0ZVByb2plY3QiLCJwYXJlbnRFbGVtZW50Iiwic2hvd1Byb2plY3RzTGlzdCIsInByb2plY3RPcGVyYXRpb25zIiwicHJvamVjdHNET00iLCJkZWxldGVQcm9qZWN0cyIsImljb24iLCJjbGVhbkNvbnRhaW5lclByb2plY3RzIiwiZGlzcGxheVByb2plY3RzQmFyIiwic2hvd1Byb2plY3RzQmFyIiwidG9nZ2xlIiwiY29udGFpbnMiLCJzZWN0aW9uIiwic2VjdGlvbkFycmF5IiwiY29uY2F0IiwicmVtb3ZlIiwic2hvd0Zvcm1BZGRQcm9qZWN0IiwicmVzZXQiLCJwZXJmb3JtQWRkVG9kbyIsInByZXZlbnREZWZhdWx0IiwicGVyZm9ybVVwZGF0ZVRvZG8iLCJwZXJmb3JtQWRkVG9kb05hdiIsInBlcmZvcm1BZGRQcm9qZWN0IiwiaW5wdXRQcm9qZWN0TmFtZSIsInNob3dGb3JtQWRkVG9kb05hdmJhciIsImNsb3NlRm9ybUFkZFRvZG9OYXZiYXIiLCJ3aW5kb3ciLCJnZXRDdXJyZW50RGF0ZSIsImRhdGVPYmplY3QiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF0ZSIsImdldERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsImR1ZURhdGVVcGRhdGUiLCJkdWVEYXRlTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==