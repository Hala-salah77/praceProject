import { NgIf, NgFor, NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,NgIf, NgFor,NgForOf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  @Input() is_show: boolean = true;  

  constructor() { }

  ngOnInit(): void {
  }
  
  scrolltop(): void {
    window.scrollTo(0, 0);
  }

  companyLinks = [
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Work', route: '/case-studies' },
    { label: 'Contact us', route: '/contact' }
  ];
  
  socialLinks = [
    { label: 'Facebook', url: 'https://www.facebook.com/' },
    { label: 'Instagram', url: 'https://www.instagram.com/' },
    { label: 'Twitter', url: 'https://x.com/' }
  ];
  
  contactInfo = [
    { label: '+0110000000', url: 'tel:+0110000000' },
    { label: 'brace@company.com', url: 'mailto:brace@company.com' }
  ];
  
}
