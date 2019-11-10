import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITodo } from '../../redux/store/models/todolist/todolist.model';
import { AppState } from '../../app.state';
import { LoggingService } from '../../services/logging-service/logging.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todosObservable: Observable<ITodo[]> = undefined;

  constructor(
    private _store: Store<AppState>,
    private _loggingService: LoggingService
  ) {
    this.todosObservable = this._store.select('todo');
  }

  deleteTodo(index: number) {
    this._loggingService.removeTodo(index);
  }

  completeTodo(index: number) {
    this._loggingService.completeTodo(index);
  }

  editTodo(index: number) {
    this._loggingService.editTodo(index);
  }

  updateTodo(index: number, name: string, description: string, isCompleted: boolean) {
    if(!this._loggingService.isEmptyOrSpaces(name) && !this._loggingService.isEmptyOrSpaces(description)) {
      this._loggingService.updateTodo(name, description, isCompleted, index);    
    }
  }

  ngOnInit() {
  }

}
