import { Component, HostListener, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './../../sherd components/footer/footer.component';
import { NgForOf } from '@angular/common';
import { CasesItemsHome } from './../../sherd components/interfaces/cases-items-home';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,FooterComponent,NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  width: number = 0;
  height: number = 0;

  ngOnInit() {
    // this.calculateDimensions();
    this.scrolltop();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // this.calculateDimensions();
  }

  // calculateDimensions() {
  //   this.width = window.innerWidth;
  //   this.height = window.innerHeight;
    // window.scrollTo(1000, 1000);
    // console.log(` ${this.width}px,${this.height}px`);
  // }
  
  scrolldown(): void {
    window.scrollTo(0, 1300);
  };
  scrolltop(): void {
    window.scrollTo(0,0);
  };

  cases_items:CasesItemsHome[] = [
    {
      h3_text:`Life Hospital`,
      p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,
      img_src:`Rectangle 3.png`
    },
    {
      h3_text:`Makani App`,
      p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,
      img_src:`Rectangle 3 (1).png`
    },
    {
      h3_text:`iPharmacy App`,
      p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,
      img_src:`Rectangle 3 (2).png`
    },
    {
      h3_text:`Medjol Web/App`,
      p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,
      img_src:`Rectangle 3 (3).png`
    },
  ];

  amazing_clients_items=[
    [
      {src:`SVxsxddG.png`,alt_text:`compny logo`},
      {src:`SVG (1).png`,alt_text:`compny logo`},
      {src:`SVG (2).png`,alt_text:`compny logo`},
      {src:`SVG (7).png`,alt_text:`compny logo`},
    ],
    [
      {src:`SVG (6).png`,alt_text:`compny logo`},
      {src:`SVG (5).png`,alt_text:`compny logo`},
      {src:`SVG (4).png`,alt_text:`compny logo`},
      {src:`SVG (3).png`,alt_text:`compny logo`},
    ]
  ];

  our_services_items=[
    [
      {h3_text:`Web Development`,p_text:`From traffic to conversions, from clicks to connections; this is how seamless and reliable our web development services are.`,src:`taking-a-mobile-photo.png`,alt_text:`compny logo`},
      {h3_text:`Mobile Development`,p_text:`A world that is constantly on the move needs something as versatile, flexible, and easy, and an interactive mobile application.`,src:`coding-a-website.png`,alt_text:`compny logo`},
    ],
    [
      {h3_text:`E-COMMERCE SOLUTIONS`,p_text:`What’s tricky about running a successful e-commerce platform is that if it’s not perfect, it’s doomed to go unnoticed. `,src:`digital-ads.png`,alt_text:`compny logo`},
      {h3_text:`OFFSHORE SOLUTIONS`,p_text:`Why limit your horizons? With our offshore solutions, you tap into a global pool of talent without the global-sized costs.`,src:`hot-air-balloon.png`,alt_text:`compny logo`},
      {h3_text:`APPOINTMENT BOOKING`,p_text:`Time is the one commodity we can’t make more of, but we can help you manage it better. The scheduling chaos is something you don’t need so you can focus on what you do best.`,src:`designer-color-palette.png`,alt_text:`compny logo`},
    ],
    [
      {h3_text:`Product Development`,p_text:`When it comes to innovation we know no limits and so should you. Thought of creating the perfect product and don’t know where to start?`,src:`manager-desk.png`,alt_text:`compny logo`},
      {h3_text:`UI/UX`,p_text:`Great design is invisible, it just works. Our UI/UX gurus create interfaces that are as delightful to use as they are to look at.`,src:`wireframe.png`,alt_text:`compny logo`},
    ],
  ];


}
