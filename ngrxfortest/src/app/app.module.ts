import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './redux/store/reducers/tutorial.reducer';

import { AppComponent } from './app.component';
import { ReadTutorialComponent } from './components/read-tutorial/read-tutorial.component';
import { CreateTutorialComponent } from './components/create-tutorial/create-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadTutorialComponent,
    CreateTutorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      tutorial: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
