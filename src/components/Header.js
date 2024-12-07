export const createHeader = () => {
  const header = document.createElement("h1");

  header.innerHTML = "To do list";

  document.querySelector("#app").append(header);
};
