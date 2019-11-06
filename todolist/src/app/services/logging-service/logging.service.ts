import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ITodo } from '../../redux/store/models/todolist/todolist.model';
import * as TodoActions from '../../redux/store/actions/todolist/todolist.actions';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor(
    private _store: Store<AppState>
  ) { }

  public addTodo(name: string, description: string): void {
    this._store.dispatch(new TodoActions.AddTodo({name, description, completed: false}));
  }

  public removeTodo(index: number): void {
    this._store.dispatch(new TodoActions.RemoveTodo(index));
  }

  public updateTodo(name: string, description: string, completed: boolean): void {
    this._store.dispatch(new TodoActions.UpdateTodo({name, description, completed}));
  }

 /*  public completeTodo(index: number): void {
    let todoCheckbox = document.getElementById('todoCheck');

    if(todoCheckbox.checked == true) {
      
    } 
  }*/
}
