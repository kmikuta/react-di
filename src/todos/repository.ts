import { Observable, of } from "rxjs";
import { TodoModel } from "./model";
import { Injectable } from "../core";

@Injectable()
export class TodoRepository {
  private todos: Map<string, TodoModel> = new Map();

  constructor() {
    this.todos.set("0", {
      id: "0",
      name: "Do sth",
      author: "Me",
      finished: false,
      created: new Date(),
    });

    this.todos.set("1", {
      id: "1",
      name: "And then sth",
      author: "Me",
      finished: false,
      created: new Date(),
    });

    this.todos.set("2", {
      id: "2",
      name: "And finally sth",
      author: "Me",
      finished: true,
      created: new Date(),
    });
  }

  public getAll(): Observable<TodoModel[]> {
    return of(Array.from(this.todos.values()));
  }

  public save(todo: TodoModel): Observable<TodoModel> {
    const newId = this.todos.size.toString();
    const newTodo = { ...todo, id: newId };
    this.todos.set(newId, newTodo);
    return of(newTodo);
  }

  public toggleState(id: string): Observable<TodoModel> {
    const todo = this.todos.get(id);
    todo.finished = !todo.finished;
    this.todos.set(id, todo);
    return of(todo);
  }
}
