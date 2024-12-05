import { deleteFromList } from "../utils/deleteFromList";

export const createDeleteButton = (listItem) => {
  const DeleteButton = document.createElement("button");
  DeleteButton.innerText = "X";

  listItem.append(DeleteButton);

  const toDoListDB = JSON.parse(localStorage.getItem("toDoList"));

  DeleteButton.addEventListener("click", deleteFromList(listItem, toDoListDB));
};
