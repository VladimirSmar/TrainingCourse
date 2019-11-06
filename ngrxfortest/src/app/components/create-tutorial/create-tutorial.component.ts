import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import { ITutorial } from '../../redux/store/models/tutorial.model';
import * as TutorialActions from '../../redux/store/actions/tutorial.actions';

@Component({
  selector: 'app-create-tutorial',
  templateUrl: './create-tutorial.component.html',
  styleUrls: ['./create-tutorial.component.css']
})
export class CreateTutorialComponent implements OnInit {

  constructor(
    private _store: Store<AppState>
  ) { }

  addTutorial(name: string, url: string) {
    this._store.dispatch(new TutorialActions.AddTutorial({name, url}));
  }

  ngOnInit() {
  }

}
