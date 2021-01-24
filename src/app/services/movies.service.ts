import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private readonly BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    const url = this.BASE_URL + `/movies`;
    return this.http.get<Movie[]>(url);
  }

  getMovie(movieId: string): Observable<Movie[]> {
    const url = this.BASE_URL + `/movies/${movieId}`;
    return this.http.get<Movie[]>(url);
  }


}
