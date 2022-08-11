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

  getTodos() {
    return this.todos;
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
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





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
const btnToggleSidebar = document.getElementById("toggle-sidebar");
const btnHome = document.getElementById("btn-home");
const inputProjectName = document.getElementById("project-name");
const selectProject = document.getElementById("select-project");
const selectUpdateProject = document.getElementById("select-project-update");
const selectProjectNavbar = document.getElementById("select-project-navbar");
let sectionTitle = document.querySelector(".task-container").firstElementChild;
const inbox = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]("Inbox");
const today = new _project__WEBPACK_IMPORTED_MODULE_3__["default"]("Today");
const projects = new _projects__WEBPACK_IMPORTED_MODULE_4__["default"]();
projects.addProject(inbox);
projects.addProject(today);
let indexCardTodo = 0;
let arrayTodosDOM = [];
(0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.projects, selectProject);

const getSectionObject = projectName => projects.getProject(projectName);

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

        if (project !== today) {
          projects.deleteTodoToday(i, project);
        } else {
          projects.deleteTodoFromToday(i);
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

      if (project !== today) {
        todoObj.setProjectName(project.getName());
      }
    }

    projects.addTodoFromProject(todoObj);
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
      projects.updateTodoToday(indexCardTodo, valuesTodo, project);
    } else {
      projects.updateTodoFromToday(indexCardTodo, valuesTodo);
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
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.projects, selectProjectNavbar);
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
    const todosQuantity = projects.getProjects()[i].todos.length;
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
    projects.addProject(newProject);
  }
}

const deleteProject = projectName => {
  projects.deleteAllTodos(projectName);
  projects.removeProject(projectName);
};

function showFormAddProject() {
  containerAddProject.classList.add("show-form");
  btnCancelProject.addEventListener("click", e => {
    formAddProject.reset();
    containerAddProject.classList.remove("show-form");
  });
}

function showInboxSection() {
  sectionTitle.textContent = "Inbox";
  showSectionTodo(inboxSection);
  showTodoList();
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
      showInboxSection();
      showProjectsList();
      showCurrentTodos();
    });
  });
}

