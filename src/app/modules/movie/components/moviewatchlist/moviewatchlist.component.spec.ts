import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistComponent } from './moviewatchlist.component';
import { MovieService } from '../../movie.service';
import { Movie } from '../../movie';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WatchlistComponent', () => {
  let component: WatchlistComponent;
  let fixture: ComponentFixture<WatchlistComponent>;
  let movieServiceSpy: jasmine.SpyObj<MovieService>;  
});
