import { deleteFromList } from "../utils/deleteFromList";

export const createToDoItem = (text) => {
  const listItem = document.createElement("li");
  const deleteButton = document.createElement("button");
  const toDoListUl = document.querySelector(".to_do_list");
  listItem.innerText = text;

  toDoListUl.append(listItem);

  deleteButton.innerText = "X";

  listItem.append(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    deleteFromList(text);
    listItem.remove();
  });
};
