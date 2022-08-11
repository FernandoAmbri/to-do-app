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
/* harmony export */   "createSelectOptions": () => (/* binding */ createSelectOptions)
/* harmony export */ });
function createCardTodo(index, objTodo) {
  const divTask = document.createElement("div");
  const divTaskInfo = document.createElement("div");
  const iconUpdateTask = document.createElement("i");
  divTask.innerHTML = "<input type=\"checkbox\" id=\"task-finished\" />";
  divTaskInfo.innerHTML = "<h2 class=\"task-name\" id=\"task-name-card\">".concat(objTodo.getTitle(), "</h2>\n  <p class=\"task-description-card\" id=\"task-description-card\">").concat(objTodo.getDescription(), "</p>\n  <p>").concat(objTodo.getDueDate(), "</p>");
  iconUpdateTask.classList.add("fa-regular", "fa-pen-to-square");
  divTask.classList.add("task");
  divTask.setAttribute("index-todo", index);
  divTask.style.cssText = "border: 2px solid ".concat(objTodo.getPriority());
  divTask.appendChild(divTaskInfo);
  divTask.appendChild(iconUpdateTask);
  document.querySelector(".task-list").appendChild(divTask);
}

function createCardProjects(projectName) {
  const containerProjects = document.querySelector(".container-projects");
  const divProject = document.createElement("div");
  const divInfo = document.createElement("div");
  const iconDelete = document.createElement("i");
  const spanNumberTodos = document.createElement("span");
  divInfo.innerHTML = "<i class=\"fa-regular fa-file\"></i>\n  <p id=\"project-name\">".concat(projectName, "</p>");
  spanNumberTodos.setAttribute("id", "number-of-tasks");
  iconDelete.classList.add("fa-regular", "fa-trash-can");
  iconDelete.setAttribute("id", "delete-project");
  divProject.classList.add("project", "section"); //divProject.setAttribute("index-todo", index);

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

  if (arrayProjects.length > 0) {
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



class Storage {
  loadDataStorage() {
    if (localStorage.length === 0) {
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

  updateTodoTodayStorage(index, todoObj, project) {
    const projects = this.getProjectsStorage();
    projects.updateTodoToday(index, todoObj, project);
    this.saveProjectsStorage(projects);
  }

  updateTodoFromTodayStorage(index, todoObj) {
    const projects = this.getProjectsStorage();
    projects.updateTodoFromToday(index, todoObj);
    this.saveProjectsStorage(projects);
  }

  deleteAllTodosProject(projectName) {
    const projects = this.getProjectsStorage();
    projects.deleteAllTodos(projectName);
    this.saveProjectsStorage(projects);
  }

  deleteTodoTodayStorage(index, project) {
    const projects = this.getProjectsStorage();
    projects.deleteTodoToday(index, project);
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
    return todo ? todo : false;
  }

  getIndexTodo(todo) {
    return this.todos.findIndex(item => item.getTitle() === todo.getTitle());
  }

  addTodo(todo) {
    if (!this.getTodo(todo.getTitle())) {
      if (this.getName() === todo.getProjectName()) {
        this.todos.push(todo);
        return true;
      }
    }

    return false;
  }

  removeTodo(todoTitle) {
    this.todos = this.todos.filter(item => item.getTitle() !== todoTitle);
  }

  updateTodo(index, todo) {
    if (todo.getProjectName() === this.name && this.getTodo(todo.getTitle())) {
      this.todos[index] = todo;
      return true;
    } else {
      this.removeTodo(todo.getTitle());
      return false;
    }
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
    const project = this.projects.find(project => project.name === name);
    return project ? project : false;
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
    const project = this.getProject(todo.getProjectName());
    const today = this.getProject("Today");
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
    const today = this.getProject("Today");
    let indexTodo = -1;
    today.todos.forEach((item, i) => {
      if (item.searchTodo.projectSearch === project.getName() && item.searchTodo.todoTitle === todoTitle) {
        indexTodo = i;
      }
    });
    return indexTodo >= 0 ? indexTodo : -1;
  }

  updateTodoToday(index, todoObj, project) {
    let updatedTodo = null;
    const today = this.getProject("Today");
    const todoTitle = project.getTodos()[index].getTitle();

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todoObj.getDueDate()))) {
      const todoIndex = this.findTodoToday(project, todoTitle);
      todoObj.searchTodo = {
        projectSearch: project.getName(),
        todoTitle: todoObj.getTitle()
      };

      if (todoIndex >= 0) {
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

      if (todoIndex >= 0) {
        today.removeTodo(todoTitle);
      }

      if (updatedTodo === false) {
        this.addTodoFromProject(todoObj);
      }
    }
  }

  updateTodoFromToday(index, todoObj) {
    const today = this.getProject("Today");
    const todoValues = today.getTodos()[index];

    if (todoValues.hasOwnProperty("searchTodo")) {
      todoObj.searchTodo = todoValues.searchTodo;
    }

    if (todoObj.hasOwnProperty("searchTodo")) {
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
    const today = this.getProject("Today");
    const todoObj = today.getTodos()[index];

    if (todoObj.hasOwnProperty("searchTodo")) {
      const {
        projectSearch,
        todoTitle
      } = todoObj.searchTodo;
      const project = this.getProject(projectSearch);
      project.removeTodo(todoTitle);
    }

    today.removeTodo(todoObj.getTitle());
  }

  deleteAllTodos(projectName) {
    const project = this.getProject(projectName);
    project.getTodos().forEach((todo, i) => {
      if ((0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(todo.getDueDate()))) {
        const index = i;
        this.deleteTodoToday(index, project, true);
      }
    });
  }

  deleteTodoToday(index, project, removeProject) {
    const today = this.getProject("Today");
    const todoTitle = project.todos[index].getTitle();
    const indexTodo = this.findTodoToday(project, todoTitle);

    if (indexTodo >= 0) {
      today.removeTodo(todoTitle);
    }

    if (removeProject === undefined) {
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
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background: #a3e635;\r\n}\r\n\r\n.navbar {\r\n  width: 1280px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n}\r\n\r\n.navbar ul {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.navbar ul a {\r\n  text-decoration: none;\r\n}\r\n\r\nul a i {\r\n  font-size: 1.8rem;\r\n  color: #fff;\r\n  padding: 5px;\r\n}\r\n\r\nul a i:hover {\r\n  background: rgba(255, 255, 255, 0.4);\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=search] {\r\n  opacity: 0.4;\r\n  padding: 7px 10px;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.sidebar {\r\n  background: #f7fee7;\r\n  width: 304px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.container {\r\n  padding: 5px 5px 5px 45px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.section {\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.section div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.section span {\r\n  font-size: 1.3rem;\r\n  color: #555;\r\n}\r\n\r\n.section-active,\r\n.section:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.today {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.projects {\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.projects>div {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects>i {\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.projects .fa-plus:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.container-projects {\r\n  display: none;\r\n  overflow: auto;\r\n  font-size: 1.5rem;\r\n  height: 220px;\r\n}\r\n\r\n.container-projects .project {\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n}\r\n\r\n.project div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.project .fa-trash-can {\r\n  cursor: pointer;\r\n}\r\n\r\n#show-projects {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n\r\nMain content \r\n\r\n*/\r\n\r\n.content {\r\n  width: 100%;\r\n  padding: 30px 0;\r\n}\r\n\r\n.task-container {\r\n  width: 75%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\nbutton.add-task {\r\n  text-align: start;\r\n  padding: 10px 0;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton.add-task:hover {\r\n  color: #84cc16;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 6px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task input[type=checkbox] {\r\n  width: 18px;\r\n  height: 18px;\r\n  accent-color: white;\r\n  cursor: pointer;\r\n  border: 1px solid #333;\r\n}\r\n\r\n.task div {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 10px;\r\n}\r\n\r\n.task-description-card {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.task i {\r\n  padding: 5px;\r\n  font-size: 1.7rem;\r\n  color: #333;\r\n  border-radius: 4px;\r\n}\r\n\r\n.task i:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-task-card,\r\n.form-update-task {\r\n  display: none;\r\n}\r\n\r\nform .task-card {\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.task-card input[type=text] {\r\n  padding: 5px 0;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  height: 40px;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 5px 0;\r\n}\r\n\r\n.selectors {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=date] {\r\n  padding: 1px;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ninput[type=date]:hover {\r\n  background: #eee;\r\n  border: 1px solid #333;\r\n}\r\n\r\nselect {\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 3px;\r\n  outline: none;\r\n}\r\n\r\nselect:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons-card {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.buttons-card button {\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  font-family: 'Poppins', sans-serif;\r\n  width: 80px;\r\n}\r\n\r\nbutton.btn-cancel,\r\nbutton.btn-cancel-project,\r\nbutton.btn-cancel-update {\r\n  background: #f7fee7;\r\n  border: 1px solid #eee;\r\n  border-radius: 6px;\r\n}\r\n\r\nbutton.btn-add,\r\nbutton.btn-save {\r\n  background: #a3e635;\r\n  color: #fff;\r\n  border-radius: 6px;\r\n  border: 1px solid #a3e635;\r\n}\r\n\r\n/*\r\n\r\nAdd task from navbar \r\n\r\n*/\r\n\r\n.container-fixed {\r\n  width: 100%;\r\n  height: 55%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-fixed form {\r\n  width: 600px;\r\n  padding: 15px;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.container-fixed .task-card {\r\n  border: none;\r\n}\r\n\r\n/*\r\nAdd project form\r\n*/\r\n\r\n.container-add-project {\r\n  width: 100%;\r\n  height: 65%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-add-project form {\r\n  width: 400px;\r\n  height: 160px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.8rem;\r\n  gap: 5px;\r\n}\r\n\r\n.container-add-project input[type=text] {\r\n  padding: 6px;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n  border: 1px solid #333;\r\n  border-radius: 6px;\r\n}\r\n\r\n.show-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.content-hidden {\r\n  display: none;\r\n}\r\n\r\n.show-content {\r\n  display: block;\r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Poppins', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100vh;\r\n  position: relative;\r\n}\r\n\r\nheader {\r\n  background: #a3e635;\r\n}\r\n\r\n.navbar {\r\n  width: 1280px;\r\n  height: 45px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n}\r\n\r\n.navbar ul {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\n.navbar ul a {\r\n  text-decoration: none;\r\n}\r\n\r\nul a i {\r\n  font-size: 1.8rem;\r\n  color: #fff;\r\n  padding: 5px;\r\n}\r\n\r\nul a i:hover {\r\n  background: rgba(255, 255, 255, 0.4);\r\n  border-radius: 4px;\r\n}\r\n\r\ninput[type=search] {\r\n  opacity: 0.4;\r\n  padding: 7px 10px;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex: 1;\r\n}\r\n\r\n.sidebar {\r\n  background: #f7fee7;\r\n  width: 304px;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.container {\r\n  padding: 5px 5px 5px 45px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.section {\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.section div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.section span {\r\n  font-size: 1.3rem;\r\n  color: #555;\r\n}\r\n\r\n.section-active,\r\n.section:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.today {\r\n  margin-bottom: 50px;\r\n}\r\n\r\n.projects {\r\n  height: 40px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 10px;\r\n  font-size: 1.5rem;\r\n  border-radius: 6px;\r\n}\r\n\r\n.projects>div {\r\n  height: inherit;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.projects h2 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.projects>i {\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n.projects .fa-plus:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.container-projects {\r\n  display: none;\r\n  overflow: auto;\r\n  font-size: 1.5rem;\r\n  height: 220px;\r\n}\r\n\r\n.container-projects .project {\r\n  padding: 10px 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-radius: 6px;\r\n}\r\n\r\n.project div {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n}\r\n\r\n.project:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.project .fa-trash-can {\r\n  cursor: pointer;\r\n}\r\n\r\n#show-projects {\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n\r\nMain content \r\n\r\n*/\r\n\r\n.content {\r\n  width: 100%;\r\n  padding: 30px 0;\r\n}\r\n\r\n.task-container {\r\n  width: 75%;\r\n  margin: 10px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6px;\r\n}\r\n\r\nbutton.add-task {\r\n  text-align: start;\r\n  padding: 10px 0;\r\n  background: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nbutton.add-task:hover {\r\n  color: #84cc16;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 6px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.task input[type=checkbox] {\r\n  width: 18px;\r\n  height: 18px;\r\n  accent-color: white;\r\n  cursor: pointer;\r\n  border: 1px solid #333;\r\n}\r\n\r\n.task div {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 10px;\r\n}\r\n\r\n.task-description-card {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.task i {\r\n  padding: 5px;\r\n  font-size: 1.7rem;\r\n  color: #333;\r\n  border-radius: 4px;\r\n}\r\n\r\n.task i:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-task-card,\r\n.form-update-task {\r\n  display: none;\r\n}\r\n\r\nform .task-card {\r\n  border: 1px solid #a3a3a3;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n}\r\n\r\n.task-card input[type=text] {\r\n  padding: 5px 0;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\ntextarea {\r\n  resize: none;\r\n  height: 40px;\r\n  border: none;\r\n  outline: none;\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 5px 0;\r\n}\r\n\r\n.selectors {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\ninput[type=date] {\r\n  padding: 1px;\r\n  font-family: 'Poppins', sans-serif;\r\n  margin-right: 5px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\ninput[type=date]:hover {\r\n  background: #eee;\r\n  border: 1px solid #333;\r\n}\r\n\r\nselect {\r\n  font-family: 'Poppins', sans-serif;\r\n  padding: 3px;\r\n  outline: none;\r\n}\r\n\r\nselect:hover {\r\n  background: #eee;\r\n  cursor: pointer;\r\n}\r\n\r\n.buttons-card {\r\n  display: flex;\r\n  justify-content: end;\r\n  gap: 10px;\r\n  margin: 10px 0;\r\n}\r\n\r\n.buttons-card button {\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  font-family: 'Poppins', sans-serif;\r\n  width: 80px;\r\n}\r\n\r\nbutton.btn-cancel,\r\nbutton.btn-cancel-project,\r\nbutton.btn-cancel-update {\r\n  background: #f7fee7;\r\n  border: 1px solid #eee;\r\n  border-radius: 6px;\r\n}\r\n\r\nbutton.btn-add,\r\nbutton.btn-save {\r\n  background: #a3e635;\r\n  color: #fff;\r\n  border-radius: 6px;\r\n  border: 1px solid #a3e635;\r\n}\r\n\r\n/*\r\n\r\nAdd task from navbar \r\n\r\n*/\r\n\r\n.container-fixed {\r\n  width: 100%;\r\n  height: 55%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-fixed form {\r\n  width: 600px;\r\n  padding: 15px;\r\n  background: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.container-fixed .task-card {\r\n  border: none;\r\n}\r\n\r\n/*\r\nAdd project form\r\n*/\r\n\r\n.container-add-project {\r\n  width: 100%;\r\n  height: 65%;\r\n  position: fixed;\r\n  display: none;\r\n}\r\n\r\n.container-add-project form {\r\n  width: 400px;\r\n  height: 160px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  background: #fff;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);\r\n  font-family: 'Poppins', sans-serif;\r\n  font-size: 1.8rem;\r\n  gap: 5px;\r\n}\r\n\r\n.container-add-project input[type=text] {\r\n  padding: 6px;\r\n  font-size: 1.8rem;\r\n  outline: none;\r\n  border: 1px solid #333;\r\n  border-radius: 6px;\r\n}\r\n\r\n.show-form {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.content-hidden {\r\n  display: none;\r\n}\r\n\r\n.show-content {\r\n  display: block;\r\n}"],"sourceRoot":""}]);
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
const inputProjectName = document.getElementById("project-name");
const selectProject = document.getElementById("select-project");
const selectUpdateProject = document.getElementById("select-project-update");
const selectProjectNavbar = document.getElementById("select-project-navbar");
let sectionTitle = document.querySelector(".task-container").firstElementChild;
const storage = new _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"]();
let indexCardTodo = 0;
let arrayTodosDOM = [];
storage.loadDataStorage();
(0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProject);
displayProjectsBar();

const getSectionObject = projectName => storage.getProjectStorage(projectName);

showTodoList();

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

  return "".concat(year, "-").concat(month, "-").concat(date);
}

function deleteTodoDOM() {
  document.querySelectorAll(".task").forEach((task, i) => {
    task.firstElementChild.addEventListener("change", e => {
      if (e.target.checked) {
        const project = getSectionObject(sectionTitle.textContent);

        if (project !== storage.getProjectStorage("Today")) {
          storage.deleteTodoTodayStorage(i, project);
        } else {
          storage.deleteTodoFromTodayStorage(i);
        }

        containerTodoList.removeChild(task);
        showTodoList();
        showCurrentTodos();
      }
    });
  });
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

function addTodoFromForm(todoObj) {
  if (todoObj.getTitle().trim() !== "") {
    if (todoObj.getProjectName().trim() === "") {
      const project = getSectionObject(sectionTitle.textContent);

      if (project !== storage.getProjectStorage("Today")) {
        todoObj.setProjectName(project.getName());
      }
    }

    storage.addTodoStorage(todoObj);
  }
}

function formOperations() {
  closeFormUpdateTask();
  showTodoList();
  showFormAddTask();
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

function updateTodoFromForm(valuesTodo) {
  if (valuesTodo.getTitle().trim() !== "") {
    const project = getSectionObject(sectionTitle.textContent);

    if (project !== today) {
      storage.updateTodoTodayStorage(indexCardTodo, valuesTodo, project);
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
    task.lastElementChild.addEventListener("click", e => {
      containerTodoList.removeChild(arrayTodosDOM[index]);
      indexCardTodo = index;
      closeFormAddTask();
      showFormUpdateCard(arrayTodosDOM, index);
      (0,_formContent__WEBPACK_IMPORTED_MODULE_2__.showInfoFormUpdate)(getDataTodoCard(index));
    });
  });
}

function chooseObjectList(object) {
  sectionTitle.textContent = object.children[0].lastElementChild.textContent;
  closeFormAddTask();
  closeFormUpdateTask();
  showSectionTodo(object);
  cleanTodosContainer();
  showTodoList();
}

function showFormAddTodoNavbar() {
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProjectNavbar);
  containerAddTodoNavbar.classList.add("show-form");
}

function closeFormAddTodoNavbar() {
  containerAddTodoNavbar.classList.remove("show-form");
}

function showSectionTodo(section) {
  const sectionArray = Array.from(sectionTodo);
  const projects = Array.from(containerProjects.children);
  sectionArray.concat(projects).forEach(item => {
    item.classList.remove("section-active");
  });
  section.classList.add("section-active");
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
/*
PROJECTS
*/


function addProject(projectName) {
  if (projectName !== "") {
    const newProject = new _project__WEBPACK_IMPORTED_MODULE_3__["default"](projectName);
    storage.addProjectStorage(newProject);
  }
}

const deleteProject = projectName => {
  storage.deleteAllTodosProject(projectName);
  storage.removeProjectStorage(projectName);
};

function showFormAddProject() {
  containerAddProject.classList.add("show-form");
  btnCancelProject.addEventListener("click", e => {
    formAddProject.reset();
    containerAddProject.classList.remove("show-form");
  });
}

function projectOperations() {
  const projectsDOM = document.querySelectorAll(".project");
  const deleteProjects = document.querySelectorAll("#delete-project");
  projectsDOM.forEach(project => {
    project.addEventListener("click", e => {
      chooseObjectList(project);
    });
  });
  deleteProjects.forEach(project => {
    project.addEventListener("click", e => {
      const projectName = e.target.parentElement.children[0].children[1].textContent;
      deleteProject(projectName);
      showProjectsList();
      showCurrentTodos();
    });
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
  showProjectsBar.addEventListener("click", e => {
    showProjectsBar.classList.toggle("fa-chevron-right");
    showProjectsBar.classList.toggle("fa-chevron-down");
    containerProjects.classList.toggle("show-content");

    if (showProjectsBar.classList.contains("fa-chevron-down")) {
      showProjectsList();
    }
  });
}

formAddTodo.addEventListener("submit", e => {
  e.preventDefault();
  addTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFromForm)());
  showTodoList();
  showCurrentTodos();
  formAddTodo.reset();
});
formUpdateTodo.addEventListener("submit", e => {
  e.preventDefault();
  updateTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFormUpdate)());
  updateTodoCard(indexCardTodo, (0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFormUpdate)());
  closeFormUpdateTask();
  showTodoList();
  showCurrentTodos();
});
formAddTodoNavbar.addEventListener("submit", e => {
  e.preventDefault();
  addTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFromNavbar)());
  showTodoList();
  showCurrentTodos();
  formAddTodoNavbar.reset();
});
formAddProject.addEventListener("submit", e => {
  e.preventDefault();
  const projectName = inputProjectName.value.trim();
  addProject(projectName);
  showProjectsList();
  projectOperations();
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProject);
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectUpdateProject);
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProjectNavbar);
  formAddProject.reset();
  containerAddProject.classList.remove("show-form");
});
inboxSection.addEventListener("click", e => chooseObjectList(e.target));
todaySection.addEventListener("click", e => chooseObjectList(e.target));
btnAddTodo.addEventListener("click", formOperations);
btnFormCancel.addEventListener("click", closeFormAddTask);
btnAddTodoNavbar.addEventListener("click", showFormAddTodoNavbar);
btnCancelFormNavbar.addEventListener("click", closeFormAddTodoNavbar);
btnAddProject.addEventListener("click", showFormAddProject);
btnHome.addEventListener("click", e => {
  sectionTitle.textContent = "Today";
  showSectionTodo(todaySection);
  showTodoList();
});

