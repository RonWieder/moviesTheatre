import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movie';
import { MoviesService } from './movies.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie[]> {

  constructor(private moviesService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie[]> {
    const movieUrl = route.paramMap.get('movieId');
    return this.moviesService.getMovie(movieUrl);
  }
}
