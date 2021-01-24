import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieFilterPipe } from './pipes/movie-filter.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieSearchComponent,
    MovieFilterPipe,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    MoviesRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
