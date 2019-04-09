import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Movie } from './movie';
import { environment } from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  tmdbEndPoint: string;
  imagePrefix: string;
  apiKey: string;
  watchlistEndpoint: string;
  searchlistEndpoint: string;

  constructor(private http: HttpClient) {
    this.apiKey = environment.apiKey;
    this.tmdbEndPoint = environment.tmdbEndPoint;
    this.imagePrefix = environment.imagePrefix;
    this.watchlistEndpoint = environment.watchlistEndpoint;
    this.searchlistEndpoint = environment.searchlistEndpoint;
  }  

  //get headers
  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({      
      'Content-Type': 'application/json',      
      'Accept': 'application/json'      
    });
    return headers;
  }

  //To get all the movies with pagination from tmdb
  getMovies(type: string, page: number = 1): Observable<Array<Movie>> {
    const endpoint = `${this.tmdbEndPoint}/${type}?${this.apiKey}&page=${page}`;
    return this.http.get(endpoint).pipe(
      retry(3),
      map(this.pickMovieResponse),
      map(this.transformPosterPath.bind(this))
    );
  }

  //To get movies based on search from tmdb
  getSearchlistMovies(name: string, page:number=1): Observable<Array<Movie>> {
    const endpoint = `${this.searchlistEndpoint}?${this.apiKey}&query=${name}&page=${page}&include_adult=false`;
    return this.http.get(endpoint).pipe(
      retry(3),
      map(this.pickMovieResponse),
      map(this.transformPosterPath.bind(this))
    );
  }

  //Construct Posterpath
  transformPosterPath(movies): Array<Movie> {
    return movies.map(movie => {
      movie.poster_path = `${this.imagePrefix}${movie.poster_path}`;
      return movie;
    });
  }

  //To return the response as array of results
  pickMovieResponse(response) {
    return response['results'];
  }

  //To return response
  pickResponse(response) {
    return response;
  }

  //To add movie to watchlist (local db)
  addMovieTowatchlist(movie) {   
    return this.http.post(this.watchlistEndpoint, movie, { headers: this.getHeaders() });
  }

  //To update comments for a movie in the watchlist (local db)
  updateMovieComments(movie) {    
    return this.http.put(this.watchlistEndpoint + "/id?id=" + movie.id + " &comments=" + movie.comments, { headers: this.getHeaders() });
  }

  //To get all movies from watchlist (local db)
  getWatchListedMovies(pageNo: number,resultPerPage: number ): Observable<Array<Movie>> {   
    return this.http.get<Array<Movie>>(this.watchlistEndpoint+ "?pageNo=" + pageNo + " &resultPerPage=" + resultPerPage).pipe(
      catchError(this.errorHandler)
    );
  }

  //To get movie details from tmdb 
  getMovieDetials(id: number): Observable<Movie> {
    const movieUrl: string = this.tmdbEndPoint + "/" + id.toString() + "?" + this.apiKey;
    return this.http.get(movieUrl).pipe(
      map(this.pickResponse),
      map(this.transformPath.bind(this))
    );
  }

  //To get a movie from watchList (local db)
  public getMovie(id: number): Observable<Movie> {
    const movieUrl = `${this.watchlistEndpoint}/${id}`;
    return this.http.get(movieUrl).pipe(
      retry(3),
      map(this.transformPath.bind(this))
    );
  }

  //To construct movie poster path
  transformPath(movie): Movie {
    console.log(movie);
    movie.poster_path = `${this.imagePrefix}${movie.poster_path}`;    
    return movie;
  }

  //Delete a movie from watchList (local db)
  deleteMovie(id: number) {
    const movieUrl = `${this.watchlistEndpoint}/?id=${id}`;
    return this.http.delete(movieUrl, {headers: this.getHeaders()}).pipe(catchError(this.errorHandler));
  }

  //Error handling
  private errorHandler(error: Response): Observable<any> {
    return throwError(error);
  }
}
