import { toDate, isToday } from "date-fns";

export default class Projects {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    const project = this.projects.find((project) => project.name === name);
    return project ? project : false;
  }

  addProject(project) {
    if (!this.getProject(project.getName())) {
      this.projects.push(project);
    }
  }

  removeProject(name) {
    this.projects = this.projects.filter((item) => item.name !== name);
  }

  addTodoFromProject(todo) {
    const project = this.getProject(todo.getProjectName());
    const today = this.getProject("Today");
    const projectAdded = project ? project.addTodo(todo) : false;

    if (projectAdded) {
      todo.searchTodo = {
        projectSearch: todo.getProjectName(),
        todoTitle: todo.getTitle(),
      };
    } else {
      todo.setProjectName("");
    }

    if (isToday(new Date(todo.getDueDate()))) {
      today.todos.push(todo);
    }
  }

  findTodoToday(project, todoTitle) {
    const today = this.getProject("Today");
    let indexTodo = -1;

    today.todos.forEach((item, i) => {
      if (
        item.searchTodo.projectSearch === project.getName() &&
        item.searchTodo.todoTitle === todoTitle
      ) {
        indexTodo = i;
      }
    });
    return indexTodo >= 0 ? indexTodo : -1;
  }

  updateTodoToday(index, todoObj, project) {
    let updatedTodo = null;
    const today = this.getProject("Today");
    const todoTitle = project.getTodos()[index].getTitle();

    if (isToday(new Date(todoObj.getDueDate()))) {
      const todoIndex = this.findTodoToday(project, todoTitle);
      todoObj.searchTodo = {
        projectSearch: project.getName(),
        todoTitle: todoObj.getTitle(),
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
      const { projectSearch, todoTitle } = todoObj.searchTodo;
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
          todoTitle: todoObj.getTitle(),
        };
      }
    }

    if (isToday(new Date(todoObj.getDueDate()))) {
      today.todos[index] = todoObj;
    } else {
      today.removeTodo(todoValues.getTitle());
    }
  }

  deleteTodoFromToday(index) {
    const today = this.getProject("Today");
    const todoObj = today.getTodos()[index];
    if (todoObj.hasOwnProperty("searchTodo")) {
      const { projectSearch, todoTitle } = todoObj.searchTodo;
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
