import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todolist/todolist.model';

export const ADD_TODO = '[Todo List] Add Todo';
export const REMOVE_TODO = '[Todo List] Remove Todo';
export const UPDATE_TODO = '[Todo List] Update Todo';
export const COMPLETE_TODO = '[Todo List] Complete Todo';
export const EDIT_TODO = '[Todo List] Edit Todo';

export class AddTodo implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: ITodo) {}
}

export class RemoveTodo implements Action {
    readonly type = REMOVE_TODO;

    constructor(public payload: number) {}
}

export class UpdateTodo implements Action {
    readonly type = UPDATE_TODO;

    constructor(public payload: ITodo) {}
}

export class CompleteTodo implements Action {
    readonly type = COMPLETE_TODO;

    constructor(public payload: number) {}
}

export class EditTodo implements Action {
    readonly type = EDIT_TODO;

    constructor(public payload: number) {}
}

export type Actions = AddTodo | RemoveTodo | UpdateTodo | CompleteTodo | EditTodo;
