function getValuesFromForm() {
  const title = document.getElementById("task-name").value;
  const description = document.getElementById("task-description").value;
  const dueDate = document.getElementById("dueDate").value;
  const chooseProject = document.getElementById("select-project");
  const taskPriority = document.getElementById("task-priority");

  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;

  return {
    title,
    description,
    dueDate,
    projectName,
    priority,
    taskFinished: false,
  };
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
    inputPriority,
  };
}

function showInfoFormUpdate(dataObject) {
  const inputsFormUpdate = getFormUpdateInputs();
  const todo = dataObject;
  inputsFormUpdate["inputTitle"].value = todo.title;
  inputsFormUpdate["inputDescription"].value = todo.description;
  inputsFormUpdate["inputDueDate"].value = todo.dueDate;
  inputsFormUpdate["inputChooseProject"].value = todo.projectName;
  inputsFormUpdate["inputPriority"].value = todo.priority;
}

function getValuesFormUpdate() {
  const inputsFormUpdate = getFormUpdateInputs();

  const title = inputsFormUpdate["inputTitle"].value;
  const description = inputsFormUpdate["inputDescription"].value;
  const dueDate = inputsFormUpdate["inputDueDate"].value;
  const chooseProject = inputsFormUpdate["inputChooseProject"];
  const taskPriority = inputsFormUpdate["inputPriority"];

  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;

  return {
    title,
    description,
    dueDate,
    projectName,
    priority,
    taskFinished: false,
  };
}

function getValuesFromNavbar() {
  const title = document.getElementById("task-name-navbar").value;
  const description = document.getElementById("task-description-navbar").value;
  const dueDate = document.getElementById("duedate-navbar").value;
  const chooseProject = document.getElementById("select-project-navbar");
  const taskPriority = document.getElementById("task-priority-navbar");

  const projectName = chooseProject.options[chooseProject.selectedIndex].value;
  const priority = taskPriority.options[taskPriority.selectedIndex].value;

  return {
    title,
    description,
    dueDate,
    projectName,
    priority,
    taskFinished: false,
  };
}

export {
  getValuesFromForm,
  getValuesFormUpdate,
  getValuesFromNavbar,
  showInfoFormUpdate,
};
