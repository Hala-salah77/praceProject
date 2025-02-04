import { Component , OnInit} from '@angular/core';
import { RouterOutlet,NavigationEnd, Router } from '@angular/router';
import { NavbarComponent } from '../Components/sherd components/navbar/navbar.component';
import { NgIf } from '@angular/common';
import { FooterComponent } from '../Components/sherd components/footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    // FooterComponent,
    NgIf,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BraceWebsite';
  isLoading = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; 
    }, 2300);
  }
  showLoadingForHome = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // إذا كان المسار يحتوي على "home"، فعل التحميل
        this.showLoadingForHome = event.urlAfterRedirects === '/home';
      }
    });
  }

}
