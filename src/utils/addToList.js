export const addToList = (text) => {
  const toDoList = document.querySelector(".to_do_list");
  const listItem = document.createElement("li");
  listItem.innerText = text;
  toDoList.append(listItem);
  let toDoListDB = JSON.parse(localStorage.getItem("toDoList"));
  toDoListDB.push(text);
  localStorage.setItem("toDoList", JSON.stringify(toDoListDB));
};
