import { CreateHeader } from "./header";
import { createToDoForm } from "./TodoForm";
import { createToDoList } from "./TodoList";

export const CreateToDoListProg = () => {
  CreateHeader();
  createToDoForm();
  createToDoList();
};
