import { interfaces } from "inversify";
import { TodoRepository } from "./repository";
import { TodoStore } from "./store";
import { TodoService } from "./service";
import { createModule } from "../core";

export const todosModule = createModule((bind: interfaces.Bind) => {
  bind<TodoRepository>(TodoRepository).toSelf();
  bind<TodoStore>(TodoStore).toSelf();
  bind<TodoService>(TodoService).toSelf();
});
