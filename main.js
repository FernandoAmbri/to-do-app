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
displayProjectsBar();

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
} //si localstorage se encuentra vacío quiere decir que es la primera vez,
//entonces se tiene que agregar por default Inbox y today.
//después el usuario, no va a poder eliminar today ni inbox.


console.log(localStorage.length);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFB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QUVBdkMsVUFBVSxDQUFDcUMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNjLGNBQXJDO0FBQ0FsRCxhQUFhLENBQUNvQyxnQkFBZCxDQUErQixPQUEvQixFQUF3Q2xCLGdCQUF4QztBQUNBYixnQkFBZ0IsQ0FBQytCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ2lDLHFCQUEzQztBQUNBbEUsbUJBQW1CLENBQUNpQyxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOENrQyxzQkFBOUM7QUFDQWxFLGFBQWEsQ0FBQ2dDLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDeUMsa0JBQXhDO0FBRUF2RSxPQUFPLENBQUM4QixnQkFBUixDQUF5QixPQUF6QixFQUFtQ0MsQ0FBRCxJQUFPO0VBQ3ZDMUIsWUFBWSxDQUFDaEgsV0FBYixHQUEyQixPQUEzQjtFQUNBeUssZUFBZSxDQUFDL0UsWUFBRCxDQUFmO0VBQ0FvRCxZQUFZO0FBQ2IsQ0FKRDs7QUFNQSxDQUFDLFNBQVM4QyxjQUFULEdBQTBCO0VBQ3pCLE1BQU05SyxPQUFPLEdBQUd4QyxRQUFRLENBQUNzQyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0VBQ0EsTUFBTWlMLGFBQWEsR0FBR3ZOLFFBQVEsQ0FBQ3NDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXRCO0VBQ0EsTUFBTWtMLGFBQWEsR0FBR3hOLFFBQVEsQ0FBQ3NDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXRCO0VBRUFFLE9BQU8sQ0FBQzlCLFlBQVIsQ0FBcUIsS0FBckIsRUFBNEIrSSxjQUFjLEVBQTFDO0VBQ0E4RCxhQUFhLENBQUM3TSxZQUFkLENBQTJCLEtBQTNCLEVBQWtDK0ksY0FBYyxFQUFoRDtFQUNBK0QsYUFBYSxDQUFDOU0sWUFBZCxDQUEyQixLQUEzQixFQUFrQytJLGNBQWMsRUFBaEQ7QUFDRCxDQVJELEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2Zvcm1Db250ZW50LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNTYW1lRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1RvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ2FyZFRvZG8oaW5kZXgsIG9ialRvZG8pIHtcclxuICBjb25zdCBkaXZUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkaXZUYXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaWNvblVwZGF0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuXHJcbiAgZGl2VGFzay5pbm5lckhUTUwgPSBgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidGFzay1maW5pc2hlZFwiIC8+YDtcclxuICBkaXZUYXNrSW5mby5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPVwidGFzay1uYW1lXCIgaWQ9XCJ0YXNrLW5hbWUtY2FyZFwiPiR7b2JqVG9kby5nZXRUaXRsZSgpfTwvaDI+XHJcbiAgPHAgY2xhc3M9XCJ0YXNrLWRlc2NyaXB0aW9uLWNhcmRcIiBpZD1cInRhc2stZGVzY3JpcHRpb24tY2FyZFwiPiR7b2JqVG9kby5nZXREZXNjcmlwdGlvbigpfTwvcD5cclxuICA8cD4ke29ialRvZG8uZ2V0RHVlRGF0ZSgpfTwvcD5gO1xyXG5cclxuICBpY29uVXBkYXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZmEtcmVndWxhclwiLCBcImZhLXBlbi10by1zcXVhcmVcIik7XHJcblxyXG4gIGRpdlRhc2suY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XHJcbiAgZGl2VGFzay5zZXRBdHRyaWJ1dGUoXCJpbmRleC10b2RvXCIsIGluZGV4KTtcclxuICBkaXZUYXNrLnN0eWxlLmNzc1RleHQgPSBgYm9yZGVyOiAycHggc29saWQgJHtvYmpUb2RvLmdldFByaW9yaXR5KCl9YDtcclxuXHJcbiAgZGl2VGFzay5hcHBlbmRDaGlsZChkaXZUYXNrSW5mbyk7XHJcbiAgZGl2VGFzay5hcHBlbmRDaGlsZChpY29uVXBkYXRlVGFzayk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1saXN0XCIpLmFwcGVuZENoaWxkKGRpdlRhc2spO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDYXJkUHJvamVjdHMocHJvamVjdE5hbWUpIHtcclxuICBjb25zdCBjb250YWluZXJQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLXByb2plY3RzXCIpO1xyXG4gIGNvbnN0IGRpdlByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGljb25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuXHJcbiAgZGl2SW5mby5pbm5lckhUTUwgPSBgPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWZpbGVcIj48L2k+XHJcbiAgPHAgaWQ9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3ROYW1lfTwvcD5gO1xyXG5cclxuICBzcGFuTnVtYmVyVG9kb3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJudW1iZXItb2YtdGFza3NcIik7XHJcblxyXG4gIGljb25EZWxldGUuY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS10cmFzaC1jYW5cIik7XHJcbiAgaWNvbkRlbGV0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1wcm9qZWN0XCIpO1xyXG5cclxuICBkaXZQcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIsIFwic2VjdGlvblwiKTtcclxuICAvL2RpdlByb2plY3Quc2V0QXR0cmlidXRlKFwiaW5kZXgtdG9kb1wiLCBpbmRleCk7XHJcblxyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoZGl2SW5mbyk7XHJcbiAgZGl2UHJvamVjdC5hcHBlbmRDaGlsZChzcGFuTnVtYmVyVG9kb3MpO1xyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoaWNvbkRlbGV0ZSk7XHJcblxyXG4gIHJldHVybiBkaXZQcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTZWxlY3RPcHRpb25zKGFycmF5UHJvamVjdHMsIHNlbGVjdCkge1xyXG4gIHNlbGVjdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIGNvbnN0IG9wdGlvbkhpZGRlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgb3B0aW9uSGlkZGVuLnZhbHVlID0gXCJcIjtcclxuICBvcHRpb25IaWRkZW4uc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiaGlkZGVuXCIpO1xyXG4gIG9wdGlvbkhpZGRlbi50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgcHJvamVjdFwiO1xyXG5cclxuICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uSGlkZGVuKTtcclxuXHJcbiAgaWYgKGFycmF5UHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgYXJyYXlQcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJUb2RheVwiKSB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0Lm5hbWU7XHJcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNhcmRUb2RvLCBjcmVhdGVDYXJkUHJvamVjdHMsIGNyZWF0ZVNlbGVjdE9wdGlvbnMgfTtcclxuIiwiaW1wb3J0IFRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbUZvcm0oKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZVwiKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvblwiKS52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0XCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eVwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Rm9ybVVwZGF0ZUlucHV0cygpIHtcclxuICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0RGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb24tdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0RHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZS11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXRDaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC11cGRhdGVcIik7XHJcbiAgY29uc3QgaW5wdXRQcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1wcmlvcml0eS11cGRhdGVcIik7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbnB1dFRpdGxlLFxyXG4gICAgaW5wdXREZXNjcmlwdGlvbixcclxuICAgIGlucHV0RHVlRGF0ZSxcclxuICAgIGlucHV0Q2hvb3NlUHJvamVjdCxcclxuICAgIGlucHV0UHJpb3JpdHksXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0luZm9Gb3JtVXBkYXRlKGRhdGFPYmplY3QpIHtcclxuICBjb25zdCBpbnB1dHNGb3JtVXBkYXRlID0gZ2V0Rm9ybVVwZGF0ZUlucHV0cygpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRUaXRsZS52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0VGl0bGUoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RGVzY3JpcHRpb24udmFsdWUgPSBkYXRhT2JqZWN0LmdldERlc2NyaXB0aW9uKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dER1ZURhdGUudmFsdWUgPSBkYXRhT2JqZWN0XHJcbiAgICAuZ2V0RHVlRGF0ZSgpXHJcbiAgICAucmVwbGFjZSgvKFxcLykvZywgXCItXCIpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRDaG9vc2VQcm9qZWN0LnZhbHVlID0gZGF0YU9iamVjdC5nZXRQcm9qZWN0TmFtZSgpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRQcmlvcml0eS52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0UHJpb3JpdHkoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpIHtcclxuICBjb25zdCBpbnB1dHNGb3JtVXBkYXRlID0gZ2V0Rm9ybVVwZGF0ZUlucHV0cygpO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRUaXRsZS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREZXNjcmlwdGlvbi52YWx1ZTtcclxuICBjb25zdCBkdWVEYXRlID0gaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dER1ZURhdGUudmFsdWUucmVwbGFjZSgvLS9nLCBcIi9cIik7XHJcbiAgY29uc3QgY2hvb3NlUHJvamVjdCA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRDaG9vc2VQcm9qZWN0O1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXRQcmlvcml0eTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbU5hdmJhcigpIHtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLW5hdmJhclwiKS52YWx1ZTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1kZXNjcmlwdGlvbi1uYXZiYXJcIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50XHJcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJkdWVkYXRlLW5hdmJhclwiKVxyXG4gICAgLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LW5hdmJhclwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktbmF2YmFyXCIpO1xyXG5cclxuICBjb25zdCBwcm9qZWN0TmFtZSA9IGNob29zZVByb2plY3Qub3B0aW9uc1tjaG9vc2VQcm9qZWN0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gIGNvbnN0IHByaW9yaXR5ID0gdGFza1ByaW9yaXR5Lm9wdGlvbnNbdGFza1ByaW9yaXR5LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG5cclxuICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0TmFtZSwgcHJpb3JpdHkpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSBcIlwiKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXROYW1lKG5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvcygpIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zO1xyXG4gIH1cclxuXHJcbiAgc2V0VG9kb3ModG9kb3NBcnJheSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRvZG9zQXJyYXk7XHJcbiAgfVxyXG5cclxuICBnZXRUb2RvKHRpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdGhpcy50b2Rvcy5maW5kKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRpdGxlKTtcclxuICAgIHJldHVybiB0b2RvID8gdG9kbyA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhUb2RvKHRvZG8pIHtcclxuICAgIHJldHVybiB0aGlzLnRvZG9zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5nZXRUaXRsZSgpID09PSB0b2RvLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkVG9kbyh0b2RvKSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0VG9kbyh0b2RvLmdldFRpdGxlKCkpKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldE5hbWUoKSA9PT0gdG9kby5nZXRQcm9qZWN0TmFtZSgpKSB7XHJcbiAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZW1vdmVUb2RvKHRvZG9UaXRsZSkge1xyXG4gICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgIT09IHRvZG9UaXRsZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvKGluZGV4LCB0b2RvKSB7XHJcbiAgICBpZiAodG9kby5nZXRQcm9qZWN0TmFtZSgpID09PSB0aGlzLm5hbWUgJiYgdGhpcy5nZXRUb2RvKHRvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgdGhpcy50b2Rvc1tpbmRleF0gPSB0b2RvO1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmdldFRpdGxlKCkpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGlzVG9kYXkgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0cyhwcm9qZWN0c0FycmF5KSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHNBcnJheTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3QobmFtZSkge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMucHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcclxuICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdCA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICBpZiAoIXRoaXMuZ2V0UHJvamVjdChwcm9qZWN0LmdldE5hbWUoKSkpIHtcclxuICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdEluZGV4KHByb2plY3ROYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXHJcbiAgICAgIChpdGVtKSA9PiBpdGVtLmdldE5hbWUoKSAhPT0gcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvRnJvbVByb2plY3QodG9kbykge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdCh0b2RvLmdldFByb2plY3ROYW1lKCkpO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHByb2plY3RBZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kbykgOiBmYWxzZTtcclxuXHJcbiAgICBpZiAocHJvamVjdEFkZGVkKSB7XHJcbiAgICAgIHRvZG8uc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiB0b2RvLmdldFByb2plY3ROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RvLnNldFByb2plY3ROYW1lKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG8uZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgbGV0IGluZGV4VG9kbyA9IC0xO1xyXG5cclxuICAgIHRvZGF5LnRvZG9zLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGl0ZW0uc2VhcmNoVG9kby5wcm9qZWN0U2VhcmNoID09PSBwcm9qZWN0LmdldE5hbWUoKSAmJlxyXG4gICAgICAgIGl0ZW0uc2VhcmNoVG9kby50b2RvVGl0bGUgPT09IHRvZG9UaXRsZVxyXG4gICAgICApIHtcclxuICAgICAgICBpbmRleFRvZG8gPSBpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpbmRleFRvZG8gPj0gMCA/IGluZGV4VG9kbyA6IC0xO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlVG9kb1RvZGF5KGluZGV4LCB0b2RvT2JqLCBwcm9qZWN0KSB7XHJcbiAgICBsZXQgdXBkYXRlZFRvZG8gPSBudWxsO1xyXG4gICAgY29uc3QgdG9kYXkgPSB0aGlzLmdldFByb2plY3QoXCJUb2RheVwiKTtcclxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IHByb2plY3QuZ2V0VG9kb3MoKVtpbmRleF0uZ2V0VGl0bGUoKTtcclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvT2JqLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB7XHJcbiAgICAgICAgcHJvamVjdFNlYXJjaDogcHJvamVjdC5nZXROYW1lKCksXHJcbiAgICAgICAgdG9kb1RpdGxlOiB0b2RvT2JqLmdldFRpdGxlKCksXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRvZGF5LnRvZG9zW3RvZG9JbmRleF0gPSB0b2RvT2JqO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvZGF5LnRvZG9zLnB1c2godG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgICAgdXBkYXRlZFRvZG8gPSBwcm9qZWN0LnVwZGF0ZVRvZG8oaW5kZXgsIHRvZG9PYmopO1xyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGNvbnN0IHRvZG9JbmRleCA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgICBpZiAodG9kb0luZGV4ID49IDApIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuYWRkVG9kb0Zyb21Qcm9qZWN0KHRvZG9PYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvRnJvbVRvZGF5KGluZGV4LCB0b2RvT2JqKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb1ZhbHVlcyA9IHRvZGF5LmdldFRvZG9zKClbaW5kZXhdO1xyXG5cclxuICAgIGlmICh0b2RvVmFsdWVzLmhhc093blByb3BlcnR5KFwic2VhcmNoVG9kb1wiKSkge1xyXG4gICAgICB0b2RvT2JqLnNlYXJjaFRvZG8gPSB0b2RvVmFsdWVzLnNlYXJjaFRvZG87XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIGNvbnN0IGluZGV4U2VhcmNoID0gcHJvamVjdC5nZXRJbmRleFRvZG8ocHJvamVjdC5nZXRUb2RvKHRvZG9UaXRsZSkpO1xyXG4gICAgICBjb25zdCB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleFNlYXJjaCwgdG9kb09iaik7XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKSk7XHJcbiAgICAgIGNvbnN0IHRvZG9BZGRlZCA9IHByb2plY3QgPyBwcm9qZWN0LmFkZFRvZG8odG9kb09iaikgOiBmYWxzZTtcclxuICAgICAgaWYgKHRvZG9BZGRlZCkge1xyXG4gICAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICAgIHByb2plY3RTZWFyY2g6IHRvZG9PYmouZ2V0UHJvamVjdE5hbWUoKSxcclxuICAgICAgICAgIHRvZG9UaXRsZTogdG9kb09iai5nZXRUaXRsZSgpLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNUb2RheShuZXcgRGF0ZSh0b2RvT2JqLmdldER1ZURhdGUoKSkpKSB7XHJcbiAgICAgIHRvZGF5LnRvZG9zW2luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9WYWx1ZXMuZ2V0VGl0bGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvRnJvbVRvZGF5KGluZGV4KSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb09iaiA9IHRvZGF5LmdldFRvZG9zKClbaW5kZXhdO1xyXG4gICAgaWYgKHRvZG9PYmouaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgIGNvbnN0IHsgcHJvamVjdFNlYXJjaCwgdG9kb1RpdGxlIH0gPSB0b2RvT2JqLnNlYXJjaFRvZG87XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdFNlYXJjaCk7XHJcbiAgICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvVGl0bGUpO1xyXG4gICAgfVxyXG4gICAgdG9kYXkucmVtb3ZlVG9kbyh0b2RvT2JqLmdldFRpdGxlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlQWxsVG9kb3MocHJvamVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdC5nZXRUb2RvcygpLmZvckVhY2goKHRvZG8sIGkpID0+IHtcclxuICAgICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kby5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gaTtcclxuICAgICAgICB0aGlzLmRlbGV0ZVRvZG9Ub2RheShpbmRleCwgcHJvamVjdCwgdHJ1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9kb1RvZGF5KGluZGV4LCBwcm9qZWN0LCByZW1vdmVQcm9qZWN0KSB7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gcHJvamVjdC50b2Rvc1tpbmRleF0uZ2V0VGl0bGUoKTtcclxuICAgIGNvbnN0IGluZGV4VG9kbyA9IHRoaXMuZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpO1xyXG4gICAgaWYgKGluZGV4VG9kbyA+PSAwKSB7XHJcbiAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgIH1cclxuICAgIGlmIChyZW1vdmVQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUgPSBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxyXG4gICAgZHVlRGF0ZSA9IFwiXCIsXHJcbiAgICBwcm9qZWN0TmFtZSA9IFwiXCIsXHJcbiAgICBwcmlvcml0eSA9IDFcclxuICApIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldERlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgc2V0UHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICB9XHJcblxyXG4gIGdldFByaW9yaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJpb3JpdHk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gIH1cclxufVxyXG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnMmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICB3aWR0aDogMTI4MHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCBhIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9c2VhcmNoXSB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxuICBwYWRkaW5nOiA3cHggMTBweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICB3aWR0aDogMzA0cHg7XFxyXFxuICBmbGV4LXNocmluazogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCA0NXB4O1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbi1hY3RpdmUsXFxyXFxuLnNlY3Rpb246aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZGF5IHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+aSB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyAuZmEtcGx1czpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAyMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyAucHJvamVjdCB7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCAuZmEtdHJhc2gtY2FuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3Nob3ctcHJvamVjdHMge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbk1haW4gY29udGVudCBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMzBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDc1JTtcXHJcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmFkZC10YXNrOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjODRjYzE2O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaW5wdXRbdHlwZT1jaGVja2JveF0ge1xcclxcbiAgd2lkdGg6IDE4cHg7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBhY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgZGl2IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBtYXJnaW46IDAgMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stZGVzY3JpcHRpb24tY2FyZCB7XFxyXFxuICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDEuN3JlbTtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb3JtLXRhc2stY2FyZCxcXHJcXG4uZm9ybS11cGRhdGUtdGFzayB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY2FyZCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0b3JzIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV0ge1xcclxcbiAgcGFkZGluZzogMXB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiAzcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBtYXJnaW46IDEwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbnMtY2FyZCBidXR0b24ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHdpZHRoOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWNhbmNlbCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC1wcm9qZWN0LFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXVwZGF0ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1hZGQsXFxyXFxuYnV0dG9uLmJ0bi1zYXZlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuQWRkIHRhc2sgZnJvbSBuYXZiYXIgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIGZvcm0ge1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuQWRkIHByb2plY3QgZm9ybVxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNjUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA0MDBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LWhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2hvdy1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBw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WTtBQUNkOztBQUVBOztDQUVDOztBQUVEO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBDQUEwQztFQUMxQyxrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMDRweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNTYW1lRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMCksIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDE4LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIGFuZCA0IE9jdG9iZXIgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIsIDIwMTQgYW5kIDQgU2VwdGVtYmVyLCAyMDE1IGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTUsIDgsIDQpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZURheShkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZEYXkuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mRGF5LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgaXNTYW1lRGF5IGZyb20gXCIuLi9pc1NhbWVEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNiBPY3RvYmVyIDE0OjAwOjAwIHRvZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVG9kYXkobmV3IERhdGUoMjAxNCwgOSwgNiwgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUb2RheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVEYXkoZGlydHlEYXRlLCBEYXRlLm5vdygpKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBjcmVhdGVDYXJkVG9kbyxcclxuICBjcmVhdGVDYXJkUHJvamVjdHMsXHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyxcclxufSBmcm9tIFwiLi9jb21wb25lbnRzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGdldFZhbHVlc0Zyb21Gb3JtLFxyXG4gIGdldFZhbHVlc0Zvcm1VcGRhdGUsXHJcbiAgZ2V0VmFsdWVzRnJvbU5hdmJhcixcclxuICBzaG93SW5mb0Zvcm1VcGRhdGUsXHJcbn0gZnJvbSBcIi4vZm9ybUNvbnRlbnRcIjtcclxuXHJcbmltcG9ydCBQcm9qZWN0IGZyb20gXCIuL3Byb2plY3RcIjtcclxuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5jb25zdCBpbmJveFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xyXG5jb25zdCB0b2RheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5XCIpO1xyXG5cclxuY29uc3QgZm9ybVVwZGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdXBkYXRlLXRhc2tcIik7XHJcbmNvbnN0IGZvcm1BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBmb3JtQWRkVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS10YXNrLWNhcmRcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLWFkZC10b2RvLW5hdmJhclwiKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lclRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWxpc3RcIik7XHJcbmNvbnN0IGNvbnRhaW5lclByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItcHJvamVjdHNcIik7XHJcbmNvbnN0IGNvbnRhaW5lckFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1hZGQtcHJvamVjdFwiKTtcclxuY29uc3QgY29udGFpbmVyQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWZpeGVkXCIpO1xyXG5cclxuY29uc3Qgc2VjdGlvblRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNlY3Rpb25cIik7XHJcblxyXG5jb25zdCBidG5BZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza1wiKTtcclxuY29uc3QgYnRuRm9ybUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5DYW5jZWxVcGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idG4tY2FuY2VsLXVwZGF0ZVwiKTtcclxuY29uc3QgYnRuQ2FuY2VsRm9ybU5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBidG5BZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtdG9kby1uYXZiYXJcIik7XHJcbmNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bi1ob21lXCIpO1xyXG5cclxuY29uc3QgaW5wdXRQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1uYW1lXCIpO1xyXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuY29uc3Qgc2VsZWN0VXBkYXRlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtdXBkYXRlXCIpO1xyXG5jb25zdCBzZWxlY3RQcm9qZWN0TmF2YmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC1uYXZiYXJcIik7XHJcblxyXG5sZXQgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWNvbnRhaW5lclwiKS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcbmNvbnN0IGluYm94ID0gbmV3IFByb2plY3QoXCJJbmJveFwiKTtcclxuY29uc3QgdG9kYXkgPSBuZXcgUHJvamVjdChcIlRvZGF5XCIpO1xyXG5jb25zdCBwcm9qZWN0cyA9IG5ldyBQcm9qZWN0cygpO1xyXG5cclxucHJvamVjdHMuYWRkUHJvamVjdChpbmJveCk7XHJcbnByb2plY3RzLmFkZFByb2plY3QodG9kYXkpO1xyXG5cclxubGV0IGluZGV4Q2FyZFRvZG8gPSAwO1xyXG5sZXQgYXJyYXlUb2Rvc0RPTSA9IFtdO1xyXG5cclxuY3JlYXRlU2VsZWN0T3B0aW9ucyhwcm9qZWN0cy5wcm9qZWN0cywgc2VsZWN0UHJvamVjdCk7XHJcbmRpc3BsYXlQcm9qZWN0c0JhcigpO1xyXG5cclxuY29uc3QgZ2V0U2VjdGlvbk9iamVjdCA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdHMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbiAgZm9ybUFkZFRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1VcGRhdGVUYXNrKCkge1xyXG4gIGZvcm1VcGRhdGVUb2RvLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFuVG9kb3NDb250YWluZXIoKSB7XHJcbiAgY29udGFpbmVyVG9kb0xpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhbkNvbnRhaW5lclByb2plY3RzKCkge1xyXG4gIGNvbnRhaW5lclByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHllYXIgPSBkYXRlT2JqZWN0LmdldEZ1bGxZZWFyKCk7XHJcbiAgbGV0IG1vbnRoID0gZGF0ZU9iamVjdC5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IGRhdGVPYmplY3QuZ2V0RGF0ZSgpO1xyXG5cclxuICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgbW9udGggPSBcIjBcIiArIG1vbnRoO1xyXG4gIH1cclxuICBpZiAoZGF0ZSA8IDEwKSB7XHJcbiAgICBkYXRlID0gXCIwXCIgKyBkYXRlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvRE9NKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICB0YXNrLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB0b2RheSkge1xyXG4gICAgICAgICAgcHJvamVjdHMuZGVsZXRlVG9kb1RvZGF5KGksIHByb2plY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0cy5kZWxldGVUb2RvRnJvbVRvZGF5KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgICAgICBzaG93VG9kb0xpc3QoKTtcclxuICAgICAgICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9kb0xpc3QoKSB7XHJcbiAgY2xlYW5Ub2Rvc0NvbnRhaW5lcigpO1xyXG4gIGNvbnN0IG9iamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICBpZiAob2JqZWN0KSB7XHJcbiAgICBvYmplY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaSkgPT4gY3JlYXRlQ2FyZFRvZG8oaSwgdG9kbykpO1xyXG4gICAgdXBkYXRlVG9kb0NhcmRET00oKTtcclxuICAgIGRlbGV0ZVRvZG9ET00oKTtcclxuICB9XHJcbn1cclxuXHJcbi8vc2kgbG9jYWxzdG9yYWdlIHNlIGVuY3VlbnRyYSB2YWPDrW8gcXVpZXJlIGRlY2lyIHF1ZSBlcyBsYSBwcmltZXJhIHZleixcclxuLy9lbnRvbmNlcyBzZSB0aWVuZSBxdWUgYWdyZWdhciBwb3IgZGVmYXVsdCBJbmJveCB5IHRvZGF5LlxyXG5cclxuLy9kZXNwdcOpcyBlbCB1c3VhcmlvLCBubyB2YSBhIHBvZGVyIGVsaW1pbmFyIHRvZGF5IG5pIGluYm94LlxyXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UubGVuZ3RoKTtcclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tRm9ybSh0b2RvT2JqKSB7XHJcbiAgaWYgKHRvZG9PYmouZ2V0VGl0bGUoKS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGlmICh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgIGlmIChwcm9qZWN0ICE9PSB0b2RheSkge1xyXG4gICAgICAgIHRvZG9PYmouc2V0UHJvamVjdE5hbWUocHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0cy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtT3BlcmF0aW9ucygpIHtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0Zvcm1BZGRUYXNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkKGluZGV4Q2FyZCwgdG9kb0RhdGEpIHtcclxuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIilbaW5kZXhDYXJkXTtcclxuICBpZiAoZGl2Q29udGFpbmVyKSB7XHJcbiAgICBkaXZDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke3RvZG9EYXRhLnByaW9yaXR5fWA7XHJcblxyXG4gICAgY29uc3QgdGl0bGVUYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgdGl0bGVUYXNrLnRleHRDb250ZW50ID0gdG9kb0RhdGEudGl0bGU7XHJcbiAgICBkZXNjcmlwdGlvblRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtVXBkYXRlQ2FyZChhcnJheVRhc2ssIGluZGV4Q2FyZCkge1xyXG4gIGlmIChhcnJheVRhc2subGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIGlmIChhcnJheVRhc2subGVuZ3RoIC0gMSA9PT0gaW5kZXhDYXJkKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0Lmluc2VydEJlZm9yZShmb3JtVXBkYXRlVG9kbywgYXJyYXlUYXNrW2luZGV4Q2FyZCArIDFdKTtcclxuICB9XHJcblxyXG4gIHNob3dGb3JtVXBkYXRlVGFzaygpO1xyXG4gIGJ0bkNhbmNlbFVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICAgIHNob3dUb2RvTGlzdCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvRnJvbUZvcm0odmFsdWVzVG9kbykge1xyXG4gIGlmICh2YWx1ZXNUb2RvLmdldFRpdGxlKCkudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgaWYgKHByb2plY3QgIT09IHRvZGF5KSB7XHJcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Ub2RheShpbmRleENhcmRUb2RvLCB2YWx1ZXNUb2RvLCBwcm9qZWN0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHByb2plY3RzLnVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXhDYXJkVG9kbywgdmFsdWVzVG9kbyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXREYXRhVG9kb0NhcmQoaW5kZXhDYXJkKSB7XHJcbiAgY29uc3QgcHJvamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICByZXR1cm4gcHJvamVjdC50b2Rvc1tpbmRleENhcmRdO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUb2RvQ2FyZERPTSgpIHtcclxuICBhcnJheVRvZG9zRE9NID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIikpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpbmRleCkgPT4ge1xyXG4gICAgdGFzay5sYXN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZChhcnJheVRvZG9zRE9NW2luZGV4XSk7XHJcbiAgICAgIGluZGV4Q2FyZFRvZG8gPSBpbmRleDtcclxuICAgICAgY2xvc2VGb3JtQWRkVGFzaygpO1xyXG4gICAgICBzaG93Rm9ybVVwZGF0ZUNhcmQoYXJyYXlUb2Rvc0RPTSwgaW5kZXgpO1xyXG4gICAgICBzaG93SW5mb0Zvcm1VcGRhdGUoZ2V0RGF0YVRvZG9DYXJkKGluZGV4KSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hvb3NlT2JqZWN0TGlzdChvYmplY3QpIHtcclxuICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QuY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gIHNob3dTZWN0aW9uVG9kbyhvYmplY3QpO1xyXG4gIGNsZWFuVG9kb3NDb250YWluZXIoKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMucHJvamVjdHMsIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LmFkZChcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTZWN0aW9uVG9kbyhzZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2VjdGlvbkFycmF5ID0gQXJyYXkuZnJvbShzZWN0aW9uVG9kbyk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKGNvbnRhaW5lclByb2plY3RzLmNoaWxkcmVuKTtcclxuICBzZWN0aW9uQXJyYXkuY29uY2F0KHByb2plY3RzKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHByb2plY3RzLmdldFByb2plY3RzKClbaV0udG9kb3MubGVuZ3RoO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBpZiAodG9kb3NRdWFudGl0eSA+IDApIHtcclxuICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHRvZG9zUXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcblBST0pFQ1RTXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKHByb2plY3ROYW1lICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGRlbGV0ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICBwcm9qZWN0cy5kZWxldGVBbGxUb2Rvcyhwcm9qZWN0TmFtZSk7XHJcbiAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFByb2plY3QoKSB7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG4gIGJ0bkNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xyXG4gICAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1mb3JtXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0T3BlcmF0aW9ucygpIHtcclxuICBjb25zdCBwcm9qZWN0c0RPTSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcclxuICBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjZGVsZXRlLXByb2plY3RcIik7XHJcblxyXG4gIHByb2plY3RzRE9NLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNob29zZU9iamVjdExpc3QocHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZGVsZXRlUHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPVxyXG4gICAgICAgIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0udGV4dENvbnRlbnQ7XHJcbiAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICAgIHNob3dDdXJyZW50VG9kb3MoKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93UHJvamVjdHNMaXN0KCkge1xyXG4gIGNsZWFuQ29udGFpbmVyUHJvamVjdHMoKTtcclxuICBwcm9qZWN0cy5nZXRQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gXCJJbmJveFwiICYmIHByb2plY3QuZ2V0TmFtZSgpICE9PSBcIlRvZGF5XCIpIHtcclxuICAgICAgY29udGFpbmVyUHJvamVjdHMuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3QuZ2V0TmFtZSgpKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcHJvamVjdE9wZXJhdGlvbnMoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVByb2plY3RzQmFyKCkge1xyXG4gIGNvbnN0IHNob3dQcm9qZWN0c0JhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1wcm9qZWN0c1wiKTtcclxuXHJcbiAgc2hvd1Byb2plY3RzQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLXJpZ2h0XCIpO1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1jaGV2cm9uLWRvd25cIik7XHJcbiAgICBjb250YWluZXJQcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKFwic2hvdy1jb250ZW50XCIpO1xyXG5cclxuICAgIGlmIChzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmEtY2hldnJvbi1kb3duXCIpKSB7XHJcbiAgICAgIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZm9ybUFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbUZvcm0oKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbn0pO1xyXG5cclxuZm9ybVVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB1cGRhdGVUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICB1cGRhdGVUb2RvQ2FyZChpbmRleENhcmRUb2RvLCBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkpO1xyXG4gIGNsb3NlRm9ybVVwZGF0ZVRhc2soKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn0pO1xyXG5cclxuZm9ybUFkZFRvZG9OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbU5hdmJhcigpKTtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgZm9ybUFkZFRvZG9OYXZiYXIucmVzZXQoKTtcclxufSk7XHJcblxyXG5mb3JtQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZS50cmltKCk7XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIHNob3dQcm9qZWN0c0xpc3QoKTtcclxuICBwcm9qZWN0T3BlcmF0aW9ucygpO1xyXG5cclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHByb2plY3RzLmdldFByb2plY3RzKCksIHNlbGVjdFByb2plY3QpO1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSwgc2VsZWN0VXBkYXRlUHJvamVjdCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpLCBzZWxlY3RQcm9qZWN0TmF2YmFyKTtcclxuXHJcbiAgZm9ybUFkZFByb2plY3QucmVzZXQoKTtcclxuICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn0pO1xyXG5cclxuaW5ib3hTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gY2hvb3NlT2JqZWN0TGlzdChlLnRhcmdldCkpO1xyXG50b2RheVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBjaG9vc2VPYmplY3RMaXN0KGUudGFyZ2V0KSk7XHJcblxyXG5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtT3BlcmF0aW9ucyk7XHJcbmJ0bkZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRhc2spO1xyXG5idG5BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5DYW5jZWxGb3JtTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm1BZGRUb2RvTmF2YmFyKTtcclxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1BZGRQcm9qZWN0KTtcclxuXHJcbmJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIHNob3dTZWN0aW9uVG9kbyh0b2RheVNlY3Rpb24pO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG59KTtcclxuXHJcbihmdW5jdGlvbiBzZXRDdXJyZW50RGF0ZSgpIHtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGVVcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGVOYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpO1xyXG5cclxuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxuICBkdWVEYXRlVXBkYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxuICBkdWVEYXRlTmF2YmFyLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhcmRUb2RvIiwiaW5kZXgiLCJvYmpUb2RvIiwiZGl2VGFzayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpdlRhc2tJbmZvIiwiaWNvblVwZGF0ZVRhc2siLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsImdldERlc2NyaXB0aW9uIiwiZ2V0RHVlRGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiY3NzVGV4dCIsImdldFByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ2FyZFByb2plY3RzIiwicHJvamVjdE5hbWUiLCJjb250YWluZXJQcm9qZWN0cyIsImRpdlByb2plY3QiLCJkaXZJbmZvIiwiaWNvbkRlbGV0ZSIsInNwYW5OdW1iZXJUb2RvcyIsImNyZWF0ZVNlbGVjdE9wdGlvbnMiLCJhcnJheVByb2plY3RzIiwic2VsZWN0IiwidGV4dENvbnRlbnQiLCJvcHRpb25IaWRkZW4iLCJ2YWx1ZSIsImxlbmd0aCIsImZvckVhY2giLCJwcm9qZWN0IiwiZ2V0TmFtZSIsIm9wdGlvbiIsIm5hbWUiLCJUb2RvIiwiZ2V0VmFsdWVzRnJvbUZvcm0iLCJ0aXRsZSIsImdldEVsZW1lbnRCeUlkIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicmVwbGFjZSIsImNob29zZVByb2plY3QiLCJ0YXNrUHJpb3JpdHkiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByaW9yaXR5IiwiZ2V0Rm9ybVVwZGF0ZUlucHV0cyIsImlucHV0VGl0bGUiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXREdWVEYXRlIiwiaW5wdXRDaG9vc2VQcm9qZWN0IiwiaW5wdXRQcmlvcml0eSIsInNob3dJbmZvRm9ybVVwZGF0ZSIsImRhdGFPYmplY3QiLCJpbnB1dHNGb3JtVXBkYXRlIiwiZ2V0UHJvamVjdE5hbWUiLCJnZXRWYWx1ZXNGb3JtVXBkYXRlIiwiZ2V0VmFsdWVzRnJvbU5hdmJhciIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRvZG9zIiwic2V0TmFtZSIsImdldFRvZG9zIiwic2V0VG9kb3MiLCJ0b2Rvc0FycmF5IiwiZ2V0VG9kbyIsInRvZG8iLCJmaW5kIiwiaXRlbSIsImdldEluZGV4VG9kbyIsImZpbmRJbmRleCIsImFkZFRvZG8iLCJwdXNoIiwicmVtb3ZlVG9kbyIsInRvZG9UaXRsZSIsImZpbHRlciIsInVwZGF0ZVRvZG8iLCJpc1RvZGF5IiwiUHJvamVjdHMiLCJwcm9qZWN0cyIsImdldFByb2plY3RzIiwic2V0UHJvamVjdHMiLCJwcm9qZWN0c0FycmF5IiwiZ2V0UHJvamVjdCIsImFkZFByb2plY3QiLCJnZXRQcm9qZWN0SW5kZXgiLCJyZW1vdmVQcm9qZWN0IiwiYWRkVG9kb0Zyb21Qcm9qZWN0IiwidG9kYXkiLCJwcm9qZWN0QWRkZWQiLCJzZWFyY2hUb2RvIiwicHJvamVjdFNlYXJjaCIsInNldFByb2plY3ROYW1lIiwiRGF0ZSIsImZpbmRUb2RvVG9kYXkiLCJpbmRleFRvZG8iLCJpIiwidXBkYXRlVG9kb1RvZGF5IiwidG9kb09iaiIsInVwZGF0ZWRUb2RvIiwidG9kb0luZGV4IiwidXBkYXRlVG9kb0Zyb21Ub2RheSIsInRvZG9WYWx1ZXMiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4U2VhcmNoIiwidG9kb0FkZGVkIiwiZGVsZXRlVG9kb0Zyb21Ub2RheSIsImRlbGV0ZUFsbFRvZG9zIiwiZGVsZXRlVG9kb1RvZGF5IiwidW5kZWZpbmVkIiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldER1ZURhdGUiLCJzZXRQcmlvcml0eSIsImluYm94U2VjdGlvbiIsInRvZGF5U2VjdGlvbiIsImZvcm1VcGRhdGVUb2RvIiwiZm9ybUFkZFByb2plY3QiLCJmb3JtQWRkVG9kbyIsImZvcm1BZGRUb2RvTmF2YmFyIiwiY29udGFpbmVyVG9kb0xpc3QiLCJjb250YWluZXJBZGRQcm9qZWN0IiwiY29udGFpbmVyQWRkVG9kb05hdmJhciIsInNlY3Rpb25Ub2RvIiwicXVlcnlTZWxlY3RvckFsbCIsImJ0bkFkZFRvZG8iLCJidG5Gb3JtQ2FuY2VsIiwiYnRuQ2FuY2VsUHJvamVjdCIsImJ0bkNhbmNlbFVwZGF0ZUZvcm0iLCJidG5DYW5jZWxGb3JtTmF2YmFyIiwiYnRuQWRkUHJvamVjdCIsImJ0bkFkZFRvZG9OYXZiYXIiLCJidG5Ib21lIiwiaW5wdXRQcm9qZWN0TmFtZSIsInNlbGVjdFByb2plY3QiLCJzZWxlY3RVcGRhdGVQcm9qZWN0Iiwic2VsZWN0UHJvamVjdE5hdmJhciIsInNlY3Rpb25UaXRsZSIsImZpcnN0RWxlbWVudENoaWxkIiwiaW5ib3giLCJpbmRleENhcmRUb2RvIiwiYXJyYXlUb2Rvc0RPTSIsImRpc3BsYXlQcm9qZWN0c0JhciIsImdldFNlY3Rpb25PYmplY3QiLCJjbG9zZUZvcm1BZGRUYXNrIiwicmVzZXQiLCJyZW1vdmUiLCJzaG93Rm9ybUFkZFRhc2siLCJjbG9zZUZvcm1VcGRhdGVUYXNrIiwic2hvd0Zvcm1VcGRhdGVUYXNrIiwiY2xlYW5Ub2Rvc0NvbnRhaW5lciIsImNsZWFuQ29udGFpbmVyUHJvamVjdHMiLCJnZXRDdXJyZW50RGF0ZSIsImRhdGVPYmplY3QiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZGF0ZSIsImdldERhdGUiLCJkZWxldGVUb2RvRE9NIiwidGFzayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2hlY2tlZCIsInJlbW92ZUNoaWxkIiwic2hvd1RvZG9MaXN0Iiwic2hvd0N1cnJlbnRUb2RvcyIsIm9iamVjdCIsInVwZGF0ZVRvZG9DYXJkRE9NIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImFkZFRvZG9Gcm9tRm9ybSIsInRyaW0iLCJmb3JtT3BlcmF0aW9ucyIsInVwZGF0ZVRvZG9DYXJkIiwiaW5kZXhDYXJkIiwidG9kb0RhdGEiLCJkaXZDb250YWluZXIiLCJ0aXRsZVRhc2siLCJjaGlsZHJlbiIsImRlc2NyaXB0aW9uVGFzayIsImxhc3RFbGVtZW50Q2hpbGQiLCJzaG93Rm9ybVVwZGF0ZUNhcmQiLCJhcnJheVRhc2siLCJpbnNlcnRCZWZvcmUiLCJ1cGRhdGVUb2RvRnJvbUZvcm0iLCJ2YWx1ZXNUb2RvIiwiZ2V0RGF0YVRvZG9DYXJkIiwiQXJyYXkiLCJmcm9tIiwiY2hvb3NlT2JqZWN0TGlzdCIsInNob3dTZWN0aW9uVG9kbyIsInNob3dGb3JtQWRkVG9kb05hdmJhciIsImNsb3NlRm9ybUFkZFRvZG9OYXZiYXIiLCJzZWN0aW9uIiwic2VjdGlvbkFycmF5IiwiY29uY2F0IiwidG9kb3NRdWFudGl0eSIsIm5ld1Byb2plY3QiLCJkZWxldGVQcm9qZWN0Iiwic2hvd0Zvcm1BZGRQcm9qZWN0IiwicHJvamVjdE9wZXJhdGlvbnMiLCJwcm9qZWN0c0RPTSIsImRlbGV0ZVByb2plY3RzIiwicGFyZW50RWxlbWVudCIsInNob3dQcm9qZWN0c0xpc3QiLCJzaG93UHJvamVjdHNCYXIiLCJ0b2dnbGUiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0Iiwic2V0Q3VycmVudERhdGUiLCJkdWVEYXRlVXBkYXRlIiwiZHVlRGF0ZU5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=