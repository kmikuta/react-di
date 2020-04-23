import { interfaces } from "inversify";
import { TodoRepository } from "./repository";
import { TodoStore } from "./store";
import { TodoService } from "./service";
import { createModule } from "../core";

export const todosModule = createModule((bind: interfaces.Bind) => {
  bind<TodoRepository>(TodoRepository).to(TodoRepository);
  bind<TodoStore>(TodoStore).to(TodoStore);
  bind<TodoService>(TodoService).to(TodoService);
});
