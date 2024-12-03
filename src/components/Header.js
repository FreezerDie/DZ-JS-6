export const CreateHeader = () => {
  const header = document.createElement("h1");

  header.innerHTML = "to do list";

  document.querySelector("#app").append(header);
};
