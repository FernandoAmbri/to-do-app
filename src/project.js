export default class Project {
  constructor(name = "") {
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
    const todo = this.todos.find((item) => item.getTitle() === title);
    return todo ? todo : false;
  }

  getIndexTodo(todo) {
    return this.todos.findIndex((item) => item.getTitle() === todo.getTitle());
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
    this.todos = this.todos.filter((item) => item.getTitle() !== todoTitle);
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
