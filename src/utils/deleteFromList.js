export const deleteFromList = (listItem) => {
  console.log("listItem", listItem);
  const toDoListDB = JSON.parse(localStorage.getItem("toDoList"));
  const newToDoList = toDoListDB.filter((item) => item != listItem);
  localStorage.setItem("toDoList", JSON.stringify(newToDoList));
};
