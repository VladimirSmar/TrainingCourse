import { ITutorial } from './redux/store/models/tutorial.model';

export interface AppState {
    readonly tutorial: ITutorial[];
}
