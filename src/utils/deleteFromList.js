export const deleteFromList = (itemId) => {
  const toDoListDB = JSON.parse(localStorage.getItem("toDoList"));
  const listItem = document.querySelector(`#${itemId}`);
};
