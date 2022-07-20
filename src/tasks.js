class Tasks {
  constructor() {
    this.todos = [];
  }

  getTodo(index) {
    return this.todos.find((item, i) => i === index);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(index) {
    this.todos = this.todos.filter((item, i) => i !== index);
  }

  updateTodo(index, obj) {
    let arr = Object.keys(obj);
    arr.forEach((item) => {
      this.todos[index][item] = obj[item];
    });
  }
}

export { Tasks };
