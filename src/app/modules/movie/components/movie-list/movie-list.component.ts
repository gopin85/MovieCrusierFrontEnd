import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

//search movie component
@Component({
  selector: 'search-movie',
  templateUrl: './movie-list.component.html'  
})

export class MovieListComponent implements OnInit {
  movies: Array<Movie>;
  movieName: string;


  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) {
    this.movies = [];
    this.route.params.subscribe(params => {
      this.movieName = params['movieName'];
    });
    this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; }
  }

  //to search a movie by name
  ngOnInit() {
    this.onMoviesSearch();
  }

  onMoviesSearch(){
    this.movieService.getSearchlistMovies(this.movieName).subscribe(movies => {
      this.movies.push(...movies);
    });
  }
}
