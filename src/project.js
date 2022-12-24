export default class Project {
  constructor(name = "") {
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
    const todo = this.todos.find((item) => item.getTitle() === title);
    return todo || false;
  }

  getIndexTodo(todo) {
    return this.todos.findIndex((item) => item.getTitle() === todo.getTitle());
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
    let index = this.todos.findIndex((item) => item.getTitle() === todoTitle);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1),
    ];
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
