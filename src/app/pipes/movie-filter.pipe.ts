import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../models/movie';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], term: string): Movie[] {
    //check if the search term is defined
    if (!movies || !term) return movies;

    //return updated animals array
    return movies.filter((movie) => {
      return movie.title.toLowerCase().includes(term.toLowerCase());
    })
  }

}
