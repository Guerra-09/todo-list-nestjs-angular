import { Component } from '@angular/core';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

}
