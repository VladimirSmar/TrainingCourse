import { Action } from '@ngrx/store';
import { ITodo } from '../../models/todolist/todolist.model';
import * as TodoActions from '../../actions/todolist/todolist.actions';

const initialState = {
    name: 'Initial Todo',
    description: 'Something about this todo, dont really know what to put here',
    isCompleted: true,
    isEdited: false,
    id: 1
};

export function todoReducer(state: ITodo[] = [initialState], action: TodoActions.Actions) {
    switch (action.type) {
        case (TodoActions.ADD_TODO): {
            return [...state, action.payload];
        }

        case (TodoActions.REMOVE_TODO): {
            return state.filter((item, index) => index !== action.payload)
        }

        case (TodoActions.UPDATE_TODO): {
            let updatedTodo = {
                name: action.payload.name,
                description: action.payload.description,
                isCompleted: action.payload.isCompleted,
                isEdited: action.payload.isEdited
            }

            return state.map((item, index) => {
                if (index !== action.payload.id) {
                    return item
                }

                return {
                    ...updatedTodo
                }
            })
        }

        case (TodoActions.COMPLETE_TODO): {
            return state.map((item, index) => {
                if (index !== action.payload) {
                    return item
                }

                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            })
        }

        case (TodoActions.EDIT_TODO): {
            return state.map((item, index) => {
                if (index !== action.payload) {
                    return item
                }

                return {
                    ...item,
                    isEdited: true
                }
            })
        }

        default:
            return state;
    }
}
