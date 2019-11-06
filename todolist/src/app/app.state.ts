import { ITodo } from './redux/store/models/todolist/todolist.model';

export interface AppState {
    readonly todo: ITodo[];
}