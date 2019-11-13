import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'newsList'
  },
  {
    path: 'newsList',
    component: NewsListComponent
  },
  {
    path: 'newsItem',
    component: NewsItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
