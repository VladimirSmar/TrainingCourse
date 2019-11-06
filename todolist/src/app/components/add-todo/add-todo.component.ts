import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { LoggingService } from '../../services/logging-service/logging.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(
    private _store: Store<AppState>,
    private _loggingService: LoggingService
  ) { }

  addTodo(name: string, description: string) {
    this._loggingService.addTodo(name, description);
  }

  ngOnInit() {
  }

}
