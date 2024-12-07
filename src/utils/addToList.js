export const addToList = (text) => {
  const toDoListDB = JSON.parse(localStorage.getItem("toDoList"));
  toDoListDB.push(text);
  localStorage.setItem("toDoList", JSON.stringify(toDoListDB));
};
