import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParseResultComponent } from './components/parse-result/parse-result.component';
import { NewsItemComponent } from './components/news-item/news-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'parseResult', pathMatch: 'full' },
  { path: 'parseResult', component: ParseResultComponent },
  { path: 'news-item', component: NewsItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
