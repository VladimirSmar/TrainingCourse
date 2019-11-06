import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from './redux/store/reducers/todolist/todolist.reducer';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoListComponent,
    UpdateTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todo: todoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
