import { Component, OnInit,Input,Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Movie } from '../../../movie';
import { MovieService } from '../../../movie.service';
import { PageRefresherService } from '../../../page-refresh.service';

@Component({
  selector: 'watchlisted-movie-details',
  templateUrl: './moviedetails.component.html',
})

export class WatchlistedMovieDetailsComponent implements OnInit {
  @Input() movieDetails:Movie;
  @Output()
  movieList:Array<Movie>

  constructor(private movieService:MovieService,private snackBar:MatSnackBar,private router : Router,
    private pageRefresher: PageRefresherService) { 
      this.pageRefresher.attach(router);
    this.movieList=[];
  }

   ngOnInit() {
    
  }

  removeFromWatchlist(){
    this.movieService.deleteMovie(this.movieDetails.id).subscribe(()=>{
      this.snackBar.open('Movie removed from watchlist','',{
        duration:1000
      });
      this.router.navigate(["/movies/watchlist"]);
    });
  }

  getMovieDetails(){
    this.router.navigate(['movies/movie_details/'+this.movieDetails.id]);
  }

}
