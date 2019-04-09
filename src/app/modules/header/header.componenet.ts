import {Component} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'header',
    templateUrl: './header.component.html',    
})

export class HeaderComponent {
    title: string = 'Movie Cruiser'

}