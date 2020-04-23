import React, { useEffect } from "react";
import { useDependency, useGetter } from "../core";
import { TodoList } from "./list";
import { TodoStore } from "./store";
import { Logger } from "../logger";
import { TodoService } from "./service";

export function TodoContainer() {
  const service = useDependency<TodoService>(TodoService);
  const logger = useDependency<Logger>(Logger);
  const store = useDependency<TodoStore>(TodoStore);
  const todos = useGetter(store.todoItems$, []);

  function onClick(): void {
    service.addRandom();
  }

  function onChange(id: string): void {
    service.toggleState(id);
  }

  useEffect(() => {
    service.initTodos();
    logger.log("useEffect called");

    return () => service.clear();
  }, [service.initTodos, service, logger]);

  return (
    <>
      <button onClick={onClick}>Add random</button>
      <TodoList todos={todos} onChange={onChange} />
    </>
  );
}
