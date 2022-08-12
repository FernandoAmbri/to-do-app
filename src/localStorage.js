import Projects from "./projects";
import Project from "./project";
import Todo from "./todo";

export default class Storage {
  loadDataStorage() {
    if (localStorage.length === 0) {
      const projects = new Projects();
      projects.addProject(new Project("Inbox"));
      projects.addProject(new Project("Today"));
      this.saveProjectsStorage(projects);
    }
  }

  saveProjectsStorage(dataProjects) {
    localStorage.setItem("projects", JSON.stringify(dataProjects));
  }

  getProjectsStorage() {
    const projects = Object.assign(
      new Projects(),
      JSON.parse(localStorage.getItem("projects"))
    );

    projects.setProjects(
      projects
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    projects.getProjects().forEach((project) => {
      project.setTodos(
        project.getTodos().map((todo) => Object.assign(new Todo(), todo))
      );
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
