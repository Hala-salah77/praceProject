import { Component ,OnInit  } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sherd components/footer/footer.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CarouselModule,ButtonModule,TagModule,RouterLink,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent  implements OnInit {
    products: any[] =[
        {
            id: '1001',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1002',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1003',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1004',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1005',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1006',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1007',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1008',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },
        {
            id: '1009',
            name: 'Bamboo Watch',
            h3_text:`Carlos Rivera`,
            p_description:`Creative Director`,
            description: 'Product Description',
            image: 'B-moke-up.png',
        },

    ]

    responsiveOptions: any[] | undefined;

    constructor() {}

    ngOnInit() {
        // window.scrollTo(0, 0);
        this.responsiveOptions = [
            {
                breakpoint: '1999px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '1800px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '991px',
                numVisible: 1,
                numScroll: 1
            },
        ];
    }

}
