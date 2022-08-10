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

  removeProject(name) {
    this.projects = this.projects.filter(item => item.name !== name);
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

  deleteTodoToday(index, project) {
    const today = this.getProject("Today");
    const todoTitle = project.getTodos()[index].getTitle();
    const indexTodo = this.findTodoToday(project, todoTitle);

    if (indexTodo >= 0) {
      today.removeTodo(todoTitle);
    }

    project.removeTodo(todoTitle);
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
const showProjectsBar = document.getElementById("show-projects");
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
let arrayProjectsDOM = [];
(0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.projects, selectProject);

const getSectionObject = projectName => projects.getProject(projectName);

function closeFormAddTask() {
  formAddTodo.reset();
  formAddTodo.style.display = "none";
}

function showFormAddTask() {
  const formAddTodo = document.getElementById("form-task-card");
  formAddTodo.style.display = "block";
}

function closeFormUpdateTask() {
  formUpdateTodo.style.display = "none";
}

function showFormUpdateTask() {
  const formUpdateTodo = document.getElementById("form-update-task");
  formUpdateTodo.style.display = "block";
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
  containerTodoList.textContent = "";
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
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.projects, selectProject);
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

  formUpdateTodo.style.display = "block";
  btnCancelUpdateForm.addEventListener("click", () => {
    formUpdateTodo.style.display = "none";
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
      (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.projects, selectUpdateProject);
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
  containerTodoList.textContent = "";
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
  sectionArray.concat(arrayProjectsDOM).forEach(item => {
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

function addProjectDOM(projectName) {
  if (projectName !== "") {
    const projectCard = (0,_components__WEBPACK_IMPORTED_MODULE_1__.createCardProjects)(projectName);
    containerProjects.appendChild(projectCard);
    arrayProjectsDOM.push(projectCard);
  }
}

function deleteProject(index) {
  projects.removeProject(index);
}

function deleteProjectDOM(index) {
  arrayProjectsDOM.splice(index, 1);
}

function showFormAddProject() {
  formAddProject.style.display = "flex";
  containerAddProject.classList.add("show-form");
  btnCancelProject.addEventListener("click", e => {
    formAddProject.reset();
    formAddProject.style.display = "none";
    containerAddProject.classList.remove("show-form");
  });
}

function projectOperations() {
  document.querySelectorAll(".project").forEach(project => {
    project.addEventListener("click", e => {
      chooseObjectList(project);
    });
  });
  document.querySelectorAll("#delete-project").forEach((project, index) => {
    project.addEventListener("click", e => {
      deleteProject(index);
      deleteProjectDOM(index);
      showProjectsList();
    });
  });
}

function showProjectsList() {
  containerProjects.textContent = "";

  if (arrayProjectsDOM.length > 0) {
    arrayProjectsDOM.forEach(projectCard => containerProjects.appendChild(projectCard));
  }
}

showProjectsBar.addEventListener("click", e => {
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
  formUpdateTodo.style.display = "none";
  showTodoList();
  showCurrentTodos();
});
formAddTodoNavbar.addEventListener("submit", e => {
  e.preventDefault();
  addTodoFromForm((0,_formContent__WEBPACK_IMPORTED_MODULE_2__.getValuesFromNavbar)());
  formAddTodoNavbar.reset();
  showTodoList();
  showCurrentTodos();
});
formAddProject.addEventListener("submit", e => {
  e.preventDefault();
  const projectName = inputProjectName.value.trim();
  addProject(projectName);
  addProjectDOM(projectName);
  projectOperations();
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.getProjects(), selectProject);
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.getProjects(), selectUpdateProject);
  (0,_components__WEBPACK_IMPORTED_MODULE_1__.createSelectOptions)(projects.getProjects(), selectProjectNavbar);
  formAddProject.reset();
  formAddProject.style.display = "none";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLFFBQVEsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVks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QUNBZCxnQkFBZ0IsQ0FBQzhCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQzhCLHFCQUEzQztBQUNBOUQsbUJBQW1CLENBQUNnQyxnQkFBcEIsQ0FBcUMsT0FBckMsRUFBOEMrQixzQkFBOUM7QUFDQTlELGFBQWEsQ0FBQytCLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDMkMsa0JBQXhDO0FBRUF2RSxPQUFPLENBQUM0QixnQkFBUixDQUF5QixPQUF6QixFQUFtQ0MsQ0FBRCxJQUFPO0VBQ3ZDeEIsWUFBWSxDQUFDM0csV0FBYixHQUEyQixPQUEzQjtFQUNBK0osZUFBZSxDQUFDNUUsWUFBRCxDQUFmO0VBQ0FvRCxZQUFZO0FBQ2IsQ0FKRDtBQU1BbEMsZ0JBQWdCLENBQUM2QixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBNENDLENBQUQsSUFBTyxDQUNoRDtBQUNELENBRkQ7O0FBSUEsQ0FBQyxTQUFTOEMsY0FBVCxHQUEwQjtFQUN6QixNQUFNbkssT0FBTyxHQUFHeEMsUUFBUSxDQUFDc0MsY0FBVCxDQUF3QixTQUF4QixDQUFoQjtFQUNBLE1BQU1zSyxhQUFhLEdBQUc1TSxRQUFRLENBQUNzQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUNBLE1BQU11SyxhQUFhLEdBQUc3TSxRQUFRLENBQUNzQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtFQUVBRSxPQUFPLENBQUM5QixZQUFSLENBQXFCLEtBQXJCLEVBQTRCd0ksY0FBYyxFQUExQztFQUNBMEQsYUFBYSxDQUFDbE0sWUFBZCxDQUEyQixLQUEzQixFQUFrQ3dJLGNBQWMsRUFBaEQ7RUFDQTJELGFBQWEsQ0FBQ25NLFlBQWQsQ0FBMkIsS0FBM0IsRUFBa0N3SSxjQUFjLEVBQWhEO0FBQ0QsQ0FSRCxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9mb3JtQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNhcmRUb2RvKGluZGV4LCBvYmpUb2RvKSB7XHJcbiAgY29uc3QgZGl2VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgZGl2VGFza0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGljb25VcGRhdGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcblxyXG4gIGRpdlRhc2suaW5uZXJIVE1MID0gYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInRhc2stZmluaXNoZWRcIiAvPmA7XHJcbiAgZGl2VGFza0luZm8uaW5uZXJIVE1MID0gYDxoMiBjbGFzcz1cInRhc2stbmFtZVwiIGlkPVwidGFzay1uYW1lLWNhcmRcIj4ke29ialRvZG8uZ2V0VGl0bGUoKX08L2gyPlxyXG4gIDxwIGNsYXNzPVwidGFzay1kZXNjcmlwdGlvbi1jYXJkXCIgaWQ9XCJ0YXNrLWRlc2NyaXB0aW9uLWNhcmRcIj4ke29ialRvZG8uZ2V0RGVzY3JpcHRpb24oKX08L3A+XHJcbiAgPHA+JHtvYmpUb2RvLmdldER1ZURhdGUoKX08L3A+YDtcclxuXHJcbiAgaWNvblVwZGF0ZVRhc2suY2xhc3NMaXN0LmFkZChcImZhLXJlZ3VsYXJcIiwgXCJmYS1wZW4tdG8tc3F1YXJlXCIpO1xyXG5cclxuICBkaXZUYXNrLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xyXG4gIGRpdlRhc2suc2V0QXR0cmlidXRlKFwiaW5kZXgtdG9kb1wiLCBpbmRleCk7XHJcbiAgZGl2VGFzay5zdHlsZS5jc3NUZXh0ID0gYGJvcmRlcjogMnB4IHNvbGlkICR7b2JqVG9kby5nZXRQcmlvcml0eSgpfWA7XHJcblxyXG4gIGRpdlRhc2suYXBwZW5kQ2hpbGQoZGl2VGFza0luZm8pO1xyXG4gIGRpdlRhc2suYXBwZW5kQ2hpbGQoaWNvblVwZGF0ZVRhc2spO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKS5hcHBlbmRDaGlsZChkaXZUYXNrKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3ROYW1lKSB7XHJcbiAgY29uc3QgY29udGFpbmVyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1wcm9qZWN0c1wiKTtcclxuICBjb25zdCBkaXZQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpY29uRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgY29uc3Qgc3Bhbk51bWJlclRvZG9zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcblxyXG4gIGRpdkluZm8uaW5uZXJIVE1MID0gYDxpIGNsYXNzPVwiZmEtcmVndWxhciBmYS1maWxlXCI+PC9pPlxyXG4gIDxwIGlkPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0TmFtZX08L3A+YDtcclxuXHJcbiAgc3Bhbk51bWJlclRvZG9zLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibnVtYmVyLW9mLXRhc2tzXCIpO1xyXG5cclxuICBpY29uRGVsZXRlLmNsYXNzTGlzdC5hZGQoXCJmYS1yZWd1bGFyXCIsIFwiZmEtdHJhc2gtY2FuXCIpO1xyXG4gIGljb25EZWxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGUtcHJvamVjdFwiKTtcclxuXHJcbiAgZGl2UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiLCBcInNlY3Rpb25cIik7XHJcbiAgLy9kaXZQcm9qZWN0LnNldEF0dHJpYnV0ZShcImluZGV4LXRvZG9cIiwgaW5kZXgpO1xyXG5cclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGRpdkluZm8pO1xyXG4gIGRpdlByb2plY3QuYXBwZW5kQ2hpbGQoc3Bhbk51bWJlclRvZG9zKTtcclxuICBkaXZQcm9qZWN0LmFwcGVuZENoaWxkKGljb25EZWxldGUpO1xyXG5cclxuICByZXR1cm4gZGl2UHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2VsZWN0T3B0aW9ucyhhcnJheVByb2plY3RzLCBzZWxlY3QpIHtcclxuICBzZWxlY3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBjb25zdCBvcHRpb25IaWRkZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIG9wdGlvbkhpZGRlbi52YWx1ZSA9IFwiXCI7XHJcbiAgb3B0aW9uSGlkZGVuLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcImhpZGRlblwiKTtcclxuICBvcHRpb25IaWRkZW4udGV4dENvbnRlbnQgPSBcIkNob29zZSBhIHByb2plY3RcIjtcclxuXHJcbiAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbkhpZGRlbik7XHJcblxyXG4gIGlmIChhcnJheVByb2plY3RzLmxlbmd0aCA+IDApIHtcclxuICAgIGFycmF5UHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBpZiAocHJvamVjdC5nZXROYW1lKCkgIT09IFwiVG9kYXlcIikge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdC5uYW1lO1xyXG4gICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcclxuICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDYXJkVG9kbywgY3JlYXRlQ2FyZFByb2plY3RzLCBjcmVhdGVTZWxlY3RPcHRpb25zIH07XHJcbiIsImltcG9ydCBUb2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21Gb3JtKCkge1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLW5hbWVcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb25cIikudmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdFwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHlcIik7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1VcGRhdGVJbnB1dHMoKSB7XHJcbiAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay1uYW1lLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLWRlc2NyaXB0aW9uLXVwZGF0ZVwiKTtcclxuICBjb25zdCBpbnB1dER1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0Q2hvb3NlUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0LXByb2plY3QtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGlucHV0UHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stcHJpb3JpdHktdXBkYXRlXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRUaXRsZSxcclxuICAgIGlucHV0RGVzY3JpcHRpb24sXHJcbiAgICBpbnB1dER1ZURhdGUsXHJcbiAgICBpbnB1dENob29zZVByb2plY3QsXHJcbiAgICBpbnB1dFByaW9yaXR5LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dJbmZvRm9ybVVwZGF0ZShkYXRhT2JqZWN0KSB7XHJcbiAgY29uc3QgaW5wdXRzRm9ybVVwZGF0ZSA9IGdldEZvcm1VcGRhdGVJbnB1dHMoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0VGl0bGUudmFsdWUgPSBkYXRhT2JqZWN0LmdldFRpdGxlKCk7XHJcbiAgaW5wdXRzRm9ybVVwZGF0ZS5pbnB1dERlc2NyaXB0aW9uLnZhbHVlID0gZGF0YU9iamVjdC5nZXREZXNjcmlwdGlvbigpO1xyXG4gIGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREdWVEYXRlLnZhbHVlID0gZGF0YU9iamVjdFxyXG4gICAgLmdldER1ZURhdGUoKVxyXG4gICAgLnJlcGxhY2UoLyhcXC8pL2csIFwiLVwiKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0Q2hvb3NlUHJvamVjdC52YWx1ZSA9IGRhdGFPYmplY3QuZ2V0UHJvamVjdE5hbWUoKTtcclxuICBpbnB1dHNGb3JtVXBkYXRlLmlucHV0UHJpb3JpdHkudmFsdWUgPSBkYXRhT2JqZWN0LmdldFByaW9yaXR5KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zvcm1VcGRhdGUoKSB7XHJcbiAgY29uc3QgaW5wdXRzRm9ybVVwZGF0ZSA9IGdldEZvcm1VcGRhdGVJbnB1dHMoKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0VGl0bGUudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0RGVzY3JpcHRpb24udmFsdWU7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGlucHV0c0Zvcm1VcGRhdGUuaW5wdXREdWVEYXRlLnZhbHVlLnJlcGxhY2UoLy0vZywgXCIvXCIpO1xyXG4gIGNvbnN0IGNob29zZVByb2plY3QgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0Q2hvb3NlUHJvamVjdDtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBpbnB1dHNGb3JtVXBkYXRlLmlucHV0UHJpb3JpdHk7XHJcblxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gY2hvb3NlUHJvamVjdC5vcHRpb25zW2Nob29zZVByb2plY3Quc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkub3B0aW9uc1t0YXNrUHJpb3JpdHkuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcblxyXG4gIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3ROYW1lLCBwcmlvcml0eSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlc0Zyb21OYXZiYXIoKSB7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stbmFtZS1uYXZiYXJcIikudmFsdWU7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZGVzY3JpcHRpb24tbmF2YmFyXCIpLnZhbHVlO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudFxyXG4gICAgLmdldEVsZW1lbnRCeUlkKFwiZHVlZGF0ZS1uYXZiYXJcIilcclxuICAgIC52YWx1ZS5yZXBsYWNlKC8tL2csIFwiL1wiKTtcclxuICBjb25zdCBjaG9vc2VQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC1uYXZiYXJcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXByaW9yaXR5LW5hdmJhclwiKTtcclxuXHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBjaG9vc2VQcm9qZWN0Lm9wdGlvbnNbY2hvb3NlUHJvamVjdC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICBjb25zdCBwcmlvcml0eSA9IHRhc2tQcmlvcml0eS5vcHRpb25zW3Rhc2tQcmlvcml0eS5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuXHJcbiAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdE5hbWUsIHByaW9yaXR5KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBnZXRWYWx1ZXNGcm9tRm9ybSxcclxuICBnZXRWYWx1ZXNGb3JtVXBkYXRlLFxyXG4gIGdldFZhbHVlc0Zyb21OYXZiYXIsXHJcbiAgc2hvd0luZm9Gb3JtVXBkYXRlLFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lID0gXCJcIikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMudG9kb3MgPSBbXTtcclxuICB9XHJcblxyXG4gIGdldE5hbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICB9XHJcblxyXG4gIGdldFRvZG8odGl0bGUpIHtcclxuICAgIGNvbnN0IHRvZG8gPSB0aGlzLnRvZG9zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSA9PT0gdGl0bGUpO1xyXG4gICAgcmV0dXJuIHRvZG8gPyB0b2RvIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleFRvZG8odG9kbykge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb3MuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmdldFRpdGxlKCkgPT09IHRvZG8uZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRvZG8pIHtcclxuICAgIGlmICghdGhpcy5nZXRUb2RvKHRvZG8uZ2V0VGl0bGUoKSkpIHtcclxuICAgICAgaWYgKHRoaXMuZ2V0TmFtZSgpID09PSB0b2RvLmdldFByb2plY3ROYW1lKCkpIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvZG8odG9kb1RpdGxlKSB7XHJcbiAgICB0aGlzLnRvZG9zID0gdGhpcy50b2Rvcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZ2V0VGl0bGUoKSAhPT0gdG9kb1RpdGxlKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG8oaW5kZXgsIHRvZG8pIHtcclxuICAgIGlmICh0b2RvLmdldFByb2plY3ROYW1lKCkgPT09IHRoaXMubmFtZSAmJiB0aGlzLmdldFRvZG8odG9kby5nZXRUaXRsZSgpKSkge1xyXG4gICAgICB0aGlzLnRvZG9zW2luZGV4XSA9IHRvZG87XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW1vdmVUb2RvKHRvZG8uZ2V0VGl0bGUoKSk7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9EYXRlLCBpc1RvZGF5IH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvamVjdChuYW1lKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5wcm9qZWN0cy5maW5kKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xyXG4gICAgcmV0dXJuIHByb2plY3QgPyBwcm9qZWN0IDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICBhZGRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgIGlmICghdGhpcy5nZXRQcm9qZWN0KHByb2plY3QuZ2V0TmFtZSgpKSkge1xyXG4gICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW1vdmVQcm9qZWN0KG5hbWUpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5uYW1lICE9PSBuYW1lKTtcclxuICB9XHJcblxyXG4gIGFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gdGhpcy5nZXRQcm9qZWN0KHRvZG8uZ2V0UHJvamVjdE5hbWUoKSk7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgcHJvamVjdEFkZGVkID0gcHJvamVjdCA/IHByb2plY3QuYWRkVG9kbyh0b2RvKSA6IGZhbHNlO1xyXG5cclxuICAgIGlmIChwcm9qZWN0QWRkZWQpIHtcclxuICAgICAgdG9kby5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgIHByb2plY3RTZWFyY2g6IHRvZG8uZ2V0UHJvamVjdE5hbWUoKSxcclxuICAgICAgICB0b2RvVGl0bGU6IHRvZG8uZ2V0VGl0bGUoKSxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZG8uc2V0UHJvamVjdE5hbWUoXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzVG9kYXkobmV3IERhdGUodG9kby5nZXREdWVEYXRlKCkpKSkge1xyXG4gICAgICB0b2RheS50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmluZFRvZG9Ub2RheShwcm9qZWN0LCB0b2RvVGl0bGUpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBsZXQgaW5kZXhUb2RvID0gLTE7XHJcblxyXG4gICAgdG9kYXkudG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgaXRlbS5zZWFyY2hUb2RvLnByb2plY3RTZWFyY2ggPT09IHByb2plY3QuZ2V0TmFtZSgpICYmXHJcbiAgICAgICAgaXRlbS5zZWFyY2hUb2RvLnRvZG9UaXRsZSA9PT0gdG9kb1RpdGxlXHJcbiAgICAgICkge1xyXG4gICAgICAgIGluZGV4VG9kbyA9IGk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGluZGV4VG9kbyA+PSAwID8gaW5kZXhUb2RvIDogLTE7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUb2RvVG9kYXkoaW5kZXgsIHRvZG9PYmosIHByb2plY3QpIHtcclxuICAgIGxldCB1cGRhdGVkVG9kbyA9IG51bGw7XHJcbiAgICBjb25zdCB0b2RheSA9IHRoaXMuZ2V0UHJvamVjdChcIlRvZGF5XCIpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gcHJvamVjdC5nZXRUb2RvcygpW2luZGV4XS5nZXRUaXRsZSgpO1xyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG9PYmouZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHtcclxuICAgICAgICBwcm9qZWN0U2VhcmNoOiBwcm9qZWN0LmdldE5hbWUoKSxcclxuICAgICAgICB0b2RvVGl0bGU6IHRvZG9PYmouZ2V0VGl0bGUoKSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRvZG9JbmRleCA+PSAwKSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3NbdG9kb0luZGV4XSA9IHRvZG9PYmo7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdG9kYXkudG9kb3MucHVzaCh0b2RvT2JqKTtcclxuICAgICAgfVxyXG4gICAgICB1cGRhdGVkVG9kbyA9IHByb2plY3QudXBkYXRlVG9kbyhpbmRleCwgdG9kb09iaik7XHJcbiAgICAgIGlmICh1cGRhdGVkVG9kbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4LCB0b2RvT2JqKTtcclxuICAgICAgY29uc3QgdG9kb0luZGV4ID0gdGhpcy5maW5kVG9kb1RvZGF5KHByb2plY3QsIHRvZG9UaXRsZSk7XHJcbiAgICAgIGlmICh0b2RvSW5kZXggPj0gMCkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodXBkYXRlZFRvZG8gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgsIHRvZG9PYmopIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvVmFsdWVzID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcblxyXG4gICAgaWYgKHRvZG9WYWx1ZXMuaGFzT3duUHJvcGVydHkoXCJzZWFyY2hUb2RvXCIpKSB7XHJcbiAgICAgIHRvZG9PYmouc2VhcmNoVG9kbyA9IHRvZG9WYWx1ZXMuc2VhcmNoVG9kbztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eShcInNlYXJjaFRvZG9cIikpIHtcclxuICAgICAgY29uc3QgeyBwcm9qZWN0U2VhcmNoLCB0b2RvVGl0bGUgfSA9IHRvZG9PYmouc2VhcmNoVG9kbztcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0U2VhcmNoKTtcclxuICAgICAgY29uc3QgaW5kZXhTZWFyY2ggPSBwcm9qZWN0LmdldEluZGV4VG9kbyhwcm9qZWN0LmdldFRvZG8odG9kb1RpdGxlKSk7XHJcbiAgICAgIGNvbnN0IHVwZGF0ZWRUb2RvID0gcHJvamVjdC51cGRhdGVUb2RvKGluZGV4U2VhcmNoLCB0b2RvT2JqKTtcclxuICAgICAgaWYgKHVwZGF0ZWRUb2RvID09PSBmYWxzZSkge1xyXG4gICAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICAgICAgICB0aGlzLmFkZFRvZG9Gcm9tUHJvamVjdCh0b2RvT2JqKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLmdldFByb2plY3QodG9kb09iai5nZXRQcm9qZWN0TmFtZSgpKTtcclxuICAgICAgY29uc3QgdG9kb0FkZGVkID0gcHJvamVjdCA/IHByb2plY3QuYWRkVG9kbyh0b2RvT2JqKSA6IGZhbHNlO1xyXG4gICAgICBpZiAodG9kb0FkZGVkKSB7XHJcbiAgICAgICAgdG9kb09iai5zZWFyY2hUb2RvID0ge1xyXG4gICAgICAgICAgcHJvamVjdFNlYXJjaDogdG9kb09iai5nZXRQcm9qZWN0TmFtZSgpLFxyXG4gICAgICAgICAgdG9kb1RpdGxlOiB0b2RvT2JqLmdldFRpdGxlKCksXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1RvZGF5KG5ldyBEYXRlKHRvZG9PYmouZ2V0RHVlRGF0ZSgpKSkpIHtcclxuICAgICAgdG9kYXkudG9kb3NbaW5kZXhdID0gdG9kb09iajtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRvZGF5LnJlbW92ZVRvZG8odG9kb1ZhbHVlcy5nZXRUaXRsZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvZG9Gcm9tVG9kYXkoaW5kZXgpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvT2JqID0gdG9kYXkuZ2V0VG9kb3MoKVtpbmRleF07XHJcbiAgICBpZiAodG9kb09iai5oYXNPd25Qcm9wZXJ0eShcInNlYXJjaFRvZG9cIikpIHtcclxuICAgICAgY29uc3QgeyBwcm9qZWN0U2VhcmNoLCB0b2RvVGl0bGUgfSA9IHRvZG9PYmouc2VhcmNoVG9kbztcclxuICAgICAgY29uc3QgcHJvamVjdCA9IHRoaXMuZ2V0UHJvamVjdChwcm9qZWN0U2VhcmNoKTtcclxuICAgICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9PYmouZ2V0VGl0bGUoKSk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVUb2RvVG9kYXkoaW5kZXgsIHByb2plY3QpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5nZXRQcm9qZWN0KFwiVG9kYXlcIik7XHJcbiAgICBjb25zdCB0b2RvVGl0bGUgPSBwcm9qZWN0LmdldFRvZG9zKClbaW5kZXhdLmdldFRpdGxlKCk7XHJcbiAgICBjb25zdCBpbmRleFRvZG8gPSB0aGlzLmZpbmRUb2RvVG9kYXkocHJvamVjdCwgdG9kb1RpdGxlKTtcclxuICAgIGlmIChpbmRleFRvZG8gPj0gMCkge1xyXG4gICAgICB0b2RheS5yZW1vdmVUb2RvKHRvZG9UaXRsZSk7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0LnJlbW92ZVRvZG8odG9kb1RpdGxlKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICB0aXRsZSA9IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXHJcbiAgICBkdWVEYXRlID0gXCJcIixcclxuICAgIHByb2plY3ROYW1lID0gXCJcIixcclxuICAgIHByaW9yaXR5ID0gMVxyXG4gICkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcclxuICB9XHJcblxyXG4gIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgfVxyXG5cclxuICBnZXREdWVEYXRlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldER1ZURhdGUoZHVlRGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFByb2plY3ROYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvamVjdE5hbWU7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcclxuICB9XHJcblxyXG4gIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHtcXHJcXG4gIHdpZHRoOiAxMjgwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIHVsIGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGkge1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxudWwgYSBpOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1zZWFyY2hdIHtcXHJcXG4gIG9wYWNpdHk6IDAuNDtcXHJcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGViYXIge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIHdpZHRoOiAzMDRweDtcXHJcXG4gIGZsZXgtc2hyaW5rOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDQ1cHg7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24gZGl2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uLWFjdGl2ZSxcXHJcXG4uc2VjdGlvbjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kYXkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHM+ZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgaDIge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5pIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIC5mYS1wbHVzOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLXByb2plY3RzIC5wcm9qZWN0IHtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IC5mYS10cmFzaC1jYW4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2hvdy1wcm9qZWN0cyB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuXFxyXFxuTWFpbiBjb250ZW50IFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAzMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogNzUlO1xcclxcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2sge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYWRkLXRhc2s6aG92ZXIge1xcclxcbiAgY29sb3I6ICM4NGNjMTY7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpbnB1dFt0eXBlPWNoZWNrYm94XSB7XFxyXFxuICB3aWR0aDogMThweDtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBkaXYge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1hcmdpbjogMCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1kZXNjcmlwdGlvbi1jYXJkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayBpIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tdGFzay1jYXJkLFxcclxcbi5mb3JtLXVwZGF0ZS10YXNrIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gLnRhc2stY2FyZCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNhM2EzO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogNXB4IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RvcnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1kYXRlXSB7XFxyXFxuICBwYWRkaW5nOiAxcHg7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIHBhZGRpbmc6IDNweDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdDpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbjogMTBweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jYXJkIGJ1dHRvbiB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLFxcclxcbmJ1dHRvbi5idG4tY2FuY2VsLXByb2plY3QsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtdXBkYXRlIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2ZlZTc7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uYnRuLWFkZCxcXHJcXG5idXR0b24uYnRuLXNhdmUge1xcclxcbiAgYmFja2dyb3VuZDogI2EzZTYzNTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzZTYzNTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5BZGQgdGFzayBmcm9tIG5hdmJhciBcXHJcXG5cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItZml4ZWQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDU1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZml4ZWQgZm9ybSB7XFxyXFxuICB3aWR0aDogNjAwcHg7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5BZGQgcHJvamVjdCBmb3JtXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NSU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGZvcm0ge1xcclxcbiAgd2lkdGg6IDQwMHB4O1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBnYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1hZGQtcHJvamVjdCBpbnB1dFt0eXBlPXRleHRdIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zaG93LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7OztDQUlDOztBQUVEO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7RUFDVCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixrQ0FBa0M7RUFDbEMsV0FBVztBQUNiOztBQUVBOzs7RUFHRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7Ozs7Q0FJQzs7QUFFRDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0NBRUM7O0FBRUQ7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMENBQTBDO0VBQzFDLGtDQUFrQztFQUNsQyxpQkFBaUI7RUFDakIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNhM2U2MzU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIge1xcclxcbiAgd2lkdGg6IDEyODBweDtcXHJcXG4gIGhlaWdodDogNDVweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB1bCB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgdWwgYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIGEgaSB7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG51bCBhIGk6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXNlYXJjaF0ge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbiAgcGFkZGluZzogN3B4IDEwcHg7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjdmZWU3O1xcclxcbiAgd2lkdGg6IDMwNHB4O1xcclxcbiAgZmxleC1zaHJpbms6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNXB4IDVweCA1cHggNDVweDtcXHJcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIHNwYW4ge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBjb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24tYWN0aXZlLFxcclxcbi5zZWN0aW9uOmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RheSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cz5kaXYge1xcclxcbiAgaGVpZ2h0OiBpbmhlcml0O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyBoMiB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzPmkge1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHMgLmZhLXBsdXM6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1wcm9qZWN0cyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItcHJvamVjdHMgLnByb2plY3Qge1xcclxcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QgLmZhLXRyYXNoLWNhbiB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaG93LXByb2plY3RzIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG5cXHJcXG5NYWluIGNvbnRlbnQgXFxyXFxuXFxyXFxuKi9cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDMwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiA3NSU7XFxyXFxuICBtYXJnaW46IDEwcHggYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzayB7XFxyXFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5hZGQtdGFzazpob3ZlciB7XFxyXFxuICBjb2xvcjogIzg0Y2MxNjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2EzYTNhMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXHJcXG4gIHdpZHRoOiAxOHB4O1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgYWNjZW50LWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbi50YXNrIGRpdiB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLWNhcmQge1xcclxcbiAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrIGkge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjdyZW07XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2sgaTpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS10YXNrLWNhcmQsXFxyXFxuLmZvcm0tdXBkYXRlLXRhc2sge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSAudGFzay1jYXJkIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhM2EzYTM7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQgaW5wdXRbdHlwZT10ZXh0XSB7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdG9ycyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPWRhdGVdIHtcXHJcXG4gIHBhZGRpbmc6IDFweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9ZGF0ZV06aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2VlZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgcGFkZGluZzogM3B4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0OmhvdmVyIHtcXHJcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5idXR0b25zLWNhcmQgYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwsXFxyXFxuYnV0dG9uLmJ0bi1jYW5jZWwtcHJvamVjdCxcXHJcXG5idXR0b24uYnRuLWNhbmNlbC11cGRhdGUge1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZmVlNztcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5idG4tYWRkLFxcclxcbmJ1dHRvbi5idG4tc2F2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjYTNlNjM1O1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTNlNjM1O1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcblxcclxcbkFkZCB0YXNrIGZyb20gbmF2YmFyIFxcclxcblxcclxcbiovXFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTUlO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lci1maXhlZCBmb3JtIHtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWZpeGVkIC50YXNrLWNhcmQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKlxcclxcbkFkZCBwcm9qZWN0IGZvcm1cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY1JTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItYWRkLXByb2plY3QgZm9ybSB7XFxyXFxuICB3aWR0aDogNDAwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMjBweCA1MHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyLWFkZC1wcm9qZWN0IGlucHV0W3R5cGU9dGV4dF0ge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxLjhyZW07XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAwNjowMDowMCBhbmQgNCBTZXB0ZW1iZXIgMTg6MDA6MDAgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKiBcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgYW5kIDQgT2N0b2JlciBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE0LCA5LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNSwgOCwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBpc1NhbWVEYXkgZnJvbSBcIi4uL2lzU2FtZURheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNUb2RheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUb2RheShuZXcgRGF0ZSgyMDE0LCA5LCA2LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xyXG5pbXBvcnQge1xyXG4gIGNyZWF0ZUNhcmRUb2RvLFxyXG4gIGNyZWF0ZUNhcmRQcm9qZWN0cyxcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zLFxyXG59IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgZ2V0VmFsdWVzRnJvbUZvcm0sXHJcbiAgZ2V0VmFsdWVzRm9ybVVwZGF0ZSxcclxuICBnZXRWYWx1ZXNGcm9tTmF2YmFyLFxyXG4gIHNob3dJbmZvRm9ybVVwZGF0ZSxcclxufSBmcm9tIFwiLi9mb3JtQ29udGVudFwiO1xyXG5cclxuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuXHJcbmNvbnN0IGluYm94U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XHJcbmNvbnN0IHRvZGF5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXlcIik7XHJcblxyXG5jb25zdCBmb3JtVXBkYXRlVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybS11cGRhdGUtdGFza1wiKTtcclxuY29uc3QgZm9ybUFkZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYWRkLXByb2plY3RcIik7XHJcbmNvbnN0IGZvcm1BZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JtLXRhc2stY2FyZFwiKTtcclxuY29uc3QgZm9ybUFkZFRvZG9OYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tYWRkLXRvZG8tbmF2YmFyXCIpO1xyXG5cclxuY29uc3QgY29udGFpbmVyVG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stbGlzdFwiKTtcclxuY29uc3QgY29udGFpbmVyUHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lci1wcm9qZWN0c1wiKTtcclxuY29uc3QgY29udGFpbmVyQWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyLWFkZC1wcm9qZWN0XCIpO1xyXG5jb25zdCBjb250YWluZXJBZGRUb2RvTmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXItZml4ZWRcIik7XHJcblxyXG5jb25zdCBzZWN0aW9uVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2VjdGlvblwiKTtcclxuY29uc3Qgc2hvd1Byb2plY3RzQmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93LXByb2plY3RzXCIpO1xyXG5cclxuY29uc3QgYnRuQWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbmNvbnN0IGJ0bkZvcm1DYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWxcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtcHJvamVjdFwiKTtcclxuY29uc3QgYnRuQ2FuY2VsVXBkYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnRuLWNhbmNlbC11cGRhdGVcIik7XHJcbmNvbnN0IGJ0bkNhbmNlbEZvcm1OYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jYW5jZWwtbmF2YmFyXCIpO1xyXG5jb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcclxuY29uc3QgYnRuQWRkVG9kb05hdmJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLXRvZG8tbmF2YmFyXCIpO1xyXG5jb25zdCBidG5Ub2dnbGVTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtc2lkZWJhclwiKTtcclxuY29uc3QgYnRuSG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWhvbWVcIik7XHJcblxyXG5jb25zdCBpbnB1dFByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIik7XHJcbmNvbnN0IHNlbGVjdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0XCIpO1xyXG5jb25zdCBzZWxlY3RVcGRhdGVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3QtcHJvamVjdC11cGRhdGVcIik7XHJcbmNvbnN0IHNlbGVjdFByb2plY3ROYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdC1wcm9qZWN0LW5hdmJhclwiKTtcclxuXHJcbmxldCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stY29udGFpbmVyXCIpLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuY29uc3QgaW5ib3ggPSBuZXcgUHJvamVjdChcIkluYm94XCIpO1xyXG5jb25zdCB0b2RheSA9IG5ldyBQcm9qZWN0KFwiVG9kYXlcIik7XHJcbmNvbnN0IHByb2plY3RzID0gbmV3IFByb2plY3RzKCk7XHJcblxyXG5wcm9qZWN0cy5hZGRQcm9qZWN0KGluYm94KTtcclxucHJvamVjdHMuYWRkUHJvamVjdCh0b2RheSk7XHJcblxyXG5sZXQgaW5kZXhDYXJkVG9kbyA9IDA7XHJcbmxldCBhcnJheVRvZG9zRE9NID0gW107XHJcbmxldCBhcnJheVByb2plY3RzRE9NID0gW107XHJcblxyXG5jcmVhdGVTZWxlY3RPcHRpb25zKHByb2plY3RzLnByb2plY3RzLCBzZWxlY3RQcm9qZWN0KTtcclxuY29uc3QgZ2V0U2VjdGlvbk9iamVjdCA9IChwcm9qZWN0TmFtZSkgPT4gcHJvamVjdHMuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcblxyXG5mdW5jdGlvbiBjbG9zZUZvcm1BZGRUYXNrKCkge1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbiAgZm9ybUFkZFRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybUFkZFRhc2soKSB7XHJcbiAgY29uc3QgZm9ybUFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdGFzay1jYXJkXCIpO1xyXG4gIGZvcm1BZGRUb2RvLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlRm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Rm9ybVVwZGF0ZVRhc2soKSB7XHJcbiAgY29uc3QgZm9ybVVwZGF0ZVRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tdXBkYXRlLXRhc2tcIik7XHJcbiAgZm9ybVVwZGF0ZVRvZG8uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q3VycmVudERhdGUoKSB7XHJcbiAgY29uc3QgZGF0ZU9iamVjdCA9IG5ldyBEYXRlKCk7XHJcbiAgbGV0IHllYXIgPSBkYXRlT2JqZWN0LmdldEZ1bGxZZWFyKCk7XHJcbiAgbGV0IG1vbnRoID0gZGF0ZU9iamVjdC5nZXRNb250aCgpICsgMTtcclxuICBsZXQgZGF0ZSA9IGRhdGVPYmplY3QuZ2V0RGF0ZSgpO1xyXG5cclxuICBpZiAobW9udGggPCAxMCkge1xyXG4gICAgbW9udGggPSBcIjBcIiArIG1vbnRoO1xyXG4gIH1cclxuICBpZiAoZGF0ZSA8IDEwKSB7XHJcbiAgICBkYXRlID0gXCIwXCIgKyBkYXRlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF0ZX1gO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb2RvRE9NKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKS5mb3JFYWNoKCh0YXNrLCBpKSA9PiB7XHJcbiAgICB0YXNrLmZpcnN0RWxlbWVudENoaWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGlmIChwcm9qZWN0ICE9PSB0b2RheSkge1xyXG4gICAgICAgICAgcHJvamVjdHMuZGVsZXRlVG9kb1RvZGF5KGksIHByb2plY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwcm9qZWN0cy5kZWxldGVUb2RvRnJvbVRvZGF5KGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXJUb2RvTGlzdC5yZW1vdmVDaGlsZCh0YXNrKTtcclxuICAgICAgICBzaG93VG9kb0xpc3QoKTtcclxuICAgICAgICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VG9kb0xpc3QoKSB7XHJcbiAgY29udGFpbmVyVG9kb0xpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGNvbnN0IG9iamVjdCA9IGdldFNlY3Rpb25PYmplY3Qoc2VjdGlvblRpdGxlLnRleHRDb250ZW50KTtcclxuICBpZiAob2JqZWN0KSB7XHJcbiAgICBvYmplY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaSkgPT4gY3JlYXRlQ2FyZFRvZG8oaSwgdG9kbykpO1xyXG4gICAgdXBkYXRlVG9kb0NhcmRET00oKTtcclxuICAgIGRlbGV0ZVRvZG9ET00oKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRvZG9Gcm9tRm9ybSh0b2RvT2JqKSB7XHJcbiAgaWYgKHRvZG9PYmouZ2V0VGl0bGUoKS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGlmICh0b2RvT2JqLmdldFByb2plY3ROYW1lKCkudHJpbSgpID09PSBcIlwiKSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICAgIGlmIChwcm9qZWN0ICE9PSB0b2RheSkge1xyXG4gICAgICAgIHRvZG9PYmouc2V0UHJvamVjdE5hbWUocHJvamVjdC5nZXROYW1lKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0cy5hZGRUb2RvRnJvbVByb2plY3QodG9kb09iaik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtT3BlcmF0aW9ucygpIHtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHByb2plY3RzLnByb2plY3RzLCBzZWxlY3RQcm9qZWN0KTtcclxuICBjbG9zZUZvcm1VcGRhdGVUYXNrKCk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0Zvcm1BZGRUYXNrKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkKGluZGV4Q2FyZCwgdG9kb0RhdGEpIHtcclxuICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhc2tcIilbaW5kZXhDYXJkXTtcclxuICBpZiAoZGl2Q29udGFpbmVyKSB7XHJcbiAgICBkaXZDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IGBib3JkZXI6IDJweCBzb2xpZCAke3RvZG9EYXRhLnByaW9yaXR5fWA7XHJcblxyXG4gICAgY29uc3QgdGl0bGVUYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmZpcnN0RWxlbWVudENoaWxkO1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25UYXNrID0gZGl2Q29udGFpbmVyLmNoaWxkcmVuWzFdLmxhc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG4gICAgdGl0bGVUYXNrLnRleHRDb250ZW50ID0gdG9kb0RhdGEudGl0bGU7XHJcbiAgICBkZXNjcmlwdGlvblRhc2sudGV4dENvbnRlbnQgPSB0b2RvRGF0YS5kZXNjcmlwdGlvbjtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtVXBkYXRlQ2FyZChhcnJheVRhc2ssIGluZGV4Q2FyZCkge1xyXG4gIGlmIChhcnJheVRhc2subGVuZ3RoID09PSAxKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIGlmIChhcnJheVRhc2subGVuZ3RoIC0gMSA9PT0gaW5kZXhDYXJkKSB7XHJcbiAgICBjb250YWluZXJUb2RvTGlzdC5hcHBlbmRDaGlsZChmb3JtVXBkYXRlVG9kbyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRhaW5lclRvZG9MaXN0Lmluc2VydEJlZm9yZShmb3JtVXBkYXRlVG9kbywgYXJyYXlUYXNrW2luZGV4Q2FyZCArIDFdKTtcclxuICB9XHJcbiAgZm9ybVVwZGF0ZVRvZG8uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgYnRuQ2FuY2VsVXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgZm9ybVVwZGF0ZVRvZG8uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9Gcm9tRm9ybSh2YWx1ZXNUb2RvKSB7XHJcbiAgaWYgKHZhbHVlc1RvZG8uZ2V0VGl0bGUoKS50cmltKCkgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRTZWN0aW9uT2JqZWN0KHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCk7XHJcbiAgICBpZiAocHJvamVjdCAhPT0gdG9kYXkpIHtcclxuICAgICAgcHJvamVjdHMudXBkYXRlVG9kb1RvZGF5KGluZGV4Q2FyZFRvZG8sIHZhbHVlc1RvZG8sIHByb2plY3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcHJvamVjdHMudXBkYXRlVG9kb0Zyb21Ub2RheShpbmRleENhcmRUb2RvLCB2YWx1ZXNUb2RvKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldERhdGFUb2RvQ2FyZChpbmRleENhcmQpIHtcclxuICBjb25zdCBwcm9qZWN0ID0gZ2V0U2VjdGlvbk9iamVjdChzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQpO1xyXG4gIHJldHVybiBwcm9qZWN0LnRvZG9zW2luZGV4Q2FyZF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9DYXJkRE9NKCkge1xyXG4gIGFycmF5VG9kb3NET00gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFza1wiKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YXNrXCIpLmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB7XHJcbiAgICB0YXNrLmxhc3RFbGVtZW50Q2hpbGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnRhaW5lclRvZG9MaXN0LnJlbW92ZUNoaWxkKGFycmF5VG9kb3NET01baW5kZXhdKTtcclxuICAgICAgaW5kZXhDYXJkVG9kbyA9IGluZGV4O1xyXG4gICAgICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgICAgIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMucHJvamVjdHMsIHNlbGVjdFVwZGF0ZVByb2plY3QpO1xyXG4gICAgICBzaG93Rm9ybVVwZGF0ZUNhcmQoYXJyYXlUb2Rvc0RPTSwgaW5kZXgpO1xyXG4gICAgICBzaG93SW5mb0Zvcm1VcGRhdGUoZ2V0RGF0YVRvZG9DYXJkKGluZGV4KSk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hvb3NlT2JqZWN0TGlzdChvYmplY3QpIHtcclxuICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBvYmplY3QuY2hpbGRyZW5bMF0ubGFzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudDtcclxuICBjbG9zZUZvcm1BZGRUYXNrKCk7XHJcbiAgY2xvc2VGb3JtVXBkYXRlVGFzaygpO1xyXG4gIHNob3dTZWN0aW9uVG9kbyhvYmplY3QpO1xyXG4gIGNvbnRhaW5lclRvZG9MaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBzaG93VG9kb0xpc3QoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0Zvcm1BZGRUb2RvTmF2YmFyKCkge1xyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMucHJvamVjdHMsIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG4gIGNvbnRhaW5lckFkZFRvZG9OYXZiYXIuY2xhc3NMaXN0LmFkZChcInNob3ctZm9ybVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VGb3JtQWRkVG9kb05hdmJhcigpIHtcclxuICBjb250YWluZXJBZGRUb2RvTmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTZWN0aW9uVG9kbyhzZWN0aW9uKSB7XHJcbiAgY29uc3Qgc2VjdGlvbkFycmF5ID0gQXJyYXkuZnJvbShzZWN0aW9uVG9kbyk7XHJcbiAgc2VjdGlvbkFycmF5LmNvbmNhdChhcnJheVByb2plY3RzRE9NKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxuICB9KTtcclxuICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJzZWN0aW9uLWFjdGl2ZVwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0N1cnJlbnRUb2RvcygpIHtcclxuICBjb25zdCBzcGFuTnVtYmVyVG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI251bWJlci1vZi10YXNrc1wiKTtcclxuICBzcGFuTnVtYmVyVG9kb3MuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb3NRdWFudGl0eSA9IHByb2plY3RzLmdldFByb2plY3RzKClbaV0udG9kb3MubGVuZ3RoO1xyXG4gICAgaXRlbS50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICBpZiAodG9kb3NRdWFudGl0eSA+IDApIHtcclxuICAgICAgaXRlbS50ZXh0Q29udGVudCA9IHRvZG9zUXVhbnRpdHk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcblBST0pFQ1RTXHJcbiovXHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgaWYgKHByb2plY3ROYW1lICE9PSBcIlwiKSB7XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgcHJvamVjdHMuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3RET00ocHJvamVjdE5hbWUpIHtcclxuICBpZiAocHJvamVjdE5hbWUgIT09IFwiXCIpIHtcclxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gY3JlYXRlQ2FyZFByb2plY3RzKHByb2plY3ROYW1lKTtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcclxuICAgIGFycmF5UHJvamVjdHNET00ucHVzaChwcm9qZWN0Q2FyZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KGluZGV4KSB7XHJcbiAgcHJvamVjdHMucmVtb3ZlUHJvamVjdChpbmRleCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RET00oaW5kZXgpIHtcclxuICBhcnJheVByb2plY3RzRE9NLnNwbGljZShpbmRleCwgMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dGb3JtQWRkUHJvamVjdCgpIHtcclxuICBmb3JtQWRkUHJvamVjdC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgY29udGFpbmVyQWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKFwic2hvdy1mb3JtXCIpO1xyXG5cclxuICBidG5DYW5jZWxQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgZm9ybUFkZFByb2plY3QucmVzZXQoKTtcclxuICAgIGZvcm1BZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNvbnRhaW5lckFkZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctZm9ybVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdE9wZXJhdGlvbnMoKSB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0XCIpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNob29zZU9iamVjdExpc3QocHJvamVjdCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNkZWxldGUtcHJvamVjdFwiKS5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZGVsZXRlUHJvamVjdChpbmRleCk7XHJcbiAgICAgIGRlbGV0ZVByb2plY3RET00oaW5kZXgpO1xyXG4gICAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgICB9KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Byb2plY3RzTGlzdCgpIHtcclxuICBjb250YWluZXJQcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgaWYgKGFycmF5UHJvamVjdHNET00ubGVuZ3RoID4gMCkge1xyXG4gICAgYXJyYXlQcm9qZWN0c0RPTS5mb3JFYWNoKChwcm9qZWN0Q2FyZCkgPT5cclxuICAgICAgY29udGFpbmVyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuc2hvd1Byb2plY3RzQmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT09IFwiZmEtY2hldnJvbi1yaWdodFwiKSB7XHJcbiAgICBzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LnJlbW92ZShcImZhLWNoZXZyb24tcmlnaHRcIik7XHJcbiAgICBzaG93UHJvamVjdHNCYXIuY2xhc3NMaXN0LmFkZChcImZhLWNoZXZyb24tZG93blwiKTtcclxuICAgIGNvbnRhaW5lclByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJzaG93LWNvbnRlbnRcIik7XHJcbiAgICBzaG93UHJvamVjdHNMaXN0KCk7XHJcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3RbMV0gPT09IFwiZmEtY2hldnJvbi1kb3duXCIpIHtcclxuICAgIHNob3dQcm9qZWN0c0Jhci5jbGFzc0xpc3QucmVtb3ZlKFwiZmEtY2hldnJvbi1kb3duXCIpO1xyXG4gICAgc2hvd1Byb2plY3RzQmFyLmNsYXNzTGlzdC5hZGQoXCJmYS1jaGV2cm9uLXJpZ2h0XCIpO1xyXG4gICAgY29udGFpbmVyUHJvamVjdHMuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctY29udGVudFwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZm9ybUFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbUZvcm0oKSk7XHJcbiAgc2hvd1RvZG9MaXN0KCk7XHJcbiAgc2hvd0N1cnJlbnRUb2RvcygpO1xyXG4gIGZvcm1BZGRUb2RvLnJlc2V0KCk7XHJcbn0pO1xyXG5cclxuZm9ybVVwZGF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICB1cGRhdGVUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRm9ybVVwZGF0ZSgpKTtcclxuICB1cGRhdGVUb2RvQ2FyZChpbmRleENhcmRUb2RvLCBnZXRWYWx1ZXNGb3JtVXBkYXRlKCkpO1xyXG4gIGZvcm1VcGRhdGVUb2RvLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBzaG93VG9kb0xpc3QoKTtcclxuICBzaG93Q3VycmVudFRvZG9zKCk7XHJcbn0pO1xyXG5cclxuZm9ybUFkZFRvZG9OYXZiYXIuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBhZGRUb2RvRnJvbUZvcm0oZ2V0VmFsdWVzRnJvbU5hdmJhcigpKTtcclxuICBmb3JtQWRkVG9kb05hdmJhci5yZXNldCgpO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG4gIHNob3dDdXJyZW50VG9kb3MoKTtcclxufSk7XHJcblxyXG5mb3JtQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gaW5wdXRQcm9qZWN0TmFtZS52YWx1ZS50cmltKCk7XHJcblxyXG4gIGFkZFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIGFkZFByb2plY3RET00ocHJvamVjdE5hbWUpO1xyXG4gIHByb2plY3RPcGVyYXRpb25zKCk7XHJcblxyXG4gIGNyZWF0ZVNlbGVjdE9wdGlvbnMocHJvamVjdHMuZ2V0UHJvamVjdHMoKSwgc2VsZWN0UHJvamVjdCk7XHJcbiAgY3JlYXRlU2VsZWN0T3B0aW9ucyhwcm9qZWN0cy5nZXRQcm9qZWN0cygpLCBzZWxlY3RVcGRhdGVQcm9qZWN0KTtcclxuICBjcmVhdGVTZWxlY3RPcHRpb25zKHByb2plY3RzLmdldFByb2plY3RzKCksIHNlbGVjdFByb2plY3ROYXZiYXIpO1xyXG5cclxuICBmb3JtQWRkUHJvamVjdC5yZXNldCgpO1xyXG4gIGZvcm1BZGRQcm9qZWN0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjb250YWluZXJBZGRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93LWZvcm1cIik7XHJcbn0pO1xyXG5cclxuaW5ib3hTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gY2hvb3NlT2JqZWN0TGlzdChlLnRhcmdldCkpO1xyXG50b2RheVNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBjaG9vc2VPYmplY3RMaXN0KGUudGFyZ2V0KSk7XHJcblxyXG5idG5BZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtT3BlcmF0aW9ucyk7XHJcbmJ0bkZvcm1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRm9ybUFkZFRhc2spO1xyXG5idG5BZGRUb2RvTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93Rm9ybUFkZFRvZG9OYXZiYXIpO1xyXG5idG5DYW5jZWxGb3JtTmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZUZvcm1BZGRUb2RvTmF2YmFyKTtcclxuYnRuQWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0Zvcm1BZGRQcm9qZWN0KTtcclxuXHJcbmJ0bkhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xyXG4gIHNob3dTZWN0aW9uVG9kbyh0b2RheVNlY3Rpb24pO1xyXG4gIHNob3dUb2RvTGlzdCgpO1xyXG59KTtcclxuXHJcbmJ0blRvZ2dsZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIikuY2xhc3NMaXN0LnRvZ2dsZShcImNvbnRlbnQtaGlkZGVuXCIpO1xyXG59KTtcclxuXHJcbihmdW5jdGlvbiBzZXRDdXJyZW50RGF0ZSgpIHtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGVVcGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGUtdXBkYXRlXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGVOYXZiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZWRhdGUtbmF2YmFyXCIpO1xyXG5cclxuICBkdWVEYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxuICBkdWVEYXRlVXBkYXRlLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxuICBkdWVEYXRlTmF2YmFyLnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRDdXJyZW50RGF0ZSgpKTtcclxufSkoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUNhcmRUb2RvIiwiaW5kZXgiLCJvYmpUb2RvIiwiZGl2VGFzayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImRpdlRhc2tJbmZvIiwiaWNvblVwZGF0ZVRhc2siLCJpbm5lckhUTUwiLCJnZXRUaXRsZSIsImdldERlc2NyaXB0aW9uIiwiZ2V0RHVlRGF0ZSIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiY3NzVGV4dCIsImdldFByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJxdWVyeVNlbGVjdG9yIiwiY3JlYXRlQ2FyZFByb2plY3RzIiwicHJvamVjdE5hbWUiLCJjb250YWluZXJQcm9qZWN0cyIsImRpdlByb2plY3QiLCJkaXZJbmZvIiwiaWNvbkRlbGV0ZSIsInNwYW5OdW1iZXJUb2RvcyIsImNyZWF0ZVNlbGVjdE9wdGlvbnMiLCJhcnJheVByb2plY3RzIiwic2VsZWN0IiwidGV4dENvbnRlbnQiLCJvcHRpb25IaWRkZW4iLCJ2YWx1ZSIsImxlbmd0aCIsImZvckVhY2giLCJwcm9qZWN0IiwiZ2V0TmFtZSIsIm9wdGlvbiIsIm5hbWUiLCJUb2RvIiwiZ2V0VmFsdWVzRnJvbUZvcm0iLCJ0aXRsZSIsImdldEVsZW1lbnRCeUlkIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicmVwbGFjZSIsImNob29zZVByb2plY3QiLCJ0YXNrUHJpb3JpdHkiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInByaW9yaXR5IiwiZ2V0Rm9ybVVwZGF0ZUlucHV0cyIsImlucHV0VGl0bGUiLCJpbnB1dERlc2NyaXB0aW9uIiwiaW5wdXREdWVEYXRlIiwiaW5wdXRDaG9vc2VQcm9qZWN0IiwiaW5wdXRQcmlvcml0eSIsInNob3dJbmZvRm9ybVVwZGF0ZSIsImRhdGFPYmplY3QiLCJpbnB1dHNGb3JtVXBkYXRlIiwiZ2V0UHJvamVjdE5hbWUiLCJnZXRWYWx1ZXNGb3JtVXBkYXRlIiwiZ2V0VmFsdWVzRnJvbU5hdmJhciIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsInRvZG9zIiwiZ2V0VG9kb3MiLCJnZXRUb2RvIiwidG9kbyIsImZpbmQiLCJpdGVtIiwiZ2V0SW5kZXhUb2RvIiwiZmluZEluZGV4IiwiYWRkVG9kbyIsInB1c2giLCJyZW1vdmVUb2RvIiwidG9kb1RpdGxlIiwiZmlsdGVyIiwidXBkYXRlVG9kbyIsInRvRGF0ZSIsImlzVG9kYXkiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiZ2V0UHJvamVjdHMiLCJnZXRQcm9qZWN0IiwiYWRkUHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJhZGRUb2RvRnJvbVByb2plY3QiLCJ0b2RheSIsInByb2plY3RBZGRlZCIsInNlYXJjaFRvZG8iLCJwcm9qZWN0U2VhcmNoIiwic2V0UHJvamVjdE5hbWUiLCJEYXRlIiwiZmluZFRvZG9Ub2RheSIsImluZGV4VG9kbyIsImkiLCJ1cGRhdGVUb2RvVG9kYXkiLCJ0b2RvT2JqIiwidXBkYXRlZFRvZG8iLCJ0b2RvSW5kZXgiLCJ1cGRhdGVUb2RvRnJvbVRvZGF5IiwidG9kb1ZhbHVlcyIsImhhc093blByb3BlcnR5IiwiaW5kZXhTZWFyY2giLCJ0b2RvQWRkZWQiLCJkZWxldGVUb2RvRnJvbVRvZGF5IiwiZGVsZXRlVG9kb1RvZGF5Iiwic2V0VGl0bGUiLCJzZXREZXNjcmlwdGlvbiIsInNldER1ZURhdGUiLCJzZXRQcmlvcml0eSIsImluYm94U2VjdGlvbiIsInRvZGF5U2VjdGlvbiIsImZvcm1VcGRhdGVUb2RvIiwiZm9ybUFkZFByb2plY3QiLCJmb3JtQWRkVG9kbyIsImZvcm1BZGRUb2RvTmF2YmFyIiwiY29udGFpbmVyVG9kb0xpc3QiLCJjb250YWluZXJBZGRQcm9qZWN0IiwiY29udGFpbmVyQWRkVG9kb05hdmJhciIsInNlY3Rpb25Ub2RvIiwicXVlcnlTZWxlY3RvckFsbCIsInNob3dQcm9qZWN0c0JhciIsImJ0bkFkZFRvZG8iLCJidG5Gb3JtQ2FuY2VsIiwiYnRuQ2FuY2VsUHJvamVjdCIsImJ0bkNhbmNlbFVwZGF0ZUZvcm0iLCJidG5DYW5jZWxGb3JtTmF2YmFyIiwiYnRuQWRkUHJvamVjdCIsImJ0bkFkZFRvZG9OYXZiYXIiLCJidG5Ub2dnbGVTaWRlYmFyIiwiYnRuSG9tZSIsImlucHV0UHJvamVjdE5hbWUiLCJzZWxlY3RQcm9qZWN0Iiwic2VsZWN0VXBkYXRlUHJvamVjdCIsInNlbGVjdFByb2plY3ROYXZiYXIiLCJzZWN0aW9uVGl0bGUiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImluYm94IiwiaW5kZXhDYXJkVG9kbyIsImFycmF5VG9kb3NET00iLCJhcnJheVByb2plY3RzRE9NIiwiZ2V0U2VjdGlvbk9iamVjdCIsImNsb3NlRm9ybUFkZFRhc2siLCJyZXNldCIsImRpc3BsYXkiLCJzaG93Rm9ybUFkZFRhc2siLCJjbG9zZUZvcm1VcGRhdGVUYXNrIiwic2hvd0Zvcm1VcGRhdGVUYXNrIiwiZ2V0Q3VycmVudERhdGUiLCJkYXRlT2JqZWN0IiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXREYXRlIiwiZGVsZXRlVG9kb0RPTSIsInRhc2siLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNoZWNrZWQiLCJyZW1vdmVDaGlsZCIsInNob3dUb2RvTGlzdCIsInNob3dDdXJyZW50VG9kb3MiLCJvYmplY3QiLCJ1cGRhdGVUb2RvQ2FyZERPTSIsImFkZFRvZG9Gcm9tRm9ybSIsInRyaW0iLCJmb3JtT3BlcmF0aW9ucyIsInVwZGF0ZVRvZG9DYXJkIiwiaW5kZXhDYXJkIiwidG9kb0RhdGEiLCJkaXZDb250YWluZXIiLCJ0aXRsZVRhc2siLCJjaGlsZHJlbiIsImRlc2NyaXB0aW9uVGFzayIsImxhc3RFbGVtZW50Q2hpbGQiLCJzaG93Rm9ybVVwZGF0ZUNhcmQiLCJhcnJheVRhc2siLCJpbnNlcnRCZWZvcmUiLCJ1cGRhdGVUb2RvRnJvbUZvcm0iLCJ2YWx1ZXNUb2RvIiwiZ2V0RGF0YVRvZG9DYXJkIiwiQXJyYXkiLCJmcm9tIiwiY2hvb3NlT2JqZWN0TGlzdCIsInNob3dTZWN0aW9uVG9kbyIsInNob3dGb3JtQWRkVG9kb05hdmJhciIsImNsb3NlRm9ybUFkZFRvZG9OYXZiYXIiLCJyZW1vdmUiLCJzZWN0aW9uIiwic2VjdGlvbkFycmF5IiwiY29uY2F0IiwidG9kb3NRdWFudGl0eSIsIm5ld1Byb2plY3QiLCJhZGRQcm9qZWN0RE9NIiwicHJvamVjdENhcmQiLCJkZWxldGVQcm9qZWN0IiwiZGVsZXRlUHJvamVjdERPTSIsInNwbGljZSIsInNob3dGb3JtQWRkUHJvamVjdCIsInByb2plY3RPcGVyYXRpb25zIiwic2hvd1Byb2plY3RzTGlzdCIsInByZXZlbnREZWZhdWx0Iiwic2V0Q3VycmVudERhdGUiLCJkdWVEYXRlVXBkYXRlIiwiZHVlRGF0ZU5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=