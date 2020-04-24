import { TodoRepository } from "./repository";
import { Injectable } from "../core";
import { TodoStore } from "./store";
import { TodoModel } from "./model";

@Injectable()
export class TodoService {
  constructor(private repository: TodoRepository, private store: TodoStore) {}

  public initTodos(): void {
    this.repository.getAll().subscribe((items) => {
      this.store.init(items);
    });
  }

  public addRandom(): void {
    const randomTodo: TodoModel = {
      name: "Random Todo",
      author: "Me",
      finished: false,
    };

    this.repository.save(randomTodo).subscribe((saved) => {
      this.store.addTodo(saved);
    });
  }

  public toggleState(id: string): void {
    this.repository.toggleState(id).subscribe((modified) => {
      this.store.updateTodo(modified);
    });
  }

  public clear(): void {
    this.store.clear();
  }
}
