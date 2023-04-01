import React from "react";
import { useEjemploContext } from "../../contexts/Ejemplo";
import { ITodo } from "../../models/ITodo";

export interface TodoProps {
  todo: ITodo;
}

export const Todo: React.FC<TodoProps> = ({ todo }) => {
  const { toggleTodoCompleted } = useEjemploContext();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleTodoCompleted(event.currentTarget.checked, todo.id);
  };

  return (
    <li className="list-none">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheck}
        />
        <span className={`${todo.completed ? "line-through" : "list-none"}`}>
          {todo.title}
        </span>
      </label>
    </li>
  );
};
