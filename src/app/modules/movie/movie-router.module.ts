import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { TmdbContainerComponent } from './components/tmdb-container/tmdb-container.component';
import { WatchlistComponent } from './components/moviewatchlist/moviewatchlist.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { loginComponent } from './components/login/login.component';
import { UserLoginGuardService } from '../movie/components/userAuthloginservice/userlogin-guardservice';
import { RegisterationComponent } from '../movie/components/registration/registeration.component';

const moviesRoutes: Routes = [
    {
        path: 'movies',
        children: [
            {
                path: '',
                redirectTo: '/movies/userLogin',
                pathMatch: 'full',
            },
            {
                path: 'userLogin',
                component: loginComponent,
            },
            {
                path: 'registeration',
                component: RegisterationComponent,
            },
            {
                path: 'popular',
                component: TmdbContainerComponent,
                data: {
                    movieType: 'popular',
                },
                canActivate: [UserLoginGuardService],
            },
            {
                path: 'top_rated',
                component: TmdbContainerComponent,
                data: {
                    movieType: 'top_rated',
                },
                canActivate: [UserLoginGuardService],
            },
            {
                path: 'watchlist',
                component: WatchlistComponent,
                canActivate: [UserLoginGuardService],
            },
            {
                path: 'movie_details/:id',
                component: MovieDetailsComponent,
                canActivate: [UserLoginGuardService],
            },
            {
                path: 'searchlist/:movieName',
                component: MovieListComponent,
                canActivate: [UserLoginGuardService],
            },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(moviesRoutes),
    ],
    exports: [
        RouterModule,
    ]
})
export class MovieRouterModule { }

