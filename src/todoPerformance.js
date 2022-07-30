import { parse, stringify, toJSON, fromJSON } from "flatted";
import { Todo } from "./todo.js";
import {
  inbox,
  today,
  projects,
  getSectionObject,
  currentDate,
} from "./index.js";

let array = [];

function addTodo(todoObject, projectName) {
  const todo = new Todo(
    todoObject["title"],
    todoObject["description"],
    todoObject["dueDate"],
    todoObject["projectName"],
    todoObject["priority"],
    todoObject["taskFinished"]
  );

  const objectSection = getSectionObject();
  let index = null,
    project = null,
    section = null;

  if (objectSection === today) {
    if (currentDate() === todoObject["dueDate"]) {
      if (projectName === "Inbox") {
        inbox.addTodo(todo);
        index = inbox.getIndexTodo(todo);
        section = inbox;
      } else if (projectName !== "Inbox" && projectName !== "") {
        const projectObj = getSectionObject(projectName);
        projectObj.addTodo(todo);
        index = projectObj.getIndexTodo(todo);

        section = projectObj;
      } else {
        objectSection.addTodo(todo);
      }

      if (index !== null && section !== null) {
        todo["searchTodo"] = { sectionObj: section, index: index };
        objectSection.addTodo(todo);
      }
    } else {
      if (
        todoObject["projectName"] === "Inbox" ||
        todoObject["projectName"] === ""
      ) {
        todo.setProjectName("Inbox");
        inbox.addTodo(todo);
      } else {
        const projectObj = getSectionObject(todoObject["projectName"]);
        projectObj.addTodo(todo);
      }
    }
    return;
  } else if (objectSection === inbox) {
    if (projectName === "" || projectName === "Inbox") {
      todo.setProjectName("Inbox");
      objectSection.addTodo(todo);
      index = objectSection.getIndexTodo(todo);
      section = inbox;
      array.push(todo);

      localStorage.setItem("Inbox", stringify(array));
    } else {
      project = projects.getProject(projectName);
      project.addTodo(todo);
      index = project.getIndexTodo(todo);
      section = project;
    }
  } else {
    if (projectName === "" || projectName === objectSection.getName()) {
      todo.setProjectName(objectSection.getName());
      objectSection.addTodo(todo);
      index = objectSection.getIndexTodo(todo);
      section = objectSection;
    } else {
      inbox.addTodo(todo);
      index = inbox.getIndexTodo(todo);
      section = inbox;
    }
  }

  if (currentDate() === todoObject["dueDate"]) {
    todo["searchTodo"] = { sectionObj: section, index: index };
    console.log(todo);
    today.addTodo(todo);
  }
}

function updateOthersTodos(object, index, todo) {
  const nextObj = getSectionObject(todo.getProjectName());
  nextObj.addTodo(todo);
  const newIndex = nextObj.getIndexTodo(todo);

  if (todo.getDueDate() === currentDate()) {
    today.todos.forEach((todo) => {
      if (todo.hasOwnProperty("searchTodo")) {
        if (
          todo["searchTodo"]["index"] === index &&
          todo["searchTodo"]["sectionObj"] === object
        ) {
          todo["searchTodo"]["index"] = newIndex;
          todo["searchTodo"]["sectionObj"] = nextObj;
          console.log(todo);
        }
      }
    });
  }
  object.removeTodo(index);
}

function updateTodo(index, valuesTodo) {
  const object = getSectionObject();

  const dataObj = object.getTodo(index);
  const projectName = dataObj.getProjectName();
  const searchTodo = dataObj["searchTodo"];

  object.updateTodo(index, valuesTodo);

  const todo = object.getTodo(index);

  if (object === today) {
    if (dataObj.hasOwnProperty("searchTodo")) {
      if (projectName === "Inbox") {
        inbox.updateTodo(searchTodo["index"], valuesTodo);
      } else {
        if (projectName !== "") {
          const project = projects.getProject(projectName);
          project.updateTodo(searchTodo["index"], valuesTodo);
        }
      }

      if (todo.getProjectName() !== projectName) {
        const previousObj = getSectionObject(projectName);
        previousObj.removeTodo(searchTodo["index"]);

        const nextObj = getSectionObject(todo.getProjectName());
        nextObj.addTodo(todo);
        const newIndex = nextObj.getIndexTodo(todo);

        todo["searchTodo"] = { sectionObj: nextObj, index: newIndex };

        if (todo["dueDate"] !== currentDate()) {
          today.removeTodo(index);
        }
      }
    }
    if (todo !== undefined && todo["dueDate"] !== currentDate()) {
      today.removeTodo(index);
    }
  } else {
    let countTodos = 0;

    if (today.todos.length > 0) {
      today.todos.forEach((todo, i) => {
        if (todo.hasOwnProperty("searchTodo")) {
          console.log("fuck");
          if (
            todo["searchTodo"]["index"] === index &&
            todo["searchTodo"]["sectionObj"] === object
          ) {
            today.updateTodo(i, valuesTodo);

            countTodos += 1;

            const todoObj = today.getTodo(i);
            if (todoObj["dueDate"] !== currentDate()) {
              today.removeTodo(i);
            }
          }
        }
      });
    }
    if (todo["dueDate"] === currentDate() && countTodos === 0) {
      todo["searchTodo"] = { sectionObj: object, index: index };
      today.addTodo(todo);
    }

    if (todo.getProjectName() !== projectName) {
      updateOthersTodos(object, index, todo, searchTodo);
    }
  }
}

function deleteTodo(index) {
  const object = getSectionObject();

  if (object === today) {
    const todo = today.getTodo(index);
    if (todo.hasOwnProperty("searchTodo")) {
      if (todo.getProjectName() === "Inbox") {
        inbox.removeTodo(todo["searchTodo"]["index"]);
      } else {
        if (todo.getProjectName() !== "") {
          const project = projects.getProject(todo.getProjectName());
          project.removeTodo(todo["searchTodo"]["index"]);
        }
      }
    }
  } else {
    today.todos.forEach((todo, i) => {
      if (todo.hasOwnProperty("searchTodo")) {
        if (todo["searchTodo"]["index"] === index) {
          today.removeTodo(i);
        }
      }
    });
  }

  object.removeTodo(index);
}

function getDataTodoCard(indexCard) {
  const objectSection = getSectionObject();
  const arrayTodo = objectSection.getTodo(indexCard);
  return arrayTodo;
}

export { addTodo, updateTodo, deleteTodo, getDataTodoCard };
