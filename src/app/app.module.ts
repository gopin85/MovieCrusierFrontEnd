import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule,MatPaginatorModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { MovieModule } from './modules/movie/movie.module';
import { AppComponent } from './app.component';


const appRoutes:Routes=[
  {
    path:'',
    redirectTo:'/movies/userLogin',
    pathMatch:'full',
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MovieModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatPaginatorModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    MatSnackBarModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
