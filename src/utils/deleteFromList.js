export const deleteFromList = (listItem, toDoListDB) => {
  const newToDoList = toDoListDB.filter((item) => item != listItem.innerHTML);
  localStorage.setItem("toDoList", JSON.stringify(newToDoList));
  listItem.remove;
};
