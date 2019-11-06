import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todolist/todolist.model';

export const ADD_TODO = '[Todo List] Add Todo';
export const REMOVE_TODO = '[Todo List] Remove Todo';
export const UPDATE_TODO = '[Todo List] Update todo';

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

export type Actions = AddTodo | RemoveTodo | UpdateTodo;
