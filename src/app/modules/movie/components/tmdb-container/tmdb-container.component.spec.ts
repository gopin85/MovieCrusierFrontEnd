import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TmdbContainerComponent } from './tmdb-container.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';

describe('TmdbContainerComponent', () => {
  let component: TmdbContainerComponent;
  let fixture: ComponentFixture<TmdbContainerComponent>;
  let movieServiceSpy: jasmine.SpyObj<MovieService>;
});
