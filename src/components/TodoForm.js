import { addToList } from "../utils/addToList";

export const createToDoForm = () => {
  const submitForm = document.createElement("form");
  const submitBtn = document.createElement("button");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "item";
  submitBtn.type = "submit";
  submitBtn.innerHTML = "add";
  submitForm.className = "submit-form";
  document.querySelector("#app").append(submitForm);
  submitForm.append(input, submitBtn);
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
      item: { value: itemValue },
    } = event.target;
    console.log(itemValue);
    addToList(itemValue);
  });
};