function showProjectsList() {
  cleanContainerProjects();
  projects.getProjects().forEach(project => {
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

const initApp = () => {
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
    (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.getProjects(), selectProject);
    (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.getProjects(), selectUpdateProject);
    (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.getProjects(), selectProjectNavbar);
    formAddProject.reset();
    containerAddProject.classList.remove("show-form");
  });
};

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
btnToggleSidebar.addEventListener("click", e => {//document.querySelector(".sidebar").classList.toggle("content-hidden");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Syx5QkFBeUIsb0JBQW9CLEtBQUssdUJBQXVCLHFCQUFxQixLQUFLLE9BQU8sbUZBQW1GLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FB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L0MsYUFBYSxDQUFDb0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0NsQixnQkFBeEM7QUFDQWIsZ0JBQWdCLENBQUMrQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkM4QixxQkFBM0M7QUFDQS9ELG1CQUFtQixDQUFDaUMsZ0JBQXBCLENBQXFDLE9BQXJDLEVBQThDK0Isc0JBQTlDO0FBQ0EvRCxhQUFhLENBQUNnQyxnQkFBZCxDQUErQixPQUEvQixFQUF3Q3NDLGtCQUF4QztBQUVBbkUsT0FBTyxDQUFDNkIsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBbUNDLENBQUQsSUFBTztFQUN2Q3pCLFlBQVksQ0FBQzVHLFdBQWIsR0FBMkIsT0FBM0I7RUFDQWlLLGVBQWUsQ0FBQzVFLFlBQUQsQ0FBZjtFQUNBb0QsWUFBWTtBQUNiLENBSkQ7QUFNQW5DLGdCQUFnQixDQUFDOEIsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTRDQyxDQUFELElBQU8sQ0FDaEQ7QUFDRCxDQUZEOztBQUlBLENBQUMsU0FBU2tELGNBQVQsR0FBMEI7RUFDekIsTUFBTXpLLE9BQU8sR0FBR3hDLFFBQVEsQ0FBQ3NDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7RUFDQSxNQUFNNEssYUFBYSxHQUFHbE4sUUFBUSxDQUFDc0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7RUFDQSxNQUFNNkssYUFBYSxHQUFHbk4sUUFBUSxDQUFDc0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBdEI7RUFFQUUsT0FBTyxDQUFDOUIsWUFBUixDQUFxQixLQUFyQixFQUE0QjBJLGNBQWMsRUFBMUM7RUFDQThELGFBQWEsQ0FBQ3hNLFlBQWQsQ0FBMkIsS0FBM0IsRUFBa0MwSSxjQUFjLEVBQWhEO0VBQ0ErRCxhQUFhLENBQUN6TSxZQUFkLENBQTJCLEtBQTNCLEVBQWtDMEksY0FBYyxFQUFoRDtBQUNELENBUkQsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2NvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvZm9ybUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVG9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZEYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVDYXJkVG9kbyhpbmRleCwgb2JqVG9kbykge1xyXG4gIGNvbnN0IGRpdlRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdlRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uVXBkYXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG5cclxuICBkaXZUYXNrLmlubmVySFRNTCA9IGA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0YXNrLWZpbmlzaGVkXCIgLz5gO1xyXG4gIGRpdlRhc2tJbmZvLmlubmVySFRNTCA9IGA8aDIgY2xhc3M9XCJ0YXNrLW5hbWVcIiBpZD1cInRhc2stbmFtZS1jYXJkXCI+JHtvYmpUb2RvLmdldFRpdGxlKCl9PC9oMj5cclxuICA8cCBjbGFzcz1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiIGlkPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCI+JHtvYmpUb2RvLmdldERlc2NyaXB0aW9uKCl9PC9wPlxyXG4gIDxwPiR7b2JqVG9kby5nZXREdWVEYXRlKCl9PC9wPmA7XHJcblxyXG4gIGljb25VcGRhdGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtcGVuLXRvLXNxdWFyZVwiKTtcclxuXHJcbiAgZGl2VGFzay5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcclxuICBkaXZUYXNrLnNldEF0dHJpYnV0ZShcImluZGV4LXRvZG9cIiwgaW5kZXgpO1xyXG4gIGRpdlRhc2suc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke29ialRvZG8uZ2V0UHJpb3JpdHkoKX1gO1xyXG5cclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGRpdlRhc2tJbmZvKTtcclxuICBkaXZUYXNrLmFwcGVuZENoaWxkKGljb25VcGRhdGVUYXNrKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIikuYXBwZW5kQ2hpbGQoZGl2VGFzayk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNhcmRQcm9qZWN0cyhwcm9qZWN0TmFtZSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbiAgY29uc3QgZGl2UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvbkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gIGNvbnN0IHNwYW5OdW1iZXJUb2RvcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG5cclxuICBkaXZJbmZvLmlubmVySFRNTCA9IGA8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtZmlsZVwiPjwvaT5cclxuICA8cCBpZD1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdE5hbWV9PC9wPmA7XHJcblxyXG4gIHNwYW5OdW1iZXJUb2Rvcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm51bWJlci1vZi10YXNrc1wiKTtcclxuXHJcbiAgaWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXRyYXNoLWNhblwiKTtcclxuICBpY29uRGVsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gIGRpdlByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIiwgXCJzZWN0aW9uXCIpO1xyXG4gIC8vZGl2UHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpbmRleC10b2RvXCIsIGluZGV4KTtcclxuXHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChkaXZJbmZvKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKHNwYW5OdW1iZXJUb2Rvcyk7XHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChpY29uRGVsZXRlKTtcclxuXHJcbiAgcmV0dXJuIGRpdlByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdE9wdGlvbnMoYXJyYXlQcm9qZWN0cywgc2VsZWN0KSB7XHJcbiAgc2VsZWN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgY29uc3Qgb3B0aW9uSGlkZGVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICBvcHRpb25IaWRkZW4udmFsdWUgPSBcIlwiO1xyXG4gIG9wdGlvbkhpZGRlbi5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJoaWRkZW5cIik7XHJcbiAgb3B0aW9uSGlkZGVuLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBwcm9qZWN0XCI7XHJcblxyXG4gIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb25IaWRkZW4pO1xyXG5cclxuICBpZiAoYXJyYXlQcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICBhcnJheVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgaWYgKHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRvZGF5XCIpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlQ2FyZFRvZG8sIGNyZWF0ZUNhcmRQcm9qZWN0cywgY3JlYXRlU2VsZWN0T3B0aW9ucyB9O1xyXG4iLCJpbXBvcnQgVG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tRm9ybSgpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3RcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5XCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtVXBkYXRlSW5wdXRzKCkge1xyXG4gIGNvbnN0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dENob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LXVwZGF0ZVwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGlucHV0VGl0bGUsXHJcbiAgICBpbnB1dERlc2NyaXB0aW9uLFxyXG4gICAgaW5wdXREdWVEYXRlLFxyXG4gICAgaW5wdXRDaG9vc2VQcm9qZWN0LFxyXG4gICAgaW5wdXRQcmlvcml0eSxcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5mb0Zvcm1VcGRhdGUoZGF0YU9iamVjdCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlID0gZGF0YU9iamVjdC5nZXRUaXRsZSgpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREZXNjcmlwdGlvbi52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0RGVzY3JpcHRpb24oKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZSA9IGRhdGFPYmplY3RcclxuICAgIC5nZXREdWVEYXRlKClcclxuICAgIC5yZXBsYWNlKC8oXFwvKS9nLCBcIi1cIik7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3QudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByb2plY3ROYW1lKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5LnZhbHVlID0gZGF0YU9iamVjdC5nZXRQcmlvcml0eSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkge1xyXG4gIGNvbnN0IGlucHV0c0Zvcm1VcGRhdGUgPSBnZXRGb3JtVXBkYXRlSW5wdXRzKCk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFRpdGxlLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RHVlRGF0ZS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dENob29zZVByb2plY3Q7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dFByaW9yaXR5O1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWYWx1ZXNGcm9tTmF2YmFyKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLW5hdmJhclwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnRcclxuICAgIC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpXHJcbiAgICAudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtbmF2YmFyXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS1uYXZiYXJcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgZ2V0VmFsdWVzRnJvbUZvcm0sXHJcbiAgZ2V0VmFsdWVzRm9ybVVwZGF0ZSxcclxuICBnZXRWYWx1ZXNGcm9tTmF2YmFyLFxyXG4gIHNob3dJbmZvRm9ybVVwZGF0ZSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XHJcbiAgY29uc3RydWN0b3IobmFtZSA9IFwiXCIpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgfVxyXG5cclxuICBnZXROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIGdldFRvZG9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3M7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvKHRpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRpdGxlKTtcclxuICAgIHJldHVybiB0b2RvID8gdG9kbyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhUb2RvKHRvZG8pIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0b2RvLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0VG9kbyh0b2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5hbWUoKSA9PT0gdG9kby5nZXRQcm9qZWN0TmFtZSgpKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvKHRvZG9UaXRsZSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgIT09IHRvZG9UaXRsZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvKGluZGV4LCB0b2RvKSB7XHJcbiAgICBpZiAodG9kby5nZXRQcm9qZWN0TmFtZSgpID09PSB0aGlzLm5hbWUgJiYgdGhpcy5nZXRUb2RvKHRvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgdGhpcy50b2Rvc1tpbmRleF0gPSB0b2RvO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmdldFRpdGxlKCkpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0KG5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XHJcbiAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdCkge1xyXG4gICAgaWYgKCF0aGlzLmdldFByb2plY3QocHJvamVjdC5nZXROYW1lKCkpKSB7XHJcbiAgICAgIHRoaXMucHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByb2plY3RJbmRleChwcm9qZWN0TmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHMuZmluZEluZGV4KFxyXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKFxyXG4gICAgICAoaXRlbSkgPT4gaXRlbS5nZXROYW1lKCkgIT09IHByb2plY3ROYW1lXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG8pIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QodG9kby5nZXRQcm9qZWN0TmFtZSgpKTtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCBwcm9qZWN0QWRkZWQgPSBwcm9qZWN0ID8gcHJvamVjdC5hZGRUb2RvKHRvZG8pIDogZmFsc2U7XHJcblxyXG4gICAgaWYgKHByb2plY3RBZGRlZCkge1xyXG4gICAgICB0b2RvLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgcHJvamVjdFNlYXJjaDogdG9kby5nZXRQcm9qZWN0TmFtZSgpLFxyXG4gICAgICAgIHRvZG9UaXRsZTogdG9kby5nZXRUaXRsZSgpLFxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kby5zZXRQcm9qZWN0TmFtZShcIlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIHRvZGF5LnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSkge1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGxldCBpbmRleFRvZG8gPSAtMTtcclxuXHJcbiAgICB0b2RheS50b2Rvcy5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBpdGVtLnNlYXJjaFRvZG8ucHJvamVjdFNlYXJjaCA9PT0gcHJvamVjdC5nZXROYW1lKCkgJiZcclxuICAgICAgICBpdGVtLnNlYXJjaFRvZG8udG9kb1RpdGxlID09PSB0b2RvVGl0bGVcclxuICAgICAgKSB7XHJcbiAgICAgICAgaW5kZXhUb2RvID0gaTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5kZXhUb2RvID49IDAgPyBpbmRleFRvZG8gOiAtMTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Ub2RheShpbmRleCwgdG9kb09iaiwgcHJvamVjdCkge1xyXG4gICAgbGV0IHVwZGF0ZWRUb2RvID0gbnVsbDtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBwcm9qZWN0LmdldFRvZG9zKClbaW5kZXhdLmdldFRpdGxlKCk7XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb09iai5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgIHByb2plY3RTZWFyY2g6IHByb2plY3QuZ2V0TmFtZSgpLFxyXG4gICAgICAgIHRvZG9UaXRsZTogdG9kb09iai5nZXRUaXRsZSgpLFxyXG4gICAgICB9O1xyXG4gICAgICBpZiAodG9kb0luZGV4ID49IDApIHtcclxuICAgICAgICB0b2RheS50b2Rvc1t0b2RvSW5kZXhdID0gdG9kb09iajtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0b2RheS50b2Rvcy5wdXNoKHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICAgIHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4LCB0b2RvT2JqKTtcclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb09iai5nZXRUaXRsZSgpKTtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgICBjb25zdCB0b2RvSW5kZXggPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb0Zyb21Ub2RheShpbmRleCwgdG9kb09iaikge1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHRvZG9WYWx1ZXMgPSB0b2RheS5nZXRUb2RvcygpW2luZGV4XTtcclxuXHJcbiAgICBpZiAodG9kb1ZhbHVlcy5oYXNPd25Qcm9wZXJ0eShcInNlYXJjaFRvZG9cIikpIHtcclxuICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0gdG9kb1ZhbHVlcy5zZWFyY2hUb2RvO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b2RvT2JqLmhhc093blByb3BlcnR5KFwic2VhcmNoVG9kb1wiKSkge1xyXG4gICAgICBjb25zdCB7IHByb2plY3RTZWFyY2gsIHRvZG9UaXRsZSB9ID0gdG9kb09iai5zZWFyY2hUb2RvO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RTZWFyY2gpO1xyXG4gICAgICBjb25zdCBpbmRleFNlYXJjaCA9IHByb2plY3QuZ2V0SW5kZXhUb2RvKHByb2plY3QuZ2V0VG9kbyh0b2RvVGl0bGUpKTtcclxuICAgICAgY29uc3QgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXhTZWFyY2gsIHRvZG9PYmopO1xyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgICBjb25zdCB0b2RvQWRkZWQgPSBwcm9qZWN0ID8gcHJvamVjdC5hZGRUb2RvKHRvZG9PYmopIDogZmFsc2U7XHJcbiAgICAgIGlmICh0b2RvQWRkZWQpIHtcclxuICAgICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvT2JqLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgICB0b2RvVGl0bGU6IHRvZG9PYmouZ2V0VGl0bGUoKSxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kb09iai5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICB0b2RheS50b2Rvc1tpbmRleF0gPSB0b2RvT2JqO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvVmFsdWVzLmdldFRpdGxlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb0Zyb21Ub2RheShpbmRleCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHRvZG9PYmogPSB0b2RheS5nZXRUb2RvcygpW2luZGV4XTtcclxuICAgIGlmICh0b2RvT2JqLmhhc093blByb3BlcnR5KFwic2VhcmNoVG9kb1wiKSkge1xyXG4gICAgICBjb25zdCB7IHByb2plY3RTZWFyY2gsIHRvZG9UaXRsZSB9ID0gdG9kb09iai5zZWFyY2hUb2RvO1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3RTZWFyY2gpO1xyXG4gICAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgIH1cclxuICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb09iai5nZXRUaXRsZSgpKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZUFsbFRvZG9zKHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHByb2plY3QuZ2V0VG9kb3MoKS5mb3JFYWNoKCh0b2RvLCBpKSA9PiB7XHJcbiAgICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVUb2RvVG9kYXkoaW5kZXgsIHByb2plY3QsIHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdCwgcmVtb3ZlUHJvamVjdCkge1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHByb2plY3QudG9kb3NbaW5kZXhdLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBpbmRleFRvZG8gPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgIGlmIChpbmRleFRvZG8gPj0gMCkge1xyXG4gICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICBpZiAocmVtb3ZlUHJvamVjdCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRpdGxlID0gXCJcIixcclxuICAgIGRlc2NyaXB0aW9uID0gXCJcIixcclxuICAgIGR1ZURhdGUgPSBcIlwiLFxyXG4gICAgcHJvamVjdE5hbWUgPSBcIlwiLFxyXG4gICAgcHJpb3JpdHkgPSAxXHJcbiAgKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZXREZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIGdldER1ZURhdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIHNldFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRQcmlvcml0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xyXG4gIH1cclxuXHJcbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEyODBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgd2lkdGg6IDMwNHB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tYWN0aXZlLFxcclxcbi5zZWN0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RheSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5kaXYge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmkge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgLmZhLXBsdXM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG93LXByb2plY3RzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5NYWluIGNvbnRlbnQgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICBjb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYWNjZW50LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLWNhcmQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIGkge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10YXNrLWNhcmQsXFxyXFxuLmZvcm0tdXBkYXRlLXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG4gIHBhZGRpbmc6IDFweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtcHJvamVjdCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC11cGRhdGUge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tYWRkLFxcclxcbmJ1dHRvbi5idG4tc2F2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbkFkZCB0YXNrIGZyb20gbmF2YmFyIFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCBwcm9qZWN0IGZvcm1cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgZm9ybSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFD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QjtFQUNqQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzA0cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRvZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVG9kYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gaXNTYW1lRGF5KGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gc3RhcnRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ2FyZFRvZG8sXHJcbiAgY3JlYXRlQ2FyZFByb2plY3RzLFxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMsXHJcbn0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICBnZXRWYWx1ZXNGcm9tRm9ybSxcclxuICBnZXRWYWx1ZXNGb3JtVXBkYXRlLFxyXG4gIGdldFZhbHVlc0Zyb21OYXZiYXIsXHJcbiAgc2hvd0luZm9Gb3JtVXBkYXRlLFxyXG59IGZyb20gXCIuL2Zvcm1Db250ZW50XCI7XHJcblxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5cclxuY29uc3QgaW5ib3hTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcclxuY29uc3QgdG9kYXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RheVwiKTtcclxuXHJcbmNvbnN0IGZvcm1VcGRhdGVUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXVwZGF0ZS10YXNrXCIpO1xyXG5jb25zdCBmb3JtQWRkUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgZm9ybUFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFzay1jYXJkXCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS1hZGQtdG9kby1uYXZiYXJcIik7XHJcblxyXG5jb25zdCBjb250YWluZXJUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpO1xyXG5jb25zdCBjb250YWluZXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXByb2plY3RzXCIpO1xyXG5jb25zdCBjb250YWluZXJBZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFRvZG9OYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1maXhlZFwiKTtcclxuXHJcbmNvbnN0IHNlY3Rpb25Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zZWN0aW9uXCIpO1xyXG5cclxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbmNvbnN0IGJ0bkZvcm1DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWxcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtcHJvamVjdFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsVXBkYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC11cGRhdGVcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbEZvcm1OYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtbmF2YmFyXCIpO1xyXG5jb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcclxuY29uc3QgYnRuQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tbmF2YmFyXCIpO1xyXG5jb25zdCBidG5Ub2dnbGVTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtc2lkZWJhclwiKTtcclxuY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWhvbWVcIik7XHJcblxyXG5jb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0XCIpO1xyXG5jb25zdCBzZWxlY3RVcGRhdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC11cGRhdGVcIik7XHJcbmNvbnN0IHNlbGVjdFByb2plY3ROYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LW5hdmJhclwiKTtcclxuXHJcbmxldCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xyXG5jb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KFwiVG9kYXlcIik7XHJcbmNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XHJcblxyXG5wcm9qZWN0cy5hZGRQcm9qZWN0KGluYm94KTtcclxucHJvamVjdHMuYWRkUHJvamVjdCh0b2RheSk7XHJcblxyXG5sZXQgaW5kZXhDYXJkVG9kbyA9IDA7XHJcbmxldCBhcnJheVRvZG9zRE9NID0gW107XHJcblxyXG5jcmVhdGVTZWxlY3RPcHRpb25zKHByb2plY3RzLnByb2plY3RzLCBzZWxlY3RQcm9qZWN0KTtcclxuY29uc3QgZ2V0U2VjdGlvbk9iamVjdCA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdHMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVUYXNrKCkge1xyXG4gIGZvcm1VcGRhdGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuVG9kb3NDb250YWluZXIoKSB7XHJcbiAgY29udGFpbmVyVG9kb0xpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkNvbnRhaW5lclByb2plY3RzKCkge1xyXG4gIGNvbnRhaW5lclByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHllYXIgPSBkYXRlT2JqZWN0LmdldEZ1bGxZZWFyKCk7XHJcbiAgbGV0IG1vbnRoID0gZGF0ZU9iamVjdC5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IGRhdGVPYmplY3QuZ2V0RGF0ZSgpO1xyXG5cclxuICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgbW9udGggPSBcIjBcIiArIG1vbnRoO1xyXG4gIH1cclxuICBpZiAoZGF0ZSA8IDEwKSB7XHJcbiAgICBkYXRlID0gXCIwXCIgKyBkYXRlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvRE9NKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICB0YXNrLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB0b2RheSkge1xyXG4gICAgICAgICAgcHJvamVjdHMuZGVsZXRlVG9kb1RvZGF5KGksIHByb2plY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0cy5kZWxldGVUb2RvRnJvbVRvZGF5KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgICAgICBzaG93VG9kb0xpc3QoKTtcclxuICAgICAgICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9kb0xpc3QoKSB7XHJcbiAgY2xlYW5Ub2Rvc0NvbnRhaW5lcigpO1xyXG4gIGNvbnN0IG9iamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICBpZiAob2JqZWN0KSB7XHJcbiAgICBvYmplY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaSkgPT4gY3JlYXRlQ2FyZFRvZG8oaSwgdG9kbykpO1xyXG4gICAgdXBkYXRlVG9kb0NhcmRET00oKTtcclxuICAgIGRlbGV0ZVRvZG9ET00oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tRm9ybSh0b2RvT2JqKSB7XHJcbiAgaWYgKHRvZG9PYmouZ2V0VGl0bGUoKS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGlmICh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgIGlmIChwcm9qZWN0ICE9PSB0b2RheSkge1xyXG4gICAgICAgIHRvZG9PYmouc2V0UHJvamVjdE5hbWUocHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0cy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtT3BlcmF0aW9ucygpIHtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0Zvcm1BZGRUYXNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkKGluZGV4Q2FyZCwgdG9kb0RhdGEpIHtcclxuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIilbaW5kZXhDYXJkXTtcclxuICBpZiAoZGl2Q29udGFpbmVyKSB7XHJcbiAgICBkaXZDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke3RvZG9EYXRhLnByaW9yaXR5fWA7XHJcblxyXG4gICAgY29uc3QgdGl0bGVUYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgdGl0bGVUYXNrLnRleHRDb250ZW50ID0gdG9kb0RhdGEudGl0bGU7XHJcbiAgICBkZXNjcmlwdGlvblRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtVXBkYXRlQ2FyZChhcnJheVRhc2ssIGluZGV4Q2FyZCkge1xyXG4gIGlmIChhcnJheVRhc2subGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIGlmIChhcnJheVRhc2subGVuZ3RoIC0gMSA9PT0gaW5kZXhDYXJkKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0Lmluc2VydEJlZm9yZShmb3JtVXBkYXRlVG9kbywgYXJyYXlUYXNrW2luZGV4Q2FyZCArIDFdKTtcclxuICB9XHJcblxyXG4gIHNob3dGb3JtVXBkYXRlVGFzaygpO1xyXG4gIGJ0bkNhbmNlbFVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvRnJvbUZvcm0odmFsdWVzVG9kbykge1xyXG4gIGlmICh2YWx1ZXNUb2RvLmdldFRpdGxlKCkudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgaWYgKHByb2plY3QgIT09IHRvZGF5KSB7XHJcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Ub2RheShpbmRleENhcmRUb2RvLCB2YWx1ZXNUb2RvLCBwcm9qZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXhDYXJkVG9kbywgdmFsdWVzVG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhVG9kb0NhcmQoaW5kZXhDYXJkKSB7XHJcbiAgY29uc3QgcHJvamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICByZXR1cm4gcHJvamVjdC50b2Rvc1tpbmRleENhcmRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvQ2FyZERPTSgpIHtcclxuICBhcnJheVRvZG9zRE9NID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgdGFzay5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZChhcnJheVRvZG9zRE9NW2luZGV4XSk7XHJcbiAgICAgIGluZGV4Q2FyZFRvZG8gPSBpbmRleDtcclxuICAgICAgY2xvc2VGb3JtQWRkVGFzaygpO1xyXG4gICAgICBzaG93Rm9ybVVwZGF0ZUNhcmQoYXJyYXlUb2Rvc0RPTSwgaW5kZXgpO1xyXG4gICAgICBzaG93SW5mb0Zvcm1VcGRhdGUoZ2V0RGF0YVRvZG9DYXJkKGluZGV4KSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hvb3NlT2JqZWN0TGlzdChvYmplY3QpIHtcclxuICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QuY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gIHNob3dTZWN0aW9uVG9kbyhvYmplY3QpO1xyXG4gIGNsZWFuVG9kb3NDb250YWluZXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMucHJvamVjdHMsIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LmFkZChcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTZWN0aW9uVG9kbyhzZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2VjdGlvbkFycmF5ID0gQXJyYXkuZnJvbShzZWN0aW9uVG9kbyk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGNvbnRhaW5lclByb2plY3RzLmNoaWxkcmVuKTtcclxuICBzZWN0aW9uQXJyYXkuY29uY2F0KHByb2plY3RzKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHByb2plY3RzLmdldFByb2plY3RzKClbaV0udG9kb3MubGVuZ3RoO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBpZiAodG9kb3NRdWFudGl0eSA+IDApIHtcclxuICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHRvZG9zUXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcblBST0pFQ1RTXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKHByb2plY3ROYW1lICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBwcm9qZWN0cy5kZWxldGVBbGxUb2Rvcyhwcm9qZWN0TmFtZSk7XHJcbiAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFByb2plY3QoKSB7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG4gIGJ0bkNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xyXG4gICAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93SW5ib3hTZWN0aW9uKCkge1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcclxuICBzaG93U2VjdGlvblRvZG8oaW5ib3hTZWN0aW9uKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdE9wZXJhdGlvbnMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHNET00gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3RcIik7XHJcbiAgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2RlbGV0ZS1wcm9qZWN0XCIpO1xyXG5cclxuICBwcm9qZWN0c0RPTS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjaG9vc2VPYmplY3RMaXN0KHByb2plY3QpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGRlbGV0ZVByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID1cclxuICAgICAgICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzFdLnRleHRDb250ZW50O1xyXG4gICAgICBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgc2hvd0luYm94U2VjdGlvbigpO1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHNMaXN0KCkge1xyXG4gIGNsZWFuQ29udGFpbmVyUHJvamVjdHMoKTtcclxuICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJJbmJveFwiICYmIHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRvZGF5XCIpIHtcclxuICAgICAgY29udGFpbmVyUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3QuZ2V0TmFtZSgpKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcHJvamVjdE9wZXJhdGlvbnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzQmFyKCkge1xyXG4gIGNvbnN0IHNob3dQcm9qZWN0c0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1wcm9qZWN0c1wiKTtcclxuXHJcbiAgc2hvd1Byb2plY3RzQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLXJpZ2h0XCIpO1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1jb250ZW50XCIpO1xyXG5cclxuICAgIGlmIChzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtY2hldnJvbi1kb3duXCIpKSB7XHJcbiAgICAgIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgaW5pdEFwcCA9ICgpID0+IHtcclxuICBmb3JtQWRkVG9kby5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbUZvcm0oKSk7XHJcbiAgICBzaG93VG9kb0xpc3QoKTtcclxuICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGZvcm1VcGRhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHVwZGF0ZVRvZG9Gcm9tRm9ybShnZXRWYWx1ZXNGb3JtVXBkYXRlKCkpO1xyXG4gICAgdXBkYXRlVG9kb0NhcmQoaW5kZXhDYXJkVG9kbywgZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICAgIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIH0pO1xyXG5cclxuICBmb3JtQWRkVG9kb05hdmJhci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbU5hdmJhcigpKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gICAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gICAgZm9ybUFkZFRvZG9OYXZiYXIucmVzZXQoKTtcclxuICB9KTtcclxuXHJcbiAgZm9ybUFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dFByb2plY3ROYW1lLnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICBhZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICAgIHByb2plY3RPcGVyYXRpb25zKCk7XHJcblxyXG4gICAgY3JlYXRlU2VsZWN0T3B0aW9ucyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0KTtcclxuICAgIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSwgc2VsZWN0VXBkYXRlUHJvamVjdCk7XHJcbiAgICBjcmVhdGVTZWxlY3RPcHRpb25zKHByb2plY3RzLmdldFByb2plY3RzKCksIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG5cclxuICAgIGZvcm1BZGRQcm9qZWN0LnJlc2V0KCk7XHJcbiAgICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5pbmJveFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBjaG9vc2VPYmplY3RMaXN0KGUudGFyZ2V0KSk7XHJcbnRvZGF5U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IGNob29zZU9iamVjdExpc3QoZS50YXJnZXQpKTtcclxuXHJcbmJ0bkFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZvcm1PcGVyYXRpb25zKTtcclxuYnRuRm9ybUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VGb3JtQWRkVGFzayk7XHJcbmJ0bkFkZFRvZG9OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dGb3JtQWRkVG9kb05hdmJhcik7XHJcbmJ0bkNhbmNlbEZvcm1OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5BZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFByb2plY3QpO1xyXG5cclxuYnRuSG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XHJcbiAgc2hvd1NlY3Rpb25Ub2RvKHRvZGF5U2VjdGlvbik7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbn0pO1xyXG5cclxuYnRuVG9nZ2xlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAvL2RvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwiY29udGVudC1oaWRkZW5cIik7XHJcbn0pO1xyXG5cclxuKGZ1bmN0aW9uIHNldEN1cnJlbnREYXRlKCkge1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIik7XHJcbiAgY29uc3QgZHVlRGF0ZVVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZS11cGRhdGVcIik7XHJcbiAgY29uc3QgZHVlRGF0ZU5hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZS1uYXZiYXJcIik7XHJcblxyXG4gIGR1ZURhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIGdldEN1cnJlbnREYXRlKCkpO1xyXG4gIGR1ZURhdGVVcGRhdGUuc2V0QXR0cmlidXRlKFwibWluXCIsIGdldEN1cnJlbnREYXRlKCkpO1xyXG4gIGR1ZURhdGVOYXZiYXIuc2V0QXR0cmlidXRlKFwibWluXCIsIGdldEN1cnJlbnREYXRlKCkpO1xyXG59KSgpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FyZFRvZG8iLCJpbmRleCIsIm9ialRvZG8iLCJkaXZUYXNrIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZGl2VGFza0luZm8iLCJpY29uVXBkYXRlVGFzayIsImlubmVySFRNTCIsImdldFRpdGxlIiwiZ2V0RGVzY3JpcHRpb24iLCJnZXREdWVEYXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJjc3NUZXh0IiwiZ2V0UHJpb3JpdHkiLCJhcHBlbmRDaGlsZCIsInF1ZXJ5U2VsZWN0b3IiLCJjcmVhdGVDYXJkUHJvamVjdHMiLCJwcm9qZWN0TmFtZSIsImNvbnRhaW5lclByb2plY3RzIiwiZGl2UHJvamVjdCIsImRpdkluZm8iLCJpY29uRGVsZXRlIiwic3Bhbk51bWJlclRvZG9zIiwiY3JlYXRlU2VsZWN0T3B0aW9ucyIsImFycmF5UHJvamVjdHMiLCJzZWxlY3QiLCJ0ZXh0Q29udGVudCIsIm9wdGlvbkhpZGRlbiIsInZhbHVlIiwibGVuZ3RoIiwiZm9yRWFjaCIsInByb2plY3QiLCJnZXROYW1lIiwib3B0aW9uIiwibmFtZSIsIlRvZG8iLCJnZXRWYWx1ZXNGcm9tRm9ybSIsInRpdGxlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJyZXBsYWNlIiwiY2hvb3NlUHJvamVjdCIsInRhc2tQcmlvcml0eSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwicHJpb3JpdHkiLCJnZXRGb3JtVXBkYXRlSW5wdXRzIiwiaW5wdXRUaXRsZSIsImlucHV0RGVzY3JpcHRpb24iLCJpbnB1dER1ZURhdGUiLCJpbnB1dENob29zZVByb2plY3QiLCJpbnB1dFByaW9yaXR5Iiwic2hvd0luZm9Gb3JtVXBkYXRlIiwiZGF0YU9iamVjdCIsImlucHV0c0Zvcm1VcGRhdGUiLCJnZXRQcm9qZWN0TmFtZSIsImdldFZhbHVlc0Zvcm1VcGRhdGUiLCJnZXRWYWx1ZXNGcm9tTmF2YmFyIiwiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwidG9kb3MiLCJnZXRUb2RvcyIsImdldFRvZG8iLCJ0b2RvIiwiZmluZCIsIml0ZW0iLCJnZXRJbmRleFRvZG8iLCJmaW5kSW5kZXgiLCJhZGRUb2RvIiwicHVzaCIsInJlbW92ZVRvZG8iLCJ0b2RvVGl0bGUiLCJmaWx0ZXIiLCJ1cGRhdGVUb2RvIiwiaXNUb2RheSIsIlByb2plY3RzIiwicHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImdldFByb2plY3QiLCJhZGRQcm9qZWN0IiwiZ2V0UHJvamVjdEluZGV4IiwicmVtb3ZlUHJvamVjdCIsImFkZFRvZG9Gcm9tUHJvamVjdCIsInRvZGF5IiwicHJvamVjdEFkZGVkIiwic2VhcmNoVG9kbyIsInByb2plY3RTZWFyY2giLCJzZXRQcm9qZWN0TmFtZSIsIkRhdGUiLCJmaW5kVG9kb1RvZGF5IiwiaW5kZXhUb2RvIiwiaSIsInVwZGF0ZVRvZG9Ub2RheSIsInRvZG9PYmoiLCJ1cGRhdGVkVG9kbyIsInRvZG9JbmRleCIsInVwZGF0ZVRvZG9Gcm9tVG9kYXkiLCJ0b2RvVmFsdWVzIiwiaGFzT3duUHJvcGVydHkiLCJpbmRleFNlYXJjaCIsInRvZG9BZGRlZCIsImRlbGV0ZVRvZG9Gcm9tVG9kYXkiLCJkZWxldGVBbGxUb2RvcyIsImRlbGV0ZVRvZG9Ub2RheSIsInVuZGVmaW5lZCIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXREdWVEYXRlIiwic2V0UHJpb3JpdHkiLCJpbmJveFNlY3Rpb24iLCJ0b2RheVNlY3Rpb24iLCJmb3JtVXBkYXRlVG9kbyIsImZvcm1BZGRQcm9qZWN0IiwiZm9ybUFkZFRvZG8iLCJmb3JtQWRkVG9kb05hdmJhciIsImNvbnRhaW5lclRvZG9MaXN0IiwiY29udGFpbmVyQWRkUHJvamVjdCIsImNvbnRhaW5lckFkZFRvZG9OYXZiYXIiLCJzZWN0aW9uVG9kbyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidG5BZGRUb2RvIiwiYnRuRm9ybUNhbmNlbCIsImJ0bkNhbmNlbFByb2plY3QiLCJidG5DYW5jZWxVcGRhdGVGb3JtIiwiYnRuQ2FuY2VsRm9ybU5hdmJhciIsImJ0bkFkZFByb2plY3QiLCJidG5BZGRUb2RvTmF2YmFyIiwiYnRuVG9nZ2xlU2lkZWJhciIsImJ0bkhvbWUiLCJpbnB1dFByb2plY3ROYW1lIiwic2VsZWN0UHJvamVjdCIsInNlbGVjdFVwZGF0ZVByb2plY3QiLCJzZWxlY3RQcm9qZWN0TmF2YmFyIiwic2VjdGlvblRpdGxlIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJpbmJveCIsImluZGV4Q2FyZFRvZG8iLCJhcnJheVRvZG9zRE9NIiwiZ2V0U2VjdGlvbk9iamVjdCIsImNsb3NlRm9ybUFkZFRhc2siLCJyZXNldCIsInJlbW92ZSIsInNob3dGb3JtQWRkVGFzayIsImNsb3NlRm9ybVVwZGF0ZVRhc2siLCJzaG93Rm9ybVVwZGF0ZVRhc2siLCJjbGVhblRvZG9zQ29udGFpbmVyIiwiY2xlYW5Db250YWluZXJQcm9qZWN0cyIsImdldEN1cnJlbnREYXRlIiwiZGF0ZU9iamVjdCIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJkYXRlIiwiZ2V0RGF0ZSIsImRlbGV0ZVRvZG9ET00iLCJ0YXNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjaGVja2VkIiwicmVtb3ZlQ2hpbGQiLCJzaG93VG9kb0xpc3QiLCJzaG93Q3VycmVudFRvZG9zIiwib2JqZWN0IiwidXBkYXRlVG9kb0NhcmRET00iLCJhZGRUb2RvRnJvbUZvcm0iLCJ0cmltIiwiZm9ybU9wZXJhdGlvbnMiLCJ1cGRhdGVUb2RvQ2FyZCIsImluZGV4Q2FyZCIsInRvZG9EYXRhIiwiZGl2Q29udGFpbmVyIiwidGl0bGVUYXNrIiwiY2hpbGRyZW4iLCJkZXNjcmlwdGlvblRhc2siLCJsYXN0RWxlbWVudENoaWxkIiwic2hvd0Zvcm1VcGRhdGVDYXJkIiwiYXJyYXlUYXNrIiwiaW5zZXJ0QmVmb3JlIiwidXBkYXRlVG9kb0Zyb21Gb3JtIiwidmFsdWVzVG9kbyIsImdldERhdGFUb2RvQ2FyZCIsIkFycmF5IiwiZnJvbSIsImNob29zZU9iamVjdExpc3QiLCJzaG93U2VjdGlvblRvZG8iLCJzaG93Rm9ybUFkZFRvZG9OYXZiYXIiLCJjbG9zZUZvcm1BZGRUb2RvTmF2YmFyIiwic2VjdGlvbiIsInNlY3Rpb25BcnJheSIsImNvbmNhdCIsInRvZG9zUXVhbnRpdHkiLCJuZXdQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInNob3dGb3JtQWRkUHJvamVjdCIsInNob3dJbmJveFNlY3Rpb24iLCJwcm9qZWN0T3BlcmF0aW9ucyIsInByb2plY3RzRE9NIiwiZGVsZXRlUHJvamVjdHMiLCJwYXJlbnRFbGVtZW50Iiwic2hvd1Byb2plY3RzTGlzdCIsImRpc3BsYXlQcm9qZWN0c0JhciIsInNob3dQcm9qZWN0c0JhciIsInRvZ2dsZSIsImNvbnRhaW5zIiwiaW5pdEFwcCIsInByZXZlbnREZWZhdWx0Iiwic2V0Q3VycmVudERhdGUiLCJkdWVEYXRlVXBkYXRlIiwiZHVlRGF0ZU5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=