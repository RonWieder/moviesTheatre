import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {

  @Input() placeHolder: string;
  @Output() searchMovie: EventEmitter<string> = new EventEmitter();
  searchTerm: string;

  constructor(private elementRef: ElementRef) {
    const eventStream = fromEvent(elementRef.nativeElement, 'keyup')
      .pipe(debounceTime(300))

    eventStream.subscribe(input => this.searchMovie.emit(this.searchTerm));
  }

  onChange() {

  }

}
