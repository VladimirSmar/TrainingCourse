import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as TodoActions from '../../redux/store/actions/todolist/todolist.actions';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(
    private _store: Store<AppState>
  ) {}

  public isEmptyOrSpaces(str: string) {
    return str === null || str.match(/^ *$/) !== null;
  }

  public addTodo(name: string, description: string): void {
    this._store.dispatch(new TodoActions.AddTodo({name, description, isCompleted: false}));
  }

  public removeTodo(index: number): void {
    this._store.dispatch(new TodoActions.RemoveTodo(index));
  }

  public updateTodo(name: string, description: string, isCompleted: boolean, id: number): void {
    this._store.dispatch(new TodoActions.UpdateTodo({ name, description, isCompleted, id }));
  }

  public completeTodo(index: number): void {
    this._store.dispatch(new TodoActions.CompleteTodo(index));
  }

  public editTodo(index: number): void {
    this._store.dispatch(new TodoActions.EditTodo(index));
  }
}
