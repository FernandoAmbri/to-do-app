class Projects {
  constructor() {
    this.projects = [];
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find((project) => project.name === name);
  }

  addProject(todo) {
    this.projects.push(todo);
  }

  removeProject(index) {
    this.projects = this.todos.filter((item, i) => i !== index);
  }
}

export { Projects };
