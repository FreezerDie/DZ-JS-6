export const createToDoList = () => {
  const toDoListUl = document.createElement("ul");
  toDoListUl.className("to_do_list");
  document.querySelector("#app").append(toDoListUl);
  if (localStorage.getItem("toDoList") === null) {
    let toDoList = [];
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  } else {
    const DoList = JSON.parse(localStorage.getItem("toDoList"));
    DoList.forEach((item) => {
      const text = document.createElement("li");
      text.innerText = item;
    });
  }
};