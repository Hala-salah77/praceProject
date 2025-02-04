  import { NgClass, NgForOf } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Collapse } from 'bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgClass, 
    NgForOf,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbarDiv') navbarDiv!: ElementRef;
  private bsCollapse!: Collapse;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    if (this.navbarDiv) {
      this.bsCollapse = new Collapse(this.navbarDiv.nativeElement, {
        toggle: false
      });
    }
  }

  closeNavbar() {
    if (this.bsCollapse && this.navbarDiv.nativeElement.classList.contains('show')) {
      this.bsCollapse.hide();
    }
  }

  isActive(keyword: string): boolean {
    return this.router.url.includes(keyword) || (keyword === 'case-studies' && this.router.url.includes('case-details'));
  }

  nav_items = [
    { isActive: 'home', name: 'Home', link: 'home', li_class: '' },
    { isActive: 'about', name: 'About', link: 'about', li_class: '' },
    { isActive: 'services', name: 'Services', link: 'services', li_class: '' },
    { isActive: 'case-studies', name: 'Case Studies', link: 'case-studies', li_class: '' },
    { isActive: 'contact', name: 'Contact', link: 'contact', li_class: 'borded me-0' },
  ];
}
