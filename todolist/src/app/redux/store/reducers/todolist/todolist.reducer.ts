import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todolist/todolist.model';
import * as TodoActions from '../../actions/todolist/todolist.actions';

const initialState = {
    id: 1,
    name: 'Initial Todo',
    description: 'Somthing about this todo, dont really know what to put here',
    isCompleted: true
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
            state[action.payload.id].name = action.payload.name;
            state[action.payload.id].description = action.payload.description;
            state[action.payload.id].isCompleted = action.payload.isCompleted;
            state[action.payload.id].isEdited = undefined;
            state[action.payload.id].id = undefined;
            return state;
        }

        case (TodoActions.COMPLETE_TODO) : {
            state[action.payload].isCompleted = !state[action.payload].isCompleted;
            return state;
        }

        case (TodoActions.EDIT_TODO) : {
            state[action.payload].isEdited = true;
            return state;
        }

        default:
            return state;
    }
}
