import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { TodoModel } from "./model";
import { Injectable } from "../core";
import { pluck } from "rxjs/operators";

@Injectable()
export class TodoRepository {
  private readonly apiUrl = "/todos";
  private readonly httpService: typeof ajax = ajax;

  public getAll(): Observable<TodoModel[]> {
    return this.httpService.get(this.apiUrl).pipe(pluck("response"));
  }

  public save(todo: TodoModel): Observable<TodoModel> {
    return this.httpService
      .post(this.apiUrl, todo, {
        "Content-Type": "application/json",
      })
      .pipe(pluck("response"));
  }

  public toggleState(id: string): Observable<TodoModel> {
    return this.httpService
      .post(`${this.apiUrl}/${id}/toggle`)
      .pipe(pluck("response"));
  }
}
