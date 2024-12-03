export const createDeleteButton = (itemId) => {
  const DeleteButton = document.createElement("button");
  DeleteButton.innerText = "X";

  const listItem = document.querySelector(`#${itemId}`);

  DeleteButton.addEventListener("click", (event) => {});
};
