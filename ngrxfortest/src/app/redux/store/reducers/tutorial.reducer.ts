import { Action } from '@ngrx/store';
import { ITutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/tutorial.actions';

const initialState: ITutorial = {
    name: 'Initial Tutorial',
    url: 'https://google.com'
};

export function reducer(state: ITutorial[] = [initialState], action: TutorialActions.Actions) {
    switch (action.type) {
        case (TutorialActions.ADD_TUTORIAL): {
            return [...state, action.payload];
        }

        case (TutorialActions.REMOVE_TUTORIAL): {
            state.splice(Number(action.payload), 1);
            return state;
        }

        default:
            return state;
    }
}
