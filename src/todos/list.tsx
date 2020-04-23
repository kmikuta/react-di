import React, { ChangeEvent } from "react";
import { TodoModel } from "./model";

export interface TodoListProps {
  todos: TodoModel[];
  onChange: (id: string) => void;
}

export function TodoList({ todos, onChange }: TodoListProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const id = event.target.getAttribute("data-todoid");
    onChange(id);
  }

  return (
    <ul>
      {todos.map((item: TodoModel) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.finished}
              onChange={handleChange}
              data-todoid={item.id}
            />
            <span>
              &nbsp;{item.name}
              {item.id}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
}
