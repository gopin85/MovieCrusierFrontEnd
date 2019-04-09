import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, } from "@angular/router";
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'movie-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  watchListed: Movie[];
  canUpdateComment: boolean;
  constructor(private route: ActivatedRoute, private movieService: MovieService,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let movieDetailsId = params["id"];
      this.movieService.getWatchListedMovies(0,0).subscribe(z => {
        z.forEach(y => {
          if (y.id == movieDetailsId) {
            this.movie.is_WishList_Added = true;
            this.movie.is_Comments_Added = y.is_Comments_Added;
            this.movie.comments = y.comments;
            this.canUpdateComment = y.is_Comments_Added;
          }
        })
      })
      this.movieService.getMovieDetials(movieDetailsId).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

  //To get movies from tmdb and watchlist (local db)
  getMovieDetials(movieDetailsId) {
    this.movieService.getWatchListedMovies(0,0).subscribe(z => {
      z.forEach(y => {
        if (y.id == movieDetailsId) {
          this.movie.is_WishList_Added = y.is_WishList_Added;
          this.movie.is_Comments_Added = y.is_Comments_Added;
          this.movie.comments = y.comments;
          this.canUpdateComment = y.is_Comments_Added;
        }
      })
    })
    this.movieService.getMovieDetials(movieDetailsId).subscribe(movie => {
      this.movie = movie;
    });
  }

  //To add a Movie in watchlist
  addToWatchlist() {
    if (this.movie.is_WishList_Added || this.movie.is_Comments_Added) {
      this.movie.is_WishList_Added = true;    
      this.movieService.updateMovieComments(this.movie).subscribe(() => {
        this.snackBar.open('Movie Added To Watchlist', '', {
          duration: 1000
        });
      });
    } else {
      this.movie.is_WishList_Added = true;    
      this.movieService.addMovieTowatchlist(this.movie).subscribe(() => {
        this.snackBar.open('Movie Added To Watchlist', '', {
          duration: 1000
        });
      });
    }
  }

  //To remove a Movie from watchlist
  removeFromWatchlist() {
    this.movie.is_WishList_Added = false;
    this.movieService.deleteMovie(this.movie.id).subscribe(() => {
      this.snackBar.open('Movie removed from watchlist', '', {
        duration: 1000
      });
    });
  }

  //To add comment for the movie  
  addComment(value: string) {
    this.movie.comments = value;  
    this.movieService.updateMovieComments(this.movie).subscribe(() => {
    });  
  }  
}