(function setCurrentDate() {
  const dueDate = document.getElementById("dueDate");
  const dueDateUpdate = document.getElementById("dueDate-update");
  const dueDateNavbar = document.getElementById("duedate-navbar");
  dueDate.setAttribute("min", getCurrentDate());
  dueDateUpdate.setAttribute("min", getCurrentDate());
  dueDateNavbar.setAttribute("min", getCurrentDate());
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDK0IsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBbUNDLENBQUQsSUFBTztFQUN2QzNCLFlBQVksQ0FBQ3hJLFdBQWIsR0FBMkIsT0FBM0I7RUFDQThMLGVBQWUsQ0FBQzVFLFlBQUQsQ0FBZjtFQUNBNkIsWUFBWTtBQUNiLENBSkQ7O0FBTUEsQ0FBQyxTQUFTa0UsY0FBVCxHQUEwQjtFQUN6QixNQUFNbk0sT0FBTyxHQUFHeEMsUUFBUSxDQUFDc0MsY0FBVCxDQUF3QixTQUF4QixDQUFoQjtFQUNBLE1BQU1zTSxhQUFhLEdBQUc1TyxRQUFRLENBQUNzQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUNBLE1BQU11TSxhQUFhLEdBQUc3TyxRQUFRLENBQUNzQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUVBRSxPQUFPLENBQUM5QixZQUFSLENBQXFCLEtBQXJCLEVBQTRCd0ssY0FBYyxFQUExQztFQUNBMEQsYUFBYSxDQUFDbE8sWUFBZCxDQUEyQixLQUEzQixFQUFrQ3dLLGNBQWMsRUFBaEQ7RUFDQTJELGFBQWEsQ0FBQ25PLFlBQWQsQ0FBMkIsS0FBM0IsRUFBa0N3SyxjQUFjLEVBQWhEO0FBQ0QsQ0FSRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mb3JtQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDYXJkVG9kbyhpbmRleCwgb2JqVG9kbykge1xyXG4gIGNvbnN0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdlRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uVXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICBkaXZUYXNrLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrLWZpbmlzaGVkXCIgLz5gO1xyXG4gIGRpdlRhc2tJbmZvLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZS1jYXJkXCI+JHtvYmpUb2RvLmdldFRpdGxlKCl9PC9oMj5cclxuICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiIGlkPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCI+JHtvYmpUb2RvLmdldERlc2NyaXB0aW9uKCl9PC9wPlxyXG4gIDxwPiR7b2JqVG9kby5nZXREdWVEYXRlKCl9PC9wPmA7XHJcblxyXG4gIGljb25VcGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcclxuXHJcbiAgZGl2VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcImluZGV4LXRvZG9cIiwgaW5kZXgpO1xyXG4gIGRpdlRhc2suc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke29ialRvZG8uZ2V0UHJpb3JpdHkoKX1gO1xyXG5cclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGRpdlRhc2tJbmZvKTtcclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGljb25VcGRhdGVUYXNrKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIikuYXBwZW5kQ2hpbGQoZGl2VGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0TmFtZSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbiAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHNwYW5OdW1iZXJUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZmlsZVwiPjwvaT5cclxuICA8cCBpZD1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9wPmA7XHJcblxyXG4gIHNwYW5OdW1iZXJUb2Rvcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bWJlci1vZi10YXNrc1wiKTtcclxuXHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXRyYXNoLWNhblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gIGRpdlByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIiwgXCJzZWN0aW9uXCIpO1xyXG4gIC8vZGl2UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC10b2RvXCIsIGluZGV4KTtcclxuXHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChkaXZJbmZvKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHNwYW5OdW1iZXJUb2Rvcyk7XHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChpY29uRGVsZXRlKTtcclxuXHJcbiAgcmV0dXJuIGRpdlByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbnMoYXJyYXlQcm9qZWN0cywgc2VsZWN0KSB7XHJcbiAgc2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgb3B0aW9uSGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb25IaWRkZW4udmFsdWUgPSBcIlwiO1xyXG4gIG9wdGlvbkhpZGRlbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XHJcbiAgb3B0aW9uSGlkZGVuLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XHJcblxyXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25IaWRkZW4pO1xyXG5cclxuICBpZiAoYXJyYXlQcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhcnJheVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRvZGF5XCIpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FyZFRvZG8sIGNyZWF0ZUNhcmRQcm9qZWN0cywgY3JlYXRlU2VsZWN0T3B0aW9ucyB9O1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9ybSgpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtVXBkYXRlSW5wdXRzKCkge1xyXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dENob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LXVwZGF0ZVwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0VGl0bGUsXHJcbiAgICBpbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgaW5wdXREdWVEYXRlLFxyXG4gICAgaW5wdXRDaG9vc2VQcm9qZWN0LFxyXG4gICAgaW5wdXRQcmlvcml0eSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5mb0Zvcm1VcGRhdGUoZGF0YU9iamVjdCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlID0gZGF0YU9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZSA9IGRhdGFPYmplY3RcclxuICAgIC5nZXREdWVEYXRlKClcclxuICAgIC5yZXBsYWNlKC8oXFwvKS9nLCBcIi1cIik7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3QudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByb2plY3ROYW1lKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5LnZhbHVlID0gZGF0YU9iamVjdC5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3Q7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5O1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tTmF2YmFyKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLW5hdmJhclwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpXHJcbiAgICAudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1uYXZiYXJcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0VmFsdWVzRnJvbUZvcm0sXHJcbiAgZ2V0VmFsdWVzRm9ybVVwZGF0ZSxcclxuICBnZXRWYWx1ZXNGcm9tTmF2YmFyLFxyXG4gIHNob3dJbmZvRm9ybVVwZGF0ZSxcclxufTtcclxuIiwiaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgbG9hZERhdGFTdG9yYWdlKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIkluYm94XCIpKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0c1N0b3JhZ2UoZGF0YVByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGRhdGFQcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHNTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBuZXcgUHJvamVjdHMoKSxcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0cy5zZXRQcm9qZWN0cyhcclxuICAgICAgcHJvamVjdHNcclxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICApO1xyXG5cclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0LnNldFRvZG9zKFxyXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgdG9kbykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHJldHVybiBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdFN0b3JhZ2UocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb1N0b3JhZ2UodG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoaW5kZXgsIHRvZG9PYmosIHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Ub2RheShpbmRleCwgdG9kb09iaiwgcHJvamVjdCk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaW5kZXgsIHRvZG9PYmopIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUFsbFRvZG9zUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Ub2RheVN0b3JhZ2UoaW5kZXgsIHByb2plY3QpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdCk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaW5kZXgpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICByZXR1cm4gcHJvamVjdHMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSBcIlwiKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXROYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9kb3ModG9kb3NBcnJheSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRvZG9zQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvKHRpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRpdGxlKTtcclxuICAgIHJldHVybiB0b2RvID8gdG9kbyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhUb2RvKHRvZG8pIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0b2RvLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0VG9kbyh0b2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5hbWUoKSA9PT0gdG9kby5nZXRQcm9qZWN0TmFtZSgpKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvKHRvZG9UaXRsZSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgIT09IHRvZG9UaXRsZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvKGluZGV4LCB0b2RvKSB7XHJcbiAgICBpZiAodG9kby5nZXRQcm9qZWN0TmFtZSgpID09PSB0aGlzLm5hbWUgJiYgdGhpcy5nZXRUb2RvKHRvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgdGhpcy50b2Rvc1tpbmRleF0gPSB0b2RvO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmdldFRpdGxlKCkpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0cyhwcm9qZWN0c0FycmF5KSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcclxuICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdCA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRnJvbVByb2plY3QodG9kbykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHByb2plY3RBZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kbykgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAocHJvamVjdEFkZGVkKSB7XHJcbiAgICAgIHRvZG8uc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RvLnNldFByb2plY3ROYW1lKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgbGV0IGluZGV4VG9kbyA9IC0xO1xyXG5cclxuICAgIHRvZGF5LnRvZG9zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGl0ZW0uc2VhcmNoVG9kby5wcm9qZWN0U2VhcmNoID09PSBwcm9qZWN0LmdldE5hbWUoKSAmJlxyXG4gICAgICAgIGl0ZW0uc2VhcmNoVG9kby50b2RvVGl0bGUgPT09IHRvZG9UaXRsZVxyXG4gICAgICApIHtcclxuICAgICAgICBpbmRleFRvZG8gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleFRvZG8gPj0gMCA/IGluZGV4VG9kbyA6IC0xO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb1RvZGF5KGluZGV4LCB0b2RvT2JqLCBwcm9qZWN0KSB7XHJcbiAgICBsZXQgdXBkYXRlZFRvZG8gPSBudWxsO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHByb2plY3QuZ2V0VG9kb3MoKVtpbmRleF0uZ2V0VGl0bGUoKTtcclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvT2JqLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgcHJvamVjdFNlYXJjaDogcHJvamVjdC5nZXROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvT2JqLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRvZGF5LnRvZG9zW3RvZG9JbmRleF0gPSB0b2RvT2JqO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZGF5LnRvZG9zLnB1c2godG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgICBpZiAodG9kb0luZGV4ID49IDApIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5KGluZGV4LCB0b2RvT2JqKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb1ZhbHVlcyA9IHRvZGF5LmdldFRvZG9zKClbaW5kZXhdO1xyXG5cclxuICAgIGlmICh0b2RvVmFsdWVzLmhhc093blByb3BlcnR5KFwic2VhcmNoVG9kb1wiKSkge1xyXG4gICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB0b2RvVmFsdWVzLnNlYXJjaFRvZG87XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIGNvbnN0IGluZGV4U2VhcmNoID0gcHJvamVjdC5nZXRJbmRleFRvZG8ocHJvamVjdC5nZXRUb2RvKHRvZG9UaXRsZSkpO1xyXG4gICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleFNlYXJjaCwgdG9kb09iaik7XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKSk7XHJcbiAgICAgIGNvbnN0IHRvZG9BZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kb09iaikgOiBmYWxzZTtcclxuICAgICAgaWYgKHRvZG9BZGRlZCkge1xyXG4gICAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICAgIHByb2plY3RTZWFyY2g6IHRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKSxcclxuICAgICAgICAgIHRvZG9UaXRsZTogdG9kb09iai5nZXRUaXRsZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvT2JqLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIHRvZGF5LnRvZG9zW2luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9WYWx1ZXMuZ2V0VGl0bGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvRnJvbVRvZGF5KGluZGV4KSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb09iaiA9IHRvZGF5LmdldFRvZG9zKClbaW5kZXhdO1xyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8sIGkpID0+IHtcclxuICAgICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kby5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb1RvZGF5KGluZGV4LCBwcm9qZWN0LCByZW1vdmVQcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gcHJvamVjdC50b2Rvc1tpbmRleF0uZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGluZGV4VG9kbyA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgaWYgKGluZGV4VG9kbyA+PSAwKSB7XHJcbiAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChyZW1vdmVQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUgPSBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxyXG4gICAgZHVlRGF0ZSA9IFwiXCIsXHJcbiAgICBwcm9qZWN0TmFtZSA9IFwiXCIsXHJcbiAgICBwcmlvcml0eSA9IDFcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzA0cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMv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RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMDRweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDYXJkVG9kbyxcclxuICBjcmVhdGVDYXJkUHJvamVjdHMsXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn0gZnJvbSBcIi4vZm9ybUNvbnRlbnRcIjtcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5jb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xyXG5jb25zdCB0b2RheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xyXG5cclxuY29uc3QgZm9ybVVwZGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdXBkYXRlLXRhc2tcIik7XHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrLWNhcmRcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC10b2RvLW5hdmJhclwiKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lclRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgY29udGFpbmVyQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWZpeGVkXCIpO1xyXG5cclxuY29uc3Qgc2VjdGlvblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcblxyXG5jb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuY29uc3QgYnRuRm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5DYW5jZWxVcGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLXVwZGF0ZVwiKTtcclxuY29uc3QgYnRuQ2FuY2VsRm9ybU5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1ob21lXCIpO1xyXG5cclxuY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xyXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuY29uc3Qgc2VsZWN0VXBkYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtdXBkYXRlXCIpO1xyXG5jb25zdCBzZWxlY3RQcm9qZWN0TmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC1uYXZiYXJcIik7XHJcblxyXG5sZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbmNvbnN0IHN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgpO1xyXG5cclxubGV0IGluZGV4Q2FyZFRvZG8gPSAwO1xyXG5sZXQgYXJyYXlUb2Rvc0RPTSA9IFtdO1xyXG5cclxuc3RvcmFnZS5sb2FkRGF0YVN0b3JhZ2UoKTtcclxuY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG5kaXNwbGF5UHJvamVjdHNCYXIoKTtcclxuXHJcbmNvbnN0IGdldFNlY3Rpb25PYmplY3QgPSAocHJvamVjdE5hbWUpID0+XHJcbiAgc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSk7XHJcblxyXG5zaG93VG9kb0xpc3QoKTtcclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybUFkZFRhc2soKSB7XHJcbiAgZm9ybUFkZFRvZG8ucmVzZXQoKTtcclxuICBmb3JtQWRkVG9kby5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFRhc2soKSB7XHJcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LmFkZChcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtVXBkYXRlVGFzaygpIHtcclxuICBmb3JtVXBkYXRlVG9kby5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uY2xhc3NMaXN0LmFkZChcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Ub2Rvc0NvbnRhaW5lcigpIHtcclxuICBjb250YWluZXJUb2RvTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuQ29udGFpbmVyUHJvamVjdHMoKSB7XHJcbiAgY29udGFpbmVyUHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW50RGF0ZSgpIHtcclxuICBjb25zdCBkYXRlT2JqZWN0ID0gbmV3IERhdGUoKTtcclxuICBsZXQgeWVhciA9IGRhdGVPYmplY3QuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgbW9udGggPSBkYXRlT2JqZWN0LmdldE1vbnRoKCkgKyAxO1xyXG4gIGxldCBkYXRlID0gZGF0ZU9iamVjdC5nZXREYXRlKCk7XHJcblxyXG4gIGlmIChtb250aCA8IDEwKSB7XHJcbiAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XHJcbiAgfVxyXG4gIGlmIChkYXRlIDwgMTApIHtcclxuICAgIGRhdGUgPSBcIjBcIiArIGRhdGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXRlfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9ET00oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgaWYgKHByb2plY3QgIT09IHN0b3JhZ2UuZ2V0UHJvamVjdFN0b3JhZ2UoXCJUb2RheVwiKSkge1xyXG4gICAgICAgICAgc3RvcmFnZS5kZWxldGVUb2RvVG9kYXlTdG9yYWdlKGksIHByb2plY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdG9yYWdlLmRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgICAgICBzaG93VG9kb0xpc3QoKTtcclxuICAgICAgICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9kb0xpc3QoKSB7XHJcbiAgY2xlYW5Ub2Rvc0NvbnRhaW5lcigpO1xyXG4gIGNvbnN0IG9iamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICBpZiAob2JqZWN0KSB7XHJcbiAgICBvYmplY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaSkgPT4gY3JlYXRlQ2FyZFRvZG8oaSwgdG9kbykpO1xyXG4gICAgdXBkYXRlVG9kb0NhcmRET00oKTtcclxuICAgIGRlbGV0ZVRvZG9ET00oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tRm9ybSh0b2RvT2JqKSB7XHJcbiAgaWYgKHRvZG9PYmouZ2V0VGl0bGUoKS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGlmICh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgIGlmIChwcm9qZWN0ICE9PSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiVG9kYXlcIikpIHtcclxuICAgICAgICB0b2RvT2JqLnNldFByb2plY3ROYW1lKHByb2plY3QuZ2V0TmFtZSgpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgc3RvcmFnZS5hZGRUb2RvU3RvcmFnZSh0b2RvT2JqKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1PcGVyYXRpb25zKCkge1xyXG4gIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Rm9ybUFkZFRhc2soKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkLCB0b2RvRGF0YSkge1xyXG4gIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpbmRleENhcmRdO1xyXG4gIGlmIChkaXZDb250YWluZXIpIHtcclxuICAgIGRpdkNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYGJvcmRlcjogMnB4IHNvbGlkICR7dG9kb0RhdGEucHJpb3JpdHl9YDtcclxuXHJcbiAgICBjb25zdCB0aXRsZVRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICB0aXRsZVRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS50aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uVGFzay50ZXh0Q29udGVudCA9IHRvZG9EYXRhLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VGFzaywgaW5kZXhDYXJkKSB7XHJcbiAgaWYgKGFycmF5VGFzay5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2UgaWYgKGFycmF5VGFzay5sZW5ndGggLSAxID09PSBpbmRleENhcmQpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGFpbmVyVG9kb0xpc3QuaW5zZXJ0QmVmb3JlKGZvcm1VcGRhdGVUb2RvLCBhcnJheVRhc2tbaW5kZXhDYXJkICsgMV0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Zvcm1VcGRhdGVUYXNrKCk7XHJcbiAgYnRuQ2FuY2VsVXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Gcm9tRm9ybSh2YWx1ZXNUb2RvKSB7XHJcbiAgaWYgKHZhbHVlc1RvZG8uZ2V0VGl0bGUoKS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICBpZiAocHJvamVjdCAhPT0gdG9kYXkpIHtcclxuICAgICAgc3RvcmFnZS51cGRhdGVUb2RvVG9kYXlTdG9yYWdlKGluZGV4Q2FyZFRvZG8sIHZhbHVlc1RvZG8sIHByb2plY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZS51cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleENhcmRUb2RvLCB2YWx1ZXNUb2RvKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFUb2RvQ2FyZChpbmRleENhcmQpIHtcclxuICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBwcm9qZWN0LnRvZG9zW2luZGV4Q2FyZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkRE9NKCkge1xyXG4gIGFycmF5VG9kb3NET00gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lclRvZG9MaXN0LnJlbW92ZUNoaWxkKGFycmF5VG9kb3NET01baW5kZXhdKTtcclxuICAgICAgaW5kZXhDYXJkVG9kbyA9IGluZGV4O1xyXG4gICAgICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgICAgIHNob3dGb3JtVXBkYXRlQ2FyZChhcnJheVRvZG9zRE9NLCBpbmRleCk7XHJcbiAgICAgIHNob3dJbmZvRm9ybVVwZGF0ZShnZXREYXRhVG9kb0NhcmQoaW5kZXgpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaG9vc2VPYmplY3RMaXN0KG9iamVjdCkge1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IG9iamVjdC5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gIGNsb3NlRm9ybUFkZFRhc2soKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1NlY3Rpb25Ub2RvKG9iamVjdCk7XHJcbiAgY2xlYW5Ub2Rvc0NvbnRhaW5lcigpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFRvZG9OYXZiYXIoKSB7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LmFkZChcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTZWN0aW9uVG9kbyhzZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2VjdGlvbkFycmF5ID0gQXJyYXkuZnJvbShzZWN0aW9uVG9kbyk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGNvbnRhaW5lclByb2plY3RzLmNoaWxkcmVuKTtcclxuICBzZWN0aW9uQXJyYXkuY29uY2F0KHByb2plY3RzKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKVtpXS50b2Rvcy5sZW5ndGg7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGlmICh0b2Rvc1F1YW50aXR5ID4gMCkge1xyXG4gICAgICBpdGVtLnRleHRDb250ZW50ID0gdG9kb3NRdWFudGl0eTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLypcclxuUFJPSkVDVFNcclxuKi9cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdE5hbWUpIHtcclxuICBpZiAocHJvamVjdE5hbWUgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBzdG9yYWdlLmFkZFByb2plY3RTdG9yYWdlKG5ld1Byb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gIHN0b3JhZ2UuZGVsZXRlQWxsVG9kb3NQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBzdG9yYWdlLnJlbW92ZVByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkUHJvamVjdCgpIHtcclxuICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJzaG93LWZvcm1cIik7XHJcbiAgYnRuQ2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RPcGVyYXRpb25zKCkge1xyXG4gIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGUtcHJvamVjdFwiKTtcclxuXHJcbiAgcHJvamVjdHNET00uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY2hvb3NlT2JqZWN0TGlzdChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBkZWxldGVQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9XHJcbiAgICAgICAgZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXS50ZXh0Q29udGVudDtcclxuICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICAgICAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0c0xpc3QoKSB7XHJcbiAgY2xlYW5Db250YWluZXJQcm9qZWN0cygpO1xyXG4gIHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IFwiSW5ib3hcIiAmJiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJUb2RheVwiKSB7XHJcbiAgICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0LmdldE5hbWUoKSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHByb2plY3RPcGVyYXRpb25zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c0JhcigpIHtcclxuICBjb25zdCBzaG93UHJvamVjdHNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctcHJvamVjdHNcIik7XHJcblxyXG4gIHNob3dQcm9qZWN0c0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1yaWdodFwiKTtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctY29udGVudFwiKTtcclxuXHJcbiAgICBpZiAoc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZhLWNoZXZyb24tZG93blwiKSkge1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZvcm1BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYWRkVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zyb21Gb3JtKCkpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICBmb3JtQWRkVG9kby5yZXNldCgpO1xyXG59KTtcclxuXHJcbmZvcm1VcGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXBkYXRlVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zvcm1VcGRhdGUoKSk7XHJcbiAgdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkVG9kbywgZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG59KTtcclxuXHJcbmZvcm1BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgYWRkVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zyb21OYXZiYXIoKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvTmF2YmFyLnJlc2V0KCk7XHJcbn0pO1xyXG5cclxuZm9ybUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0UHJvamVjdE5hbWUudmFsdWUudHJpbSgpO1xyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgcHJvamVjdE9wZXJhdGlvbnMoKTtcclxuXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdE5hdmJhcik7XHJcblxyXG4gIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG59KTtcclxuXHJcbmluYm94U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGNob29zZU9iamVjdExpc3QoZS50YXJnZXQpKTtcclxudG9kYXlTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gY2hvb3NlT2JqZWN0TGlzdChlLnRhcmdldCkpO1xyXG5cclxuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZm9ybU9wZXJhdGlvbnMpO1xyXG5idG5Gb3JtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm1BZGRUYXNrKTtcclxuYnRuQWRkVG9kb05hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKTtcclxuYnRuQ2FuY2VsRm9ybU5hdmJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtQWRkVG9kb05hdmJhcik7XHJcbmJ0bkFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtQWRkUHJvamVjdCk7XHJcblxyXG5idG5Ib21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcclxuICBzaG93U2VjdGlvblRvZG8odG9kYXlTZWN0aW9uKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufSk7XHJcblxyXG4oZnVuY3Rpb24gc2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlVXBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlLW5hdmJhclwiKTtcclxuXHJcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZU5hdmJhci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVDYXJkVG9kbyIsImluZGV4Iiwib2JqVG9kbyIsImRpdlRhc2siLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJkaXZUYXNrSW5mbyIsImljb25VcGRhdGVUYXNrIiwiaW5uZXJIVE1MIiwiZ2V0VGl0bGUiLCJnZXREZXNjcmlwdGlvbiIsImdldER1ZURhdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImNzc1RleHQiLCJnZXRQcmlvcml0eSIsImFwcGVuZENoaWxkIiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZUNhcmRQcm9qZWN0cyIsInByb2plY3ROYW1lIiwiY29udGFpbmVyUHJvamVjdHMiLCJkaXZQcm9qZWN0IiwiZGl2SW5mbyIsImljb25EZWxldGUiLCJzcGFuTnVtYmVyVG9kb3MiLCJjcmVhdGVTZWxlY3RPcHRpb25zIiwiYXJyYXlQcm9qZWN0cyIsInNlbGVjdCIsInRleHRDb250ZW50Iiwib3B0aW9uSGlkZGVuIiwidmFsdWUiLCJsZW5ndGgiLCJmb3JFYWNoIiwicHJvamVjdCIsImdldE5hbWUiLCJvcHRpb24iLCJuYW1lIiwiVG9kbyIsImdldFZhbHVlc0Zyb21Gb3JtIiwidGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInJlcGxhY2UiLCJjaG9vc2VQcm9qZWN0IiwidGFza1ByaW9yaXR5Iiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJwcmlvcml0eSIsImdldEZvcm1VcGRhdGVJbnB1dHMiLCJpbnB1dFRpdGxlIiwiaW5wdXREZXNjcmlwdGlvbiIsImlucHV0RHVlRGF0ZSIsImlucHV0Q2hvb3NlUHJvamVjdCIsImlucHV0UHJpb3JpdHkiLCJzaG93SW5mb0Zvcm1VcGRhdGUiLCJkYXRhT2JqZWN0IiwiaW5wdXRzRm9ybVVwZGF0ZSIsImdldFByb2plY3ROYW1lIiwiZ2V0VmFsdWVzRm9ybVVwZGF0ZSIsImdldFZhbHVlc0Zyb21OYXZiYXIiLCJQcm9qZWN0cyIsIlByb2plY3QiLCJTdG9yYWdlIiwibG9hZERhdGFTdG9yYWdlIiwibG9jYWxTdG9yYWdlIiwicHJvamVjdHMiLCJhZGRQcm9qZWN0Iiwic2F2ZVByb2plY3RzU3RvcmFnZSIsImRhdGFQcm9qZWN0cyIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UHJvamVjdHNTdG9yYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwicGFyc2UiLCJnZXRJdGVtIiwic2V0UHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsIm1hcCIsInNldFRvZG9zIiwiZ2V0VG9kb3MiLCJ0b2RvIiwiZ2V0QWxsUHJvamVjdHMiLCJhZGRQcm9qZWN0U3RvcmFnZSIsInJlbW92ZVByb2plY3RTdG9yYWdlIiwiZGVsZXRlQWxsVG9kb3MiLCJyZW1vdmVQcm9qZWN0IiwiYWRkVG9kb1N0b3JhZ2UiLCJ0b2RvT2JqIiwiYWRkVG9kb0Zyb21Qcm9qZWN0IiwidXBkYXRlVG9kb1RvZGF5U3RvcmFnZSIsInVwZGF0ZVRvZG9Ub2RheSIsInVwZGF0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlIiwidXBkYXRlVG9kb0Zyb21Ub2RheSIsImRlbGV0ZUFsbFRvZG9zUHJvamVjdCIsImRlbGV0ZVRvZG9Ub2RheVN0b3JhZ2UiLCJkZWxldGVUb2RvVG9kYXkiLCJkZWxldGVUb2RvRnJvbVRvZGF5U3RvcmFnZSIsImRlbGV0ZVRvZG9Gcm9tVG9kYXkiLCJnZXRQcm9qZWN0U3RvcmFnZSIsImdldFByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRvZG9zIiwic2V0TmFtZSIsInRvZG9zQXJyYXkiLCJnZXRUb2RvIiwiZmluZCIsIml0ZW0iLCJnZXRJbmRleFRvZG8iLCJmaW5kSW5kZXgiLCJhZGRUb2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJ0b2RvVGl0bGUiLCJmaWx0ZXIiLCJ1cGRhdGVUb2RvIiwiaXNUb2RheSIsInByb2plY3RzQXJyYXkiLCJnZXRQcm9qZWN0SW5kZXgiLCJ0b2RheSIsInByb2plY3RBZGRlZCIsInNlYXJjaFRvZG8iLCJwcm9qZWN0U2VhcmNoIiwic2V0UHJvamVjdE5hbWUiLCJEYXRlIiwiZmluZFRvZG9Ub2RheSIsImluZGV4VG9kbyIsImkiLCJ1cGRhdGVkVG9kbyIsInRvZG9JbmRleCIsInRvZG9WYWx1ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4U2VhcmNoIiwidG9kb0FkZGVkIiwidW5kZWZpbmVkIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldER1ZURhdGUiLCJzZXRQcmlvcml0eSIsImluYm94U2VjdGlvbiIsInRvZGF5U2VjdGlvbiIsImZvcm1VcGRhdGVUb2RvIiwiZm9ybUFkZFByb2plY3QiLCJmb3JtQWRkVG9kbyIsImZvcm1BZGRUb2RvTmF2YmFyIiwiY29udGFpbmVyVG9kb0xpc3QiLCJjb250YWluZXJBZGRQcm9qZWN0IiwiY29udGFpbmVyQWRkVG9kb05hdmJhciIsInNlY3Rpb25Ub2RvIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bkFkZFRvZG8iLCJidG5Gb3JtQ2FuY2VsIiwiYnRuQ2FuY2VsUHJvamVjdCIsImJ0bkNhbmNlbFVwZGF0ZUZvcm0iLCJidG5DYW5jZWxGb3JtTmF2YmFyIiwiYnRuQWRkUHJvamVjdCIsImJ0bkFkZFRvZG9OYXZiYXIiLCJidG5Ib21lIiwiaW5wdXRQcm9qZWN0TmFtZSIsInNlbGVjdFByb2plY3QiLCJzZWxlY3RVcGRhdGVQcm9qZWN0Iiwic2VsZWN0UHJvamVjdE5hdmJhciIsInNlY3Rpb25UaXRsZSIsImZpcnN0RWxlbWVudENoaWxkIiwic3RvcmFnZSIsImluZGV4Q2FyZFRvZG8iLCJhcnJheVRvZG9zRE9NIiwiZGlzcGxheVByb2plY3RzQmFyIiwiZ2V0U2VjdGlvbk9iamVjdCIsInNob3dUb2RvTGlzdCIsImNsb3NlRm9ybUFkZFRhc2siLCJyZXNldCIsInJlbW92ZSIsInNob3dGb3JtQWRkVGFzayIsImNsb3NlRm9ybVVwZGF0ZVRhc2siLCJzaG93Rm9ybVVwZGF0ZVRhc2siLCJjbGVhblRvZG9zQ29udGFpbmVyIiwiY2xlYW5Db250YWluZXJQcm9qZWN0cyIsImdldEN1cnJlbnREYXRlIiwiZGF0ZU9iamVjdCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImRlbGV0ZVRvZG9ET00iLCJ0YXNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwicmVtb3ZlQ2hpbGQiLCJzaG93Q3VycmVudFRvZG9zIiwib2JqZWN0IiwidXBkYXRlVG9kb0NhcmRET00iLCJhZGRUb2RvRnJvbUZvcm0iLCJ0cmltIiwiZm9ybU9wZXJhdGlvbnMiLCJ1cGRhdGVUb2RvQ2FyZCIsImluZGV4Q2FyZCIsInRvZG9EYXRhIiwiZGl2Q29udGFpbmVyIiwidGl0bGVUYXNrIiwiY2hpbGRyZW4iLCJkZXNjcmlwdGlvblRhc2siLCJsYXN0RWxlbWVudENoaWxkIiwic2hvd0Zvcm1VcGRhdGVDYXJkIiwiYXJyYXlUYXNrIiwiaW5zZXJ0QmVmb3JlIiwidXBkYXRlVG9kb0Zyb21Gb3JtIiwidmFsdWVzVG9kbyIsImdldERhdGFUb2RvQ2FyZCIsIkFycmF5IiwiZnJvbSIsImNob29zZU9iamVjdExpc3QiLCJzaG93U2VjdGlvblRvZG8iLCJzaG93Rm9ybUFkZFRvZG9OYXZiYXIiLCJjbG9zZUZvcm1BZGRUb2RvTmF2YmFyIiwic2VjdGlvbiIsInNlY3Rpb25BcnJheSIsImNvbmNhdCIsInRvZG9zUXVhbnRpdHkiLCJuZXdQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInNob3dGb3JtQWRkUHJvamVjdCIsInByb2plY3RPcGVyYXRpb25zIiwicHJvamVjdHNET00iLCJkZWxldGVQcm9qZWN0cyIsInBhcmVudEVsZW1lbnQiLCJzaG93UHJvamVjdHNMaXN0Iiwic2hvd1Byb2plY3RzQmFyIiwidG9nZ2xlIiwiY29udGFpbnMiLCJwcmV2ZW50RGVmYXVsdCIsInNldEN1cnJlbnREYXRlIiwiZHVlRGF0ZVVwZGF0ZSIsImR1ZURhdGVOYXZiYXIiXSwic291cmNlUm9vdCI6IiJ9