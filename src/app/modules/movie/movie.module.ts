import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule,MatPaginatorModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MovieService } from './movie.service';
import { MovieRouterModule } from './movie-router.module';
import { MovieThumbnailComponent } from './components/movie-thumbnail//movie-thumbnail.component';
import { ContainerComponent } from './components/container/container.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { WatchlistComponent } from './components/moviewatchlist/moviewatchlist.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { WatchlistedMovieDetailsComponent } from './components/moviewatchlist/moviedetails/moviedetails.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { loginComponent } from './components/login/login.component';
import { userloginservice } from './components/userAuthloginservice/userloginservice';
import { RegisterationComponent } from './components/registration/registeration.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MovieRouterModule,
    MatCardModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
     MovieThumbnailComponent, 
     ContainerComponent, 
     WatchlistComponent, 
     TmdbContainerComponent,
     WatchlistedMovieDetailsComponent,
     MovieDetailsComponent,
     MovieListComponent,
     loginComponent,
     RegisterationComponent  
  ],  
  exports:[
    MovieRouterModule,
    MovieThumbnailComponent,
  ],
  providers:[MovieService]
})
export class MovieModule { }
