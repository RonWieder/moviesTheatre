import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Observable, fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit, OnDestroy {

  @Input() placeHolder: string;
  @Output() searchMovie: EventEmitter<string> = new EventEmitter();
  searchTerm: string;
  eventStream: Subscription;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.eventStream = fromEvent<MouseEvent>(this.elementRef.nativeElement, 'keyup')
      .pipe(debounceTime(300)).subscribe(input => this.searchMovie.emit(this.searchTerm));
  }

  ngOnDestroy(): void {
    this.eventStream.unsubscribe();
  }
}
