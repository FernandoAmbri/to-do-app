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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");


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

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(todo.getDueDate()))) {
      today.todos.push(todo);
    }
  }

  findTodoToday(project, todoTitle) {
    const today = this.getProject("Today");
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
    const today = this.getProject("Today");
    const project = this.getProject(projectName);
    const todoTitle = project.getTodos()[index].getTitle();
    let updatedTodo = null;

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(todoObj.getDueDate()))) {
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

    if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(todoObj.getDueDate()))) {
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
        if ((0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(todo.getDueDate()))) {
          const index = i;
          this.deleteTodoToday(index, projectName, true);
        }
      });
    }
  }

  deleteTodoToday(index, projectName) {
    const project = this.getProject(projectName);
    const today = this.getProject("Today");
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
const selectProject = document.getElementById("select-project");
const selectUpdateProject = document.getElementById("select-project-update");
const selectProjectNavbar = document.getElementById("select-project-navbar");
let sectionTitle = document.querySelector(".task-container").firstElementChild;
const storage = new _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
    task.lastElementChild.addEventListener("click", e => {
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
    project.addEventListener("click", e => selectProjectSection(project));
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
  showProjectsBar.addEventListener("click", e => {
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
  btnCancelProject.addEventListener("click", e => {
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
inboxSection.addEventListener("click", e => selectProjectSection(e.target));
todaySection.addEventListener("click", e => selectProjectSection(e.target));
btnAddTodo.addEventListener("click", startFormOperations);
btnFormCancel.addEventListener("click", closeFormAddTask);
btnAddTodoNavbar.addEventListener("click", showFormAddTodoNavbar);
btnCancelFormNavbar.addEventListener("click", closeFormAddTodoNavbar);
btnAddProject.addEventListener("click", showFormAddProject);
btnHome.addEventListener("click", e => {
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

function initApp() {
  storage.loadDataStorage();
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(storage.getAllProjects(), selectProject);
  displayProjectsBar();
  showTodoList();
  showCurrentTodos();
  setCurrentDate();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLHVHQUF1RyxzQ0FBc0MsNkJB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QUNzQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUNBLE1BQU02TSxhQUFhLEdBQUduUCxRQUFRLENBQUNzQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUVBRSxPQUFPLENBQUM5QixZQUFSLENBQXFCLEtBQXJCLEVBQTRCK04sY0FBYyxFQUExQztFQUNBUyxhQUFhLENBQUN4TyxZQUFkLENBQTJCLEtBQTNCLEVBQWtDK04sY0FBYyxFQUFoRDtFQUNBVSxhQUFhLENBQUN6TyxZQUFkLENBQTJCLEtBQTNCLEVBQWtDK04sY0FBYyxFQUFoRDtBQUNEOztBQUVELFNBQVNwRSxPQUFULEdBQW1CO0VBQ2pCSCxPQUFPLENBQUNwRyxlQUFSO0VBQ0F2QyxnRUFBbUIsQ0FBQzJJLE9BQU8sQ0FBQ2hGLGNBQVIsRUFBRCxFQUEyQjJFLGFBQTNCLENBQW5CO0VBQ0EwRCxrQkFBa0I7RUFDbEJuQyxZQUFZO0VBQ1pPLGdCQUFnQjtFQUNoQnNELGNBQWM7QUFDZixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mb3JtQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDYXJkVG9kbyhpbmRleCwgb2JqVG9kbykge1xyXG4gIGNvbnN0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdlRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uVXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICBkaXZUYXNrLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrLWZpbmlzaGVkXCIgLz5gO1xyXG4gIGRpdlRhc2tJbmZvLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZS1jYXJkXCI+JHtvYmpUb2RvLmdldFRpdGxlKCl9PC9oMj5cclxuICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiIGlkPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCI+JHtvYmpUb2RvLmdldERlc2NyaXB0aW9uKCl9PC9wPlxyXG4gIDxwPiR7b2JqVG9kby5nZXREdWVEYXRlKCl9PC9wPmA7XHJcblxyXG4gIGljb25VcGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcclxuXHJcbiAgZGl2VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcImluZGV4LXRvZG9cIiwgaW5kZXgpO1xyXG4gIGRpdlRhc2suc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke29ialRvZG8uZ2V0UHJpb3JpdHkoKX1gO1xyXG5cclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGRpdlRhc2tJbmZvKTtcclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGljb25VcGRhdGVUYXNrKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIikuYXBwZW5kQ2hpbGQoZGl2VGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0TmFtZSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbiAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHNwYW5OdW1iZXJUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZmlsZVwiPjwvaT5cclxuICA8cCBpZD1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9wPmA7XHJcblxyXG4gIHNwYW5OdW1iZXJUb2Rvcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bWJlci1vZi10YXNrc1wiKTtcclxuXHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXRyYXNoLWNhblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gIGRpdlByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIiwgXCJzZWN0aW9uXCIpO1xyXG4gIC8vZGl2UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC10b2RvXCIsIGluZGV4KTtcclxuXHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChkaXZJbmZvKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHNwYW5OdW1iZXJUb2Rvcyk7XHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChpY29uRGVsZXRlKTtcclxuXHJcbiAgcmV0dXJuIGRpdlByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbnMoYXJyYXlQcm9qZWN0cywgc2VsZWN0KSB7XHJcbiAgc2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgb3B0aW9uSGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb25IaWRkZW4udmFsdWUgPSBcIlwiO1xyXG4gIG9wdGlvbkhpZGRlbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XHJcbiAgb3B0aW9uSGlkZGVuLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XHJcblxyXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25IaWRkZW4pO1xyXG5cclxuICBpZiAoYXJyYXlQcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhcnJheVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRvZGF5XCIpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FyZFRvZG8sIGNyZWF0ZUNhcmRQcm9qZWN0cywgY3JlYXRlU2VsZWN0T3B0aW9ucyB9O1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9ybSgpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtVXBkYXRlSW5wdXRzKCkge1xyXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dENob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LXVwZGF0ZVwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0VGl0bGUsXHJcbiAgICBpbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgaW5wdXREdWVEYXRlLFxyXG4gICAgaW5wdXRDaG9vc2VQcm9qZWN0LFxyXG4gICAgaW5wdXRQcmlvcml0eSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5mb0Zvcm1VcGRhdGUoZGF0YU9iamVjdCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlID0gZGF0YU9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZSA9IGRhdGFPYmplY3RcclxuICAgIC5nZXREdWVEYXRlKClcclxuICAgIC5yZXBsYWNlKC8oXFwvKS9nLCBcIi1cIik7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3QudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByb2plY3ROYW1lKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5LnZhbHVlID0gZGF0YU9iamVjdC5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3Q7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5O1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tTmF2YmFyKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLW5hdmJhclwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpXHJcbiAgICAudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1uYXZiYXJcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0VmFsdWVzRnJvbUZvcm0sXHJcbiAgZ2V0VmFsdWVzRm9ybVVwZGF0ZSxcclxuICBnZXRWYWx1ZXNGcm9tTmF2YmFyLFxyXG4gIHNob3dJbmZvRm9ybVVwZGF0ZSxcclxufTtcclxuIiwiaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XHJcbiAgbG9hZERhdGFTdG9yYWdlKCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc3QgcHJvamVjdHMgPSBuZXcgUHJvamVjdHMoKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIkluYm94XCIpKTtcclxuICAgICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXcgUHJvamVjdChcIlRvZGF5XCIpKTtcclxuICAgICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNhdmVQcm9qZWN0c1N0b3JhZ2UoZGF0YVByb2plY3RzKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGRhdGFQcm9qZWN0cykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdHNTdG9yYWdlKCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICBuZXcgUHJvamVjdHMoKSxcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKVxyXG4gICAgKTtcclxuXHJcbiAgICBwcm9qZWN0cy5zZXRQcm9qZWN0cyhcclxuICAgICAgcHJvamVjdHNcclxuICAgICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIC5tYXAoKHByb2plY3QpID0+IE9iamVjdC5hc3NpZ24obmV3IFByb2plY3QoKSwgcHJvamVjdCkpXHJcbiAgICApO1xyXG5cclxuICAgIHByb2plY3RzLmdldFByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0LnNldFRvZG9zKFxyXG4gICAgICAgIHByb2plY3QuZ2V0VG9kb3MoKS5tYXAoKHRvZG8pID0+IE9iamVjdC5hc3NpZ24obmV3IFRvZG8oKSwgdG9kbykpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBnZXRBbGxQcm9qZWN0cygpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHJldHVybiBwcm9qZWN0cy5nZXRQcm9qZWN0cygpO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdFN0b3JhZ2UocHJvamVjdCkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChwcm9qZWN0KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb1N0b3JhZ2UodG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy51cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5U3RvcmFnZShpbmRleCwgdG9kb09iaikge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcHJvamVjdHMudXBkYXRlVG9kb0Zyb21Ub2RheShpbmRleCwgdG9kb09iaik7XHJcbiAgICB0aGlzLnNhdmVQcm9qZWN0c1N0b3JhZ2UocHJvamVjdHMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb1RvZGF5U3RvcmFnZShpbmRleCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3RzID0gdGhpcy5nZXRQcm9qZWN0c1N0b3JhZ2UoKTtcclxuICAgIHByb2plY3RzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUpO1xyXG4gICAgdGhpcy5zYXZlUHJvamVjdHNTdG9yYWdlKHByb2plY3RzKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGluZGV4KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHRoaXMuZ2V0UHJvamVjdHNTdG9yYWdlKCk7XHJcbiAgICBwcm9qZWN0cy5kZWxldGVUb2RvRnJvbVRvZGF5KGluZGV4KTtcclxuICAgIHRoaXMuc2F2ZVByb2plY3RzU3RvcmFnZShwcm9qZWN0cyk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB0aGlzLmdldFByb2plY3RzU3RvcmFnZSgpO1xyXG4gICAgcmV0dXJuIHByb2plY3RzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJcIikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0TmFtZShuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcblxyXG4gIHNldFRvZG9zKHRvZG9zQXJyYXkpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0b2Rvc0FycmF5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kbyh0aXRsZSkge1xyXG4gICAgY29uc3QgdG9kbyA9IHRoaXMudG9kb3MuZmluZCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0aXRsZSk7XHJcbiAgICByZXR1cm4gdG9kbyA/IHRvZG8gOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldEluZGV4VG9kbyh0b2RvKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2Rvcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSA9PT0gdG9kby5nZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG8odG9kbykge1xyXG4gICAgaWYgKCF0aGlzLmdldFRvZG8odG9kby5nZXRUaXRsZSgpKSkge1xyXG4gICAgICBpZiAodGhpcy5nZXROYW1lKCkgPT09IHRvZG8uZ2V0UHJvamVjdE5hbWUoKSkge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG9kbyh0b2RvVGl0bGUpIHtcclxuICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpICE9PSB0b2RvVGl0bGUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kbyhpbmRleCwgdG9kbykge1xyXG4gICAgaWYgKHRvZG8uZ2V0UHJvamVjdE5hbWUoKSA9PT0gdGhpcy5uYW1lICYmIHRoaXMuZ2V0VG9kbyh0b2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgIHRoaXMudG9kb3NbaW5kZXhdID0gdG9kbztcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbW92ZVRvZG8odG9kby5nZXRUaXRsZSgpKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0cyhwcm9qZWN0c0FycmF5KSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcclxuICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdCA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRnJvbVByb2plY3QodG9kbykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHByb2plY3RBZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kbykgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAocHJvamVjdEFkZGVkKSB7XHJcbiAgICAgIHRvZG8uc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RvLnNldFByb2plY3ROYW1lKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgbGV0IGluZGV4VG9kbyA9IC0xO1xyXG5cclxuICAgIHRvZGF5LnRvZG9zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgaXRlbS5zZWFyY2hUb2RvLnByb2plY3RTZWFyY2ggPT09IHByb2plY3QuZ2V0TmFtZSgpICYmXHJcbiAgICAgICAgICBpdGVtLnNlYXJjaFRvZG8udG9kb1RpdGxlID09PSB0b2RvVGl0bGVcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGluZGV4VG9kbyA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleFRvZG87XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBwcm9qZWN0LmdldFRvZG9zKClbaW5kZXhdLmdldFRpdGxlKCk7XHJcbiAgICBsZXQgdXBkYXRlZFRvZG8gPSBudWxsO1xyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG9PYmouZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiBwcm9qZWN0LmdldE5hbWUoKSxcclxuICAgICAgICB0b2RvVGl0bGU6IHRvZG9PYmouZ2V0VGl0bGUoKSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3NbdG9kb0luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4LCB0b2RvT2JqKTtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgsIHRvZG9PYmopIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcblxyXG4gICAgaWYgKHRvZG9WYWx1ZXMuaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHRvZG9WYWx1ZXMuc2VhcmNoVG9kbztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eShcInNlYXJjaFRvZG9cIikpIHtcclxuICAgICAgY29uc3QgeyBwcm9qZWN0U2VhcmNoLCB0b2RvVGl0bGUgfSA9IHRvZG9PYmouc2VhcmNoVG9kbztcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0U2VhcmNoKTtcclxuICAgICAgY29uc3QgaW5kZXhTZWFyY2ggPSBwcm9qZWN0LmdldEluZGV4VG9kbyhwcm9qZWN0LmdldFRvZG8odG9kb1RpdGxlKSk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4U2VhcmNoLCB0b2RvT2JqKTtcclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QodG9kb09iai5nZXRQcm9qZWN0TmFtZSgpKTtcclxuICAgICAgY29uc3QgdG9kb0FkZGVkID0gcHJvamVjdCA/IHByb2plY3QuYWRkVG9kbyh0b2RvT2JqKSA6IGZhbHNlO1xyXG4gICAgICBpZiAodG9kb0FkZGVkKSB7XHJcbiAgICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgICAgcHJvamVjdFNlYXJjaDogdG9kb09iai5nZXRQcm9qZWN0TmFtZSgpLFxyXG4gICAgICAgICAgdG9kb1RpdGxlOiB0b2RvT2JqLmdldFRpdGxlKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG9PYmouZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3NbaW5kZXhdID0gdG9kb09iajtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1ZhbHVlcy5nZXRUaXRsZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvT2JqID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eShcInNlYXJjaFRvZG9cIikpIHtcclxuICAgICAgY29uc3QgeyBwcm9qZWN0U2VhcmNoLCB0b2RvVGl0bGUgfSA9IHRvZG9PYmouc2VhcmNoVG9kbztcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0U2VhcmNoKTtcclxuICAgICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgaWYgKHByb2plY3QpIHtcclxuICAgICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8sIGkpID0+IHtcclxuICAgICAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgICAgICBjb25zdCBpbmRleCA9IGk7XHJcbiAgICAgICAgICB0aGlzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdE5hbWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvVG9kYXkoaW5kZXgsIHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBwcm9qZWN0LmdldFRvZG9zKClbaW5kZXhdLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBpbmRleFRvZG8gPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgIGlmIChpbmRleFRvZG8gPj0gMCkge1xyXG4gICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDMpIHtcclxuICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUgPSBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxyXG4gICAgZHVlRGF0ZSA9IFwiXCIsXHJcbiAgICBwcm9qZWN0TmFtZSA9IFwiXCIsXHJcbiAgICBwcmlvcml0eSA9IDFcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzA0cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNr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QixrQkFBa0I7RUFDbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMDRweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDYXJkVG9kbyxcclxuICBjcmVhdGVDYXJkUHJvamVjdHMsXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn0gZnJvbSBcIi4vZm9ybUNvbnRlbnRcIjtcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5jb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xyXG5jb25zdCB0b2RheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xyXG5cclxuY29uc3QgZm9ybVVwZGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdXBkYXRlLXRhc2tcIik7XHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrLWNhcmRcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC10b2RvLW5hdmJhclwiKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lclRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgY29udGFpbmVyQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWZpeGVkXCIpO1xyXG5cclxuY29uc3Qgc2VjdGlvblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcblxyXG5jb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuY29uc3QgYnRuRm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5DYW5jZWxVcGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLXVwZGF0ZVwiKTtcclxuY29uc3QgYnRuQ2FuY2VsRm9ybU5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1ob21lXCIpO1xyXG5cclxuY29uc3Qgc2VsZWN0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbmNvbnN0IHNlbGVjdFVwZGF0ZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuY29uc3Qgc2VsZWN0UHJvamVjdE5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG5cclxubGV0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1jb250YWluZXJcIikuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5jb25zdCBzdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcclxuXHJcbmxldCBpbmRleENhcmRUb2RvID0gMDtcclxubGV0IGFycmF5VG9kb3NET00gPSBbXTtcclxuXHJcbmluaXRBcHAoKTtcclxuXHJcbi8qKlxyXG4gKiBUT0RPIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvRnJvbUZvcm0odG9kb09iaikge1xyXG4gIGlmICh0b2RvT2JqLmdldFRpdGxlKCkudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBpZiAodG9kb09iai5nZXRQcm9qZWN0TmFtZSgpLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICBjb25zdCB0b2RheSA9IHN0b3JhZ2UuZ2V0UHJvamVjdFN0b3JhZ2UoXCJUb2RheVwiKTtcclxuXHJcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gdG9kYXkuZ2V0TmFtZSgpKSB7XHJcbiAgICAgICAgdG9kb09iai5zZXRQcm9qZWN0TmFtZShwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHN0b3JhZ2UuYWRkVG9kb1N0b3JhZ2UodG9kb09iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvRnJvbUZvcm0odmFsdWVzVG9kbykge1xyXG4gIGlmICh2YWx1ZXNUb2RvLmdldFRpdGxlKCkudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiVG9kYXlcIik7XHJcbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IHRvZGF5LmdldE5hbWUoKSkge1xyXG4gICAgICBzdG9yYWdlLnVwZGF0ZVRvZG9Ub2RheVN0b3JhZ2UoXHJcbiAgICAgICAgaW5kZXhDYXJkVG9kbyxcclxuICAgICAgICB2YWx1ZXNUb2RvLFxyXG4gICAgICAgIHByb2plY3QuZ2V0TmFtZSgpXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlLnVwZGF0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlKGluZGV4Q2FyZFRvZG8sIHZhbHVlc1RvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RGF0YVRvZG9DYXJkKGluZGV4Q2FyZCkge1xyXG4gIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgcmV0dXJuIHByb2plY3QudG9kb3NbaW5kZXhDYXJkXTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0NhcmRET00oKSB7XHJcbiAgYXJyYXlUb2Rvc0RPTSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHtcclxuICAgIHRhc2subGFzdEVsZW1lbnRDaGlsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgICAgIGNvbnRhaW5lclRvZG9MaXN0LnJlbW92ZUNoaWxkKGFycmF5VG9kb3NET01baW5kZXhdKTtcclxuICAgICAgaW5kZXhDYXJkVG9kbyA9IGluZGV4O1xyXG4gICAgICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICAgICAgc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VG9kb3NET00sIGluZGV4KTtcclxuICAgICAgc2hvd0luZm9Gb3JtVXBkYXRlKGdldERhdGFUb2RvQ2FyZChpbmRleCkpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvZG9ET00oKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGkpID0+IHtcclxuICAgIHRhc2suZmlyc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgY29uc3QgdG9kYXkgPSBzdG9yYWdlLmdldFByb2plY3RTdG9yYWdlKFwiVG9kYXlcIik7XHJcbiAgICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSB0b2RheS5nZXROYW1lKCkpIHtcclxuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kb1RvZGF5U3RvcmFnZShpLCBwcm9qZWN0LmdldE5hbWUoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0b3JhZ2UuZGVsZXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlY3Rpb25PYmplY3QocHJvamVjdE5hbWUpIHtcclxuICByZXR1cm4gc3RvcmFnZS5nZXRQcm9qZWN0U3RvcmFnZShwcm9qZWN0TmFtZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUb2RvTGlzdCgpIHtcclxuICBjbGVhblRvZG9zQ29udGFpbmVyKCk7XHJcbiAgY29uc3Qgb2JqZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIGlmIChvYmplY3QpIHtcclxuICAgIG9iamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvLCBpKSA9PiBjcmVhdGVDYXJkVG9kbyhpLCB0b2RvKSk7XHJcbiAgICB1cGRhdGVUb2RvQ2FyZERPTSgpO1xyXG4gICAgZGVsZXRlVG9kb0RPTSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKVtpXS50b2Rvcy5sZW5ndGg7XHJcbiAgICBpdGVtLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGlmICh0b2Rvc1F1YW50aXR5ID4gMCkge1xyXG4gICAgICBpdGVtLnRleHRDb250ZW50ID0gdG9kb3NRdWFudGl0eTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkLCB0b2RvRGF0YSkge1xyXG4gIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKVtpbmRleENhcmRdO1xyXG4gIGlmIChkaXZDb250YWluZXIpIHtcclxuICAgIGRpdkNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gYGJvcmRlcjogMnB4IHNvbGlkICR7dG9kb0RhdGEucHJpb3JpdHl9YDtcclxuXHJcbiAgICBjb25zdCB0aXRsZVRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0uZmlyc3RFbGVtZW50Q2hpbGQ7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblRhc2sgPSBkaXZDb250YWluZXIuY2hpbGRyZW5bMV0ubGFzdEVsZW1lbnRDaGlsZDtcclxuXHJcbiAgICB0aXRsZVRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS50aXRsZTtcclxuICAgIGRlc2NyaXB0aW9uVGFzay50ZXh0Q29udGVudCA9IHRvZG9EYXRhLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVDYXJkKGFycmF5VGFzaywgaW5kZXhDYXJkKSB7XHJcbiAgaWYgKGFycmF5VGFzay5sZW5ndGggPT09IDEpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2UgaWYgKGFycmF5VGFzay5sZW5ndGggLSAxID09PSBpbmRleENhcmQpIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0LmFwcGVuZENoaWxkKGZvcm1VcGRhdGVUb2RvKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udGFpbmVyVG9kb0xpc3QuaW5zZXJ0QmVmb3JlKGZvcm1VcGRhdGVUb2RvLCBhcnJheVRhc2tbaW5kZXhDYXJkICsgMV0pO1xyXG4gIH1cclxuXHJcbiAgc2hvd0Zvcm1VcGRhdGVUYXNrKCk7XHJcblxyXG4gIGJ0bkNhbmNlbFVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZWxlY3RQcm9qZWN0U2VjdGlvbihwcm9qZWN0KSB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkLnRleHRDb250ZW50O1xyXG4gIGNsb3NlRm9ybUFkZFRhc2soKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1NlY3Rpb25Qcm9qZWN0KHByb2plY3QpO1xyXG4gIGNsZWFuVG9kb3NDb250YWluZXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRGb3JtT3BlcmF0aW9ucygpIHtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIHNob3dGb3JtQWRkVGFzaygpO1xyXG59XHJcblxyXG4vKlxyXG4gKiBQUk9KRUNUIE9QRVJBVElPTlNcclxuICovXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKHByb2plY3ROYW1lICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgc3RvcmFnZS5hZGRQcm9qZWN0U3RvcmFnZShuZXdQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBzdG9yYWdlLnJlbW92ZVByb2plY3RTdG9yYWdlKHByb2plY3ROYW1lKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1EZWxldGVQcm9qZWN0KGUpIHtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9XHJcbiAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RPcGVyYXRpb25zKCkge1xyXG4gIGNvbnN0IHByb2plY3RzRE9NID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGUtcHJvamVjdFwiKTtcclxuICBwcm9qZWN0c0RPTS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gc2VsZWN0UHJvamVjdFNlY3Rpb24ocHJvamVjdCkpO1xyXG4gIH0pO1xyXG4gIGRlbGV0ZVByb2plY3RzLmZvckVhY2goKGljb24pID0+IHtcclxuICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBwZXJmb3JtRGVsZXRlUHJvamVjdChlKSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dQcm9qZWN0c0xpc3QoKSB7XHJcbiAgY2xlYW5Db250YWluZXJQcm9qZWN0cygpO1xyXG4gIHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IFwiSW5ib3hcIiAmJiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJUb2RheVwiKSB7XHJcbiAgICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0LmdldE5hbWUoKSkpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHByb2plY3RPcGVyYXRpb25zKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0c0JhcigpIHtcclxuICBjb25zdCBzaG93UHJvamVjdHNCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3ctcHJvamVjdHNcIik7XHJcblxyXG4gIHNob3dQcm9qZWN0c0Jhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1yaWdodFwiKTtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZShcInNob3ctY29udGVudFwiKTtcclxuXHJcbiAgICBpZiAoc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC5jb250YWlucyhcImZhLWNoZXZyb24tZG93blwiKSkge1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NlY3Rpb25Qcm9qZWN0KHNlY3Rpb24pIHtcclxuICBjb25zdCBzZWN0aW9uQXJyYXkgPSBBcnJheS5mcm9tKHNlY3Rpb25Ub2RvKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IEFycmF5LmZyb20oY29udGFpbmVyUHJvamVjdHMuY2hpbGRyZW4pO1xyXG4gIHNlY3Rpb25BcnJheS5jb25jYXQocHJvamVjdHMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcInNlY3Rpb24tYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG4gIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNlY3Rpb24tYWN0aXZlXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFByb2plY3QoKSB7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG4gIGJ0bkNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xyXG4gICAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogRk9STSBUQVNLU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1BZGRUb2RvKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgc3RvcmFnZS5sb2FkRGF0YVN0b3JhZ2UoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbUZvcm0oKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBlcmZvcm1VcGRhdGVUb2RvKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXBkYXRlVG9kb0Zyb21Gb3JtKGdldFZhbHVlc0Zvcm1VcGRhdGUoKSk7XHJcbiAgdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkVG9kbywgZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtQWRkVG9kb05hdihlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGFkZFRvZG9Gcm9tRm9ybShnZXRWYWx1ZXNGcm9tTmF2YmFyKCkpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICBmb3JtQWRkVG9kb05hdmJhci5yZXNldCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtQWRkUHJvamVjdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0UHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKTtcclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGlucHV0UHJvamVjdE5hbWUudmFsdWUudHJpbSgpO1xyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgcHJvamVjdE9wZXJhdGlvbnMoKTtcclxuXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhzdG9yYWdlLmdldEFsbFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMoc3RvcmFnZS5nZXRBbGxQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdE5hdmJhcik7XHJcblxyXG4gIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG59XHJcblxyXG4vKipcclxuICogRElTUExBWSBGT1JNU1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdE5hdmJhcik7XHJcbiAgY29udGFpbmVyQWRkVG9kb05hdmJhci5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVGFzaygpIHtcclxuICBmb3JtQWRkVG9kby5yZXNldCgpO1xyXG4gIGZvcm1BZGRUb2RvLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkVGFzaygpIHtcclxuICBmb3JtQWRkVG9kby5jbGFzc0xpc3QuYWRkKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1VcGRhdGVUYXNrKCkge1xyXG4gIGZvcm1VcGRhdGVUb2RvLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtVXBkYXRlVGFzaygpIHtcclxuICBmb3JtVXBkYXRlVG9kby5jbGFzc0xpc3QuYWRkKFwic2hvdy1jb250ZW50XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhblRvZG9zQ29udGFpbmVyKCkge1xyXG4gIGNvbnRhaW5lclRvZG9MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYW5Db250YWluZXJQcm9qZWN0cygpIHtcclxuICBjb250YWluZXJQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFVkVOVFNcclxuICovXHJcblxyXG5mb3JtQWRkVG9kb05hdmJhci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtQWRkVG9kb05hdihlKSk7XHJcbmZvcm1VcGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHBlcmZvcm1VcGRhdGVUb2RvKGUpKTtcclxuZm9ybUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4gcGVyZm9ybUFkZFByb2plY3QoZSkpO1xyXG5mb3JtQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiBwZXJmb3JtQWRkVG9kbyhlKSk7XHJcblxyXG5pbmJveFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBzZWxlY3RQcm9qZWN0U2VjdGlvbihlLnRhcmdldCkpO1xyXG50b2RheVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBzZWxlY3RQcm9qZWN0U2VjdGlvbihlLnRhcmdldCkpO1xyXG5cclxuYnRuQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RhcnRGb3JtT3BlcmF0aW9ucyk7XHJcbmJ0bkZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRhc2spO1xyXG5idG5BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5DYW5jZWxGb3JtTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm1BZGRUb2RvTmF2YmFyKTtcclxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1BZGRQcm9qZWN0KTtcclxuXHJcbmJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIHNob3dTZWN0aW9uUHJvamVjdCh0b2RheVNlY3Rpb24pO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG59KTtcclxuXHJcbi8qKlxyXG4gKiBESVNQTEFZIENVUlJFTlQgREFURVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIGdldEN1cnJlbnREYXRlKCkge1xyXG4gIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZSgpO1xyXG4gIGxldCB5ZWFyID0gZGF0ZU9iamVjdC5nZXRGdWxsWWVhcigpO1xyXG4gIGxldCBtb250aCA9IGRhdGVPYmplY3QuZ2V0TW9udGgoKSArIDE7XHJcbiAgbGV0IGRhdGUgPSBkYXRlT2JqZWN0LmdldERhdGUoKTtcclxuXHJcbiAgaWYgKG1vbnRoIDwgMTApIHtcclxuICAgIG1vbnRoID0gXCIwXCIgKyBtb250aDtcclxuICB9XHJcbiAgaWYgKGRhdGUgPCAxMCkge1xyXG4gICAgZGF0ZSA9IFwiMFwiICsgZGF0ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RhdGV9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlVXBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBkdWVEYXRlTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlLW5hdmJhclwiKTtcclxuXHJcbiAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZVVwZGF0ZS5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbiAgZHVlRGF0ZU5hdmJhci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0Q3VycmVudERhdGUoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRBcHAoKSB7XHJcbiAgc3RvcmFnZS5sb2FkRGF0YVN0b3JhZ2UoKTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHN0b3JhZ2UuZ2V0QWxsUHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdCk7XHJcbiAgZGlzcGxheVByb2plY3RzQmFyKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIHNldEN1cnJlbnREYXRlKCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhcmRUb2RvIiwiaW5kZXgiLCJvYmpUb2RvIiwiZGl2VGFzayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpdlRhc2tJbmZvIiwiaWNvblVwZGF0ZVRhc2siLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsImdldERlc2NyaXB0aW9uIiwiZ2V0RHVlRGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiY3NzVGV4dCIsImdldFByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ2FyZFByb2plY3RzIiwicHJvamVjdE5hbWUiLCJjb250YWluZXJQcm9qZWN0cyIsImRpdlByb2plY3QiLCJkaXZJbmZvIiwiaWNvbkRlbGV0ZSIsInNwYW5OdW1iZXJUb2RvcyIsImNyZWF0ZVNlbGVjdE9wdGlvbnMiLCJhcnJheVByb2plY3RzIiwic2VsZWN0IiwidGV4dENvbnRlbnQiLCJvcHRpb25IaWRkZW4iLCJ2YWx1ZSIsImxlbmd0aCIsImZvckVhY2giLCJwcm9qZWN0IiwiZ2V0TmFtZSIsIm9wdGlvbiIsIm5hbWUiLCJUb2RvIiwiZ2V0VmFsdWVzRnJvbUZvcm0iLCJ0aXRsZSIsImdldEVsZW1lbnRCeUlkIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicmVwbGFjZSIsImNob29zZVByb2plY3QiLCJ0YXNrUHJpb3JpdHkiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByaW9yaXR5IiwiZ2V0Rm9ybVVwZGF0ZUlucHV0cyIsImlucHV0VGl0bGUiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXREdWVEYXRlIiwiaW5wdXRDaG9vc2VQcm9qZWN0IiwiaW5wdXRQcmlvcml0eSIsInNob3dJbmZvRm9ybVVwZGF0ZSIsImRhdGFPYmplY3QiLCJpbnB1dHNGb3JtVXBkYXRlIiwiZ2V0UHJvamVjdE5hbWUiLCJnZXRWYWx1ZXNGb3JtVXBkYXRlIiwiZ2V0VmFsdWVzRnJvbU5hdmJhciIsIlByb2plY3RzIiwiUHJvamVjdCIsIlN0b3JhZ2UiLCJsb2FkRGF0YVN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJzYXZlUHJvamVjdHNTdG9yYWdlIiwiZGF0YVByb2plY3RzIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQcm9qZWN0c1N0b3JhZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXRQcm9qZWN0cyIsImdldFByb2plY3RzIiwibWFwIiwic2V0VG9kb3MiLCJnZXRUb2RvcyIsInRvZG8iLCJnZXRBbGxQcm9qZWN0cyIsImFkZFByb2plY3RTdG9yYWdlIiwicmVtb3ZlUHJvamVjdFN0b3JhZ2UiLCJkZWxldGVBbGxUb2RvcyIsInJlbW92ZVByb2plY3QiLCJhZGRUb2RvU3RvcmFnZSIsInRvZG9PYmoiLCJhZGRUb2RvRnJvbVByb2plY3QiLCJ1cGRhdGVUb2RvVG9kYXlTdG9yYWdlIiwidXBkYXRlVG9kb1RvZGF5IiwidXBkYXRlVG9kb0Zyb21Ub2RheVN0b3JhZ2UiLCJ1cGRhdGVUb2RvRnJvbVRvZGF5IiwiZGVsZXRlVG9kb1RvZGF5U3RvcmFnZSIsImRlbGV0ZVRvZG9Ub2RheSIsImRlbGV0ZVRvZG9Gcm9tVG9kYXlTdG9yYWdlIiwiZGVsZXRlVG9kb0Zyb21Ub2RheSIsImdldFByb2plY3RTdG9yYWdlIiwiZ2V0UHJvamVjdCIsImNvbnN0cnVjdG9yIiwidG9kb3MiLCJzZXROYW1lIiwidG9kb3NBcnJheSIsImdldFRvZG8iLCJmaW5kIiwiaXRlbSIsImdldEluZGV4VG9kbyIsImZpbmRJbmRleCIsImFkZFRvZG8iLCJwdXNoIiwicmVtb3ZlVG9kbyIsInRvZG9UaXRsZSIsImZpbHRlciIsInVwZGF0ZVRvZG8iLCJpc1RvZGF5IiwicHJvamVjdHNBcnJheSIsImdldFByb2plY3RJbmRleCIsInRvZGF5IiwicHJvamVjdEFkZGVkIiwic2VhcmNoVG9kbyIsInByb2plY3RTZWFyY2giLCJzZXRQcm9qZWN0TmFtZSIsIkRhdGUiLCJmaW5kVG9kb1RvZGF5IiwiaW5kZXhUb2RvIiwiaSIsImhhc093blByb3BlcnR5IiwidXBkYXRlZFRvZG8iLCJ0b2RvSW5kZXgiLCJ0b2RvVmFsdWVzIiwiaW5kZXhTZWFyY2giLCJ0b2RvQWRkZWQiLCJhcmd1bWVudHMiLCJzZXRUaXRsZSIsInNldERlc2NyaXB0aW9uIiwic2V0RHVlRGF0ZSIsInNldFByaW9yaXR5IiwiaW5ib3hTZWN0aW9uIiwidG9kYXlTZWN0aW9uIiwiZm9ybVVwZGF0ZVRvZG8iLCJmb3JtQWRkUHJvamVjdCIsImZvcm1BZGRUb2RvIiwiZm9ybUFkZFRvZG9OYXZiYXIiLCJjb250YWluZXJUb2RvTGlzdCIsImNvbnRhaW5lckFkZFByb2plY3QiLCJjb250YWluZXJBZGRUb2RvTmF2YmFyIiwic2VjdGlvblRvZG8iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnRuQWRkVG9kbyIsImJ0bkZvcm1DYW5jZWwiLCJidG5DYW5jZWxQcm9qZWN0IiwiYnRuQ2FuY2VsVXBkYXRlRm9ybSIsImJ0bkNhbmNlbEZvcm1OYXZiYXIiLCJidG5BZGRQcm9qZWN0IiwiYnRuQWRkVG9kb05hdmJhciIsImJ0bkhvbWUiLCJzZWxlY3RQcm9qZWN0Iiwic2VsZWN0VXBkYXRlUHJvamVjdCIsInNlbGVjdFByb2plY3ROYXZiYXIiLCJzZWN0aW9uVGl0bGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInN0b3JhZ2UiLCJpbmRleENhcmRUb2RvIiwiYXJyYXlUb2Rvc0RPTSIsImluaXRBcHAiLCJhZGRUb2RvRnJvbUZvcm0iLCJ0cmltIiwiZ2V0U2VjdGlvbk9iamVjdCIsInVwZGF0ZVRvZG9Gcm9tRm9ybSIsInZhbHVlc1RvZG8iLCJnZXREYXRhVG9kb0NhcmQiLCJpbmRleENhcmQiLCJ1cGRhdGVUb2RvQ2FyZERPTSIsIkFycmF5IiwiZnJvbSIsInRhc2siLCJsYXN0RWxlbWVudENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzaG93VG9kb0xpc3QiLCJyZW1vdmVDaGlsZCIsImNsb3NlRm9ybUFkZFRhc2siLCJzaG93Rm9ybVVwZGF0ZUNhcmQiLCJkZWxldGVUb2RvRE9NIiwidGFyZ2V0IiwiY2hlY2tlZCIsInNob3dDdXJyZW50VG9kb3MiLCJjbGVhblRvZG9zQ29udGFpbmVyIiwib2JqZWN0IiwidG9kb3NRdWFudGl0eSIsInVwZGF0ZVRvZG9DYXJkIiwidG9kb0RhdGEiLCJkaXZDb250YWluZXIiLCJ0aXRsZVRhc2siLCJjaGlsZHJlbiIsImRlc2NyaXB0aW9uVGFzayIsImFycmF5VGFzayIsImluc2VydEJlZm9yZSIsInNob3dGb3JtVXBkYXRlVGFzayIsImNsb3NlRm9ybVVwZGF0ZVRhc2siLCJzZWxlY3RQcm9qZWN0U2VjdGlvbiIsInNob3dTZWN0aW9uUHJvamVjdCIsInN0YXJ0Rm9ybU9wZXJhdGlvbnMiLCJzaG93Rm9ybUFkZFRhc2siLCJuZXdQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInBlcmZvcm1EZWxldGVQcm9qZWN0IiwicGFyZW50RWxlbWVudCIsInNob3dQcm9qZWN0c0xpc3QiLCJwcm9qZWN0T3BlcmF0aW9ucyIsInByb2plY3RzRE9NIiwiZGVsZXRlUHJvamVjdHMiLCJpY29uIiwiY2xlYW5Db250YWluZXJQcm9qZWN0cyIsImRpc3BsYXlQcm9qZWN0c0JhciIsInNob3dQcm9qZWN0c0JhciIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2VjdGlvbiIsInNlY3Rpb25BcnJheSIsImNvbmNhdCIsInJlbW92ZSIsInNob3dGb3JtQWRkUHJvamVjdCIsInJlc2V0IiwicGVyZm9ybUFkZFRvZG8iLCJwcmV2ZW50RGVmYXVsdCIsInBlcmZvcm1VcGRhdGVUb2RvIiwicGVyZm9ybUFkZFRvZG9OYXYiLCJwZXJmb3JtQWRkUHJvamVjdCIsImlucHV0UHJvamVjdE5hbWUiLCJzaG93Rm9ybUFkZFRvZG9OYXZiYXIiLCJjbG9zZUZvcm1BZGRUb2RvTmF2YmFyIiwiZ2V0Q3VycmVudERhdGUiLCJkYXRlT2JqZWN0IiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwic2V0Q3VycmVudERhdGUiLCJkdWVEYXRlVXBkYXRlIiwiZHVlRGF0ZU5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=