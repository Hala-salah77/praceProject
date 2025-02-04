import { NgForOf } from '@angular/common';
import { Component, ElementRef ,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sherd components/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgForOf,RouterLink,FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  ngOnInit() {
    // window.scrollTo(0, 0);
  }
  svgs:any[] = [

    ]
  the_one_item_id:number = 0;

  items:any[] = [
    {
      id:0,link_text:'Web development ',
      p_1:`From traffic to conversions, from clicks to connections; this is how seamless and reliable our web development services are.`,
      p_2:`We speak in advanced technologies and high-end solutions to create the perfect storefront for your digital world, providing existing and potential customers with a functionally robust and aesthetically pleasing website.`,
      p_3:`Whether you’re looking for a simple landing page, an interactive web application, or a corporate website, we can do it all from scratch starting with the unique design, connecting a domain, analyzing traffic, and optimizing for SEO ensuring your website`,
      p_4:`stays on top at all times`,
      p_5:`Our no.1 priority is to ensure your site isn’t just visited but truly experienced across all devices smoothly and constantly.`,
      img:'coding-a-website (1).png'
    },
    {
      id:1,link_text:'Mobile Development ',
      p_1:`A world that is constantly on the move needs something as versatile, flexible, and easy, and an interactive mobile application experience is of the greatest importance in this mobile-first world.`,
      p_2:`At BRACE, we understand such necessity and are dedicated to avoiding modern-day challenges through crafting exclusive and customized app structures that have a commanding presence on both iOS and Android,`,
      p_3:`resulting in a mobile application that is an extension of your brand into your customers’ pockets. `,
      p_4:`Engagement and effectiveness are our main drivers when we design mobile applications making sure every user will love the`,
      p_5:`experience and keep coming back for more.`,
      img:'taking-a-mobile-photo.png'
    },
    {
      id:2,link_text:'Product Development ',
      p_1:`When it comes to innovation we know no limits and so should you. `,
      p_2:`Thought of creating the perfect product and don’t know where to start? At BRACE, on our path from vision to reality, we guide you through every step of the product lifecycle, starting from in-depth market analysis to a strategic business plan while taking a creative approach to ensure that your product appeals to the target market and conforms with your business objectives and market trends.`,
      p_3:`Fan your spark of an idea into a blazing reality with our professional product development team who will take you on a collaborative adventure from ideation to product launch!`,
      img:'wireframe.png'
    },
    {
      id:3,link_text:'UI/UX',
      p_1:`Great design is invisible, it just works. Our UI/UX gurus create interfaces that are as delightful to use as they are to look at.`,
      p_2:`We believe in designs that tell stories, interfaces that guide without intruding, and user experiences that leave a lasting impression long after the screen dims.`,
      img:'manager-desk.png'
    },
    {
      id:4,link_text:'E-commerce Solutions',
      p_1:`What’s tricky about running a successful e-commerce platform is that if it’s not perfect, it’s doomed to go unnoticed. `,
      p_2:`The ever-growing competition in today’s fast- paced world is leaving very little with a chance to stand out, and that’s why your platform needs to do more than just function, it needs to perform at its best! A full customization of online stores, integration of payment gateways, and implementation of customer-relationship tools are what we offer with our e-commerce solutions.`,
      p_3:`Not only does our attention to every detail regarding your platform help optimize conversions, but it also builds ones that are secure, scalable, and irresistibly shapable.`,
      img:'digital-ads.png'
    },
    {
      id:5,link_text:'Offshore Solutions',
      p_1:`Why limit your horizons? With our offshore solutions, you tap into a global pool of talent without the global- sized costs. `,
      p_2:`We provide cost-effective development services that never compromise on quality. `,
      p_3:`Think of it as having a world-class team next door—no matter where “next door” happens to be.`,
      p_4:`We manage all aspects of recruitment, training, and infrastructure, allowing you to focus on your core business objectives while enjoying lower operating expenses and higher production.`,
      img:'hot-air-balloon.png'
    },
    {
      id:6,link_text:'Appointment Booking Solutions',
      p_1:`Time is the one commodity we can’t make more of, but we can help you manage it better. `,
      p_2:`The scheduling chaos is something you don’t need so you can focus on what you do best: delivering excellent service to your clients.`,
      p_3:`At BRACE, our Appointment Booking Solutions will save you the booking chaos with advanced custom booking systems that streamline the process. `,
      p_4:`Your clients’ satisfaction and excellent customer experience are also in our minds, thus with features like real-time availability, automated reminders, and easy rescheduling options, we ensure that managing appointments is as simple as possible.`,
      img:'designer-color-palette.png'
    },
    

  ];

  the_one_item:any = this.items[this.the_one_item_id];
  change_the_one_item_id(id:number){
    this.the_one_item_id = id;
    this.the_one_item = this.items[this.the_one_item_id];
  }

}
