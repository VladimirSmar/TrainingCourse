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
    this.todosObservable = _store.select('todo');
  }

  deleteTodo(index: number) {
    this._loggingService.removeTodo(index);
  }

  completeTodo(index: number) {
    //this._loggingService.completeTodo(index);
  }

  ngOnInit() {
  }

}
