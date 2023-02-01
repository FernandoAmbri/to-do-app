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
  optionHidden.textContent = "Proyectos";
  select.appendChild(optionHidden);

  if (arrayProjects.length) {
    arrayProjects.forEach(project => {
      if (project.getName() !== "Actuales") {
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
  const todayTitle = "Actuales";
  searchedTodos.innerHTML = "<div class=\"recently-searched\">tareas buscadas:</div>";

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
      projects.addProject(new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Actuales"));
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
/* eslint-disable operator-linebreak */

/* eslint-disable comma-dangle */

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
    const todayTitle = "Actuales";
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
    const todayTitle = "Actuales";
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
    const todayTitle = "Actuales";
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
    const todayTitle = "Actuales";
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
    const todayTitle = "Actuales";
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
    const todayTitle = "Actuales";
    const project = this.getProject(projectName);
    const today = this.getProject(todayTitle);
    const todoTitle = project.getTodos()[index].getTitle();
    const indexTodo = this.findTodoToday(project, todoTitle);
    if (indexTodo >= 0) today.removeTodo(todoTitle);
    if (arguments.length < 3) project.removeTodo(todoTitle);
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
 * Función para buscar
 */

function searchTodo(e) {
  const searchValue = e.target.value.toLowerCase().trim();
  const projects = storage.getAllProjects();
  const todaySection = "Actuales";
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
      const today = storage.getProjectStorage("Actuales");

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
    const today = storage.getProjectStorage("Actuales");

    if (project.getName() !== today.getName()) {
      storage.updateTodoTodayStorage(indexCardTodo, valuesTodo, project.getName());
      return;
    }

    storage.updateTodoFromTodayStorage(indexCardTodo, valuesTodo);
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
        const today = storage.getProjectStorage("Actuales");

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
  if (projectName) {
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
    const projectName = project.getName();

    if (projectName !== "Inbox" && projectName !== "Actuales") {
      containerProjects.appendChild((0,_components__WEBPACK_IMPORTED_MODULE_1__.createCardProjects)(projectName));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLHVHQUF1RyxzQ0FBc0MsNkJBQTZCLGdCQUFnQixpQkFBaUIsS0FBSyxjQUFjLHVCQUF1QixLQUFLLGNBQWMseUNBQXlDLG9CQUFvQiw2QkFBNkIsb0JBQW9CLHlCQUF5QixLQUFLLGdCQUFnQiwwQkFBMEIsS0FBSyxpQkFBaUIsb0JBQW9CLG1CQUFtQixvQkFBb0IscUNBQXFDLHFCQUFxQixLQUFLLG9CQUFvQixzQkFBc0Isb0JBQW9CLDBCQUEwQixlQUFlLEtBQUssWUFBWSw0QkFBNEIsS0FBSyxzQkFBc0IsNEJBQTRCLEtBQUssZ0JBQWdCLHdCQUF3QixrQkFBa0IsbUJBQW1CLEtBQUssc0JBQXNCLDJDQUEyQyx5QkFBeUIsS0FBSywyQkFBMkIsbUJBQW1CLHVCQUF1QixtQkFBbUIsNkJBQTZCLG9CQUFvQixxQ0FBcUMsMEJBQTBCLGVBQWUseUJBQXlCLEtBQUssMEJBQTBCLG1CQUFtQiw4QkFBOEIsb0JBQW9CLG1CQUFtQix5QkFBeUIsbUJBQW1CLEtBQUssNEJBQTRCLG1CQUFtQixLQUFLLGNBQWMsb0JBQW9CLGNBQWMsS0FBSyxrQkFBa0IsMEJBQTBCLG1CQUFtQixxQkFBcUIsS0FBSyxvQkFBb0IsZ0NBQWdDLHVCQUF1QixLQUFLLGtCQUFrQixtQkFBbUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsb0JBQW9CLHdCQUF3Qix5QkFBeUIsS0FBSyxzQkFBc0Isb0JBQW9CLDBCQUEwQixnQkFBZ0IsS0FBSyx1QkFBdUIsd0JBQXdCLGtCQUFrQixLQUFLLDRDQUE0Qyx1QkFBdUIsc0JBQXNCLEtBQUssZ0JBQWdCLDBCQUEwQixLQUFLLG1CQUFtQixtQkFBbUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsb0JBQW9CLHdCQUF3Qix5QkFBeUIsS0FBSyx1QkFBdUIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsZ0JBQWdCLEtBQUssc0JBQXNCLHdCQUF3QixLQUFLLHFCQUFxQixtQkFBbUIseUJBQXlCLEtBQUssa0NBQWtDLHVCQUF1QixzQkFBc0IsS0FBSyw2QkFBNkIsb0JBQW9CLHFCQUFxQix3QkFBd0Isb0JBQW9CLEtBQUssc0NBQXNDLHlCQUF5QixvQkFBb0IscUNBQXFDLDBCQUEwQix5QkFBeUIsS0FBSyxzQkFBc0Isb0JBQW9CLDBCQUEwQixnQkFBZ0IsS0FBSyx3QkFBd0IsdUJBQXVCLHNCQUFzQixLQUFLLGdDQUFnQyxzQkFBc0IsS0FBSyx3QkFBd0Isc0JBQXNCLEtBQUssMkRBQTJELGtCQUFrQixzQkFBc0IsS0FBSyx5QkFBeUIsaUJBQWlCLHdCQUF3QixvQkFBb0IsNkJBQTZCLGVBQWUsS0FBSyx5QkFBeUIsd0JBQXdCLHNCQUFzQix1QkFBdUIsbUJBQW1CLG9CQUFvQixzQkFBc0Isd0JBQXdCLEtBQUssK0JBQStCLHFCQUFxQixLQUFLLGVBQWUsb0JBQW9CLDBCQUEwQixvQkFBb0IsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsS0FBSyxvQ0FBb0Msa0JBQWtCLG1CQUFtQiwwQkFBMEIsc0JBQXNCLDZCQUE2QixLQUFLLG1CQUFtQixrQkFBa0Isb0JBQW9CLDZCQUE2QixxQkFBcUIsS0FBSyxnQ0FBZ0Msd0JBQXdCLEtBQUssaUJBQWlCLG1CQUFtQix3QkFBd0Isa0JBQWtCLHlCQUF5QixLQUFLLHVCQUF1Qix1QkFBdUIsc0JBQXNCLEtBQUssK0NBQStDLG9CQUFvQixLQUFLLHlCQUF5QixnQ0FBZ0MseUJBQXlCLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEtBQUsscUNBQXFDLHFCQUFxQixtQkFBbUIsb0JBQW9CLHlDQUF5Qyx1QkFBdUIsS0FBSyxrQkFBa0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsb0JBQW9CLHlDQUF5QyxxQkFBcUIsS0FBSyxvQkFBb0Isb0JBQW9CLHFDQUFxQyxLQUFLLDBCQUEwQixtQkFBbUIseUNBQXlDLHdCQUF3QixzQkFBc0Isb0JBQW9CLEtBQUssZ0NBQWdDLHVCQUF1Qiw2QkFBNkIsS0FBSyxnQkFBZ0IseUNBQXlDLG1CQUFtQixvQkFBb0IsS0FBSyxzQkFBc0IsdUJBQXVCLHNCQUFzQixLQUFLLHVCQUF1QixvQkFBb0IsMkJBQTJCLGdCQUFnQixxQkFBcUIsS0FBSyw4QkFBOEIsbUJBQW1CLHNCQUFzQix5Q0FBeUMsa0JBQWtCLEtBQUssc0ZBQXNGLDBCQUEwQiw2QkFBNkIseUJBQXlCLEtBQUssNENBQTRDLDBCQUEwQixrQkFBa0IseUJBQXlCLGdDQUFnQyxLQUFLLDJFQUEyRSxrQkFBa0Isa0JBQWtCLHNCQUFzQixvQkFBb0IsS0FBSywrQkFBK0IsbUJBQW1CLG9CQUFvQix1QkFBdUIseUJBQXlCLGlEQUFpRCxLQUFLLHFDQUFxQyxtQkFBbUIsS0FBSyxvRUFBb0Usa0JBQWtCLGtCQUFrQixzQkFBc0Isb0JBQW9CLEtBQUsscUNBQXFDLG1CQUFtQixvQkFBb0Isb0JBQW9CLDZCQUE2Qix1QkFBdUIsb0JBQW9CLHlCQUF5QixpREFBaUQseUNBQXlDLHdCQUF3QixlQUFlLEtBQUssaURBQWlELG1CQUFtQix3QkFBd0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsS0FBSyxvQkFBb0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyx5QkFBeUIsb0JBQW9CLEtBQUssdUJBQXVCLHFCQUFxQixLQUFLLGlDQUFpQyxvQkFBb0IsNkJBQTZCLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLGtCQUFrQixtQkFBbUIsdUJBQXVCLHdCQUF3QixvQkFBb0IsNkJBQTZCLHlCQUF5Qix1QkFBdUIsS0FBSyxnREFBZ0Qsb0JBQW9CLHFDQUFxQywwQkFBMEIseUNBQXlDLHdCQUF3QixzQkFBc0IsdUJBQXVCLG1CQUFtQixtQkFBbUIseUJBQXlCLEtBQUssNEJBQTRCLG1CQUFtQix5Q0FBeUMsd0JBQXdCLHdCQUF3QixLQUFLLHNCQUFzQixvQkFBb0IsS0FBSyw4QkFBOEIsNkJBQTZCLEtBQUssZ0NBQWdDLG9CQUFvQixzQkFBc0IscUNBQXFDLDBCQUEwQixLQUFLLGtDQUFrQyx1QkFBdUIsS0FBSyxtQkFBbUI7QUFDajhuQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDSmdEO0FBQ1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLDJCQUEyQixnRUFBVTtBQUNyQyw0QkFBNEIsZ0VBQVU7QUFDdEM7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDOEM7QUFDVztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLFNBQVM7QUFDdEIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxTQUFTLCtEQUFTO0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0J3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDOUJ5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdLQUF3Szs7QUFFeEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFPQTtBQUNBO0FBRUEsTUFBTTZGLFlBQVksR0FBR3BKLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixRQUF2QixDQUFyQjtBQUNBLE1BQU1zSSxZQUFZLEdBQUdySixRQUFRLENBQUNlLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBckI7QUFFQSxNQUFNdUksY0FBYyxHQUFHdEosUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixrQkFBeEIsQ0FBdkI7QUFDQSxNQUFNa0gsY0FBYyxHQUFHdkosUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixrQkFBeEIsQ0FBdkI7QUFDQSxNQUFNbUgsV0FBVyxHQUFHeEosUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBcEI7QUFDQSxNQUFNb0gsaUJBQWlCLEdBQUd6SixRQUFRLENBQUNxQyxjQUFULENBQXdCLHNCQUF4QixDQUExQjtBQUVBLE1BQU1xSCxpQkFBaUIsR0FBRzFKLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixZQUF2QixDQUExQjtBQUNBLE1BQU00SSxpQkFBaUIsR0FBRzNKLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixxQkFBdkIsQ0FBMUI7QUFDQSxNQUFNNkksbUJBQW1CLEdBQUc1SixRQUFRLENBQUNlLGFBQVQsQ0FBdUIsd0JBQXZCLENBQTVCO0FBQ0EsTUFBTThJLHNCQUFzQixHQUFHN0osUUFBUSxDQUFDZSxhQUFULENBQXVCLGtCQUF2QixDQUEvQjtBQUVBLE1BQU0rSSxXQUFXLEdBQUc5SixRQUFRLENBQUMrSixnQkFBVCxDQUEwQixVQUExQixDQUFwQjtBQUVBLE1BQU1DLFVBQVUsR0FBR2hLLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixXQUF2QixDQUFuQjtBQUNBLE1BQU1rSixhQUFhLEdBQUdqSyxRQUFRLENBQUNlLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBdEI7QUFDQSxNQUFNbUosZ0JBQWdCLEdBQUdsSyxRQUFRLENBQUNlLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBQ0EsTUFBTW9KLG1CQUFtQixHQUFHbkssUUFBUSxDQUFDZSxhQUFULENBQXVCLG9CQUF2QixDQUE1QjtBQUNBLE1BQU1xSixtQkFBbUIsR0FBR3BLLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixvQkFBdkIsQ0FBNUI7QUFDQSxNQUFNc0osYUFBYSxHQUFHckssUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixhQUF4QixDQUF0QjtBQUNBLE1BQU1pSSxnQkFBZ0IsR0FBR3RLLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXpCO0FBQ0EsTUFBTWtJLE9BQU8sR0FBR3ZLLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBaEI7QUFFQSxNQUFNbUksYUFBYSxHQUFHeEssUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7QUFDQSxNQUFNb0ksbUJBQW1CLEdBQUd6SyxRQUFRLENBQUNxQyxjQUFULENBQXdCLHVCQUF4QixDQUE1QjtBQUNBLE1BQU1xSSxtQkFBbUIsR0FBRzFLLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsdUJBQXhCLENBQTVCO0FBRUEsTUFBTXNJLFdBQVcsR0FBRzNLLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQSxNQUFNdUksWUFBWSxHQUFHNUssUUFBUSxDQUFDcUMsY0FBVCxDQUF3Qix3QkFBeEIsQ0FBckI7QUFFQSxNQUFNd0ksWUFBWSxHQUNoQjdLLFFBQVEsQ0FBQ2UsYUFBVCxDQUF1QixpQkFBdkIsRUFBMEMrSixpQkFENUM7QUFHQSxNQUFNQyxPQUFPLEdBQUcsSUFBSXpHLHFEQUFKLEVBQWhCO0FBRUEsSUFBSTBHLGFBQWEsR0FBRyxDQUFwQjtBQUNBLElBQUlDLGFBQWEsR0FBRyxFQUFwQjtBQUVBQyxPQUFPO0FBRVA7QUFDQTtBQUNBOztBQUVBLFNBQVNsRCxVQUFULENBQW9CbUQsQ0FBcEIsRUFBdUI7RUFDckIsTUFBTUMsV0FBVyxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBUzFKLEtBQVQsQ0FBZTJKLFdBQWYsR0FBNkJDLElBQTdCLEVBQXBCO0VBQ0EsTUFBTTlHLFFBQVEsR0FBR3NHLE9BQU8sQ0FBQ3JGLGNBQVIsRUFBakI7RUFDQSxNQUFNMkQsWUFBWSxHQUFHLFVBQXJCO0VBRUEsSUFBSW1DLGlCQUFpQixHQUFHLEVBQXhCO0VBQ0EsSUFBSXJKLFVBQVUsR0FBRyxFQUFqQjtFQUNBLElBQUlzSixVQUFVLEdBQUcsRUFBakI7RUFDQSxJQUFJYixZQUFKOztFQUVBLElBQUksQ0FBQ1EsV0FBTCxFQUFrQjtJQUNoQmxKLDREQUFlLENBQUMsRUFBRCxDQUFmO0lBQ0E7RUFDRDs7RUFFRHVDLFFBQVEsQ0FBQzVDLE9BQVQsQ0FBa0JDLE9BQUQsSUFBYTtJQUM1QixJQUFJQSxPQUFPLENBQUNHLElBQVIsS0FBaUJvSCxZQUFyQixFQUFtQztNQUNqQ29DLFVBQVUsR0FBRyxDQUFDLEdBQUczSixPQUFPLENBQUMrRSxLQUFaLENBQWI7SUFDRCxDQUZELE1BRU87TUFDTDFFLFVBQVUsR0FBRyxDQUFDLEdBQUdBLFVBQUosRUFBZ0IsR0FBR0wsT0FBTyxDQUFDK0UsS0FBM0IsQ0FBYjtJQUNEO0VBQ0YsQ0FORDtFQVFBLE1BQU02RSxVQUFVLEdBQUd2SixVQUFVLENBQUMwRixNQUFYLENBQW1CckYsSUFBRCxJQUNuQ0EsSUFBSSxDQUFDSyxLQUFMLENBQVd5SSxXQUFYLEdBQXlCSyxRQUF6QixDQUFrQ1AsV0FBbEMsQ0FEaUIsQ0FBbkI7RUFJQSxNQUFNUSxlQUFlLEdBQUdILFVBQVUsQ0FBQzVELE1BQVgsQ0FBbUJyRixJQUFELElBQ3hDQSxJQUFJLENBQUNLLEtBQUwsQ0FBV3lJLFdBQVgsR0FBeUJLLFFBQXpCLENBQWtDUCxXQUFsQyxDQURzQixDQUF4Qjs7RUFJQSxJQUFJTSxVQUFVLENBQUM5SixNQUFmLEVBQXVCO0lBQ3JCZ0osWUFBWSxHQUFHMUksNERBQWUsQ0FBQ3dKLFVBQUQsQ0FBOUI7SUFDQUYsaUJBQWlCLEdBQUcsSUFBSUssS0FBSixDQUFVLEdBQUdqQixZQUFZLENBQUNrQixRQUExQixDQUFwQjtFQUNELENBSEQsTUFHTyxJQUFJRixlQUFlLENBQUNoSyxNQUFwQixFQUE0QjtJQUNqQ2dKLFlBQVksR0FBRzFJLDREQUFlLENBQUMwSixlQUFELENBQTlCO0lBQ0FKLGlCQUFpQixHQUFHLElBQUlLLEtBQUosQ0FBVSxHQUFHakIsWUFBWSxDQUFDa0IsUUFBMUIsQ0FBcEI7RUFDRCxDQUhNLE1BR0E7SUFDTGxCLFlBQVksR0FBRzFJLDREQUFlLENBQUMsRUFBRCxDQUE5QjtJQUNBc0osaUJBQWlCLEdBQUcsRUFBcEI7RUFDRCxDQXhDb0IsQ0EwQ3JCOzs7RUFDQU8sbUJBQW1CLENBQUNQLGlCQUFELENBQW5CO0FBQ0Q7O0FBRUQsU0FBU08sbUJBQVQsQ0FBNkJDLFdBQTdCLEVBQTBDO0VBQ3hDLE1BQU1DLGFBQWEsR0FBR0QsV0FBVyxDQUFDekUsS0FBWixDQUFrQixDQUFsQixDQUF0Qjs7RUFDQSxLQUFLLE1BQU0yRSxJQUFYLElBQW1CRCxhQUFuQixFQUFrQztJQUNoQyxNQUFNRSxjQUFjLEdBQUdELElBQUksQ0FBQ0UsVUFBTCxDQUFnQixDQUFoQixFQUFtQkEsVUFBbkIsQ0FBOEIsQ0FBOUIsRUFBaUMzSyxXQUF4RDtJQUNBeUssSUFBSSxDQUFDRyxnQkFBTCxDQUFzQixPQUF0QixFQUErQixNQUFNO01BQ25DeEIsWUFBWSxDQUFDcEosV0FBYixHQUEyQjBLLGNBQTNCO01BQ0FHLFlBQVk7SUFDYixDQUhEO0VBSUQ7QUFDRjtBQUNEO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0MsZUFBVCxDQUF5QnZHLE9BQXpCLEVBQWtDO0VBQ2hDLElBQUlBLE9BQU8sQ0FBQzNGLFFBQVIsR0FBbUJrTCxJQUFuQixFQUFKLEVBQStCO0lBQzdCLElBQUksQ0FBQ3ZGLE9BQU8sQ0FBQy9CLGNBQVIsR0FBeUJzSCxJQUF6QixFQUFMLEVBQXNDO01BQ3BDLE1BQU16SixPQUFPLEdBQUcwSyxnQkFBZ0IsQ0FBQzNCLFlBQVksQ0FBQ3BKLFdBQWQsQ0FBaEM7TUFDQSxNQUFNcUcsS0FBSyxHQUFHaUQsT0FBTyxDQUFDckUsaUJBQVIsQ0FBMEIsVUFBMUIsQ0FBZDs7TUFDQSxJQUFJNUUsT0FBTyxDQUFDQyxPQUFSLE9BQXNCK0YsS0FBSyxDQUFDL0YsT0FBTixFQUExQixFQUEyQztRQUN6Q2lFLE9BQU8sQ0FBQ2tDLGNBQVIsQ0FBdUJwRyxPQUFPLENBQUNDLE9BQVIsRUFBdkI7TUFDRDtJQUNGOztJQUNEZ0osT0FBTyxDQUFDaEYsY0FBUixDQUF1QkMsT0FBdkI7RUFDRDtBQUNGOztBQUVELFNBQVN5RyxrQkFBVCxDQUE0QkMsVUFBNUIsRUFBd0M7RUFDdEMsSUFBSUEsVUFBVSxDQUFDck0sUUFBWCxHQUFzQmtMLElBQXRCLEVBQUosRUFBa0M7SUFDaEMsTUFBTXpKLE9BQU8sR0FBRzBLLGdCQUFnQixDQUFDM0IsWUFBWSxDQUFDcEosV0FBZCxDQUFoQztJQUNBLE1BQU1xRyxLQUFLLEdBQUdpRCxPQUFPLENBQUNyRSxpQkFBUixDQUEwQixVQUExQixDQUFkOztJQUNBLElBQUk1RSxPQUFPLENBQUNDLE9BQVIsT0FBc0IrRixLQUFLLENBQUMvRixPQUFOLEVBQTFCLEVBQTJDO01BQ3pDZ0osT0FBTyxDQUFDN0Usc0JBQVIsQ0FDRThFLGFBREYsRUFFRTBCLFVBRkYsRUFHRTVLLE9BQU8sQ0FBQ0MsT0FBUixFQUhGO01BS0E7SUFDRDs7SUFDRGdKLE9BQU8sQ0FBQzNFLDBCQUFSLENBQW1DNEUsYUFBbkMsRUFBa0QwQixVQUFsRDtFQUNEO0FBQ0Y7O0FBRUQsU0FBU0MsZUFBVCxDQUF5QkMsU0FBekIsRUFBb0M7RUFDbEMsTUFBTTlLLE9BQU8sR0FBRzBLLGdCQUFnQixDQUFDM0IsWUFBWSxDQUFDcEosV0FBZCxDQUFoQztFQUNBLE9BQU9LLE9BQU8sQ0FBQytFLEtBQVIsQ0FBYytGLFNBQWQsQ0FBUDtBQUNEOztBQUVELFNBQVNDLGlCQUFULEdBQTZCO0VBQzNCNUIsYUFBYSxHQUFHWSxLQUFLLENBQUNpQixJQUFOLENBQVc5TSxRQUFRLENBQUMrSixnQkFBVCxDQUEwQixPQUExQixDQUFYLENBQWhCO0VBQ0EvSixRQUFRLENBQUMrSixnQkFBVCxDQUEwQixPQUExQixFQUFtQ2xJLE9BQW5DLENBQTJDLENBQUNrTCxJQUFELEVBQU9sTixLQUFQLEtBQWlCO0lBQzFEa04sSUFBSSxDQUFDQyxnQkFBTCxDQUFzQlgsZ0JBQXRCLENBQXVDLE9BQXZDLEVBQWdELE1BQU07TUFDcERDLFlBQVk7TUFDWjVDLGlCQUFpQixDQUFDdUQsV0FBbEIsQ0FBOEJoQyxhQUFhLENBQUNwTCxLQUFELENBQTNDO01BQ0FtTCxhQUFhLEdBQUduTCxLQUFoQjtNQUNBcU4sZ0JBQWdCO01BQ2hCNUwsZ0VBQW1CLENBQUN5SixPQUFPLENBQUNyRixjQUFSLEVBQUQsRUFBMkIrRSxtQkFBM0IsQ0FBbkI7TUFDQTBDLGtCQUFrQixDQUFDbEMsYUFBRCxFQUFnQnBMLEtBQWhCLENBQWxCO01BQ0FpRSxnRUFBa0IsQ0FBQzZJLGVBQWUsQ0FBQzlNLEtBQUQsQ0FBaEIsQ0FBbEI7SUFDRCxDQVJEO0VBU0QsQ0FWRDtBQVdEOztBQUVELFNBQVN1TixhQUFULEdBQXlCO0VBQ3ZCcE4sUUFBUSxDQUFDK0osZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUNsSSxPQUFuQyxDQUEyQyxDQUFDa0wsSUFBRCxFQUFPekUsQ0FBUCxLQUFhO0lBQ3REeUUsSUFBSSxDQUFDakMsaUJBQUwsQ0FBdUJ1QixnQkFBdkIsQ0FBd0MsUUFBeEMsRUFBbURsQixDQUFELElBQU87TUFDdkQsSUFBSUEsQ0FBQyxDQUFDRSxNQUFGLENBQVNnQyxPQUFiLEVBQXNCO1FBQ3BCLE1BQU12TCxPQUFPLEdBQUcwSyxnQkFBZ0IsQ0FBQzNCLFlBQVksQ0FBQ3BKLFdBQWQsQ0FBaEM7UUFDQSxNQUFNcUcsS0FBSyxHQUFHaUQsT0FBTyxDQUFDckUsaUJBQVIsQ0FBMEIsVUFBMUIsQ0FBZDs7UUFDQSxJQUFJNUUsT0FBTyxDQUFDQyxPQUFSLE9BQXNCK0YsS0FBSyxDQUFDL0YsT0FBTixFQUExQixFQUEyQztVQUN6Q2dKLE9BQU8sQ0FBQ3pFLHNCQUFSLENBQStCZ0MsQ0FBL0IsRUFBa0N4RyxPQUFPLENBQUNDLE9BQVIsRUFBbEM7UUFDRCxDQUZELE1BRU87VUFDTGdKLE9BQU8sQ0FBQ3ZFLDBCQUFSLENBQW1DOEIsQ0FBbkM7UUFDRDs7UUFDRGdFLFlBQVk7UUFDWmdCLGdCQUFnQjtNQUNqQjtJQUNGLENBWkQ7RUFhRCxDQWREO0FBZUQ7O0FBRUQsU0FBU2QsZ0JBQVQsQ0FBMEJ2TCxXQUExQixFQUF1QztFQUNyQyxPQUFPOEosT0FBTyxDQUFDckUsaUJBQVIsQ0FBMEJ6RixXQUExQixDQUFQO0FBQ0Q7O0FBRUQsU0FBU3FMLFlBQVQsR0FBd0I7RUFDdEJpQixtQkFBbUI7RUFDbkIsTUFBTUMsTUFBTSxHQUFHaEIsZ0JBQWdCLENBQUMzQixZQUFZLENBQUNwSixXQUFkLENBQS9COztFQUNBLElBQUkrTCxNQUFKLEVBQVk7SUFDVkEsTUFBTSxDQUFDM0csS0FBUCxDQUFhaEYsT0FBYixDQUFxQixDQUFDVyxJQUFELEVBQU84RixDQUFQLEtBQWExSSwyREFBYyxDQUFDMEksQ0FBRCxFQUFJOUYsSUFBSixDQUFoRDtJQUNBcUssaUJBQWlCO0lBQ2pCTyxhQUFhO0VBQ2Q7QUFDRjs7QUFFRCxTQUFTRSxnQkFBVCxHQUE0QjtFQUMxQixNQUFNak0sZUFBZSxHQUFHckIsUUFBUSxDQUFDK0osZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQXhCO0VBQ0ExSSxlQUFlLENBQUNRLE9BQWhCLENBQXdCLENBQUNvRixJQUFELEVBQU9xQixDQUFQLEtBQWE7SUFDbkMsTUFBTW1GLGFBQWEsR0FBRzFDLE9BQU8sQ0FBQ3JGLGNBQVIsR0FBeUI0QyxDQUF6QixFQUE0QnpCLEtBQTVCLENBQWtDakYsTUFBeEQ7SUFDQXFGLElBQUksQ0FBQ3hGLFdBQUwsR0FBbUIsRUFBbkI7O0lBQ0EsSUFBSWdNLGFBQWEsR0FBRyxDQUFwQixFQUF1QjtNQUNyQnhHLElBQUksQ0FBQ3hGLFdBQUwsR0FBbUJnTSxhQUFuQjtJQUNEO0VBQ0YsQ0FORDtBQU9EOztBQUVELFNBQVNDLGNBQVQsQ0FBd0JkLFNBQXhCLEVBQW1DZSxRQUFuQyxFQUE2QztFQUMzQyxNQUFNQyxZQUFZLEdBQUc1TixRQUFRLENBQUMrSixnQkFBVCxDQUEwQixPQUExQixFQUFtQzZDLFNBQW5DLENBQXJCOztFQUNBLElBQUlnQixZQUFKLEVBQWtCO0lBQ2hCQSxZQUFZLENBQUNqTixLQUFiLENBQW1CQyxPQUFuQiwrQkFBa0QrTSxRQUFRLENBQUNwSyxRQUEzRDtJQUVBLE1BQU1zSyxTQUFTLEdBQUdELFlBQVksQ0FBQzlCLFFBQWIsQ0FBc0IsQ0FBdEIsRUFBeUJoQixpQkFBM0M7SUFDQSxNQUFNZ0QsZUFBZSxHQUFHRixZQUFZLENBQUM5QixRQUFiLENBQXNCLENBQXRCLEVBQXlCa0IsZ0JBQWpEO0lBRUFhLFNBQVMsQ0FBQ3BNLFdBQVYsR0FBd0JrTSxRQUFRLENBQUM5SyxLQUFqQztJQUNBaUwsZUFBZSxDQUFDck0sV0FBaEIsR0FBOEJrTSxRQUFRLENBQUMzSyxXQUF2QztFQUNEO0FBQ0Y7O0FBRUQsU0FBU21LLGtCQUFULENBQTRCWSxTQUE1QixFQUF1Q25CLFNBQXZDLEVBQWtEO0VBQ2hELElBQUltQixTQUFTLENBQUNuTSxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0lBQzFCOEgsaUJBQWlCLENBQUM1SSxXQUFsQixDQUE4QndJLGNBQTlCO0VBQ0QsQ0FGRCxNQUVPLElBQUl5RSxTQUFTLENBQUNuTSxNQUFWLEdBQW1CLENBQW5CLEtBQXlCZ0wsU0FBN0IsRUFBd0M7SUFDN0NsRCxpQkFBaUIsQ0FBQzVJLFdBQWxCLENBQThCd0ksY0FBOUI7RUFDRCxDQUZNLE1BRUE7SUFDTEksaUJBQWlCLENBQUNzRSxZQUFsQixDQUErQjFFLGNBQS9CLEVBQStDeUUsU0FBUyxDQUFDbkIsU0FBUyxHQUFHLENBQWIsQ0FBeEQ7RUFDRDs7RUFFRHFCLGtCQUFrQjtFQUVsQjlELG1CQUFtQixDQUFDa0MsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDLE1BQU07SUFDbEQ2QixtQkFBbUI7SUFDbkI1QixZQUFZO0VBQ2IsQ0FIRDtBQUlEOztBQUVELFNBQVM2QixvQkFBVCxDQUE4QnJNLE9BQTlCLEVBQXVDO0VBQ3JDK0ksWUFBWSxDQUFDcEosV0FBYixHQUEyQkssT0FBTyxDQUFDZ0ssUUFBUixDQUFpQixDQUFqQixFQUFvQmtCLGdCQUFwQixDQUFxQ3ZMLFdBQWhFO0VBQ0F5TCxnQkFBZ0I7RUFDaEJnQixtQkFBbUI7RUFDbkJFLGtCQUFrQixDQUFDdE0sT0FBRCxDQUFsQjtFQUNBeUwsbUJBQW1CO0VBQ25CakIsWUFBWTtBQUNiOztBQUVELFNBQVMrQixtQkFBVCxHQUErQjtFQUM3QkgsbUJBQW1CO0VBQ25CNUIsWUFBWTtFQUNaaEwsZ0VBQW1CLENBQUN5SixPQUFPLENBQUNyRixjQUFSLEVBQUQsRUFBMkI4RSxhQUEzQixDQUFuQjtFQUNBOEQsZUFBZTtBQUNoQjtBQUVEO0FBQ0E7QUFDQTs7O0FBRUEsU0FBUzVKLFVBQVQsQ0FBb0J6RCxXQUFwQixFQUFpQztFQUMvQixJQUFJQSxXQUFKLEVBQWlCO0lBQ2YsTUFBTXNOLFVBQVUsR0FBRyxJQUFJbEssZ0RBQUosQ0FBWXBELFdBQVosQ0FBbkI7SUFDQThKLE9BQU8sQ0FBQ3BGLGlCQUFSLENBQTBCNEksVUFBMUI7RUFDRDtBQUNGOztBQUVELE1BQU1DLGFBQWEsR0FBSXZOLFdBQUQsSUFBaUI7RUFDckM4SixPQUFPLENBQUNuRixvQkFBUixDQUE2QjNFLFdBQTdCO0FBQ0QsQ0FGRDs7QUFJQSxTQUFTd04sb0JBQVQsQ0FBOEJ0RCxDQUE5QixFQUFpQztFQUMvQixNQUFNbEssV0FBVyxHQUNma0ssQ0FBQyxDQUFDRSxNQUFGLENBQVNxRCxhQUFULENBQXVCNUMsUUFBdkIsQ0FBZ0MsQ0FBaEMsRUFBbUNBLFFBQW5DLENBQTRDLENBQTVDLEVBQStDckssV0FEakQ7RUFFQStNLGFBQWEsQ0FBQ3ZOLFdBQUQsQ0FBYjtFQUNBME4sZ0JBQWdCO0VBQ2hCckIsZ0JBQWdCO0FBQ2pCOztBQUVELFNBQVNzQixpQkFBVCxHQUE2QjtFQUMzQixNQUFNQyxXQUFXLEdBQUc3TyxRQUFRLENBQUMrSixnQkFBVCxDQUEwQixVQUExQixDQUFwQjtFQUNBLE1BQU0rRSxjQUFjLEdBQUc5TyxRQUFRLENBQUMrSixnQkFBVCxDQUEwQixpQkFBMUIsQ0FBdkI7RUFDQThFLFdBQVcsQ0FBQ2hOLE9BQVosQ0FBcUJDLE9BQUQsSUFBYTtJQUMvQkEsT0FBTyxDQUFDdUssZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsTUFBTThCLG9CQUFvQixDQUFDck0sT0FBRCxDQUE1RDtFQUNELENBRkQ7RUFHQWdOLGNBQWMsQ0FBQ2pOLE9BQWYsQ0FBd0JrTixJQUFELElBQVU7SUFDL0JBLElBQUksQ0FBQzFDLGdCQUFMLENBQXNCLE9BQXRCLEVBQWdDbEIsQ0FBRCxJQUFPc0Qsb0JBQW9CLENBQUN0RCxDQUFELENBQTFEO0VBQ0QsQ0FGRDtBQUdEOztBQUVELFNBQVN3RCxnQkFBVCxHQUE0QjtFQUMxQkssc0JBQXNCO0VBQ3RCakUsT0FBTyxDQUFDckYsY0FBUixHQUF5QjdELE9BQXpCLENBQWtDQyxPQUFELElBQWE7SUFDNUMsTUFBTWIsV0FBVyxHQUFHYSxPQUFPLENBQUNDLE9BQVIsRUFBcEI7O0lBQ0EsSUFBSWQsV0FBVyxLQUFLLE9BQWhCLElBQTJCQSxXQUFXLEtBQUssVUFBL0MsRUFBMkQ7TUFDekQwSSxpQkFBaUIsQ0FBQzdJLFdBQWxCLENBQThCRSwrREFBa0IsQ0FBQ0MsV0FBRCxDQUFoRDtJQUNEO0VBQ0YsQ0FMRDtFQU1BMk4saUJBQWlCO0FBQ2xCOztBQUVELFNBQVNLLGtCQUFULEdBQThCO0VBQzVCLE1BQU1DLGVBQWUsR0FBR2xQLFFBQVEsQ0FBQ3FDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBeEI7RUFFQTZNLGVBQWUsQ0FBQzdDLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxNQUFNO0lBQzlDNkMsZUFBZSxDQUFDMU8sU0FBaEIsQ0FBMEIyTyxNQUExQixDQUFpQyxrQkFBakM7SUFDQUQsZUFBZSxDQUFDMU8sU0FBaEIsQ0FBMEIyTyxNQUExQixDQUFpQyxpQkFBakM7SUFDQXhGLGlCQUFpQixDQUFDbkosU0FBbEIsQ0FBNEIyTyxNQUE1QixDQUFtQyxjQUFuQzs7SUFFQSxJQUFJRCxlQUFlLENBQUMxTyxTQUFoQixDQUEwQjRPLFFBQTFCLENBQW1DLGlCQUFuQyxDQUFKLEVBQTJEO01BQ3pEVCxnQkFBZ0I7TUFDaEJyQixnQkFBZ0I7SUFDakI7RUFDRixDQVREO0FBVUQ7O0FBRUQsU0FBU2Msa0JBQVQsQ0FBNEJpQixPQUE1QixFQUFxQztFQUNuQyxNQUFNQyxZQUFZLEdBQUd6RCxLQUFLLENBQUNpQixJQUFOLENBQVdoRCxXQUFYLENBQXJCO0VBQ0EsTUFBTXJGLFFBQVEsR0FBR29ILEtBQUssQ0FBQ2lCLElBQU4sQ0FBV25ELGlCQUFpQixDQUFDbUMsUUFBN0IsQ0FBakI7RUFDQXdELFlBQVksQ0FBQ0MsTUFBYixDQUFvQjlLLFFBQXBCLEVBQThCNUMsT0FBOUIsQ0FBdUNvRixJQUFELElBQVU7SUFDOUNBLElBQUksQ0FBQ3pHLFNBQUwsQ0FBZWdQLE1BQWYsQ0FBc0IsZ0JBQXRCO0VBQ0QsQ0FGRDtFQUdBSCxPQUFPLENBQUM3TyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixnQkFBdEI7QUFDRDs7QUFFRCxTQUFTZ1Asa0JBQVQsR0FBOEI7RUFDNUI3RixtQkFBbUIsQ0FBQ3BKLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxXQUFsQztFQUNBeUosZ0JBQWdCLENBQUNtQyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsTUFBTTtJQUMvQzlDLGNBQWMsQ0FBQ21HLEtBQWY7SUFDQTlGLG1CQUFtQixDQUFDcEosU0FBcEIsQ0FBOEJnUCxNQUE5QixDQUFxQyxXQUFyQztFQUNELENBSEQ7QUFJRDtBQUVEO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU0csY0FBVCxDQUF3QnhFLENBQXhCLEVBQTJCO0VBQ3pCQSxDQUFDLENBQUN5RSxjQUFGO0VBQ0E3RSxPQUFPLENBQUN4RyxlQUFSO0VBQ0FnSSxlQUFlLENBQUN4SiwrREFBaUIsRUFBbEIsQ0FBZjtFQUNBdUosWUFBWTtFQUNaZ0IsZ0JBQWdCO0VBQ2hCOUQsV0FBVyxDQUFDa0csS0FBWjtBQUNEOztBQUVELFNBQVNHLGlCQUFULENBQTJCMUUsQ0FBM0IsRUFBOEI7RUFDNUJBLENBQUMsQ0FBQ3lFLGNBQUY7RUFDQW5ELGtCQUFrQixDQUFDdkksaUVBQW1CLEVBQXBCLENBQWxCO0VBQ0F3SixjQUFjLENBQUMxQyxhQUFELEVBQWdCOUcsaUVBQW1CLEVBQW5DLENBQWQ7RUFDQWdLLG1CQUFtQjtFQUNuQjVCLFlBQVk7RUFDWmdCLGdCQUFnQjtBQUNqQjs7QUFFRCxTQUFTd0MsaUJBQVQsQ0FBMkIzRSxDQUEzQixFQUE4QjtFQUM1QkEsQ0FBQyxDQUFDeUUsY0FBRjtFQUNBckQsZUFBZSxDQUFDcEksaUVBQW1CLEVBQXBCLENBQWY7RUFDQW1JLFlBQVk7RUFDWmdCLGdCQUFnQjtFQUNoQjdELGlCQUFpQixDQUFDaUcsS0FBbEI7QUFDRDs7QUFFRCxTQUFTSyxpQkFBVCxDQUEyQjVFLENBQTNCLEVBQThCO0VBQzVCQSxDQUFDLENBQUN5RSxjQUFGO0VBQ0EsTUFBTUksZ0JBQWdCLEdBQUdoUSxRQUFRLENBQUNxQyxjQUFULENBQXdCLGNBQXhCLENBQXpCO0VBQ0EsTUFBTXBCLFdBQVcsR0FBRytPLGdCQUFnQixDQUFDck8sS0FBakIsQ0FBdUI0SixJQUF2QixFQUFwQjtFQUVBN0csVUFBVSxDQUFDekQsV0FBRCxDQUFWO0VBQ0EwTixnQkFBZ0I7RUFDaEJDLGlCQUFpQjtFQUVqQnROLGdFQUFtQixDQUFDeUosT0FBTyxDQUFDckYsY0FBUixFQUFELEVBQTJCOEUsYUFBM0IsQ0FBbkI7RUFDQWxKLGdFQUFtQixDQUFDeUosT0FBTyxDQUFDckYsY0FBUixFQUFELEVBQTJCK0UsbUJBQTNCLENBQW5CO0VBQ0FuSixnRUFBbUIsQ0FBQ3lKLE9BQU8sQ0FBQ3JGLGNBQVIsRUFBRCxFQUEyQmdGLG1CQUEzQixDQUFuQjtFQUVBbkIsY0FBYyxDQUFDbUcsS0FBZjtFQUNBOUYsbUJBQW1CLENBQUNwSixTQUFwQixDQUE4QmdQLE1BQTlCLENBQXFDLFdBQXJDO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7OztBQUVBLFNBQVNTLHFCQUFULEdBQWlDO0VBQy9CM08sZ0VBQW1CLENBQUN5SixPQUFPLENBQUNyRixjQUFSLEVBQUQsRUFBMkJnRixtQkFBM0IsQ0FBbkI7RUFDQWIsc0JBQXNCLENBQUNySixTQUF2QixDQUFpQ0MsR0FBakMsQ0FBcUMsV0FBckM7QUFDRDs7QUFFRCxTQUFTeVAsc0JBQVQsR0FBa0M7RUFDaENyRyxzQkFBc0IsQ0FBQ3JKLFNBQXZCLENBQWlDZ1AsTUFBakMsQ0FBd0MsV0FBeEM7QUFDRDs7QUFFRCxTQUFTdEMsZ0JBQVQsR0FBNEI7RUFDMUIxRCxXQUFXLENBQUNrRyxLQUFaO0VBQ0FsRyxXQUFXLENBQUNoSixTQUFaLENBQXNCZ1AsTUFBdEIsQ0FBNkIsY0FBN0I7QUFDRDs7QUFFRCxTQUFTbEIsZUFBVCxHQUEyQjtFQUN6QjlFLFdBQVcsQ0FBQ2hKLFNBQVosQ0FBc0JDLEdBQXRCLENBQTBCLGNBQTFCO0FBQ0Q7O0FBRUQsU0FBU3lOLG1CQUFULEdBQStCO0VBQzdCNUUsY0FBYyxDQUFDOUksU0FBZixDQUF5QmdQLE1BQXpCLENBQWdDLGNBQWhDO0FBQ0Q7O0FBRUQsU0FBU3ZCLGtCQUFULEdBQThCO0VBQzVCM0UsY0FBYyxDQUFDOUksU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsY0FBN0I7QUFDRDs7QUFFRCxTQUFTOE0sbUJBQVQsR0FBK0I7RUFDN0I3RCxpQkFBaUIsQ0FBQ2pJLFdBQWxCLEdBQWdDLEVBQWhDO0FBQ0Q7O0FBRUQsU0FBU3VOLHNCQUFULEdBQWtDO0VBQ2hDckYsaUJBQWlCLENBQUNsSSxXQUFsQixHQUFnQyxFQUFoQztBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFFQWdJLGlCQUFpQixDQUFDNEMsZ0JBQWxCLENBQW1DLFFBQW5DLEVBQThDbEIsQ0FBRCxJQUFPMkUsaUJBQWlCLENBQUMzRSxDQUFELENBQXJFO0FBQ0E3QixjQUFjLENBQUMrQyxnQkFBZixDQUFnQyxRQUFoQyxFQUEyQ2xCLENBQUQsSUFBTzBFLGlCQUFpQixDQUFDMUUsQ0FBRCxDQUFsRTtBQUNBNUIsY0FBYyxDQUFDOEMsZ0JBQWYsQ0FBZ0MsUUFBaEMsRUFBMkNsQixDQUFELElBQU80RSxpQkFBaUIsQ0FBQzVFLENBQUQsQ0FBbEU7QUFDQTNCLFdBQVcsQ0FBQzZDLGdCQUFaLENBQTZCLFFBQTdCLEVBQXdDbEIsQ0FBRCxJQUFPd0UsY0FBYyxDQUFDeEUsQ0FBRCxDQUE1RDtBQUVBL0IsWUFBWSxDQUFDaUQsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFDckM4QixvQkFBb0IsQ0FBQy9FLFlBQUQsQ0FEdEI7QUFHQUMsWUFBWSxDQUFDZ0QsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsTUFDckM4QixvQkFBb0IsQ0FBQzlFLFlBQUQsQ0FEdEI7QUFJQVcsVUFBVSxDQUFDcUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNnQyxtQkFBckM7QUFDQXBFLGFBQWEsQ0FBQ29DLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDYSxnQkFBeEM7QUFDQTVDLGdCQUFnQixDQUFDK0IsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDNEQscUJBQTNDO0FBQ0E3RixtQkFBbUIsQ0FBQ2lDLGdCQUFwQixDQUFxQyxPQUFyQyxFQUE4QzZELHNCQUE5QztBQUNBN0YsYUFBYSxDQUFDZ0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NvRCxrQkFBeEM7QUFFQWxGLE9BQU8sQ0FBQzhCLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLE1BQU07RUFDdEN4QixZQUFZLENBQUNwSixXQUFiLEdBQTJCLE9BQTNCO0VBQ0EyTSxrQkFBa0IsQ0FBQy9FLFlBQUQsQ0FBbEI7RUFDQWlELFlBQVk7QUFDYixDQUpEO0FBTUEzQixXQUFXLENBQUMwQixnQkFBWixDQUE2QixPQUE3QixFQUF1Q2xCLENBQUQsSUFBT25ELFVBQVUsQ0FBQ21ELENBQUQsQ0FBdkQ7QUFDQVIsV0FBVyxDQUFDMEIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsTUFBTTtFQUMxQ3pCLFlBQVksQ0FBQ3BLLFNBQWIsQ0FBdUJnUCxNQUF2QixDQUE4QixhQUE5QjtBQUNELENBRkQ7QUFHQTdFLFdBQVcsQ0FBQzBCLGdCQUFaLENBQTZCLFVBQTdCLEVBQXlDLE1BQU07RUFDN0MxQixXQUFXLENBQUNoSixLQUFaLEdBQW9CLEVBQXBCO0FBQ0QsQ0FGRDtBQUlBd08sTUFBTSxDQUFDOUQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBa0NsQixDQUFELElBQU87RUFDdEMsSUFBSUEsQ0FBQyxDQUFDRSxNQUFGLEtBQWFWLFdBQWpCLEVBQThCO0lBQzVCQyxZQUFZLENBQUNwSyxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixhQUEzQjtFQUNEO0FBQ0YsQ0FKRDtBQU1BO0FBQ0E7QUFDQTs7QUFFQSxTQUFTMlAsY0FBVCxHQUEwQjtFQUN4QixNQUFNQyxVQUFVLEdBQUcsSUFBSWxJLElBQUosRUFBbkI7RUFDQSxNQUFNbUksSUFBSSxHQUFHRCxVQUFVLENBQUNFLFdBQVgsRUFBYjtFQUNBLElBQUlDLEtBQUssR0FBR0gsVUFBVSxDQUFDSSxRQUFYLEtBQXdCLENBQXBDO0VBQ0EsSUFBSUMsSUFBSSxHQUFHTCxVQUFVLENBQUNNLE9BQVgsRUFBWDs7RUFFQSxJQUFJSCxLQUFLLEdBQUcsRUFBWixFQUFnQjtJQUNkQSxLQUFLLGNBQU9BLEtBQVAsQ0FBTDtFQUNEOztFQUNELElBQUlFLElBQUksR0FBRyxFQUFYLEVBQWU7SUFDYkEsSUFBSSxjQUFPQSxJQUFQLENBQUo7RUFDRDs7RUFFRCxpQkFBVUosSUFBVixjQUFrQkUsS0FBbEIsY0FBMkJFLElBQTNCO0FBQ0Q7O0FBRUQsU0FBU0UsY0FBVCxHQUEwQjtFQUN4QixNQUFNM04sT0FBTyxHQUFHakQsUUFBUSxDQUFDcUMsY0FBVCxDQUF3QixTQUF4QixDQUFoQjtFQUNBLE1BQU13TyxhQUFhLEdBQUc3USxRQUFRLENBQUNxQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUNBLE1BQU15TyxhQUFhLEdBQUc5USxRQUFRLENBQUNxQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUVBWSxPQUFPLENBQUN2QyxZQUFSLENBQXFCLEtBQXJCLEVBQTRCMFAsY0FBYyxFQUExQztFQUNBUyxhQUFhLENBQUNuUSxZQUFkLENBQTJCLEtBQTNCLEVBQWtDMFAsY0FBYyxFQUFoRDtFQUNBVSxhQUFhLENBQUNwUSxZQUFkLENBQTJCLEtBQTNCLEVBQWtDMFAsY0FBYyxFQUFoRDtBQUNEO0FBRUQ7QUFDQTtBQUNBOzs7QUFFQSxTQUFTbEYsT0FBVCxHQUFtQjtFQUNqQkgsT0FBTyxDQUFDeEcsZUFBUixHQURpQixDQUNVOztFQUMzQmpELGdFQUFtQixDQUFDeUosT0FBTyxDQUFDckYsY0FBUixFQUFELEVBQTJCOEUsYUFBM0IsQ0FBbkI7RUFDQXlFLGtCQUFrQjtFQUNsQjNDLFlBQVk7RUFDWmdCLGdCQUFnQjtFQUNoQnNELGNBQWM7QUFDZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mb3JtQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDYXJkVG9kbyhpbmRleCwgb2JqVG9kbykge1xyXG4gIGNvbnN0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdlRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uVXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICBkaXZUYXNrLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrLWZpbmlzaGVkXCIgLz5gO1xyXG4gIGRpdlRhc2tJbmZvLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZS1jYXJkXCI+JHtvYmpUb2RvLmdldFRpdGxlKCl9PC9oMj5cclxuICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiIGlkPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCI+JHtvYmpUb2RvLmdldERlc2NyaXB0aW9uKCl9PC9wPlxyXG4gIDxwPiR7b2JqVG9kby5nZXREdWVEYXRlKCl9PC9wPmA7XHJcblxyXG4gIGljb25VcGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcclxuXHJcbiAgZGl2VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcImluZGV4LXRvZG9cIiwgaW5kZXgpO1xyXG4gIGRpdlRhc2suc3R5bGUuY3NzVGV4dCA9IGBib3JkZXItbGVmdDogMnB4IHNvbGlkICR7b2JqVG9kby5nZXRQcmlvcml0eSgpfWA7XHJcblxyXG4gIGRpdlRhc2suYXBwZW5kQ2hpbGQoZGl2VGFza0luZm8pO1xyXG4gIGRpdlRhc2suYXBwZW5kQ2hpbGQoaWNvblVwZGF0ZVRhc2spO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKS5hcHBlbmRDaGlsZChkaXZUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3ROYW1lKSB7XHJcbiAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHNwYW5OdW1iZXJUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZmlsZVwiPjwvaT5cclxuICA8cCBpZD1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9wPmA7XHJcblxyXG4gIHNwYW5OdW1iZXJUb2Rvcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bWJlci1vZi10YXNrc1wiKTtcclxuXHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXRyYXNoLWNhblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gIGRpdlByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIiwgXCJzZWN0aW9uXCIpO1xyXG5cclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGRpdkluZm8pO1xyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbk51bWJlclRvZG9zKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGljb25EZWxldGUpO1xyXG5cclxuICByZXR1cm4gZGl2UHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9ucyhhcnJheVByb2plY3RzLCBzZWxlY3QpIHtcclxuICBzZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBjb25zdCBvcHRpb25IaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIG9wdGlvbkhpZGRlbi52YWx1ZSA9IFwiXCI7XHJcbiAgb3B0aW9uSGlkZGVuLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcclxuICBvcHRpb25IaWRkZW4udGV4dENvbnRlbnQgPSBcIlByb3llY3Rvc1wiO1xyXG5cclxuICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uSGlkZGVuKTtcclxuXHJcbiAgaWYgKGFycmF5UHJvamVjdHMubGVuZ3RoKSB7XHJcbiAgICBhcnJheVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIkFjdHVhbGVzXCIpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2hvd1RvZG9zKHRvZG9zQXJyYXkpIHtcclxuICBjb25zdCBzZWFyY2hlZFRvZG9zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2gtdG9kb3MtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGluYm94VGl0bGUgPSBcIkluYm94XCI7XHJcbiAgY29uc3QgdG9kYXlUaXRsZSA9IFwiQWN0dWFsZXNcIjtcclxuICBzZWFyY2hlZFRvZG9zLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicmVjZW50bHktc2VhcmNoZWRcIj50YXJlYXMgYnVzY2FkYXM6PC9kaXY+YDtcclxuICBpZiAodG9kb3NBcnJheS5sZW5ndGgpIHtcclxuICAgIGZvciAoY29uc3QgdG9kbyBvZiB0b2Rvc0FycmF5KSB7XHJcbiAgICAgIGNvbnN0IGRpdlRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBwcm9qZWN0VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGluZm9Ub2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgIGNvbnN0IGljb25Qcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRvZG8ucHJvamVjdE5hbWU7XHJcblxyXG4gICAgICBpZiAodG9kby5wcm9qZWN0TmFtZSA9PT0gaW5ib3hUaXRsZSkge1xyXG4gICAgICAgIGljb25Qcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLWluYm94XCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRvZG8ucHJvamVjdE5hbWUgPT09IFwiXCIpIHtcclxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHRvZGF5VGl0bGU7XHJcbiAgICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtY2FsZW5kYXItY2hlY2tcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS1maWxlXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcm9qZWN0VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWFyY2hlZC1wcm9qZWN0XCIpO1xyXG4gICAgICBwcm9qZWN0VG9kby5hcHBlbmRDaGlsZChpY29uUHJvamVjdCk7XHJcbiAgICAgIHByb2plY3RUb2RvLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgIGluZm9Ub2RvLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcclxuXHJcbiAgICAgIGRpdlRvZG8uY2xhc3NMaXN0LmFkZChcInRvZG8tc2VhcmNoZWRcIik7XHJcbiAgICAgIGRpdlRvZG8uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXNlYXJjaGVkXCIpO1xyXG4gICAgICBkaXZUb2RvLmFwcGVuZENoaWxkKGluZm9Ub2RvKTtcclxuICAgICAgZGl2VG9kby5hcHBlbmRDaGlsZChwcm9qZWN0VG9kbyk7XHJcblxyXG4gICAgICBzZWFyY2hlZFRvZG9zLmFwcGVuZENoaWxkKGRpdlRvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gc2VhcmNoZWRUb2RvcztcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBjcmVhdGVDYXJkVG9kbyxcclxuICBjcmVhdGVDYXJkUHJvamVjdHMsXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyxcclxuICBjcmVhdGVTaG93VG9kb3MsXHJcbn07XHJcbiIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Gb3JtKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1VcGRhdGVJbnB1dHMoKSB7XHJcbiAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0Q2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktdXBkYXRlXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRUaXRsZSxcclxuICAgIGlucHV0RGVzY3JpcHRpb24sXHJcbiAgICBpbnB1dER1ZURhdGUsXHJcbiAgICBpbnB1dENob29zZVByb2plY3QsXHJcbiAgICBpbnB1dFByaW9yaXR5LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbmZvRm9ybVVwZGF0ZShkYXRhT2JqZWN0KSB7XHJcbiAgY29uc3QgaW5wdXRzRm9ybVVwZGF0ZSA9IGdldEZvcm1VcGRhdGVJbnB1dHMoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0VGl0bGUudmFsdWUgPSBkYXRhT2JqZWN0LmdldFRpdGxlKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gZGF0YU9iamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREdWVEYXRlLnZhbHVlID0gZGF0YU9iamVjdFxyXG4gICAgLmdldER1ZURhdGUoKVxyXG4gICAgLnJlcGxhY2UoLyhcXC8pL2csIFwiLVwiKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0Q2hvb3NlUHJvamVjdC52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0UHJvamVjdE5hbWUoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0UHJpb3JpdHkudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByaW9yaXR5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zvcm1VcGRhdGUoKSB7XHJcbiAgY29uc3QgaW5wdXRzRm9ybVVwZGF0ZSA9IGdldEZvcm1VcGRhdGVJbnB1dHMoKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0VGl0bGUudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RGVzY3JpcHRpb24udmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREdWVEYXRlLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0Q2hvb3NlUHJvamVjdDtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0UHJpb3JpdHk7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21OYXZiYXIoKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS1uYXZiYXJcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb24tbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZS1uYXZiYXJcIilcclxuICAgIC52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC1uYXZiYXJcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LW5hdmJhclwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBnZXRWYWx1ZXNGcm9tRm9ybSxcclxuICBnZXRWYWx1ZXNGb3JtVXBkYXRlLFxyXG4gIGdldFZhbHVlc0Zyb21OYXZiYXIsXHJcbiAgc2hvd0luZm9Gb3JtVXBkYXRlLFxyXG59O1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlIHtcclxuICBsb2FkRGF0YVN0b3JhZ2UoKSB7XHJcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIkluYm94XCIpKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIkFjdHVhbGVzXCIpKTtcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0c1N0b3JhZ2UoZGF0YVByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGRhdGFQcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHNTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBuZXcgUHJvamVjdHMoKSxcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0cy5zZXRQcm9qZWN0cyhcclxuICAgICAgcHJvamVjdHNcclxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICApO1xyXG5cclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0LnNldFRvZG9zKFxyXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgdG9kbykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHJldHVybiBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdFN0b3JhZ2UocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb1N0b3JhZ2UodG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy51cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleCwgdG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMudXBkYXRlVG9kb0Zyb21Ub2RheShpbmRleCwgdG9kb09iaik7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb1RvZGF5U3RvcmFnZShpbmRleCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGluZGV4KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5kZWxldGVUb2RvRnJvbVRvZGF5KGluZGV4KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcmV0dXJuIHByb2plY3RzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJcIikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcblxyXG4gIHNldFRvZG9zKHRvZG9zQXJyYXkpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0b2Rvc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kbyh0aXRsZSkge1xyXG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb3MuZmluZCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0aXRsZSk7XHJcbiAgICByZXR1cm4gdG9kbyB8fCBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4VG9kbyh0b2RvKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSA9PT0gdG9kby5nZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgaWYgKCF0aGlzLmdldFRvZG8odG9kby5nZXRUaXRsZSgpKSkge1xyXG4gICAgICBpZiAodGhpcy5nZXROYW1lKCkgPT09IHRvZG8uZ2V0UHJvamVjdE5hbWUoKSkge1xyXG4gICAgICAgIHRoaXMudG9kb3MgPSBbLi4udGhpcy50b2RvcywgdG9kb107XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvZG8odG9kb1RpdGxlKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9kb3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRvZG9UaXRsZSk7XHJcbiAgICB0aGlzLnRvZG9zID0gW1xyXG4gICAgICAuLi50aGlzLnRvZG9zLnNsaWNlKDAsIGluZGV4KSxcclxuICAgICAgLi4udGhpcy50b2Rvcy5zbGljZShpbmRleCArIDEpLFxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG8oaW5kZXgsIHRvZG8pIHtcclxuICAgIGlmICh0b2RvLmdldFByb2plY3ROYW1lKCkgPT09IHRoaXMubmFtZSAmJiB0aGlzLmdldFRvZG8odG9kby5nZXRUaXRsZSgpKSkge1xyXG4gICAgICB0aGlzLnRvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW1vdmVUb2RvKHRvZG8uZ2V0VGl0bGUoKSk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG9wZXJhdG9yLWxpbmVicmVhayAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zICovXHJcbmltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0cyhwcm9qZWN0c0FycmF5KSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5uYW1lID09PSBuYW1lKTtcclxuICAgIHJldHVybiBwcm9qZWN0IHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRnJvbVByb2plY3QodG9kbykge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiQWN0dWFsZXNcIjtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QodG9kby5nZXRQcm9qZWN0TmFtZSgpKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgY29uc3QgcHJvamVjdEFkZGVkID0gcHJvamVjdCA/IHByb2plY3QuYWRkVG9kbyh0b2RvKSA6IGZhbHNlO1xyXG5cclxuICAgIGlmIChwcm9qZWN0QWRkZWQpIHtcclxuICAgICAgdG9kby5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgIHByb2plY3RTZWFyY2g6IHRvZG8uZ2V0UHJvamVjdE5hbWUoKSxcclxuICAgICAgICB0b2RvVGl0bGU6IHRvZG8uZ2V0VGl0bGUoKSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG8uc2V0UHJvamVjdE5hbWUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kby5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICB0b2RheS50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIkFjdHVhbGVzXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGxldCBpbmRleFRvZG8gPSAtMTtcclxuXHJcbiAgICB0b2RheS50b2Rvcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmhhc093blByb3BlcnR5KFwic2VhcmNoVG9kb1wiKSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIGl0ZW0uc2VhcmNoVG9kby5wcm9qZWN0U2VhcmNoID09PSBwcm9qZWN0LmdldE5hbWUoKSAmJlxyXG4gICAgICAgICAgaXRlbS5zZWFyY2hUb2RvLnRvZG9UaXRsZSA9PT0gdG9kb1RpdGxlXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBpbmRleFRvZG8gPSBpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5kZXhUb2RvO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb1RvZGF5KGluZGV4LCB0b2RvT2JqLCBwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiQWN0dWFsZXNcIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBwcm9qZWN0LmdldFRvZG9zKClbaW5kZXhdLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBsb3dlc3RJbmRleCA9IDA7XHJcbiAgICBsZXQgdXBkYXRlZFRvZG8gPSBudWxsO1xyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG9PYmouZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiBwcm9qZWN0LmdldE5hbWUoKSxcclxuICAgICAgICB0b2RvVGl0bGU6IHRvZG9PYmouZ2V0VGl0bGUoKSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA+PSBsb3dlc3RJbmRleCkge1xyXG4gICAgICAgIHRvZGF5LnRvZG9zW3RvZG9JbmRleF0gPSB0b2RvT2JqO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZGF5LnRvZG9zLnB1c2godG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgICBpZiAodG9kb0luZGV4ID49IGxvd2VzdEluZGV4KSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb0Zyb21Ub2RheShpbmRleCwgdG9kb09iaikge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiQWN0dWFsZXNcIjtcclxuICAgIGNvbnN0IHRvZG9Qcm9wZXJ0eSA9IFwic2VhcmNoVG9kb1wiO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcblxyXG4gICAgaWYgKHRvZG9WYWx1ZXMuaGFzT3duUHJvcGVydHkodG9kb1Byb3BlcnR5KSkge1xyXG4gICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB0b2RvVmFsdWVzLnNlYXJjaFRvZG87XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkodG9kb1Byb3BlcnR5KSkge1xyXG4gICAgICBjb25zdCB7IHByb2plY3RTZWFyY2gsIHRvZG9UaXRsZSB9ID0gdG9kb09iai5zZWFyY2hUb2RvO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RTZWFyY2gpO1xyXG4gICAgICBjb25zdCBpbmRleFNlYXJjaCA9IHByb2plY3QuZ2V0SW5kZXhUb2RvKHByb2plY3QuZ2V0VG9kbyh0b2RvVGl0bGUpKTtcclxuICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXhTZWFyY2gsIHRvZG9PYmopO1xyXG5cclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QodG9kb09iai5nZXRQcm9qZWN0TmFtZSgpKTtcclxuICAgICAgY29uc3QgdG9kb0FkZGVkID0gcHJvamVjdCA/IHByb2plY3QuYWRkVG9kbyh0b2RvT2JqKSA6IGZhbHNlO1xyXG4gICAgICBpZiAodG9kb0FkZGVkKSB7XHJcbiAgICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgICAgcHJvamVjdFNlYXJjaDogdG9kb09iai5nZXRQcm9qZWN0TmFtZSgpLFxyXG4gICAgICAgICAgdG9kb1RpdGxlOiB0b2RvT2JqLmdldFRpdGxlKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG9PYmouZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3NbaW5kZXhdID0gdG9kb09iajtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1ZhbHVlcy5nZXRUaXRsZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgpIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIkFjdHVhbGVzXCI7XHJcbiAgICBjb25zdCB0b2RvUHJvcGVydHkgPSBcInNlYXJjaFRvZG9cIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgY29uc3QgdG9kb09iaiA9IHRvZGF5LmdldFRvZG9zKClbaW5kZXhdO1xyXG5cclxuICAgIGlmICh0b2RvT2JqLmhhc093blByb3BlcnR5KHRvZG9Qcm9wZXJ0eSkpIHtcclxuICAgICAgY29uc3QgeyBwcm9qZWN0U2VhcmNoLCB0b2RvVGl0bGUgfSA9IHRvZG9PYmouc2VhcmNoVG9kbztcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0U2VhcmNoKTtcclxuICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8sIGkpID0+IHtcclxuICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGk7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvVG9kYXkoaW5kZXgsIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJBY3R1YWxlc1wiO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHByb2plY3QuZ2V0VG9kb3MoKVtpbmRleF0uZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGluZGV4VG9kbyA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG5cclxuICAgIGlmIChpbmRleFRvZG8gPj0gMCkgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG5cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMykgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRpdGxlID0gXCJcIixcclxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcclxuICAgIGR1ZURhdGUgPSBcIlwiLFxyXG4gICAgcHJvamVjdE5hbWUgPSBcIlwiLFxyXG4gICAgcHJpb3JpdHkgPSAxXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIHNldFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEyODBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWNvbnRhaW5lciB7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBtaW4td2lkdGg6IDIyMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbiAgcGFkZGluZzogN3B4IDEwcHggN3B4IDA7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiB0ZXh0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG86Zm9jdXMge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgd2lkdGg6IDMzNXB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tYWN0aXZlLFxcclxcbi5zZWN0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RheSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5kaXYge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmkge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgLmZhLXBsdXM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG93LXByb2plY3RzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5NYWluIGNvbnRlbnQgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICBjb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYWNjZW50LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLWNhcmQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIGkge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10YXNrLWNhcmQsXFxyXFxuLmZvcm0tdXBkYXRlLXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG4gIHBhZGRpbmc6IDFweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtcHJvamVjdCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC11cGRhdGUge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tYWRkLFxcclxcbmJ1dHRvbi5idG4tc2F2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbkFkZCB0YXNrIGZyb20gbmF2YmFyIFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCBwcm9qZWN0IGZvcm1cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgZm9ybSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2Rvcy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MHB4O1xcclxcbiAgbGVmdDogMTE1cHg7XFxyXFxuICB3aWR0aDogNDM1cHg7XFxyXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbiAgbWF4LWhlaWdodDogMjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kb3MtY29udGFpbmVyIC50b2RvLXNlYXJjaGVkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWluLXdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY2VudGx5LXNlYXJjaGVkIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LXZpc2libGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VhcmNoZWQ6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VhcmNoZWQtcHJvamVjdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWluLXdpZHRoOiA1MHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tc2VhcmNoZWQtcHJvamVjdD5wIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdC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RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2RvOmZvY3VzIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMzVweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kb3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDExNXB4O1xcclxcbiAgd2lkdGg6IDQzNXB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG9zLWNvbnRhaW5lciAudG9kby1zZWFyY2hlZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnRseS1zZWFyY2hlZCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC12aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkLXByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi13aWR0aDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkLXByb2plY3Q+cCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogZXNsaW50LWRpc2FibGUgbm8tc2hhZG93ICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGZ1bmN0aW9uLXBhcmVuLW5ld2xpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgY29tbWEtZGFuZ2xlICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGltcGxpY2l0LWFycm93LWxpbmVicmVhayAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBvcGVyYXRvci1saW5lYnJlYWsgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cclxuaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ2FyZFRvZG8sXHJcbiAgY3JlYXRlQ2FyZFByb2plY3RzLFxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMsXHJcbiAgY3JlYXRlU2hvd1RvZG9zLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0VmFsdWVzRnJvbUZvcm0sXHJcbiAgZ2V0VmFsdWVzRm9ybVVwZGF0ZSxcclxuICBnZXRWYWx1ZXNGcm9tTmF2YmFyLFxyXG4gIHNob3dJbmZvRm9ybVVwZGF0ZSxcclxufSBmcm9tIFwiLi9mb3JtQ29udGVudFwiO1xyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgU3RvcmFnZSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGluYm94U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XHJcbmNvbnN0IHRvZGF5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XHJcblxyXG5jb25zdCBmb3JtVXBkYXRlVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS11cGRhdGUtdGFza1wiKTtcclxuY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2stY2FyZFwiKTtcclxuY29uc3QgZm9ybUFkZFRvZG9OYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYWRkLXRvZG8tbmF2YmFyXCIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyVG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcclxuY29uc3QgY29udGFpbmVyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1wcm9qZWN0c1wiKTtcclxuY29uc3QgY29udGFpbmVyQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBjb250YWluZXJBZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZml4ZWRcIik7XHJcblxyXG5jb25zdCBzZWN0aW9uVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKTtcclxuXHJcbmNvbnN0IGJ0bkFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrXCIpO1xyXG5jb25zdCBidG5Gb3JtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsXCIpO1xyXG5jb25zdCBidG5DYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLXByb2plY3RcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbFVwZGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtdXBkYXRlXCIpO1xyXG5jb25zdCBidG5DYW5jZWxGb3JtTmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLW5hdmJhclwiKTtcclxuY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGJ0bkFkZFRvZG9OYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC10b2RvLW5hdmJhclwiKTtcclxuY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWhvbWVcIik7XHJcblxyXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuY29uc3Qgc2VsZWN0VXBkYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtdXBkYXRlXCIpO1xyXG5jb25zdCBzZWxlY3RQcm9qZWN0TmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC1uYXZiYXJcIik7XHJcblxyXG5jb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXRvZG9cIik7XHJcbmNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLXRvZG9zLWNvbnRhaW5lclwiKTtcclxuXHJcbmNvbnN0IHNlY3Rpb25UaXRsZSA9XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xyXG5cclxubGV0IGluZGV4Q2FyZFRvZG8gPSAwO1xyXG5sZXQgYXJyYXlUb2Rvc0RPTSA9IFtdO1xyXG5cclxuaW5pdEFwcCgpO1xyXG5cclxuLyoqXHJcbiAqIEZ1bmNpw7NuIHBhcmEgYnVzY2FyXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc2VhcmNoVG9kbyhlKSB7XHJcbiAgY29uc3Qgc2VhcmNoVmFsdWUgPSBlLnRhcmdldC52YWx1ZS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKTtcclxuICBjb25zdCB0b2RheVNlY3Rpb24gPSBcIkFjdHVhbGVzXCI7XHJcblxyXG4gIGxldCBzZWFyY2hSZXN1bHRBcnJheSA9IFtdO1xyXG4gIGxldCB0b2Rvc0FycmF5ID0gW107XHJcbiAgbGV0IHRvZG9zVG9kYXkgPSBbXTtcclxuICBsZXQgc2VhcmNoUmVzdWx0O1xyXG5cclxuICBpZiAoIXNlYXJjaFZhbHVlKSB7XHJcbiAgICBjcmVhdGVTaG93VG9kb3MoW10pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgaWYgKHByb2plY3QubmFtZSA9PT0gdG9kYXlTZWN0aW9uKSB7XHJcbiAgICAgIHRvZG9zVG9kYXkgPSBbLi4ucHJvamVjdC50b2Rvc107XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2Rvc0FycmF5ID0gWy4uLnRvZG9zQXJyYXksIC4uLnByb2plY3QudG9kb3NdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmb3VuZFRvZG9zID0gdG9kb3NBcnJheS5maWx0ZXIoKHRvZG8pID0+XHJcbiAgICB0b2RvLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgZm91bmRUb2Rvc1RvZGF5ID0gdG9kb3NUb2RheS5maWx0ZXIoKHRvZG8pID0+XHJcbiAgICB0b2RvLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVmFsdWUpXHJcbiAgKTtcclxuXHJcbiAgaWYgKGZvdW5kVG9kb3MubGVuZ3RoKSB7XHJcbiAgICBzZWFyY2hSZXN1bHQgPSBjcmVhdGVTaG93VG9kb3MoZm91bmRUb2Rvcyk7XHJcbiAgICBzZWFyY2hSZXN1bHRBcnJheSA9IG5ldyBBcnJheSguLi5zZWFyY2hSZXN1bHQuY2hpbGRyZW4pO1xyXG4gIH0gZWxzZSBpZiAoZm91bmRUb2Rvc1RvZGF5Lmxlbmd0aCkge1xyXG4gICAgc2VhcmNoUmVzdWx0ID0gY3JlYXRlU2hvd1RvZG9zKGZvdW5kVG9kb3NUb2RheSk7XHJcbiAgICBzZWFyY2hSZXN1bHRBcnJheSA9IG5ldyBBcnJheSguLi5zZWFyY2hSZXN1bHQuY2hpbGRyZW4pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWFyY2hSZXN1bHQgPSBjcmVhdGVTaG93VG9kb3MoW10pO1xyXG4gICAgc2VhcmNoUmVzdWx0QXJyYXkgPSBbXTtcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG4gIHNob3dTZWFyY2hlZFNlY3Rpb24oc2VhcmNoUmVzdWx0QXJyYXkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2VhcmNoZWRTZWN0aW9uKGFycmF5UmVzdWx0KSB7XHJcbiAgY29uc3QgYXJyYXlTZWN0aW9ucyA9IGFycmF5UmVzdWx0LnNsaWNlKDEpO1xyXG4gIGZvciAoY29uc3QgZWxlbSBvZiBhcnJheVNlY3Rpb25zKSB7XHJcbiAgICBjb25zdCBjdXJyZW50U2VjdGlvbiA9IGVsZW0uY2hpbGROb2Rlc1sxXS5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xyXG4gICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50U2VjdGlvbjtcclxuICAgICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIFRPRE8gT1BFUkFUSU9OU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tRm9ybSh0b2RvT2JqKSB7XHJcbiAgaWYgKHRvZG9PYmouZ2V0VGl0bGUoKS50cmltKCkpIHtcclxuICAgIGlmICghdG9kb09iai5nZXRQcm9qZWN0TmFtZSgpLnRyaW0oKSkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICBjb25zdCB0b2RheSA9IHN0b3JhZ2UuZ2V0UHJvamVjdFN0b3JhZ2UoXCJBY3R1YWxlc1wiKTtcclxuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSB0b2RheS5nZXROYW1lKCkpIHtcclxuICAgICAgICB0b2RvT2JqLnNldFByb2plY3ROYW1lKHByb2plY3QuZ2V0TmFtZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcmFnZS5hZGRUb2RvU3RvcmFnZSh0b2RvT2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Gcm9tRm9ybSh2YWx1ZXNUb2RvKSB7XHJcbiAgaWYgKHZhbHVlc1RvZG8uZ2V0VGl0bGUoKS50cmltKCkpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICBjb25zdCB0b2RheSA9IHN0b3JhZ2UuZ2V0UHJvamVjdFN0b3JhZ2UoXCJBY3R1YWxlc1wiKTtcclxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gdG9kYXkuZ2V0TmFtZSgpKSB7XHJcbiAgICAgIHN0b3JhZ2UudXBkYXRlVG9kb1RvZGF5U3RvcmFnZShcclxuICAgICAgICBpbmRleENhcmRUb2RvLFxyXG4gICAgICAgIHZhbHVlc1RvZG8sXHJcbiAgICAgICAgcHJvamVjdC5nZXROYW1lKClcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc3RvcmFnZS51cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleENhcmRUb2RvLCB2YWx1ZXNUb2RvKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFUb2RvQ2FyZChpbmRleENhcmQpIHtcclxuICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBwcm9qZWN0LnRvZG9zW2luZGV4Q2FyZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkRE9NKCkge1xyXG4gIGFycmF5VG9kb3NET00gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgICAgIGNvbnRhaW5lclRvZG9MaXN0LnJlbW92ZUNoaWxkKGFycmF5VG9kb3NET01baW5kZXhdKTtcclxuICAgICAgaW5kZXhDYXJkVG9kbyA9IGluZGV4O1xyXG4gICAgICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICAgICAgc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VG9kb3NET00sIGluZGV4KTtcclxuICAgICAgc2hvd0luZm9Gb3JtVXBkYXRlKGdldERhdGFUb2RvQ2FyZChpbmRleCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9ET00oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiQWN0dWFsZXNcIik7XHJcbiAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSB0b2RheS5nZXROYW1lKCkpIHtcclxuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kb1RvZGF5U3RvcmFnZShpLCBwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25PYmplY3QocHJvamVjdE5hbWUpIHtcclxuICByZXR1cm4gc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb2RvTGlzdCgpIHtcclxuICBjbGVhblRvZG9zQ29udGFpbmVyKCk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIGlmIChvYmplY3QpIHtcclxuICAgIG9iamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiBjcmVhdGVDYXJkVG9kbyhpLCB0b2RvKSk7XHJcbiAgICB1cGRhdGVUb2RvQ2FyZERPTSgpO1xyXG4gICAgZGVsZXRlVG9kb0RPTSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKVtpXS50b2Rvcy5sZW5ndGg7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGlmICh0b2Rvc1F1YW50aXR5ID4gMCkge1xyXG4gICAgICBpdGVtLnRleHRDb250ZW50ID0gdG9kb3NRdWFudGl0eTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkLCB0b2RvRGF0YSkge1xyXG4gIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpbmRleENhcmRdO1xyXG4gIGlmIChkaXZDb250YWluZXIpIHtcclxuICAgIGRpdkNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYGJvcmRlcjogMnB4IHNvbGlkICR7dG9kb0RhdGEucHJpb3JpdHl9YDtcclxuXHJcbiAgICBjb25zdCB0aXRsZVRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICB0aXRsZVRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS50aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uVGFzay50ZXh0Q29udGVudCA9IHRvZG9EYXRhLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VGFzaywgaW5kZXhDYXJkKSB7XHJcbiAgaWYgKGFycmF5VGFzay5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2UgaWYgKGFycmF5VGFzay5sZW5ndGggLSAxID09PSBpbmRleENhcmQpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGFpbmVyVG9kb0xpc3QuaW5zZXJ0QmVmb3JlKGZvcm1VcGRhdGVUb2RvLCBhcnJheVRhc2tbaW5kZXhDYXJkICsgMV0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Zvcm1VcGRhdGVUYXNrKCk7XHJcblxyXG4gIGJ0bkNhbmNlbFVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gIGNsb3NlRm9ybUFkZFRhc2soKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1NlY3Rpb25Qcm9qZWN0KHByb2plY3QpO1xyXG4gIGNsZWFuVG9kb3NDb250YWluZXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRGb3JtT3BlcmF0aW9ucygpIHtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIHNob3dGb3JtQWRkVGFzaygpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBQUk9KRUNUIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgc3RvcmFnZS5hZGRQcm9qZWN0U3RvcmFnZShuZXdQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBzdG9yYWdlLnJlbW92ZVByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1EZWxldGVQcm9qZWN0KGUpIHtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RPcGVyYXRpb25zKCkge1xyXG4gIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGUtcHJvamVjdFwiKTtcclxuICBwcm9qZWN0c0RPTS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzZWxlY3RQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSk7XHJcbiAgfSk7XHJcbiAgZGVsZXRlUHJvamVjdHMuZm9yRWFjaCgoaWNvbikgPT4ge1xyXG4gICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHBlcmZvcm1EZWxldGVQcm9qZWN0KGUpKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzTGlzdCgpIHtcclxuICBjbGVhbkNvbnRhaW5lclByb2plY3RzKCk7XHJcbiAgc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XHJcbiAgICBpZiAocHJvamVjdE5hbWUgIT09IFwiSW5ib3hcIiAmJiBwcm9qZWN0TmFtZSAhPT0gXCJBY3R1YWxlc1wiKSB7XHJcbiAgICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0TmFtZSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHByb2plY3RPcGVyYXRpb25zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c0JhcigpIHtcclxuICBjb25zdCBzaG93UHJvamVjdHNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctcHJvamVjdHNcIik7XHJcblxyXG4gIHNob3dQcm9qZWN0c0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLXJpZ2h0XCIpO1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1jb250ZW50XCIpO1xyXG5cclxuICAgIGlmIChzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtY2hldnJvbi1kb3duXCIpKSB7XHJcbiAgICAgIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICAgICAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93U2VjdGlvblByb2plY3Qoc2VjdGlvbikge1xyXG4gIGNvbnN0IHNlY3Rpb25BcnJheSA9IEFycmF5LmZyb20oc2VjdGlvblRvZG8pO1xyXG4gIGNvbnN0IHByb2plY3RzID0gQXJyYXkuZnJvbShjb250YWluZXJQcm9qZWN0cy5jaGlsZHJlbik7XHJcbiAgc2VjdGlvbkFycmF5LmNvbmNhdChwcm9qZWN0cykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwic2VjdGlvbi1hY3RpdmVcIik7XHJcbiAgfSk7XHJcbiAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2VjdGlvbi1hY3RpdmVcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkUHJvamVjdCgpIHtcclxuICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaG93LWZvcm1cIik7XHJcbiAgYnRuQ2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZm9ybUFkZFByb2plY3QucmVzZXQoKTtcclxuICAgIGNvbnRhaW5lckFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZPUk0gVEFTS1NcclxuICovXHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtQWRkVG9kbyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHN0b3JhZ2UubG9hZERhdGFTdG9yYWdlKCk7XHJcbiAgYWRkVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zyb21Gb3JtKCkpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICBmb3JtQWRkVG9kby5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtVXBkYXRlVG9kbyhlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHVwZGF0ZVRvZG9Gcm9tRm9ybShnZXRWYWx1ZXNGb3JtVXBkYXRlKCkpO1xyXG4gIHVwZGF0ZVRvZG9DYXJkKGluZGV4Q2FyZFRvZG8sIGdldFZhbHVlc0Zvcm1VcGRhdGUoKSk7XHJcbiAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGVyZm9ybUFkZFRvZG9OYXYoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbU5hdmJhcigpKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgZm9ybUFkZFRvZG9OYXZiYXIucmVzZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGVyZm9ybUFkZFByb2plY3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dFByb2plY3ROYW1lLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgc2hvd1Byb2plY3RzTGlzdCgpO1xyXG4gIHByb2plY3RPcGVyYXRpb25zKCk7XHJcblxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0KTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0VXBkYXRlUHJvamVjdCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG5cclxuICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xyXG4gIGNvbnRhaW5lckFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERJU1BMQVkgRk9STVNcclxuICovXHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFRvZG9OYXZiYXIoKSB7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LmFkZChcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybUFkZFRhc2soKSB7XHJcbiAgZm9ybUFkZFRvZG8ucmVzZXQoKTtcclxuICBmb3JtQWRkVG9kby5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFRhc2soKSB7XHJcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LmFkZChcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtVXBkYXRlVGFzaygpIHtcclxuICBmb3JtVXBkYXRlVG9kby5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uY2xhc3NMaXN0LmFkZChcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Ub2Rvc0NvbnRhaW5lcigpIHtcclxuICBjb250YWluZXJUb2RvTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuQ29udGFpbmVyUHJvamVjdHMoKSB7XHJcbiAgY29udGFpbmVyUHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG4vKipcclxuICogRVZFTlRTXHJcbiAqL1xyXG5cclxuZm9ybUFkZFRvZG9OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gcGVyZm9ybUFkZFRvZG9OYXYoZSkpO1xyXG5mb3JtVXBkYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtVXBkYXRlVG9kbyhlKSk7XHJcbmZvcm1BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1BZGRQcm9qZWN0KGUpKTtcclxuZm9ybUFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gcGVyZm9ybUFkZFRvZG8oZSkpO1xyXG5cclxuaW5ib3hTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gIHNlbGVjdFByb2plY3RTZWN0aW9uKGluYm94U2VjdGlvbilcclxuKTtcclxudG9kYXlTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gIHNlbGVjdFByb2plY3RTZWN0aW9uKHRvZGF5U2VjdGlvbilcclxuKTtcclxuXHJcbmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0Rm9ybU9wZXJhdGlvbnMpO1xyXG5idG5Gb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm1BZGRUYXNrKTtcclxuYnRuQWRkVG9kb05hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKTtcclxuYnRuQ2FuY2VsRm9ybU5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtQWRkVG9kb05hdmJhcik7XHJcbmJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtQWRkUHJvamVjdCk7XHJcblxyXG5idG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIHNob3dTZWN0aW9uUHJvamVjdCh0b2RheVNlY3Rpb24pO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG59KTtcclxuXHJcbmlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4gc2VhcmNoVG9kbyhlKSk7XHJcbmlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtdmlzaWJsZVwiKTtcclxufSk7XHJcbmlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgaW5wdXRTZWFyY2gudmFsdWUgPSBcIlwiO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQgIT09IGlucHV0U2VhcmNoKSB7XHJcbiAgICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZChcIm5vdC12aXNpYmxlXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vKipcclxuICogRElTUExBWSBDVVJSRU5UIERBVEVcclxuICovXHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IGRhdGVPYmplY3QuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IGRhdGUgPSBkYXRlT2JqZWN0LmdldERhdGUoKTtcclxuXHJcbiAgaWYgKG1vbnRoIDwgMTApIHtcclxuICAgIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgfVxyXG4gIGlmIChkYXRlIDwgMTApIHtcclxuICAgIGRhdGUgPSBgMCR7ZGF0ZX1gO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRDdXJyZW50RGF0ZSgpIHtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGVVcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGVOYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpO1xyXG5cclxuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxuICBkdWVEYXRlVXBkYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxuICBkdWVEYXRlTmF2YmFyLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNUQVJUIEFQUFxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGluaXRBcHAoKSB7XHJcbiAgc3RvcmFnZS5sb2FkRGF0YVN0b3JhZ2UoKTsgLy8gZ2V0IGRhdGEgZnJvbSBsb2NhbFN0b3JhZ2UgQVBJXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIGRpc3BsYXlQcm9qZWN0c0JhcigpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICBzZXRDdXJyZW50RGF0ZSgpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDYXJkVG9kbyIsImluZGV4Iiwib2JqVG9kbyIsImRpdlRhc2siLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkaXZUYXNrSW5mbyIsImljb25VcGRhdGVUYXNrIiwiaW5uZXJIVE1MIiwiZ2V0VGl0bGUiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImNzc1RleHQiLCJnZXRQcmlvcml0eSIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUNhcmRQcm9qZWN0cyIsInByb2plY3ROYW1lIiwiZGl2UHJvamVjdCIsImRpdkluZm8iLCJpY29uRGVsZXRlIiwic3Bhbk51bWJlclRvZG9zIiwiY3JlYXRlU2VsZWN0T3B0aW9ucyIsImFycmF5UHJvamVjdHMiLCJzZWxlY3QiLCJ0ZXh0Q29udGVudCIsIm9wdGlvbkhpZGRlbiIsInZhbHVlIiwibGVuZ3RoIiwiZm9yRWFjaCIsInByb2plY3QiLCJnZXROYW1lIiwib3B0aW9uIiwibmFtZSIsImNyZWF0ZVNob3dUb2RvcyIsInRvZG9zQXJyYXkiLCJzZWFyY2hlZFRvZG9zIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbmJveFRpdGxlIiwidG9kYXlUaXRsZSIsInRvZG8iLCJkaXZUb2RvIiwicHJvamVjdFRvZG8iLCJpbmZvVG9kbyIsImljb25Qcm9qZWN0IiwidGl0bGUiLCJUb2RvIiwiZ2V0VmFsdWVzRnJvbUZvcm0iLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJyZXBsYWNlIiwiY2hvb3NlUHJvamVjdCIsInRhc2tQcmlvcml0eSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwicHJpb3JpdHkiLCJnZXRGb3JtVXBkYXRlSW5wdXRzIiwiaW5wdXRUaXRsZSIsImlucHV0RGVzY3JpcHRpb24iLCJpbnB1dER1ZURhdGUiLCJpbnB1dENob29zZVByb2plY3QiLCJpbnB1dFByaW9yaXR5Iiwic2hvd0luZm9Gb3JtVXBkYXRlIiwiZGF0YU9iamVjdCIsImlucHV0c0Zvcm1VcGRhdGUiLCJnZXRQcm9qZWN0TmFtZSIsImdldFZhbHVlc0Zvcm1VcGRhdGUiLCJnZXRWYWx1ZXNGcm9tTmF2YmFyIiwiUHJvamVjdHMiLCJQcm9qZWN0IiwiU3RvcmFnZSIsImxvYWREYXRhU3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInByb2plY3RzIiwiYWRkUHJvamVjdCIsInNhdmVQcm9qZWN0c1N0b3JhZ2UiLCJkYXRhUHJvamVjdHMiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFByb2plY3RzU3RvcmFnZSIsIk9iamVjdCIsImFzc2lnbiIsInBhcnNlIiwiZ2V0SXRlbSIsInNldFByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJtYXAiLCJzZXRUb2RvcyIsImdldFRvZG9zIiwiZ2V0QWxsUHJvamVjdHMiLCJhZGRQcm9qZWN0U3RvcmFnZSIsInJlbW92ZVByb2plY3RTdG9yYWdlIiwiZGVsZXRlQWxsVG9kb3MiLCJyZW1vdmVQcm9qZWN0IiwiYWRkVG9kb1N0b3JhZ2UiLCJ0b2RvT2JqIiwiYWRkVG9kb0Zyb21Qcm9qZWN0IiwidXBkYXRlVG9kb1RvZGF5U3RvcmFnZSIsInVwZGF0ZVRvZG9Ub2RheSIsInVwZGF0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlIiwidXBkYXRlVG9kb0Zyb21Ub2RheSIsImRlbGV0ZVRvZG9Ub2RheVN0b3JhZ2UiLCJkZWxldGVUb2RvVG9kYXkiLCJkZWxldGVUb2RvRnJvbVRvZGF5U3RvcmFnZSIsImRlbGV0ZVRvZG9Gcm9tVG9kYXkiLCJnZXRQcm9qZWN0U3RvcmFnZSIsImdldFByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRvZG9zIiwic2V0TmFtZSIsImdldFRvZG8iLCJmaW5kIiwiaXRlbSIsImdldEluZGV4VG9kbyIsImZpbmRJbmRleCIsImFkZFRvZG8iLCJyZW1vdmVUb2RvIiwidG9kb1RpdGxlIiwic2xpY2UiLCJ1cGRhdGVUb2RvIiwiaXNUb2RheSIsInByb2plY3RzQXJyYXkiLCJwdXNoIiwiZ2V0UHJvamVjdEluZGV4IiwiZmlsdGVyIiwidG9kYXkiLCJwcm9qZWN0QWRkZWQiLCJzZWFyY2hUb2RvIiwicHJvamVjdFNlYXJjaCIsInNldFByb2plY3ROYW1lIiwiRGF0ZSIsImZpbmRUb2RvVG9kYXkiLCJpbmRleFRvZG8iLCJpIiwiaGFzT3duUHJvcGVydHkiLCJsb3dlc3RJbmRleCIsInVwZGF0ZWRUb2RvIiwidG9kb0luZGV4IiwidG9kb1Byb3BlcnR5IiwidG9kb1ZhbHVlcyIsImluZGV4U2VhcmNoIiwidG9kb0FkZGVkIiwiYXJndW1lbnRzIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldER1ZURhdGUiLCJzZXRQcmlvcml0eSIsImluYm94U2VjdGlvbiIsInRvZGF5U2VjdGlvbiIsImZvcm1VcGRhdGVUb2RvIiwiZm9ybUFkZFByb2plY3QiLCJmb3JtQWRkVG9kbyIsImZvcm1BZGRUb2RvTmF2YmFyIiwiY29udGFpbmVyVG9kb0xpc3QiLCJjb250YWluZXJQcm9qZWN0cyIsImNvbnRhaW5lckFkZFByb2plY3QiLCJjb250YWluZXJBZGRUb2RvTmF2YmFyIiwic2VjdGlvblRvZG8iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuQWRkVG9kbyIsImJ0bkZvcm1DYW5jZWwiLCJidG5DYW5jZWxQcm9qZWN0IiwiYnRuQ2FuY2VsVXBkYXRlRm9ybSIsImJ0bkNhbmNlbEZvcm1OYXZiYXIiLCJidG5BZGRQcm9qZWN0IiwiYnRuQWRkVG9kb05hdmJhciIsImJ0bkhvbWUiLCJzZWxlY3RQcm9qZWN0Iiwic2VsZWN0VXBkYXRlUHJvamVjdCIsInNlbGVjdFByb2plY3ROYXZiYXIiLCJpbnB1dFNlYXJjaCIsInNlYXJjaFJlc3VsdCIsInNlY3Rpb25UaXRsZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3RvcmFnZSIsImluZGV4Q2FyZFRvZG8iLCJhcnJheVRvZG9zRE9NIiwiaW5pdEFwcCIsImUiLCJzZWFyY2hWYWx1ZSIsInRhcmdldCIsInRvTG93ZXJDYXNlIiwidHJpbSIsInNlYXJjaFJlc3VsdEFycmF5IiwidG9kb3NUb2RheSIsImZvdW5kVG9kb3MiLCJpbmNsdWRlcyIsImZvdW5kVG9kb3NUb2RheSIsIkFycmF5IiwiY2hpbGRyZW4iLCJzaG93U2VhcmNoZWRTZWN0aW9uIiwiYXJyYXlSZXN1bHQiLCJhcnJheVNlY3Rpb25zIiwiZWxlbSIsImN1cnJlbnRTZWN0aW9uIiwiY2hpbGROb2RlcyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93VG9kb0xpc3QiLCJhZGRUb2RvRnJvbUZvcm0iLCJnZXRTZWN0aW9uT2JqZWN0IiwidXBkYXRlVG9kb0Zyb21Gb3JtIiwidmFsdWVzVG9kbyIsImdldERhdGFUb2RvQ2FyZCIsImluZGV4Q2FyZCIsInVwZGF0ZVRvZG9DYXJkRE9NIiwiZnJvbSIsInRhc2siLCJsYXN0RWxlbWVudENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjbG9zZUZvcm1BZGRUYXNrIiwic2hvd0Zvcm1VcGRhdGVDYXJkIiwiZGVsZXRlVG9kb0RPTSIsImNoZWNrZWQiLCJzaG93Q3VycmVudFRvZG9zIiwiY2xlYW5Ub2Rvc0NvbnRhaW5lciIsIm9iamVjdCIsInRvZG9zUXVhbnRpdHkiLCJ1cGRhdGVUb2RvQ2FyZCIsInRvZG9EYXRhIiwiZGl2Q29udGFpbmVyIiwidGl0bGVUYXNrIiwiZGVzY3JpcHRpb25UYXNrIiwiYXJyYXlUYXNrIiwiaW5zZXJ0QmVmb3JlIiwic2hvd0Zvcm1VcGRhdGVUYXNrIiwiY2xvc2VGb3JtVXBkYXRlVGFzayIsInNlbGVjdFByb2plY3RTZWN0aW9uIiwic2hvd1NlY3Rpb25Qcm9qZWN0Iiwic3RhcnRGb3JtT3BlcmF0aW9ucyIsInNob3dGb3JtQWRkVGFzayIsIm5ld1Byb2plY3QiLCJkZWxldGVQcm9qZWN0IiwicGVyZm9ybURlbGV0ZVByb2plY3QiLCJwYXJlbnRFbGVtZW50Iiwic2hvd1Byb2plY3RzTGlzdCIsInByb2plY3RPcGVyYXRpb25zIiwicHJvamVjdHNET00iLCJkZWxldGVQcm9qZWN0cyIsImljb24iLCJjbGVhbkNvbnRhaW5lclByb2plY3RzIiwiZGlzcGxheVByb2plY3RzQmFyIiwic2hvd1Byb2plY3RzQmFyIiwidG9nZ2xlIiwiY29udGFpbnMiLCJzZWN0aW9uIiwic2VjdGlvbkFycmF5IiwiY29uY2F0IiwicmVtb3ZlIiwic2hvd0Zvcm1BZGRQcm9qZWN0IiwicmVzZXQiLCJwZXJmb3JtQWRkVG9kbyIsInByZXZlbnREZWZhdWx0IiwicGVyZm9ybVVwZGF0ZVRvZG8iLCJwZXJmb3JtQWRkVG9kb05hdiIsInBlcmZvcm1BZGRQcm9qZWN0IiwiaW5wdXRQcm9qZWN0TmFtZSIsInNob3dGb3JtQWRkVG9kb05hdmJhciIsImNsb3NlRm9ybUFkZFRvZG9OYXZiYXIiLCJ3aW5kb3ciLCJnZXRDdXJyZW50RGF0ZSIsImRhdGVPYmplY3QiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF0ZSIsImdldERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsImR1ZURhdGVVcGRhdGUiLCJkdWVEYXRlTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==