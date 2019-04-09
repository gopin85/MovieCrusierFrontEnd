import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule, MatSnackBar, MatToolbarModule, MatButtonModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { MovieThumbnailComponent } from './movie-thumbnail.component';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';

describe('ThumbnailComponent', () => {
  let component: MovieThumbnailComponent;
  let fixture: ComponentFixture<MovieThumbnailComponent>;
  let movieServiceSpy: jasmine.SpyObj<MovieService>; 
});
