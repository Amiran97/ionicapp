import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'movielist',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/movie-list/movie-list.module').then( m => m.MovieListPageModule)
          }
        ]
      },
      {
        path: 'tvserieslist',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/tv-series-list/tv-series-list.module').then( m => m.TvSeriesListPageModule)
          }
        ]
      },
      {
        path: 'actorlist',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/actor-list/actor-list.module').then( m => m.ActorListPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/movielist',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
