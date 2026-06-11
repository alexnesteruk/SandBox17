import {NgIf} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {SlideOutNavComponent} from './slide-out-nav/slide-out-nav.component';
import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SlideOutNavComponent,
    RouterLink,
    NgIf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onRouteActivated(component: any) {
    if (component.toggleMenuRequested) {
      component.toggleMenuRequested.subscribe(() => this.toggleMenu());
    }
  }

  title = 'SandBox17';

}
