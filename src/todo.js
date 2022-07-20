class Todo {
  constructor(
    title = "",
    description = "",
    dueDate = "",
    projectName = "",
    priority = 1,
    taskFinished = false
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.projectName = projectName;
    this.priority = priority;
    this.taskFinished = taskFinished;
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

  getTaskFinished() {
    return this.taskFinished;
  }

  setTaskFinished(taskFinished) {
    this.taskFinished = taskFinished;
  }
}

export { Todo };
