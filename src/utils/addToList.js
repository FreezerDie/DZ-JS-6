import { createDeleteButton } from "../components/deleteButton";

export const addToList = (text) => {
  const toDoList = document.querySelector(".to_do_list");
  const listItem = document.createElement("li");
  listItem.innerHTML = text;
  toDoList.append(listItem);
  let toDoListDB = JSON.parse(localStorage.getItem("toDoList"));
  toDoListDB.push(text);
  console.log(toDoListDB);

  createDeleteButton(listItem);
  localStorage.setItem("toDoList", JSON.stringify(toDoListDB));
};
