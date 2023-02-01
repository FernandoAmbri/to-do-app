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
  if (todoObj.getTitle().trim() && !todoObj.getProjectName().trim()) {
    const project = getSectionObject(sectionTitle.textContent);
    const today = storage.getProjectStorage("Actuales");

    if (project.getName() !== today.getName()) {
      todoObj.setProjectName(project.getName());
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
          return;
        }

        storage.deleteTodoFromTodayStorage(i);
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
    if (todosQuantity > 0) item.textContent = todosQuantity;
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
  if (e.target !== inputSearch) searchResult.classList.add("not-visible");
});
/**
 * DISPLAY CURRENT DATE
 */

function getCurrentDate() {
  const dateObject = new Date();
  const year = dateObject.getFullYear();
  let month = dateObject.getMonth() + 1;
  let date = dateObject.getDate();
  if (month < 10) month = "0".concat(month);
  if (date < 10) date = "0".concat(date);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxL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Q2hCc0QsY0FBYztBQUNmLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Zvcm1Db250ZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRUb2RvKGluZGV4LCBvYmpUb2RvKSB7XHJcbiAgY29uc3QgZGl2VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2VGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGljb25VcGRhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gIGRpdlRhc2suaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stZmluaXNoZWRcIiAvPmA7XHJcbiAgZGl2VGFza0luZm8uaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInRhc2stbmFtZVwiIGlkPVwidGFzay1uYW1lLWNhcmRcIj4ke29ialRvZG8uZ2V0VGl0bGUoKX08L2gyPlxyXG4gIDxwIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uLWNhcmRcIj4ke29ialRvZG8uZ2V0RGVzY3JpcHRpb24oKX08L3A+XHJcbiAgPHA+JHtvYmpUb2RvLmdldER1ZURhdGUoKX08L3A+YDtcclxuXHJcbiAgaWNvblVwZGF0ZVRhc2suY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCIpO1xyXG5cclxuICBkaXZUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIGRpdlRhc2suc2V0QXR0cmlidXRlKFwiaW5kZXgtdG9kb1wiLCBpbmRleCk7XHJcbiAgZGl2VGFzay5zdHlsZS5jc3NUZXh0ID0gYGJvcmRlci1sZWZ0OiAycHggc29saWQgJHtvYmpUb2RvLmdldFByaW9yaXR5KCl9YDtcclxuXHJcbiAgZGl2VGFzay5hcHBlbmRDaGlsZChkaXZUYXNrSW5mbyk7XHJcbiAgZGl2VGFzay5hcHBlbmRDaGlsZChpY29uVXBkYXRlVGFzayk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpLmFwcGVuZENoaWxkKGRpdlRhc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkUHJvamVjdHMocHJvamVjdE5hbWUpIHtcclxuICBjb25zdCBkaXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY29uc3Qgc3Bhbk51bWJlclRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGRpdkluZm8uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1maWxlXCI+PC9pPlxyXG4gIDxwIGlkPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0TmFtZX08L3A+YDtcclxuXHJcbiAgc3Bhbk51bWJlclRvZG9zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibnVtYmVyLW9mLXRhc2tzXCIpO1xyXG5cclxuICBpY29uRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtdHJhc2gtY2FuXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtcHJvamVjdFwiKTtcclxuXHJcbiAgZGl2UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBcInNlY3Rpb25cIik7XHJcblxyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoZGl2SW5mbyk7XHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChzcGFuTnVtYmVyVG9kb3MpO1xyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoaWNvbkRlbGV0ZSk7XHJcblxyXG4gIHJldHVybiBkaXZQcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb25zKGFycmF5UHJvamVjdHMsIHNlbGVjdCkge1xyXG4gIHNlbGVjdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IG9wdGlvbkhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgb3B0aW9uSGlkZGVuLnZhbHVlID0gXCJcIjtcclxuICBvcHRpb25IaWRkZW4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xyXG4gIG9wdGlvbkhpZGRlbi50ZXh0Q29udGVudCA9IFwiUHJveWVjdG9zXCI7XHJcblxyXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25IaWRkZW4pO1xyXG5cclxuICBpZiAoYXJyYXlQcm9qZWN0cy5sZW5ndGgpIHtcclxuICAgIGFycmF5UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IFwiQWN0dWFsZXNcIikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTaG93VG9kb3ModG9kb3NBcnJheSkge1xyXG4gIGNvbnN0IHNlYXJjaGVkVG9kb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC10b2Rvcy1jb250YWluZXJcIik7XHJcbiAgY29uc3QgaW5ib3hUaXRsZSA9IFwiSW5ib3hcIjtcclxuICBjb25zdCB0b2RheVRpdGxlID0gXCJBY3R1YWxlc1wiO1xyXG4gIHNlYXJjaGVkVG9kb3MuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJyZWNlbnRseS1zZWFyY2hlZFwiPnRhcmVhcyBidXNjYWRhczo8L2Rpdj5gO1xyXG4gIGlmICh0b2Rvc0FycmF5Lmxlbmd0aCkge1xyXG4gICAgZm9yIChjb25zdCB0b2RvIG9mIHRvZG9zQXJyYXkpIHtcclxuICAgICAgY29uc3QgZGl2VG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IHByb2plY3RUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgY29uc3QgaW5mb1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgY29uc3QgaWNvblByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdG9kby5wcm9qZWN0TmFtZTtcclxuXHJcbiAgICAgIGlmICh0b2RvLnByb2plY3ROYW1lID09PSBpbmJveFRpdGxlKSB7XHJcbiAgICAgICAgaWNvblByb2plY3QuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtaW5ib3hcIik7XHJcbiAgICAgIH0gZWxzZSBpZiAodG9kby5wcm9qZWN0TmFtZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gdG9kYXlUaXRsZTtcclxuICAgICAgICBpY29uUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1jYWxlbmRhci1jaGVja1wiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpY29uUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLWZpbGVcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByb2plY3RUb2RvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXNlYXJjaGVkLXByb2plY3RcIik7XHJcbiAgICAgIHByb2plY3RUb2RvLmFwcGVuZENoaWxkKGljb25Qcm9qZWN0KTtcclxuICAgICAgcHJvamVjdFRvZG8uYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xyXG5cclxuICAgICAgaW5mb1RvZG8udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xyXG5cclxuICAgICAgZGl2VG9kby5jbGFzc0xpc3QuYWRkKFwidG9kby1zZWFyY2hlZFwiKTtcclxuICAgICAgZGl2VG9kby5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tc2VhcmNoZWRcIik7XHJcbiAgICAgIGRpdlRvZG8uYXBwZW5kQ2hpbGQoaW5mb1RvZG8pO1xyXG4gICAgICBkaXZUb2RvLmFwcGVuZENoaWxkKHByb2plY3RUb2RvKTtcclxuXHJcbiAgICAgIHNlYXJjaGVkVG9kb3MuYXBwZW5kQ2hpbGQoZGl2VG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBzZWFyY2hlZFRvZG9zO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUNhcmRUb2RvLFxyXG4gIGNyZWF0ZUNhcmRQcm9qZWN0cyxcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zLFxyXG4gIGNyZWF0ZVNob3dUb2RvcyxcclxufTtcclxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbUZvcm0oKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybVVwZGF0ZUlucHV0cygpIHtcclxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb24tdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZS11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXRDaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS11cGRhdGVcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dFRpdGxlLFxyXG4gICAgaW5wdXREZXNjcmlwdGlvbixcclxuICAgIGlucHV0RHVlRGF0ZSxcclxuICAgIGlucHV0Q2hvb3NlUHJvamVjdCxcclxuICAgIGlucHV0UHJpb3JpdHksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0luZm9Gb3JtVXBkYXRlKGRhdGFPYmplY3QpIHtcclxuICBjb25zdCBpbnB1dHNGb3JtVXBkYXRlID0gZ2V0Rm9ybVVwZGF0ZUlucHV0cygpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRUaXRsZS52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0VGl0bGUoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBkYXRhT2JqZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dER1ZURhdGUudmFsdWUgPSBkYXRhT2JqZWN0XHJcbiAgICAuZ2V0RHVlRGF0ZSgpXHJcbiAgICAucmVwbGFjZSgvKFxcLykvZywgXCItXCIpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRDaG9vc2VQcm9qZWN0LnZhbHVlID0gZGF0YU9iamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRQcmlvcml0eS52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0UHJpb3JpdHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpIHtcclxuICBjb25zdCBpbnB1dHNGb3JtVXBkYXRlID0gZ2V0Rm9ybVVwZGF0ZUlucHV0cygpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRUaXRsZS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dER1ZURhdGUudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRDaG9vc2VQcm9qZWN0O1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRQcmlvcml0eTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbU5hdmJhcigpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLW5hdmJhclwiKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi1uYXZiYXJcIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlLW5hdmJhclwiKVxyXG4gICAgLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LW5hdmJhclwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktbmF2YmFyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2Uge1xyXG4gIGxvYWREYXRhU3RvcmFnZSgpIHtcclxuICAgIGlmICghbG9jYWxTdG9yYWdlLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xyXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiSW5ib3hcIikpO1xyXG4gICAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KG5ldyBQcm9qZWN0KFwiQWN0dWFsZXNcIikpO1xyXG4gICAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2F2ZVByb2plY3RzU3RvcmFnZShkYXRhUHJvamVjdHMpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YVByb2plY3RzKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0c1N0b3JhZ2UoKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IE9iamVjdC5hc3NpZ24oXHJcbiAgICAgIG5ldyBQcm9qZWN0cygpLFxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpXHJcbiAgICApO1xyXG5cclxuICAgIHByb2plY3RzLnNldFByb2plY3RzKFxyXG4gICAgICBwcm9qZWN0c1xyXG4gICAgICAgIC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgLm1hcCgocHJvamVjdCkgPT4gT2JqZWN0LmFzc2lnbihuZXcgUHJvamVjdCgpLCBwcm9qZWN0KSlcclxuICAgICk7XHJcblxyXG4gICAgcHJvamVjdHMuZ2V0UHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIHByb2plY3Quc2V0VG9kb3MoXHJcbiAgICAgICAgcHJvamVjdC5nZXRUb2RvcygpLm1hcCgodG9kbykgPT4gT2JqZWN0LmFzc2lnbihuZXcgVG9kbygpLCB0b2RvKSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBwcm9qZWN0cztcclxuICB9XHJcblxyXG4gIGdldEFsbFByb2plY3RzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcmV0dXJuIHByb2plY3RzLmdldFByb2plY3RzKCk7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0U3RvcmFnZShwcm9qZWN0KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5hZGRQcm9qZWN0KHByb2plY3QpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5kZWxldGVBbGxUb2Rvcyhwcm9qZWN0TmFtZSk7XHJcbiAgICBwcm9qZWN0cy5yZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvU3RvcmFnZSh0b2RvT2JqKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb1RvZGF5U3RvcmFnZShpbmRleCwgdG9kb09iaiwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Ub2RheShpbmRleCwgdG9kb09iaiwgcHJvamVjdE5hbWUpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGluZGV4LCB0b2RvT2JqKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy51cGRhdGVUb2RvRnJvbVRvZGF5KGluZGV4LCB0b2RvT2JqKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvVG9kYXlTdG9yYWdlKGluZGV4LCBwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlVG9kb1RvZGF5KGluZGV4LCBwcm9qZWN0TmFtZSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaW5kZXgpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICByZXR1cm4gcHJvamVjdHMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSBcIlwiKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXROYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9kb3ModG9kb3NBcnJheSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRvZG9zQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvKHRpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRpdGxlKTtcclxuICAgIHJldHVybiB0b2RvIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhUb2RvKHRvZG8pIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0b2RvLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0VG9kbyh0b2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5hbWUoKSA9PT0gdG9kby5nZXRQcm9qZWN0TmFtZSgpKSB7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFsuLi50aGlzLnRvZG9zLCB0b2RvXTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG9kbyh0b2RvVGl0bGUpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy50b2Rvcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSA9PT0gdG9kb1RpdGxlKTtcclxuICAgIHRoaXMudG9kb3MgPSBbXHJcbiAgICAgIC4uLnRoaXMudG9kb3Muc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAuLi50aGlzLnRvZG9zLnNsaWNlKGluZGV4ICsgMSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kbyhpbmRleCwgdG9kbykge1xyXG4gICAgaWYgKHRvZG8uZ2V0UHJvamVjdE5hbWUoKSA9PT0gdGhpcy5uYW1lICYmIHRoaXMuZ2V0VG9kbyh0b2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgIHRoaXMudG9kb3NbaW5kZXhdID0gdG9kbztcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbW92ZVRvZG8odG9kby5nZXRUaXRsZSgpKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cclxuaW1wb3J0IHsgaXNUb2RheSB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICB9XHJcblxyXG4gIHNldFByb2plY3RzKHByb2plY3RzQXJyYXkpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0c0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChuYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLm5hbWUgPT09IG5hbWUpO1xyXG4gICAgcmV0dXJuIHByb2plY3QgfHwgZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGlmICghdGhpcy5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKSkge1xyXG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0SW5kZXgocHJvamVjdE5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmRJbmRleChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcclxuICAgICAgKGl0ZW0pID0+IGl0ZW0uZ2V0TmFtZSgpICE9PSBwcm9qZWN0TmFtZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJBY3R1YWxlc1wiO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkZWQgPSBwcm9qZWN0ID8gcHJvamVjdC5hZGRUb2RvKHRvZG8pIDogZmFsc2U7XHJcblxyXG4gICAgaWYgKHByb2plY3RBZGRlZCkge1xyXG4gICAgICB0b2RvLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgcHJvamVjdFNlYXJjaDogdG9kby5nZXRQcm9qZWN0TmFtZSgpLFxyXG4gICAgICAgIHRvZG9UaXRsZTogdG9kby5nZXRUaXRsZSgpLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kby5zZXRQcm9qZWN0TmFtZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIHRvZGF5LnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSkge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiQWN0dWFsZXNcIjtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgbGV0IGluZGV4VG9kbyA9IC0xO1xyXG5cclxuICAgIHRvZGF5LnRvZG9zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXRlbS5zZWFyY2hUb2RvLnByb2plY3RTZWFyY2ggPT09IHByb2plY3QuZ2V0TmFtZSgpICYmXHJcbiAgICAgICAgICBpdGVtLnNlYXJjaFRvZG8udG9kb1RpdGxlID09PSB0b2RvVGl0bGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGluZGV4VG9kbyA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleFRvZG87XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJBY3R1YWxlc1wiO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHByb2plY3QuZ2V0VG9kb3MoKVtpbmRleF0uZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGxvd2VzdEluZGV4ID0gMDtcclxuICAgIGxldCB1cGRhdGVkVG9kbyA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb09iai5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgIHByb2plY3RTZWFyY2g6IHByb2plY3QuZ2V0TmFtZSgpLFxyXG4gICAgICAgIHRvZG9UaXRsZTogdG9kb09iai5nZXRUaXRsZSgpLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodG9kb0luZGV4ID49IGxvd2VzdEluZGV4KSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3NbdG9kb0luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4LCB0b2RvT2JqKTtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gbG93ZXN0SW5kZXgpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5KGluZGV4LCB0b2RvT2JqKSB7XHJcbiAgICBjb25zdCB0b2RheVRpdGxlID0gXCJBY3R1YWxlc1wiO1xyXG4gICAgY29uc3QgdG9kb1Byb3BlcnR5ID0gXCJzZWFyY2hUb2RvXCI7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdCh0b2RheVRpdGxlKTtcclxuICAgIGNvbnN0IHRvZG9WYWx1ZXMgPSB0b2RheS5nZXRUb2RvcygpW2luZGV4XTtcclxuXHJcbiAgICBpZiAodG9kb1ZhbHVlcy5oYXNPd25Qcm9wZXJ0eSh0b2RvUHJvcGVydHkpKSB7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHRvZG9WYWx1ZXMuc2VhcmNoVG9kbztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eSh0b2RvUHJvcGVydHkpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIGNvbnN0IGluZGV4U2VhcmNoID0gcHJvamVjdC5nZXRJbmRleFRvZG8ocHJvamVjdC5nZXRUb2RvKHRvZG9UaXRsZSkpO1xyXG4gICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleFNlYXJjaCwgdG9kb09iaik7XHJcblxyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgICBjb25zdCB0b2RvQWRkZWQgPSBwcm9qZWN0ID8gcHJvamVjdC5hZGRUb2RvKHRvZG9PYmopIDogZmFsc2U7XHJcbiAgICAgIGlmICh0b2RvQWRkZWQpIHtcclxuICAgICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvT2JqLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgICB0b2RvVGl0bGU6IHRvZG9PYmouZ2V0VGl0bGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb09iai5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICB0b2RheS50b2Rvc1tpbmRleF0gPSB0b2RvT2JqO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVmFsdWVzLmdldFRpdGxlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb0Zyb21Ub2RheShpbmRleCkge1xyXG4gICAgY29uc3QgdG9kYXlUaXRsZSA9IFwiQWN0dWFsZXNcIjtcclxuICAgIGNvbnN0IHRvZG9Qcm9wZXJ0eSA9IFwic2VhcmNoVG9kb1wiO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QodG9kYXlUaXRsZSk7XHJcbiAgICBjb25zdCB0b2RvT2JqID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcblxyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkodG9kb1Byb3BlcnR5KSkge1xyXG4gICAgICBjb25zdCB7IHByb2plY3RTZWFyY2gsIHRvZG9UaXRsZSB9ID0gdG9kb09iai5zZWFyY2hUb2RvO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RTZWFyY2gpO1xyXG4gICAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVBbGxUb2Rvcyhwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBpZiAocHJvamVjdCkge1xyXG4gICAgICBwcm9qZWN0LmdldFRvZG9zKCkuZm9yRWFjaCgodG9kbywgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgICAgIGNvbnN0IGluZGV4ID0gaTtcclxuICAgICAgICAgIHRoaXMuZGVsZXRlVG9kb1RvZGF5KGluZGV4LCBwcm9qZWN0TmFtZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHRvZGF5VGl0bGUgPSBcIkFjdHVhbGVzXCI7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KHRvZGF5VGl0bGUpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gcHJvamVjdC5nZXRUb2RvcygpW2luZGV4XS5nZXRUaXRsZSgpO1xyXG4gICAgY29uc3QgaW5kZXhUb2RvID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcblxyXG4gICAgaWYgKGluZGV4VG9kbyA+PSAwKSB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjb21tYS1kYW5nbGUgKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0aXRsZSA9IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXHJcbiAgICBkdWVEYXRlID0gXCJcIixcclxuICAgIHByb2plY3ROYW1lID0gXCJcIixcclxuICAgIHByaW9yaXR5ID0gMVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3ROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1jb250YWluZXIge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgbWluLXdpZHRoOiAyMjBweDtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4IDdweCAwO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogdGV4dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2RvOmZvY3VzIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMzVweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kb3MtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTBweDtcXHJcXG4gIGxlZnQ6IDExNXB4O1xcclxcbiAgd2lkdGg6IDQzNXB4O1xcclxcbiAgbWluLWhlaWdodDogNTBweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG9zLWNvbnRhaW5lciAudG9kby1zZWFyY2hlZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1pbi13aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5yZWNlbnRseS1zZWFyY2hlZCB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC12aXNpYmxlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkLXByb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1pbi13aWR0aDogNTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLXNlYXJjaGVkLXByb2plY3Q+cCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0FB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aXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtY29udGFpbmVyIHtcXHJcXG4gIGhlaWdodDogMzBweDtcXHJcXG4gIG1pbi13aWR0aDogMjIwcHg7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDVweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweCA3cHggMDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHRleHQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtdG9kbzpmb2N1cyB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzM1cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXRvZG9zLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwcHg7XFxyXFxuICBsZWZ0OiAxMTVweDtcXHJcXG4gIHdpZHRoOiA0MzVweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC10b2Rvcy1jb250YWluZXIgLnRvZG8tc2VhcmNoZWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBtaW4td2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucmVjZW50bHktc2VhcmNoZWQge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbi5ub3QtdmlzaWJsZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZC1wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4td2lkdGg6IDUwcHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1zZWFyY2hlZC1wcm9qZWN0PnAge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXNoYWRvdyAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBmdW5jdGlvbi1wYXJlbi1uZXdsaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIGNvbW1hLWRhbmdsZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBsaWNpdC1hcnJvdy1saW5lYnJlYWsgKi9cclxuLyogZXNsaW50LWRpc2FibGUgb3BlcmF0b3ItbGluZWJyZWFrICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtc3ludGF4ICovXHJcbmltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNhcmRUb2RvLFxyXG4gIGNyZWF0ZUNhcmRQcm9qZWN0cyxcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zLFxyXG4gIGNyZWF0ZVNob3dUb2RvcyxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn0gZnJvbSBcIi4vZm9ybUNvbnRlbnRcIjtcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5jb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xyXG5jb25zdCB0b2RheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xyXG5cclxuY29uc3QgZm9ybVVwZGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdXBkYXRlLXRhc2tcIik7XHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrLWNhcmRcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC10b2RvLW5hdmJhclwiKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lclRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgY29udGFpbmVyQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWZpeGVkXCIpO1xyXG5cclxuY29uc3Qgc2VjdGlvblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcblxyXG5jb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuY29uc3QgYnRuRm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5DYW5jZWxVcGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLXVwZGF0ZVwiKTtcclxuY29uc3QgYnRuQ2FuY2VsRm9ybU5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1ob21lXCIpO1xyXG5cclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbmNvbnN0IHNlbGVjdFVwZGF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuY29uc3Qgc2VsZWN0UHJvamVjdE5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG5cclxuY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC10b2RvXCIpO1xyXG5jb25zdCBzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC10b2Rvcy1jb250YWluZXJcIik7XHJcblxyXG5jb25zdCBzZWN0aW9uVGl0bGUgPVxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuXHJcbmxldCBpbmRleENhcmRUb2RvID0gMDtcclxubGV0IGFycmF5VG9kb3NET00gPSBbXTtcclxuXHJcbmluaXRBcHAoKTtcclxuXHJcbi8qKlxyXG4gKiBGdW5jacOzbiBwYXJhIGJ1c2NhclxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHNlYXJjaFRvZG8oZSkge1xyXG4gIGNvbnN0IHNlYXJjaFZhbHVlID0gZS50YXJnZXQudmFsdWUudG9Mb3dlckNhc2UoKS50cmltKCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdG9yYWdlLmdldEFsbFByb2plY3RzKCk7XHJcbiAgY29uc3QgdG9kYXlTZWN0aW9uID0gXCJBY3R1YWxlc1wiO1xyXG5cclxuICBsZXQgc2VhcmNoUmVzdWx0QXJyYXkgPSBbXTtcclxuICBsZXQgdG9kb3NBcnJheSA9IFtdO1xyXG4gIGxldCB0b2Rvc1RvZGF5ID0gW107XHJcbiAgbGV0IHNlYXJjaFJlc3VsdDtcclxuXHJcbiAgaWYgKCFzZWFyY2hWYWx1ZSkge1xyXG4gICAgY3JlYXRlU2hvd1RvZG9zKFtdKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IHRvZGF5U2VjdGlvbikge1xyXG4gICAgICB0b2Rvc1RvZGF5ID0gWy4uLnByb2plY3QudG9kb3NdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kb3NBcnJheSA9IFsuLi50b2Rvc0FycmF5LCAuLi5wcm9qZWN0LnRvZG9zXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZm91bmRUb2RvcyA9IHRvZG9zQXJyYXkuZmlsdGVyKCh0b2RvKSA9PlxyXG4gICAgdG9kby50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGZvdW5kVG9kb3NUb2RheSA9IHRvZG9zVG9kYXkuZmlsdGVyKCh0b2RvKSA9PlxyXG4gICAgdG9kby50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKVxyXG4gICk7XHJcblxyXG4gIGlmIChmb3VuZFRvZG9zLmxlbmd0aCkge1xyXG4gICAgc2VhcmNoUmVzdWx0ID0gY3JlYXRlU2hvd1RvZG9zKGZvdW5kVG9kb3MpO1xyXG4gICAgc2VhcmNoUmVzdWx0QXJyYXkgPSBuZXcgQXJyYXkoLi4uc2VhcmNoUmVzdWx0LmNoaWxkcmVuKTtcclxuICB9IGVsc2UgaWYgKGZvdW5kVG9kb3NUb2RheS5sZW5ndGgpIHtcclxuICAgIHNlYXJjaFJlc3VsdCA9IGNyZWF0ZVNob3dUb2Rvcyhmb3VuZFRvZG9zVG9kYXkpO1xyXG4gICAgc2VhcmNoUmVzdWx0QXJyYXkgPSBuZXcgQXJyYXkoLi4uc2VhcmNoUmVzdWx0LmNoaWxkcmVuKTtcclxuICB9IGVsc2Uge1xyXG4gICAgc2VhcmNoUmVzdWx0ID0gY3JlYXRlU2hvd1RvZG9zKFtdKTtcclxuICAgIHNlYXJjaFJlc3VsdEFycmF5ID0gW107XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuICBzaG93U2VhcmNoZWRTZWN0aW9uKHNlYXJjaFJlc3VsdEFycmF5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NlYXJjaGVkU2VjdGlvbihhcnJheVJlc3VsdCkge1xyXG4gIGNvbnN0IGFycmF5U2VjdGlvbnMgPSBhcnJheVJlc3VsdC5zbGljZSgxKTtcclxuICBmb3IgKGNvbnN0IGVsZW0gb2YgYXJyYXlTZWN0aW9ucykge1xyXG4gICAgY29uc3QgY3VycmVudFNlY3Rpb24gPSBlbGVtLmNoaWxkTm9kZXNbMV0uY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcclxuICAgIGVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudFNlY3Rpb247XHJcbiAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbi8qKlxyXG4gKiBUT0RPIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvRnJvbUZvcm0odG9kb09iaikge1xyXG4gIGlmICh0b2RvT2JqLmdldFRpdGxlKCkudHJpbSgpICYmICF0b2RvT2JqLmdldFByb2plY3ROYW1lKCkudHJpbSgpKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiQWN0dWFsZXNcIik7XHJcbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IHRvZGF5LmdldE5hbWUoKSkge1xyXG4gICAgICB0b2RvT2JqLnNldFByb2plY3ROYW1lKHByb2plY3QuZ2V0TmFtZSgpKTtcclxuICAgIH1cclxuICAgIHN0b3JhZ2UuYWRkVG9kb1N0b3JhZ2UodG9kb09iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvRnJvbUZvcm0odmFsdWVzVG9kbykge1xyXG4gIGlmICh2YWx1ZXNUb2RvLmdldFRpdGxlKCkudHJpbSgpKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiQWN0dWFsZXNcIik7XHJcbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IHRvZGF5LmdldE5hbWUoKSkge1xyXG4gICAgICBzdG9yYWdlLnVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoXHJcbiAgICAgICAgaW5kZXhDYXJkVG9kbyxcclxuICAgICAgICB2YWx1ZXNUb2RvLFxyXG4gICAgICAgIHByb2plY3QuZ2V0TmFtZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHN0b3JhZ2UudXBkYXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaW5kZXhDYXJkVG9kbywgdmFsdWVzVG9kbyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhVG9kb0NhcmQoaW5kZXhDYXJkKSB7XHJcbiAgY29uc3QgcHJvamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICByZXR1cm4gcHJvamVjdC50b2Rvc1tpbmRleENhcmRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvQ2FyZERPTSgpIHtcclxuICBhcnJheVRvZG9zRE9NID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgdGFzay5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZChhcnJheVRvZG9zRE9NW2luZGV4XSk7XHJcbiAgICAgIGluZGV4Q2FyZFRvZG8gPSBpbmRleDtcclxuICAgICAgY2xvc2VGb3JtQWRkVGFzaygpO1xyXG4gICAgICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0VXBkYXRlUHJvamVjdCk7XHJcbiAgICAgIHNob3dGb3JtVXBkYXRlQ2FyZChhcnJheVRvZG9zRE9NLCBpbmRleCk7XHJcbiAgICAgIHNob3dJbmZvRm9ybVVwZGF0ZShnZXREYXRhVG9kb0NhcmQoaW5kZXgpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvRE9NKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICB0YXNrLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShcIkFjdHVhbGVzXCIpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gdG9kYXkuZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgICBzdG9yYWdlLmRlbGV0ZVRvZG9Ub2RheVN0b3JhZ2UoaSwgcHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLmRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGkpO1xyXG4gICAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25PYmplY3QocHJvamVjdE5hbWUpIHtcclxuICByZXR1cm4gc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb2RvTGlzdCgpIHtcclxuICBjbGVhblRvZG9zQ29udGFpbmVyKCk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIGlmIChvYmplY3QpIHtcclxuICAgIG9iamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiBjcmVhdGVDYXJkVG9kbyhpLCB0b2RvKSk7XHJcbiAgICB1cGRhdGVUb2RvQ2FyZERPTSgpO1xyXG4gICAgZGVsZXRlVG9kb0RPTSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKVtpXS50b2Rvcy5sZW5ndGg7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGlmICh0b2Rvc1F1YW50aXR5ID4gMCkgaXRlbS50ZXh0Q29udGVudCA9IHRvZG9zUXVhbnRpdHk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkKGluZGV4Q2FyZCwgdG9kb0RhdGEpIHtcclxuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIilbaW5kZXhDYXJkXTtcclxuICBpZiAoZGl2Q29udGFpbmVyKSB7XHJcbiAgICBkaXZDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke3RvZG9EYXRhLnByaW9yaXR5fWA7XHJcblxyXG4gICAgY29uc3QgdGl0bGVUYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgdGl0bGVUYXNrLnRleHRDb250ZW50ID0gdG9kb0RhdGEudGl0bGU7XHJcbiAgICBkZXNjcmlwdGlvblRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtVXBkYXRlQ2FyZChhcnJheVRhc2ssIGluZGV4Q2FyZCkge1xyXG4gIGlmIChhcnJheVRhc2subGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIGlmIChhcnJheVRhc2subGVuZ3RoIC0gMSA9PT0gaW5kZXhDYXJkKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0Lmluc2VydEJlZm9yZShmb3JtVXBkYXRlVG9kbywgYXJyYXlUYXNrW2luZGV4Q2FyZCArIDFdKTtcclxuICB9XHJcblxyXG4gIHNob3dGb3JtVXBkYXRlVGFzaygpO1xyXG5cclxuICBidG5DYW5jZWxVcGRhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgICBzaG93VG9kb0xpc3QoKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0UHJvamVjdFNlY3Rpb24ocHJvamVjdCkge1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gIHNob3dTZWN0aW9uUHJvamVjdChwcm9qZWN0KTtcclxuICBjbGVhblRvZG9zQ29udGFpbmVyKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0Rm9ybU9wZXJhdGlvbnMoKSB7XHJcbiAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0KTtcclxuICBzaG93Rm9ybUFkZFRhc2soKTtcclxufVxyXG5cclxuLypcclxuICogUFJPSkVDVCBPUEVSQVRJT05TXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIGlmIChwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHN0b3JhZ2UuYWRkUHJvamVjdFN0b3JhZ2UobmV3UHJvamVjdCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgc3RvcmFnZS5yZW1vdmVQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtRGVsZXRlUHJvamVjdChlKSB7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPVxyXG4gICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0T3BlcmF0aW9ucygpIHtcclxuICBjb25zdCBwcm9qZWN0c0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuICBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZGVsZXRlLXByb2plY3RcIik7XHJcbiAgcHJvamVjdHNET00uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2VsZWN0UHJvamVjdFNlY3Rpb24ocHJvamVjdCkpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZVByb2plY3RzLmZvckVhY2goKGljb24pID0+IHtcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBwZXJmb3JtRGVsZXRlUHJvamVjdChlKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0c0xpc3QoKSB7XHJcbiAgY2xlYW5Db250YWluZXJQcm9qZWN0cygpO1xyXG4gIHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IHByb2plY3QuZ2V0TmFtZSgpO1xyXG4gICAgaWYgKHByb2plY3ROYW1lICE9PSBcIkluYm94XCIgJiYgcHJvamVjdE5hbWUgIT09IFwiQWN0dWFsZXNcIikge1xyXG4gICAgICBjb250YWluZXJQcm9qZWN0cy5hcHBlbmRDaGlsZChjcmVhdGVDYXJkUHJvamVjdHMocHJvamVjdE5hbWUpKTtcclxuICAgIH1cclxuICB9KTtcclxuICBwcm9qZWN0T3BlcmF0aW9ucygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdHNCYXIoKSB7XHJcbiAgY29uc3Qgc2hvd1Byb2plY3RzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LXByb2plY3RzXCIpO1xyXG5cclxuICBzaG93UHJvamVjdHNCYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1yaWdodFwiKTtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctY29udGVudFwiKTtcclxuXHJcbiAgICBpZiAoc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZhLWNoZXZyb24tZG93blwiKSkge1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NlY3Rpb25Qcm9qZWN0KHNlY3Rpb24pIHtcclxuICBjb25zdCBzZWN0aW9uQXJyYXkgPSBBcnJheS5mcm9tKHNlY3Rpb25Ub2RvKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oY29udGFpbmVyUHJvamVjdHMuY2hpbGRyZW4pO1xyXG4gIHNlY3Rpb25BcnJheS5jb25jYXQocHJvamVjdHMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlY3Rpb24tYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFByb2plY3QoKSB7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG4gIGJ0bkNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGT1JNIFRBU0tTXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gcGVyZm9ybUFkZFRvZG8oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBzdG9yYWdlLmxvYWREYXRhU3RvcmFnZSgpO1xyXG4gIGFkZFRvZG9Gcm9tRm9ybShnZXRWYWx1ZXNGcm9tRm9ybSgpKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgZm9ybUFkZFRvZG8ucmVzZXQoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGVyZm9ybVVwZGF0ZVRvZG8oZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB1cGRhdGVUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICB1cGRhdGVUb2RvQ2FyZChpbmRleENhcmRUb2RvLCBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkpO1xyXG4gIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1BZGRUb2RvTmF2KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYWRkVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zyb21OYXZiYXIoKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvTmF2YmFyLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1BZGRQcm9qZWN0KGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZS50cmltKCk7XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICBwcm9qZWN0T3BlcmF0aW9ucygpO1xyXG5cclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFVwZGF0ZVByb2plY3QpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0TmF2YmFyKTtcclxuXHJcbiAgZm9ybUFkZFByb2plY3QucmVzZXQoKTtcclxuICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBESVNQTEFZIEZPUk1TXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0TmF2YmFyKTtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5hZGQoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybUFkZFRvZG9OYXZiYXIoKSB7XHJcbiAgY29udGFpbmVyQWRkVG9kb05hdmJhci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVUYXNrKCkge1xyXG4gIGZvcm1VcGRhdGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuVG9kb3NDb250YWluZXIoKSB7XHJcbiAgY29udGFpbmVyVG9kb0xpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkNvbnRhaW5lclByb2plY3RzKCkge1xyXG4gIGNvbnRhaW5lclByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVWRU5UU1xyXG4gKi9cclxuXHJcbmZvcm1BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1BZGRUb2RvTmF2KGUpKTtcclxuZm9ybVVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gcGVyZm9ybVVwZGF0ZVRvZG8oZSkpO1xyXG5mb3JtQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtQWRkUHJvamVjdChlKSk7XHJcbmZvcm1BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1BZGRUb2RvKGUpKTtcclxuXHJcbmluYm94U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBzZWxlY3RQcm9qZWN0U2VjdGlvbihpbmJveFNlY3Rpb24pXHJcbik7XHJcbnRvZGF5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT5cclxuICBzZWxlY3RQcm9qZWN0U2VjdGlvbih0b2RheVNlY3Rpb24pXHJcbik7XHJcblxyXG5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEZvcm1PcGVyYXRpb25zKTtcclxuYnRuRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtQWRkVGFzayk7XHJcbmJ0bkFkZFRvZG9OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtQWRkVG9kb05hdmJhcik7XHJcbmJ0bkNhbmNlbEZvcm1OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFByb2plY3QpO1xyXG5cclxuYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICBzaG93U2VjdGlvblByb2plY3QodG9kYXlTZWN0aW9uKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufSk7XHJcblxyXG5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHNlYXJjaFRvZG8oZSkpO1xyXG5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gIHNlYXJjaFJlc3VsdC5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXZpc2libGVcIik7XHJcbn0pO1xyXG5pbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gIGlucHV0U2VhcmNoLnZhbHVlID0gXCJcIjtcclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0ICE9PSBpbnB1dFNlYXJjaCkgc2VhcmNoUmVzdWx0LmNsYXNzTGlzdC5hZGQoXCJub3QtdmlzaWJsZVwiKTtcclxufSk7XHJcblxyXG4vKipcclxuICogRElTUExBWSBDVVJSRU5UIERBVEVcclxuICovXHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKTtcclxuICBjb25zdCB5ZWFyID0gZGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IGRhdGVPYmplY3QuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IGRhdGUgPSBkYXRlT2JqZWN0LmdldERhdGUoKTtcclxuXHJcbiAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgaWYgKGRhdGUgPCAxMCkgZGF0ZSA9IGAwJHtkYXRlfWA7XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlVXBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlLW5hdmJhclwiKTtcclxuXHJcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZU5hdmJhci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTVEFSVCBBUFBcclxuICovXHJcblxyXG5mdW5jdGlvbiBpbml0QXBwKCkge1xyXG4gIHN0b3JhZ2UubG9hZERhdGFTdG9yYWdlKCk7IC8vIGdldCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlIEFQSVxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0KTtcclxuICBkaXNwbGF5UHJvamVjdHNCYXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgc2V0Q3VycmVudERhdGUoKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FyZFRvZG8iLCJpbmRleCIsIm9ialRvZG8iLCJkaXZUYXNrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGl2VGFza0luZm8iLCJpY29uVXBkYXRlVGFzayIsImlubmVySFRNTCIsImdldFRpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJjc3NUZXh0IiwiZ2V0UHJpb3JpdHkiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVDYXJkUHJvamVjdHMiLCJwcm9qZWN0TmFtZSIsImRpdlByb2plY3QiLCJkaXZJbmZvIiwiaWNvbkRlbGV0ZSIsInNwYW5OdW1iZXJUb2RvcyIsImNyZWF0ZVNlbGVjdE9wdGlvbnMiLCJhcnJheVByb2plY3RzIiwic2VsZWN0IiwidGV4dENvbnRlbnQiLCJvcHRpb25IaWRkZW4iLCJ2YWx1ZSIsImxlbmd0aCIsImZvckVhY2giLCJwcm9qZWN0IiwiZ2V0TmFtZSIsIm9wdGlvbiIsIm5hbWUiLCJjcmVhdGVTaG93VG9kb3MiLCJ0b2Rvc0FycmF5Iiwic2VhcmNoZWRUb2RvcyIsImdldEVsZW1lbnRCeUlkIiwiaW5ib3hUaXRsZSIsInRvZGF5VGl0bGUiLCJ0b2RvIiwiZGl2VG9kbyIsInByb2plY3RUb2RvIiwiaW5mb1RvZG8iLCJpY29uUHJvamVjdCIsInRpdGxlIiwiVG9kbyIsImdldFZhbHVlc0Zyb21Gb3JtIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicmVwbGFjZSIsImNob29zZVByb2plY3QiLCJ0YXNrUHJpb3JpdHkiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByaW9yaXR5IiwiZ2V0Rm9ybVVwZGF0ZUlucHV0cyIsImlucHV0VGl0bGUiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXREdWVEYXRlIiwiaW5wdXRDaG9vc2VQcm9qZWN0IiwiaW5wdXRQcmlvcml0eSIsInNob3dJbmZvRm9ybVVwZGF0ZSIsImRhdGFPYmplY3QiLCJpbnB1dHNGb3JtVXBkYXRlIiwiZ2V0UHJvamVjdE5hbWUiLCJnZXRWYWx1ZXNGb3JtVXBkYXRlIiwiZ2V0VmFsdWVzRnJvbU5hdmJhciIsIlByb2plY3RzIiwiUHJvamVjdCIsIlN0b3JhZ2UiLCJsb2FkRGF0YVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJzYXZlUHJvamVjdHNTdG9yYWdlIiwiZGF0YVByb2plY3RzIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQcm9qZWN0c1N0b3JhZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXRQcm9qZWN0cyIsImdldFByb2plY3RzIiwibWFwIiwic2V0VG9kb3MiLCJnZXRUb2RvcyIsImdldEFsbFByb2plY3RzIiwiYWRkUHJvamVjdFN0b3JhZ2UiLCJyZW1vdmVQcm9qZWN0U3RvcmFnZSIsImRlbGV0ZUFsbFRvZG9zIiwicmVtb3ZlUHJvamVjdCIsImFkZFRvZG9TdG9yYWdlIiwidG9kb09iaiIsImFkZFRvZG9Gcm9tUHJvamVjdCIsInVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UiLCJ1cGRhdGVUb2RvVG9kYXkiLCJ1cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZSIsInVwZGF0ZVRvZG9Gcm9tVG9kYXkiLCJkZWxldGVUb2RvVG9kYXlTdG9yYWdlIiwiZGVsZXRlVG9kb1RvZGF5IiwiZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UiLCJkZWxldGVUb2RvRnJvbVRvZGF5IiwiZ2V0UHJvamVjdFN0b3JhZ2UiLCJnZXRQcm9qZWN0IiwiY29uc3RydWN0b3IiLCJ0b2RvcyIsInNldE5hbWUiLCJnZXRUb2RvIiwiZmluZCIsIml0ZW0iLCJnZXRJbmRleFRvZG8iLCJmaW5kSW5kZXgiLCJhZGRUb2RvIiwicmVtb3ZlVG9kbyIsInRvZG9UaXRsZSIsInNsaWNlIiwidXBkYXRlVG9kbyIsImlzVG9kYXkiLCJwcm9qZWN0c0FycmF5IiwicHVzaCIsImdldFByb2plY3RJbmRleCIsImZpbHRlciIsInRvZGF5IiwicHJvamVjdEFkZGVkIiwic2VhcmNoVG9kbyIsInByb2plY3RTZWFyY2giLCJzZXRQcm9qZWN0TmFtZSIsIkRhdGUiLCJmaW5kVG9kb1RvZGF5IiwiaW5kZXhUb2RvIiwiaSIsImhhc093blByb3BlcnR5IiwibG93ZXN0SW5kZXgiLCJ1cGRhdGVkVG9kbyIsInRvZG9JbmRleCIsInRvZG9Qcm9wZXJ0eSIsInRvZG9WYWx1ZXMiLCJpbmRleFNlYXJjaCIsInRvZG9BZGRlZCIsImFyZ3VtZW50cyIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXREdWVEYXRlIiwic2V0UHJpb3JpdHkiLCJpbmJveFNlY3Rpb24iLCJ0b2RheVNlY3Rpb24iLCJmb3JtVXBkYXRlVG9kbyIsImZvcm1BZGRQcm9qZWN0IiwiZm9ybUFkZFRvZG8iLCJmb3JtQWRkVG9kb05hdmJhciIsImNvbnRhaW5lclRvZG9MaXN0IiwiY29udGFpbmVyUHJvamVjdHMiLCJjb250YWluZXJBZGRQcm9qZWN0IiwiY29udGFpbmVyQWRkVG9kb05hdmJhciIsInNlY3Rpb25Ub2RvIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bkFkZFRvZG8iLCJidG5Gb3JtQ2FuY2VsIiwiYnRuQ2FuY2VsUHJvamVjdCIsImJ0bkNhbmNlbFVwZGF0ZUZvcm0iLCJidG5DYW5jZWxGb3JtTmF2YmFyIiwiYnRuQWRkUHJvamVjdCIsImJ0bkFkZFRvZG9OYXZiYXIiLCJidG5Ib21lIiwic2VsZWN0UHJvamVjdCIsInNlbGVjdFVwZGF0ZVByb2plY3QiLCJzZWxlY3RQcm9qZWN0TmF2YmFyIiwiaW5wdXRTZWFyY2giLCJzZWFyY2hSZXN1bHQiLCJzZWN0aW9uVGl0bGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0b3JhZ2UiLCJpbmRleENhcmRUb2RvIiwiYXJyYXlUb2Rvc0RPTSIsImluaXRBcHAiLCJlIiwic2VhcmNoVmFsdWUiLCJ0YXJnZXQiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJzZWFyY2hSZXN1bHRBcnJheSIsInRvZG9zVG9kYXkiLCJmb3VuZFRvZG9zIiwiaW5jbHVkZXMiLCJmb3VuZFRvZG9zVG9kYXkiLCJBcnJheSIsImNoaWxkcmVuIiwic2hvd1NlYXJjaGVkU2VjdGlvbiIsImFycmF5UmVzdWx0IiwiYXJyYXlTZWN0aW9ucyIsImVsZW0iLCJjdXJyZW50U2VjdGlvbiIsImNoaWxkTm9kZXMiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd1RvZG9MaXN0IiwiYWRkVG9kb0Zyb21Gb3JtIiwiZ2V0U2VjdGlvbk9iamVjdCIsInVwZGF0ZVRvZG9Gcm9tRm9ybSIsInZhbHVlc1RvZG8iLCJnZXREYXRhVG9kb0NhcmQiLCJpbmRleENhcmQiLCJ1cGRhdGVUb2RvQ2FyZERPTSIsImZyb20iLCJ0YXNrIiwibGFzdEVsZW1lbnRDaGlsZCIsInJlbW92ZUNoaWxkIiwiY2xvc2VGb3JtQWRkVGFzayIsInNob3dGb3JtVXBkYXRlQ2FyZCIsImRlbGV0ZVRvZG9ET00iLCJjaGVja2VkIiwic2hvd0N1cnJlbnRUb2RvcyIsImNsZWFuVG9kb3NDb250YWluZXIiLCJvYmplY3QiLCJ0b2Rvc1F1YW50aXR5IiwidXBkYXRlVG9kb0NhcmQiLCJ0b2RvRGF0YSIsImRpdkNvbnRhaW5lciIsInRpdGxlVGFzayIsImRlc2NyaXB0aW9uVGFzayIsImFycmF5VGFzayIsImluc2VydEJlZm9yZSIsInNob3dGb3JtVXBkYXRlVGFzayIsImNsb3NlRm9ybVVwZGF0ZVRhc2siLCJzZWxlY3RQcm9qZWN0U2VjdGlvbiIsInNob3dTZWN0aW9uUHJvamVjdCIsInN0YXJ0Rm9ybU9wZXJhdGlvbnMiLCJzaG93Rm9ybUFkZFRhc2siLCJuZXdQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInBlcmZvcm1EZWxldGVQcm9qZWN0IiwicGFyZW50RWxlbWVudCIsInNob3dQcm9qZWN0c0xpc3QiLCJwcm9qZWN0T3BlcmF0aW9ucyIsInByb2plY3RzRE9NIiwiZGVsZXRlUHJvamVjdHMiLCJpY29uIiwiY2xlYW5Db250YWluZXJQcm9qZWN0cyIsImRpc3BsYXlQcm9qZWN0c0JhciIsInNob3dQcm9qZWN0c0JhciIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2VjdGlvbiIsInNlY3Rpb25BcnJheSIsImNvbmNhdCIsInJlbW92ZSIsInNob3dGb3JtQWRkUHJvamVjdCIsInJlc2V0IiwicGVyZm9ybUFkZFRvZG8iLCJwcmV2ZW50RGVmYXVsdCIsInBlcmZvcm1VcGRhdGVUb2RvIiwicGVyZm9ybUFkZFRvZG9OYXYiLCJwZXJmb3JtQWRkUHJvamVjdCIsImlucHV0UHJvamVjdE5hbWUiLCJzaG93Rm9ybUFkZFRvZG9OYXZiYXIiLCJjbG9zZUZvcm1BZGRUb2RvTmF2YmFyIiwid2luZG93IiwiZ2V0Q3VycmVudERhdGUiLCJkYXRlT2JqZWN0IiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwic2V0Q3VycmVudERhdGUiLCJkdWVEYXRlVXBkYXRlIiwiZHVlRGF0ZU5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=