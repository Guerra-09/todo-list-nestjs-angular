import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

}
