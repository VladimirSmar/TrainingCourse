import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ITutorial } from '../../redux/store/models/tutorial.model';
import { AppState } from '../../app.state';
import * as TutorialActions from '../../redux/store/actions/tutorial.actions';

@Component({
  selector: 'app-read-tutorial',
  templateUrl: './read-tutorial.component.html',
  styleUrls: ['./read-tutorial.component.css']
})
export class ReadTutorialComponent implements OnInit {

  public tutorialsObservable: Observable<ITutorial[]> = undefined;

  constructor(
    private _store: Store<AppState>
  ) {
    this.tutorialsObservable = _store.select('tutorial');
  }

  deleteTutorial(index: number) {
    console.log(index);
    this._store.dispatch(new TutorialActions.RemoveTutorial(index));
  }

  ngOnInit() {
  }

}
