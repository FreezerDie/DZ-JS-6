import { createHeader } from "./Header";
import { createToDoForm } from "./toDoForm";
import { createToDoList } from "./toDoList";

export const CreateToDoListProg = () => {
  createHeader();
  createToDoForm();
  createToDoList();
};
