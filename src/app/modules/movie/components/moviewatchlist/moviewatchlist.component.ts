import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';
import { MovieService } from '../../movie.service';

//WatchlistComponent
@Component({
  selector: 'movie-watchlist',
  templateUrl: './moviewatchlist.component.html',
  styleUrls: ['./moviewatchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movies: Array<Movie>;
  private baseUrl: string = "http://localhost:50390/api/movie";
  page: number;
  pageSize: number;

  constructor(private movieService: MovieService) {
    this.movies = [];
    this.page=1;
    this.pageSize=5;
  }

  ngOnInit() {
    this.getWatchListedMovies(1, 5);
  }

  //To get WatchListed Movies
  getWatchListedMovies(pageIndex, pageSize) {
    this.movieService.getWatchListedMovies(pageIndex, pageSize).subscribe((movies) => {
      movies.forEach(x => {
        if (x.is_WishList_Added || true) {
          this.movies.push(x);
        }
      });
    });
  }

  onPagerChange(e) {
    this.page = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getWatchListedMovies(e.pageIndex, e.pageSize);
  }

}
