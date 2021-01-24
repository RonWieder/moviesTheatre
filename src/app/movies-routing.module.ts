import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieResolver } from './services/movie.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: MoviesListComponent },
  {
    path: 'movies/:movieId', component: MovieDetailsComponent, resolve: {
      movie: MovieResolver
    }
  },
  { path: '**', pathMatch: 'full', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [MovieResolver]
})
export class MoviesRoutingModule { }
