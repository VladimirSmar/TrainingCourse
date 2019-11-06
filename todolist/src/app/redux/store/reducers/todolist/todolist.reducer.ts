import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todolist/todolist.model';
import * as TodoActions from '../../actions/todolist/todolist.actions';

const initialState = {
    id: 1,
    name: 'Initial Todo',
    description: 'Somthing about this todo, dont really know what to put here',
    completed: false
};

export function todoReducer(state: ITodo[] = [initialState], action: TodoActions.Actions) {
    switch (action.type) {
        case (TodoActions.ADD_TODO): {
            return [...state, action.payload];
        }

        case (TodoActions.REMOVE_TODO): {
            state.splice(action.payload, 1);
            return state;
        }

        case (TodoActions.UPDATE_TODO): {
            return [...state, action.payload];
        }

        default:
            return state;
    }
}
