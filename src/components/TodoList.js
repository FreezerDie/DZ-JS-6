import { createToDoItem } from "./toDoItem";

export const createToDoList = () => {
  const toDoListUl = document.createElement("ul");
  toDoListUl.className = "to_do_list";
  document.querySelector("#app").append(toDoListUl);
  if (localStorage.getItem("toDoList") === null) {
    let toDoList = [];
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  } else {
    const doList = JSON.parse(localStorage.getItem("toDoList"));
    doList.forEach((listItem) => {
      createToDoItem(listItem);
    });
  }
};
