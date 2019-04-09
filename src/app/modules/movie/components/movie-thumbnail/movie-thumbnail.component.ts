import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'movie-thumbnail',
    templateUrl: './movie-thumbnail.component.html', 
    styleUrls: ['./movie-thumbnail.component.css']   
})

export class MovieThumbnailComponent implements OnInit {
    @Input()
    movie: Movie;
    public movies: Movie;
    watchListedMovies: Movie[];
  
    constructor(private movieService: MovieService, private snackBar: MatSnackBar, private route: Router) {
    }
  
    ngOnInit() {
    }
  
    //navigating to movie details page
    getMovieDetails() {
      this.route.navigate(['movies/movie_details/' + this.movie.id]);
    }
}