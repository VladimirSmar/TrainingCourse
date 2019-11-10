import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { LoggingService } from '../../services/logging-service/logging.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit 
{
  constructor(
    private _store: Store<AppState>,
    private _loggingService: LoggingService
  ) {}

  addTodo(name: string, description: string) {
    let todoNameContainer: HTMLInputElement = <HTMLInputElement>document.getElementById("todolist__add-todo_name-input");
    let todoDescriptionContainer: HTMLInputElement = <HTMLInputElement>document.getElementById("todolist__add-todo_description-input");

    if(!this._loggingService.isEmptyOrSpaces(name) && !this._loggingService.isEmptyOrSpaces(description)) {
      this._loggingService.addTodo(name, description);
      todoNameContainer.value = '';
      todoDescriptionContainer.value = '';
    }
  }

  ngOnInit() {
  }

}
