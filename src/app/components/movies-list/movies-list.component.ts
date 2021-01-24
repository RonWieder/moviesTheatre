import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  $movies: Observable<Movie[]>;
  private _searchTerm: string;
  placeHolder: string = 'Search for movie title'

  get searchTerm(): string {
    return this._searchTerm;
  }


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.$movies = this.moviesService.getMovies();
  }

  filterMovies(searchTerm) {
    this._searchTerm = searchTerm;
  }

}
