import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";
import { TodoModel } from "./model";
import { Injectable, RxStore } from "../core";

export interface TodoState {
  items: TodoModel[];
}

@Injectable()
export class TodoStore extends RxStore<TodoState> {
  constructor() {
    super(TodoStore.getInitialState());
  }

  static getInitialState(): TodoState {
    return { items: [] };
  }

  get todoItems$(): Observable<TodoModel[]> {
    return this.state$.pipe(pluck("items"));
  }

  public init(items: TodoModel[]): void {
    this.setItems(items);
  }

  public addTodo(todo: TodoModel): void {
    const items = [...this.snapshot.items];
    items.push(todo);
    this.setItems(items);
  }

  public updateTodo(todo: TodoModel): void {
    const items = [...this.snapshot.items];
    const index = items.findIndex((t) => t.id === todo.id);
    items[index] = todo;
    this.setItems(items);
  }

  public clear(): void {
    this.state.next(TodoStore.getInitialState());
  }

  private setItems(items: TodoModel[]): void {
    this.state.next({
      ...this.state.value,
      items,
    });
  }
}
