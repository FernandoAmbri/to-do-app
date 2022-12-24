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
  const searchValue = e.target.value;
  const projects = storage.getAllProjects();
  const todaySection = "Today";
  let searchResultArray = [];
  let todosArray = [];
  let todosToday = [];
  let searchResult;

  if (!searchValue.trim()) {
    (0,_components__WEBPACK_IMPORTED_MODULE_1__.createShowTodos)([]);
    return;
  }

  projects.forEach(project => {
    if (project.name === todaySection) {
      todosToday = [...project.todos];
    } else {
      todosArray = [...project.todos];
    }
  });
  const foundTodos = todosArray.filter(todo => todo.title.includes(searchValue.trim()));
  const foundTodosToday = todosToday.filter(todo => todo.title.includes(searchValue.trim()));

  if (foundTodos.length) {
    searchResult = (0,_components__WEBPACK_IMPORTED_MODULE_1__.createShowTodos)(foundTodos);
    searchResultArray = new Array(...searchResult.children);
  } else if (foundTodosToday.length) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcs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Y0FBUixFQUFELEVBQTJCOEUsYUFBM0IsQ0FBbkI7RUFDQXdFLGtCQUFrQjtFQUNsQjNDLFlBQVk7RUFDWmdCLGdCQUFnQjtFQUNoQnNELGNBQWM7QUFDZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mb3JtQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDYXJkVG9kbyhpbmRleCwgb2JqVG9kbykge1xyXG4gIGNvbnN0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdlRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uVXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICBkaXZUYXNrLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrLWZpbmlzaGVkXCIgLz5gO1xyXG4gIGRpdlRhc2tJbmZvLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZS1jYXJkXCI+JHtvYmpUb2RvLmdldFRpdGxlKCl9PC9oMj5cclxuICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiIGlkPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCI+JHtvYmpUb2RvLmdldERlc2NyaXB0aW9uKCl9PC9wPlxyXG4gIDxwPiR7b2JqVG9kby5nZXREdWVEYXRlKCl9PC9wPmA7XHJcblxyXG4gIGljb25VcGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcclxuXHJcbiAgZGl2VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcImluZGV4LXRvZG9cIiwgaW5kZXgpO1xyXG4gIGRpdlRhc2suc3R5bGUuY3NzVGV4dCA9IGBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7b2JqVG9kby5nZXRQcmlvcml0eSgpfWA7XHJcblxyXG4gIGRpdlRhc2suYXBwZW5kQ2hpbGQoZGl2VGFza0luZm8pO1xyXG4gIGRpdlRhc2suYXBwZW5kQ2hpbGQoaWNvblVwZGF0ZVRhc2spO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKS5hcHBlbmRDaGlsZChkaXZUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3ROYW1lKSB7XHJcbiAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHNwYW5OdW1iZXJUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZmlsZVwiPjwvaT5cclxuICA8cCBpZD1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9wPmA7XHJcblxyXG4gIHNwYW5OdW1iZXJUb2Rvcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bWJlci1vZi10YXNrc1wiKTtcclxuXHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXRyYXNoLWNhblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gIGRpdlByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIiwgXCJzZWN0aW9uXCIpO1xyXG5cclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGRpdkluZm8pO1xyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbk51bWJlclRvZG9zKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGljb25EZWxldGUpO1xyXG5cclxuICByZXR1cm4gZGl2UHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9ucyhhcnJheVByb2plY3RzLCBzZWxlY3QpIHtcclxuICBzZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBjb25zdCBvcHRpb25IaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIG9wdGlvbkhpZGRlbi52YWx1ZSA9IFwiXCI7XHJcbiAgb3B0aW9uSGlkZGVuLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcclxuICBvcHRpb25IaWRkZW4udGV4dENvbnRlbnQgPSBcIkNob29zZSBhIHByb2plY3RcIjtcclxuXHJcbiAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhpZGRlbik7XHJcblxyXG4gIGlmIChhcnJheVByb2plY3RzLmxlbmd0aCkge1xyXG4gICAgYXJyYXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJUb2RheVwiKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNob3dUb2Rvcyh0b2Rvc0FycmF5KSB7XHJcbiAgY29uc3Qgc2VhcmNoZWRUb2RvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXRvZG9zLWNvbnRhaW5lclwiKTtcclxuICBjb25zdCBpbmJveFRpdGxlID0gXCJJbmJveFwiO1xyXG4gIGNvbnN0IHRvZGF5VGl0bGUgPSBcIlRvZGF5XCI7XHJcbiAgc2VhcmNoZWRUb2Rvcy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cInJlY2VudGx5LXNlYXJjaGVkXCI+UmVjZW50bHkgc2VhcmNoZWQ6PC9kaXY+YDtcclxuICBpZiAodG9kb3NBcnJheS5sZW5ndGgpIHtcclxuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvc0FycmF5KSB7XHJcbiAgICAgIGNvbnN0IGRpdlRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGluZm9Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGNvbnN0IGljb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdE5hbWU7XHJcblxyXG4gICAgICBpZiAodG9kby5wcm9qZWN0TmFtZSA9PT0gaW5ib3hUaXRsZSkge1xyXG4gICAgICAgIGljb25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWluYm94XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRvZG8ucHJvamVjdE5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRvZGF5VGl0bGU7XHJcbiAgICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtY2FsZW5kYXItY2hlY2tcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS1maWxlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcm9qZWN0VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWFyY2hlZC1wcm9qZWN0XCIpO1xyXG4gICAgICBwcm9qZWN0VG9kby5hcHBlbmRDaGlsZChpY29uUHJvamVjdCk7XHJcbiAgICAgIHByb2plY3RUb2RvLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgIGluZm9Ub2RvLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuXHJcbiAgICAgIGRpdlRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tc2VhcmNoZWRcIik7XHJcbiAgICAgIGRpdlRvZG8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXNlYXJjaGVkXCIpO1xyXG4gICAgICBkaXZUb2RvLmFwcGVuZENoaWxkKGluZm9Ub2RvKTtcclxuICAgICAgZGl2VG9kby5hcHBlbmRDaGlsZChwcm9qZWN0VG9kbyk7XHJcblxyXG4gICAgICBzZWFyY2hlZFRvZG9zLmFwcGVuZENoaWxkKGRpdlRvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2VhcmNoZWRUb2RvcztcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVDYXJkVG9kbyxcclxuICBjcmVhdGVDYXJkUHJvamVjdHMsXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyxcclxuICBjcmVhdGVTaG93VG9kb3MsXHJcbn07XHJcbiIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Gb3JtKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1VcGRhdGVJbnB1dHMoKSB7XHJcbiAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0Q2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktdXBkYXRlXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRUaXRsZSxcclxuICAgIGlucHV0RGVzY3JpcHRpb24sXHJcbiAgICBpbnB1dER1ZURhdGUsXHJcbiAgICBpbnB1dENob29zZVByb2plY3QsXHJcbiAgICBpbnB1dFByaW9yaXR5LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbmZvRm9ybVVwZGF0ZShkYXRhT2JqZWN0KSB7XHJcbiAgY29uc3QgaW5wdXRzRm9ybVVwZGF0ZSA9IGdldEZvcm1VcGRhdGVJbnB1dHMoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0VGl0bGUudmFsdWUgPSBkYXRhT2JqZWN0LmdldFRpdGxlKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gZGF0YU9iamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREdWVEYXRlLnZhbHVlID0gZGF0YU9iamVjdFxyXG4gICAgLmdldER1ZURhdGUoKVxyXG4gICAgLnJlcGxhY2UoLyhcXC8pL2csIFwiLVwiKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0Q2hvb3NlUHJvamVjdC52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0UHJvamVjdE5hbWUoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0UHJpb3JpdHkudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByaW9yaXR5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zvcm1VcGRhdGUoKSB7XHJcbiAgY29uc3QgaW5wdXRzRm9ybVVwZGF0ZSA9IGdldEZvcm1VcGRhdGVJbnB1dHMoKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0VGl0bGUudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RGVzY3JpcHRpb24udmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREdWVEYXRlLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0Q2hvb3NlUHJvamVjdDtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0UHJpb3JpdHk7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21OYXZiYXIoKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS1uYXZiYXJcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb24tbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZS1uYXZiYXJcIilcclxuICAgIC52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC1uYXZiYXJcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LW5hdmJhclwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBnZXRWYWx1ZXNGcm9tRm9ybSxcclxuICBnZXRWYWx1ZXNGb3JtVXBkYXRlLFxyXG4gIGdldFZhbHVlc0Zyb21OYXZiYXIsXHJcbiAgc2hvd0luZm9Gb3JtVXBkYXRlLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICBsb2FkRGF0YVN0b3JhZ2UoKSB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIkluYm94XCIpKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0c1N0b3JhZ2UoZGF0YVByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGRhdGFQcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHNTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBuZXcgUHJvamVjdHMoKSxcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0cy5zZXRQcm9qZWN0cyhcclxuICAgICAgcHJvamVjdHNcclxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICApO1xyXG5cclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0LnNldFRvZG9zKFxyXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgdG9kbykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHJldHVybiBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdFN0b3JhZ2UocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb1N0b3JhZ2UodG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy51cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleCwgdG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMudXBkYXRlVG9kb0Zyb21Ub2RheShpbmRleCwgdG9kb09iaik7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb1RvZGF5U3RvcmFnZShpbmRleCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGluZGV4KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5kZWxldGVUb2RvRnJvbVRvZGF5KGluZGV4KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcmV0dXJuIHByb2plY3RzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJcIikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcblxyXG4gIHNldFRvZG9zKHRvZG9zQXJyYXkpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0b2Rvc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kbyh0aXRsZSkge1xyXG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb3MuZmluZCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0aXRsZSk7XHJcbiAgICByZXR1cm4gdG9kbyB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4VG9kbyh0b2RvKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSA9PT0gdG9kby5nZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgaWYgKCF0aGlzLmdldFRvZG8odG9kby5nZXRUaXRsZSgpKSkge1xyXG4gICAgICBpZiAodGhpcy5nZXROYW1lKCkgPT09IHRvZG8uZ2V0UHJvamVjdE5hbWUoKSkge1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbLi4udGhpcy50b2RvcywgdG9kb107XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvZG8odG9kb1RpdGxlKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRvZG9UaXRsZSk7XHJcbiAgICB0aGlzLnRvZG9zID0gW1xyXG4gICAgICAuLi50aGlzLnRvZG9zLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgLi4udGhpcy50b2Rvcy5zbGljZShpbmRleCArIDEpLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG8oaW5kZXgsIHRvZG8pIHtcclxuICAgIGlmICh0b2RvLmdldFByb2plY3ROYW1lKCkgPT09IHRoaXMubmFtZSAmJiB0aGlzLmdldFRvZG8odG9kby5nZXRUaXRsZSgpKSkge1xyXG4gICAgICB0aGlzLnRvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVUb2RvKHRvZG8uZ2V0VGl0bGUoKSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xyXG5pbXBvcnQgeyBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvamVjdHMocHJvamVjdHNBcnJheSkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHByb2plY3RzQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmFtZSA9PT0gbmFtZSk7XHJcbiAgICByZXR1cm4gcHJvamVjdCB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgaWYgKCF0aGlzLmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByb2plY3RJbmRleChwcm9qZWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZEluZGV4KFxyXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5nZXROYW1lKCkgIT09IHByb2plY3ROYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG8pIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIlRvZGF5XCI7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHRvZG8uZ2V0UHJvamVjdE5hbWUoKSk7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGNvbnN0IHByb2plY3RBZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kbykgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAocHJvamVjdEFkZGVkKSB7XHJcbiAgICAgIHRvZG8uc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RvLnNldFByb2plY3ROYW1lKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJUb2RheVwiO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBsZXQgaW5kZXhUb2RvID0gLTE7XHJcblxyXG4gICAgdG9kYXkudG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoaXRlbS5oYXNPd25Qcm9wZXJ0eShcInNlYXJjaFRvZG9cIikpIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBpdGVtLnNlYXJjaFRvZG8ucHJvamVjdFNlYXJjaCA9PT0gcHJvamVjdC5nZXROYW1lKCkgJiZcclxuICAgICAgICAgIGl0ZW0uc2VhcmNoVG9kby50b2RvVGl0bGUgPT09IHRvZG9UaXRsZVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgaW5kZXhUb2RvID0gaTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluZGV4VG9kbztcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Ub2RheShpbmRleCwgdG9kb09iaiwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIlRvZGF5XCI7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gcHJvamVjdC5nZXRUb2RvcygpW2luZGV4XS5nZXRUaXRsZSgpO1xyXG4gICAgY29uc3QgbG93ZXN0SW5kZXggPSAwO1xyXG4gICAgbGV0IHVwZGF0ZWRUb2RvID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvT2JqLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgcHJvamVjdFNlYXJjaDogcHJvamVjdC5nZXROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvT2JqLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gbG93ZXN0SW5kZXgpIHtcclxuICAgICAgICB0b2RheS50b2Rvc1t0b2RvSW5kZXhdID0gdG9kb09iajtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RheS50b2Rvcy5wdXNoKHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4LCB0b2RvT2JqKTtcclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb09iai5nZXRUaXRsZSgpKTtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA+PSBsb3dlc3RJbmRleCkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgsIHRvZG9PYmopIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIlRvZGF5XCI7XHJcbiAgICBjb25zdCB0b2RvUHJvcGVydHkgPSBcInNlYXJjaFRvZG9cIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgY29uc3QgdG9kb1ZhbHVlcyA9IHRvZGF5LmdldFRvZG9zKClbaW5kZXhdO1xyXG5cclxuICAgIGlmICh0b2RvVmFsdWVzLmhhc093blByb3BlcnR5KHRvZG9Qcm9wZXJ0eSkpIHtcclxuICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0gdG9kb1ZhbHVlcy5zZWFyY2hUb2RvO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b2RvT2JqLmhhc093blByb3BlcnR5KHRvZG9Qcm9wZXJ0eSkpIHtcclxuICAgICAgY29uc3QgeyBwcm9qZWN0U2VhcmNoLCB0b2RvVGl0bGUgfSA9IHRvZG9PYmouc2VhcmNoVG9kbztcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0U2VhcmNoKTtcclxuICAgICAgY29uc3QgaW5kZXhTZWFyY2ggPSBwcm9qZWN0LmdldEluZGV4VG9kbyhwcm9qZWN0LmdldFRvZG8odG9kb1RpdGxlKSk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4U2VhcmNoLCB0b2RvT2JqKTtcclxuXHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKSk7XHJcbiAgICAgIGNvbnN0IHRvZG9BZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kb09iaikgOiBmYWxzZTtcclxuICAgICAgaWYgKHRvZG9BZGRlZCkge1xyXG4gICAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICAgIHByb2plY3RTZWFyY2g6IHRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKSxcclxuICAgICAgICAgIHRvZG9UaXRsZTogdG9kb09iai5nZXRUaXRsZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvT2JqLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIHRvZGF5LnRvZG9zW2luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9WYWx1ZXMuZ2V0VGl0bGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvRnJvbVRvZGF5KGluZGV4KSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJUb2RheVwiO1xyXG4gICAgY29uc3QgdG9kb1Byb3BlcnR5ID0gXCJzZWFyY2hUb2RvXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGNvbnN0IHRvZG9PYmogPSB0b2RheS5nZXRUb2RvcygpW2luZGV4XTtcclxuXHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eSh0b2RvUHJvcGVydHkpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb09iai5nZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUFsbFRvZG9zKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGlmIChwcm9qZWN0KSB7XHJcbiAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kby5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICAgICAgY29uc3QgaW5kZXggPSBpO1xyXG4gICAgICAgICAgdGhpcy5kZWxldGVUb2RvVG9kYXkoaW5kZXgsIHByb2plY3ROYW1lLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb1RvZGF5KGluZGV4LCBwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiVG9kYXlcIjtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBwcm9qZWN0LmdldFRvZG9zKClbaW5kZXhdLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBpbmRleFRvZG8gPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuXHJcbiAgICBpZiAoaW5kZXhUb2RvID49IDApIHtcclxuICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAzKSB7XHJcbiAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0aXRsZSA9IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXHJcbiAgICBkdWVEYXRlID0gXCJcIixcclxuICAgIHByb2plY3ROYW1lID0gXCJcIixcclxuICAgIHByaW9yaXR5ID0gMVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3ROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2RvOmZvY3VzIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMzVweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kb3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDExNXB4O1xcclxcbiAgd2lkdGg6IDQzNXB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG9zLWNvbnRhaW5lciAudG9kby1zZWFyY2hlZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnRseS1zZWFyY2hlZCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC12aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkLXByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi13aWR0aDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkLXByb2plY3Q+cCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFh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L2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1pbi13aWR0aDogMjIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kbzpmb2N1cyB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzM1cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG9zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwcHg7XFxyXFxuICBsZWZ0OiAxMTVweDtcXHJcXG4gIHdpZHRoOiA0MzVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2Rvcy1jb250YWluZXIgLnRvZG8tc2VhcmNoZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50bHktc2VhcmNoZWQge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ub3QtdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZC1wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4td2lkdGg6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZC1wcm9qZWN0PnAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jdGlvbi1wYXJlbi1uZXdsaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNhcmRUb2RvLFxyXG4gIGNyZWF0ZUNhcmRQcm9qZWN0cyxcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zLFxyXG4gIGNyZWF0ZVNob3dUb2RvcyxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn0gZnJvbSBcIi4vZm9ybUNvbnRlbnRcIjtcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5jb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xyXG5jb25zdCB0b2RheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xyXG5cclxuY29uc3QgZm9ybVVwZGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdXBkYXRlLXRhc2tcIik7XHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrLWNhcmRcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC10b2RvLW5hdmJhclwiKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lclRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgY29udGFpbmVyQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWZpeGVkXCIpO1xyXG5cclxuY29uc3Qgc2VjdGlvblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcblxyXG5jb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuY29uc3QgYnRuRm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5DYW5jZWxVcGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLXVwZGF0ZVwiKTtcclxuY29uc3QgYnRuQ2FuY2VsRm9ybU5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1ob21lXCIpO1xyXG5cclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbmNvbnN0IHNlbGVjdFVwZGF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuY29uc3Qgc2VsZWN0UHJvamVjdE5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG5cclxuY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC10b2RvXCIpO1xyXG5jb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC10b2Rvcy1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCBzZWN0aW9uVGl0bGUgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuXHJcbmxldCBpbmRleENhcmRUb2RvID0gMDtcclxubGV0IGFycmF5VG9kb3NET00gPSBbXTtcclxuXHJcbmluaXRBcHAoKTtcclxuXHJcbi8qKlxyXG4gKiBTRUFSQ0ggT1BFUkFUSU9OU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaFRvZG8oZSkge1xyXG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdG9yYWdlLmdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3QgdG9kYXlTZWN0aW9uID0gXCJUb2RheVwiO1xyXG5cclxuICBsZXQgc2VhcmNoUmVzdWx0QXJyYXkgPSBbXTtcclxuICBsZXQgdG9kb3NBcnJheSA9IFtdO1xyXG4gIGxldCB0b2Rvc1RvZGF5ID0gW107XHJcbiAgbGV0IHNlYXJjaFJlc3VsdDtcclxuXHJcbiAgaWYgKCFzZWFyY2hWYWx1ZS50cmltKCkpIHtcclxuICAgIGNyZWF0ZVNob3dUb2RvcyhbXSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC5uYW1lID09PSB0b2RheVNlY3Rpb24pIHtcclxuICAgICAgdG9kb3NUb2RheSA9IFsuLi5wcm9qZWN0LnRvZG9zXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG9zQXJyYXkgPSBbLi4ucHJvamVjdC50b2Rvc107XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvdW5kVG9kb3MgPSB0b2Rvc0FycmF5LmZpbHRlcigodG9kbykgPT5cclxuICAgIHRvZG8udGl0bGUuaW5jbHVkZXMoc2VhcmNoVmFsdWUudHJpbSgpKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZvdW5kVG9kb3NUb2RheSA9IHRvZG9zVG9kYXkuZmlsdGVyKCh0b2RvKSA9PlxyXG4gICAgdG9kby50aXRsZS5pbmNsdWRlcyhzZWFyY2hWYWx1ZS50cmltKCkpXHJcbiAgKTtcclxuXHJcbiAgaWYgKGZvdW5kVG9kb3MubGVuZ3RoKSB7XHJcbiAgICBzZWFyY2hSZXN1bHQgPSBjcmVhdGVTaG93VG9kb3MoZm91bmRUb2Rvcyk7XHJcbiAgICBzZWFyY2hSZXN1bHRBcnJheSA9IG5ldyBBcnJheSguLi5zZWFyY2hSZXN1bHQuY2hpbGRyZW4pO1xyXG4gIH0gZWxzZSBpZiAoZm91bmRUb2Rvc1RvZGF5Lmxlbmd0aCkge1xyXG4gICAgc2VhcmNoUmVzdWx0ID0gY3JlYXRlU2hvd1RvZG9zKGZvdW5kVG9kb3NUb2RheSk7XHJcbiAgICBzZWFyY2hSZXN1bHRBcnJheSA9IG5ldyBBcnJheSguLi5zZWFyY2hSZXN1bHQuY2hpbGRyZW4pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWFyY2hSZXN1bHQgPSBjcmVhdGVTaG93VG9kb3MoW10pO1xyXG4gICAgc2VhcmNoUmVzdWx0QXJyYXkgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIHNob3dTZWFyY2hlZFNlY3Rpb24oc2VhcmNoUmVzdWx0QXJyYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2VhcmNoZWRTZWN0aW9uKGFycmF5UmVzdWx0KSB7XHJcbiAgY29uc3QgYXJyYXlTZWN0aW9ucyA9IGFycmF5UmVzdWx0LnNsaWNlKDEpO1xyXG4gIGZvciAoY29uc3QgZWxlbSBvZiBhcnJheVNlY3Rpb25zKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGVsZW0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50U2VjdGlvbjtcclxuICAgICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFRPRE8gT1BFUkFUSU9OU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tRm9ybSh0b2RvT2JqKSB7XHJcbiAgaWYgKHRvZG9PYmouZ2V0VGl0bGUoKS50cmltKCkpIHtcclxuICAgIGlmICghdG9kb09iai5nZXRQcm9qZWN0TmFtZSgpLnRyaW0oKSkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICBjb25zdCB0b2RheSA9IHN0b3JhZ2UuZ2V0UHJvamVjdFN0b3JhZ2UoXCJUb2RheVwiKTtcclxuXHJcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gdG9kYXkuZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgdG9kb09iai5zZXRQcm9qZWN0TmFtZShwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3JhZ2UuYWRkVG9kb1N0b3JhZ2UodG9kb09iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvRnJvbUZvcm0odmFsdWVzVG9kbykge1xyXG4gIGlmICh2YWx1ZXNUb2RvLmdldFRpdGxlKCkudHJpbSgpKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiVG9kYXlcIik7XHJcbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IHRvZGF5LmdldE5hbWUoKSkge1xyXG4gICAgICBzdG9yYWdlLnVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoXHJcbiAgICAgICAgaW5kZXhDYXJkVG9kbyxcclxuICAgICAgICB2YWx1ZXNUb2RvLFxyXG4gICAgICAgIHByb2plY3QuZ2V0TmFtZSgpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlLnVwZGF0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGluZGV4Q2FyZFRvZG8sIHZhbHVlc1RvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YVRvZG9DYXJkKGluZGV4Q2FyZCkge1xyXG4gIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgcmV0dXJuIHByb2plY3QudG9kb3NbaW5kZXhDYXJkXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0NhcmRET00oKSB7XHJcbiAgYXJyYXlUb2Rvc0RPTSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgIHRhc2subGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzaG93VG9kb0xpc3QoKTtcclxuICAgICAgY29udGFpbmVyVG9kb0xpc3QucmVtb3ZlQ2hpbGQoYXJyYXlUb2Rvc0RPTVtpbmRleF0pO1xyXG4gICAgICBpbmRleENhcmRUb2RvID0gaW5kZXg7XHJcbiAgICAgIGNsb3NlRm9ybUFkZFRhc2soKTtcclxuICAgICAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFVwZGF0ZVByb2plY3QpO1xyXG4gICAgICBzaG93Rm9ybVVwZGF0ZUNhcmQoYXJyYXlUb2Rvc0RPTSwgaW5kZXgpO1xyXG4gICAgICBzaG93SW5mb0Zvcm1VcGRhdGUoZ2V0RGF0YVRvZG9DYXJkKGluZGV4KSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9kb0RPTSgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xyXG4gICAgdGFzay5maXJzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICAgICAgICBjb25zdCB0b2RheSA9IHN0b3JhZ2UuZ2V0UHJvamVjdFN0b3JhZ2UoXCJUb2RheVwiKTtcclxuICAgICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IHRvZGF5LmdldE5hbWUoKSkge1xyXG4gICAgICAgICAgc3RvcmFnZS5kZWxldGVUb2RvVG9kYXlTdG9yYWdlKGksIHByb2plY3QuZ2V0TmFtZSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RvcmFnZS5kZWxldGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgICAgICAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2VjdGlvbk9iamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIHJldHVybiBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1RvZG9MaXN0KCkge1xyXG4gIGNsZWFuVG9kb3NDb250YWluZXIoKTtcclxuICBjb25zdCBvYmplY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgaWYgKG9iamVjdCkge1xyXG4gICAgb2JqZWN0LnRvZG9zLmZvckVhY2goKHRvZG8sIGkpID0+IGNyZWF0ZUNhcmRUb2RvKGksIHRvZG8pKTtcclxuICAgIHVwZGF0ZVRvZG9DYXJkRE9NKCk7XHJcbiAgICBkZWxldGVUb2RvRE9NKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Q3VycmVudFRvZG9zKCkge1xyXG4gIGNvbnN0IHNwYW5OdW1iZXJUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjbnVtYmVyLW9mLXRhc2tzXCIpO1xyXG4gIHNwYW5OdW1iZXJUb2Rvcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBjb25zdCB0b2Rvc1F1YW50aXR5ID0gc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpW2ldLnRvZG9zLmxlbmd0aDtcclxuICAgIGl0ZW0udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgaWYgKHRvZG9zUXVhbnRpdHkgPiAwKSB7XHJcbiAgICAgIGl0ZW0udGV4dENvbnRlbnQgPSB0b2Rvc1F1YW50aXR5O1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvQ2FyZChpbmRleENhcmQsIHRvZG9EYXRhKSB7XHJcbiAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpW2luZGV4Q2FyZF07XHJcbiAgaWYgKGRpdkNvbnRhaW5lcikge1xyXG4gICAgZGl2Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgYm9yZGVyOiAycHggc29saWQgJHt0b2RvRGF0YS5wcmlvcml0eX1gO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlVGFzayA9IGRpdkNvbnRhaW5lci5jaGlsZHJlblsxXS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGFzayA9IGRpdkNvbnRhaW5lci5jaGlsZHJlblsxXS5sYXN0RWxlbWVudENoaWxkO1xyXG5cclxuICAgIHRpdGxlVGFzay50ZXh0Q29udGVudCA9IHRvZG9EYXRhLnRpdGxlO1xyXG4gICAgZGVzY3JpcHRpb25UYXNrLnRleHRDb250ZW50ID0gdG9kb0RhdGEuZGVzY3JpcHRpb247XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybVVwZGF0ZUNhcmQoYXJyYXlUYXNrLCBpbmRleENhcmQpIHtcclxuICBpZiAoYXJyYXlUYXNrLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgY29udGFpbmVyVG9kb0xpc3QuYXBwZW5kQ2hpbGQoZm9ybVVwZGF0ZVRvZG8pO1xyXG4gIH0gZWxzZSBpZiAoYXJyYXlUYXNrLmxlbmd0aCAtIDEgPT09IGluZGV4Q2FyZCkge1xyXG4gICAgY29udGFpbmVyVG9kb0xpc3QuYXBwZW5kQ2hpbGQoZm9ybVVwZGF0ZVRvZG8pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5pbnNlcnRCZWZvcmUoZm9ybVVwZGF0ZVRvZG8sIGFycmF5VGFza1tpbmRleENhcmQgKyAxXSk7XHJcbiAgfVxyXG5cclxuICBzaG93Rm9ybVVwZGF0ZVRhc2soKTtcclxuXHJcbiAgYnRuQ2FuY2VsVXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFByb2plY3RTZWN0aW9uKHByb2plY3QpIHtcclxuICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmNoaWxkcmVuWzBdLmxhc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgY2xvc2VGb3JtQWRkVGFzaygpO1xyXG4gIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICBzaG93U2VjdGlvblByb2plY3QocHJvamVjdCk7XHJcbiAgY2xlYW5Ub2Rvc0NvbnRhaW5lcigpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdGFydEZvcm1PcGVyYXRpb25zKCkge1xyXG4gIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdCk7XHJcbiAgc2hvd0Zvcm1BZGRUYXNrKCk7XHJcbn1cclxuXHJcbi8qXHJcbiAqIFBST0pFQ1QgT1BFUkFUSU9OU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICBpZiAocHJvamVjdE5hbWUgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBzdG9yYWdlLmFkZFByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIHN0b3JhZ2UucmVtb3ZlUHJvamVjdFN0b3JhZ2UocHJvamVjdE5hbWUpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcGVyZm9ybURlbGV0ZVByb2plY3QoZSkge1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID1cclxuICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XHJcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgc2hvd1Byb2plY3RzTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdE9wZXJhdGlvbnMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHNET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RlbGV0ZS1wcm9qZWN0XCIpO1xyXG4gIHByb2plY3RzRE9NLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNlbGVjdFByb2plY3RTZWN0aW9uKHByb2plY3QpKTtcclxuICB9KTtcclxuICBkZWxldGVQcm9qZWN0cy5mb3JFYWNoKChpY29uKSA9PiB7XHJcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gcGVyZm9ybURlbGV0ZVByb2plY3QoZSkpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHNMaXN0KCkge1xyXG4gIGNsZWFuQ29udGFpbmVyUHJvamVjdHMoKTtcclxuICBzdG9yYWdlLmdldEFsbFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIkluYm94XCIgJiYgcHJvamVjdC5nZXROYW1lKCkgIT09IFwiVG9kYXlcIikge1xyXG4gICAgICBjb250YWluZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVDYXJkUHJvamVjdHMocHJvamVjdC5nZXROYW1lKCkpKTtcclxuICAgIH1cclxuICB9KTtcclxuICBwcm9qZWN0T3BlcmF0aW9ucygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNCYXIoKSB7XHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LXByb2plY3RzXCIpO1xyXG5cclxuICBzaG93UHJvamVjdHNCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1yaWdodFwiKTtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctY29udGVudFwiKTtcclxuXHJcbiAgICBpZiAoc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZhLWNoZXZyb24tZG93blwiKSkge1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NlY3Rpb25Qcm9qZWN0KHNlY3Rpb24pIHtcclxuICBjb25zdCBzZWN0aW9uQXJyYXkgPSBBcnJheS5mcm9tKHNlY3Rpb25Ub2RvKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oY29udGFpbmVyUHJvamVjdHMuY2hpbGRyZW4pO1xyXG4gIHNlY3Rpb25BcnJheS5jb25jYXQocHJvamVjdHMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlY3Rpb24tYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFByb2plY3QoKSB7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG4gIGJ0bkNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGT1JNIFRBU0tTXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcGVyZm9ybUFkZFRvZG8oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzdG9yYWdlLmxvYWREYXRhU3RvcmFnZSgpO1xyXG4gIGFkZFRvZG9Gcm9tRm9ybShnZXRWYWx1ZXNGcm9tRm9ybSgpKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgZm9ybUFkZFRvZG8ucmVzZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGVyZm9ybVVwZGF0ZVRvZG8oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB1cGRhdGVUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICB1cGRhdGVUb2RvQ2FyZChpbmRleENhcmRUb2RvLCBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkpO1xyXG4gIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1BZGRUb2RvTmF2KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYWRkVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zyb21OYXZiYXIoKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvTmF2YmFyLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1BZGRQcm9qZWN0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZS50cmltKCk7XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICBwcm9qZWN0T3BlcmF0aW9ucygpO1xyXG5cclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFVwZGF0ZVByb2plY3QpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0TmF2YmFyKTtcclxuXHJcbiAgZm9ybUFkZFByb2plY3QucmVzZXQoKTtcclxuICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBESVNQTEFZIEZPUk1TXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0TmF2YmFyKTtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybUFkZFRvZG9OYXZiYXIoKSB7XHJcbiAgY29udGFpbmVyQWRkVG9kb05hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVUYXNrKCkge1xyXG4gIGZvcm1VcGRhdGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuVG9kb3NDb250YWluZXIoKSB7XHJcbiAgY29udGFpbmVyVG9kb0xpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkNvbnRhaW5lclByb2plY3RzKCkge1xyXG4gIGNvbnRhaW5lclByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVWRU5UU1xyXG4gKi9cclxuXHJcbmZvcm1BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1BZGRUb2RvTmF2KGUpKTtcclxuZm9ybVVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gcGVyZm9ybVVwZGF0ZVRvZG8oZSkpO1xyXG5mb3JtQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtQWRkUHJvamVjdChlKSk7XHJcbmZvcm1BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1BZGRUb2RvKGUpKTtcclxuXHJcbmluYm94U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBzZWxlY3RQcm9qZWN0U2VjdGlvbihpbmJveFNlY3Rpb24pXHJcbik7XHJcbnRvZGF5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBzZWxlY3RQcm9qZWN0U2VjdGlvbih0b2RheVNlY3Rpb24pXHJcbik7XHJcblxyXG5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEZvcm1PcGVyYXRpb25zKTtcclxuYnRuRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtQWRkVGFzayk7XHJcbmJ0bkFkZFRvZG9OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtQWRkVG9kb05hdmJhcik7XHJcbmJ0bkNhbmNlbEZvcm1OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFByb2plY3QpO1xyXG5cclxuYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICBzaG93U2VjdGlvblByb2plY3QodG9kYXlTZWN0aW9uKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufSk7XHJcblxyXG5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHNlYXJjaFRvZG8oZSkpO1xyXG5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gIHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXZpc2libGVcIik7XHJcbn0pO1xyXG5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gIGlucHV0U2VhcmNoLnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ICE9PSBpbnB1dFNlYXJjaCkge1xyXG4gICAgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJub3QtdmlzaWJsZVwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLyoqXHJcbiAqIERJU1BMQVkgQ1VSUkVOVCBEQVRFXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgeWVhciA9IGRhdGVPYmplY3QuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgbW9udGggPSBkYXRlT2JqZWN0LmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCBkYXRlID0gZGF0ZU9iamVjdC5nZXREYXRlKCk7XHJcblxyXG4gIGlmIChtb250aCA8IDEwKSB7XHJcbiAgICBtb250aCA9IGAwJHttb250aH1gO1xyXG4gIH1cclxuICBpZiAoZGF0ZSA8IDEwKSB7XHJcbiAgICBkYXRlID0gYDAke2RhdGV9YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlVXBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlLW5hdmJhclwiKTtcclxuXHJcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZU5hdmJhci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTVEFSVCBBUFBcclxuICovXHJcblxyXG5mdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gIHN0b3JhZ2UubG9hZERhdGFTdG9yYWdlKCk7IC8vIGdldCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlIEFQSVxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0KTtcclxuICBkaXNwbGF5UHJvamVjdHNCYXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgc2V0Q3VycmVudERhdGUoKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FyZFRvZG8iLCJpbmRleCIsIm9ialRvZG8iLCJkaXZUYXNrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGl2VGFza0luZm8iLCJpY29uVXBkYXRlVGFzayIsImlubmVySFRNTCIsImdldFRpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJjc3NUZXh0IiwiZ2V0UHJpb3JpdHkiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVDYXJkUHJvamVjdHMiLCJwcm9qZWN0TmFtZSIsImRpdlByb2plY3QiLCJkaXZJbmZvIiwiaWNvbkRlbGV0ZSIsInNwYW5OdW1iZXJUb2RvcyIsImNyZWF0ZVNlbGVjdE9wdGlvbnMiLCJhcnJheVByb2plY3RzIiwic2VsZWN0IiwidGV4dENvbnRlbnQiLCJvcHRpb25IaWRkZW4iLCJ2YWx1ZSIsImxlbmd0aCIsImZvckVhY2giLCJwcm9qZWN0IiwiZ2V0TmFtZSIsIm9wdGlvbiIsIm5hbWUiLCJjcmVhdGVTaG93VG9kb3MiLCJ0b2Rvc0FycmF5Iiwic2VhcmNoZWRUb2RvcyIsImdldEVsZW1lbnRCeUlkIiwiaW5ib3hUaXRsZSIsInRvZGF5VGl0bGUiLCJ0b2RvIiwiZGl2VG9kbyIsInByb2plY3RUb2RvIiwiaW5mb1RvZG8iLCJpY29uUHJvamVjdCIsInRpdGxlIiwiVG9kbyIsImdldFZhbHVlc0Zyb21Gb3JtIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicmVwbGFjZSIsImNob29zZVByb2plY3QiLCJ0YXNrUHJpb3JpdHkiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByaW9yaXR5IiwiZ2V0Rm9ybVVwZGF0ZUlucHV0cyIsImlucHV0VGl0bGUiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXREdWVEYXRlIiwiaW5wdXRDaG9vc2VQcm9qZWN0IiwiaW5wdXRQcmlvcml0eSIsInNob3dJbmZvRm9ybVVwZGF0ZSIsImRhdGFPYmplY3QiLCJpbnB1dHNGb3JtVXBkYXRlIiwiZ2V0UHJvamVjdE5hbWUiLCJnZXRWYWx1ZXNGb3JtVXBkYXRlIiwiZ2V0VmFsdWVzRnJvbU5hdmJhciIsIlByb2plY3RzIiwiUHJvamVjdCIsIlN0b3JhZ2UiLCJsb2FkRGF0YVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJzYXZlUHJvamVjdHNTdG9yYWdlIiwiZGF0YVByb2plY3RzIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQcm9qZWN0c1N0b3JhZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXRQcm9qZWN0cyIsImdldFByb2plY3RzIiwibWFwIiwic2V0VG9kb3MiLCJnZXRUb2RvcyIsImdldEFsbFByb2plY3RzIiwiYWRkUHJvamVjdFN0b3JhZ2UiLCJyZW1vdmVQcm9qZWN0U3RvcmFnZSIsImRlbGV0ZUFsbFRvZG9zIiwicmVtb3ZlUHJvamVjdCIsImFkZFRvZG9TdG9yYWdlIiwidG9kb09iaiIsImFkZFRvZG9Gcm9tUHJvamVjdCIsInVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UiLCJ1cGRhdGVUb2RvVG9kYXkiLCJ1cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZSIsInVwZGF0ZVRvZG9Gcm9tVG9kYXkiLCJkZWxldGVUb2RvVG9kYXlTdG9yYWdlIiwiZGVsZXRlVG9kb1RvZGF5IiwiZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UiLCJkZWxldGVUb2RvRnJvbVRvZGF5IiwiZ2V0UHJvamVjdFN0b3JhZ2UiLCJnZXRQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJ0b2RvcyIsInNldE5hbWUiLCJnZXRUb2RvIiwiZmluZCIsIml0ZW0iLCJnZXRJbmRleFRvZG8iLCJmaW5kSW5kZXgiLCJhZGRUb2RvIiwicmVtb3ZlVG9kbyIsInRvZG9UaXRsZSIsInNsaWNlIiwidXBkYXRlVG9kbyIsImlzVG9kYXkiLCJwcm9qZWN0c0FycmF5IiwicHVzaCIsImdldFByb2plY3RJbmRleCIsImZpbHRlciIsInRvZGF5IiwicHJvamVjdEFkZGVkIiwic2VhcmNoVG9kbyIsInByb2plY3RTZWFyY2giLCJzZXRQcm9qZWN0TmFtZSIsIkRhdGUiLCJmaW5kVG9kb1RvZGF5IiwiaW5kZXhUb2RvIiwiaSIsImhhc093blByb3BlcnR5IiwibG93ZXN0SW5kZXgiLCJ1cGRhdGVkVG9kbyIsInRvZG9JbmRleCIsInRvZG9Qcm9wZXJ0eSIsInRvZG9WYWx1ZXMiLCJpbmRleFNlYXJjaCIsInRvZG9BZGRlZCIsImFyZ3VtZW50cyIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXREdWVEYXRlIiwic2V0UHJpb3JpdHkiLCJpbmJveFNlY3Rpb24iLCJ0b2RheVNlY3Rpb24iLCJmb3JtVXBkYXRlVG9kbyIsImZvcm1BZGRQcm9qZWN0IiwiZm9ybUFkZFRvZG8iLCJmb3JtQWRkVG9kb05hdmJhciIsImNvbnRhaW5lclRvZG9MaXN0IiwiY29udGFpbmVyUHJvamVjdHMiLCJjb250YWluZXJBZGRQcm9qZWN0IiwiY29udGFpbmVyQWRkVG9kb05hdmJhciIsInNlY3Rpb25Ub2RvIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bkFkZFRvZG8iLCJidG5Gb3JtQ2FuY2VsIiwiYnRuQ2FuY2VsUHJvamVjdCIsImJ0bkNhbmNlbFVwZGF0ZUZvcm0iLCJidG5DYW5jZWxGb3JtTmF2YmFyIiwiYnRuQWRkUHJvamVjdCIsImJ0bkFkZFRvZG9OYXZiYXIiLCJidG5Ib21lIiwic2VsZWN0UHJvamVjdCIsInNlbGVjdFVwZGF0ZVByb2plY3QiLCJzZWxlY3RQcm9qZWN0TmF2YmFyIiwiaW5wdXRTZWFyY2giLCJzZWFyY2hSZXN1bHQiLCJzZWN0aW9uVGl0bGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0b3JhZ2UiLCJpbmRleENhcmRUb2RvIiwiYXJyYXlUb2Rvc0RPTSIsImluaXRBcHAiLCJlIiwic2VhcmNoVmFsdWUiLCJ0YXJnZXQiLCJzZWFyY2hSZXN1bHRBcnJheSIsInRvZG9zVG9kYXkiLCJ0cmltIiwiZm91bmRUb2RvcyIsImluY2x1ZGVzIiwiZm91bmRUb2Rvc1RvZGF5IiwiQXJyYXkiLCJjaGlsZHJlbiIsInNob3dTZWFyY2hlZFNlY3Rpb24iLCJhcnJheVJlc3VsdCIsImFycmF5U2VjdGlvbnMiLCJlbGVtIiwiY3VycmVudFNlY3Rpb24iLCJjaGlsZE5vZGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dUb2RvTGlzdCIsImFkZFRvZG9Gcm9tRm9ybSIsImdldFNlY3Rpb25PYmplY3QiLCJ1cGRhdGVUb2RvRnJvbUZvcm0iLCJ2YWx1ZXNUb2RvIiwiZ2V0RGF0YVRvZG9DYXJkIiwiaW5kZXhDYXJkIiwidXBkYXRlVG9kb0NhcmRET00iLCJmcm9tIiwidGFzayIsImxhc3RFbGVtZW50Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNsb3NlRm9ybUFkZFRhc2siLCJzaG93Rm9ybVVwZGF0ZUNhcmQiLCJkZWxldGVUb2RvRE9NIiwiY2hlY2tlZCIsInNob3dDdXJyZW50VG9kb3MiLCJjbGVhblRvZG9zQ29udGFpbmVyIiwib2JqZWN0IiwidG9kb3NRdWFudGl0eSIsInVwZGF0ZVRvZG9DYXJkIiwidG9kb0RhdGEiLCJkaXZDb250YWluZXIiLCJ0aXRsZVRhc2siLCJkZXNjcmlwdGlvblRhc2siLCJhcnJheVRhc2siLCJpbnNlcnRCZWZvcmUiLCJzaG93Rm9ybVVwZGF0ZVRhc2siLCJjbG9zZUZvcm1VcGRhdGVUYXNrIiwic2VsZWN0UHJvamVjdFNlY3Rpb24iLCJzaG93U2VjdGlvblByb2plY3QiLCJzdGFydEZvcm1PcGVyYXRpb25zIiwic2hvd0Zvcm1BZGRUYXNrIiwibmV3UHJvamVjdCIsImRlbGV0ZVByb2plY3QiLCJwZXJmb3JtRGVsZXRlUHJvamVjdCIsInBhcmVudEVsZW1lbnQiLCJzaG93UHJvamVjdHNMaXN0IiwicHJvamVjdE9wZXJhdGlvbnMiLCJwcm9qZWN0c0RPTSIsImRlbGV0ZVByb2plY3RzIiwiaWNvbiIsImNsZWFuQ29udGFpbmVyUHJvamVjdHMiLCJkaXNwbGF5UHJvamVjdHNCYXIiLCJzaG93UHJvamVjdHNCYXIiLCJ0b2dnbGUiLCJjb250YWlucyIsInNlY3Rpb24iLCJzZWN0aW9uQXJyYXkiLCJjb25jYXQiLCJyZW1vdmUiLCJzaG93Rm9ybUFkZFByb2plY3QiLCJyZXNldCIsInBlcmZvcm1BZGRUb2RvIiwicHJldmVudERlZmF1bHQiLCJwZXJmb3JtVXBkYXRlVG9kbyIsInBlcmZvcm1BZGRUb2RvTmF2IiwicGVyZm9ybUFkZFByb2plY3QiLCJpbnB1dFByb2plY3ROYW1lIiwic2hvd0Zvcm1BZGRUb2RvTmF2YmFyIiwiY2xvc2VGb3JtQWRkVG9kb05hdmJhciIsIndpbmRvdyIsImdldEN1cnJlbnREYXRlIiwiZGF0ZU9iamVjdCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsInNldEN1cnJlbnREYXRlIiwiZHVlRGF0ZVVwZGF0ZSIsImR1ZURhdGVOYXZiYXIiXSwic291cmNlUm9vdCI6IiJ9