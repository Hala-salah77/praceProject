import { Component,OnInit  } from '@angular/core';
import { FooterComponent } from '../../sherd components/footer/footer.component';
import { NgForOf } from '@angular/common';
import { FormComponent } from '../../sherd components/form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent,NgForOf,FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit{
  ngOnInit() {
    window.scrollTo(0, 0);
  }

  contact_items :any = [
    [
      {src:`chatting-01.png`,h3_text:`Chat to sales`,p_text:`Speak to our friendly team.`,alt_text:`chat icon`,span_text:`info@brace.com`},
      {src:`location-05.png`,h3_text:`Visit us`,p_text:`Visit our head office.`,alt_text:`location icon`,span_text:`View on Google Maps`},
      {src:`Phone.png`,h3_text:`Call us`,p_text:`Mon-Fri from 8am to 5pm.`,alt_text:`call icon`,span_text:`+20 110170829`},
    ],
    [
      {label_text:`Name*`,type:`text`,placeholder:`Jane`,id:`name`},
      {label_text:`Email*`,type:`email`,placeholder:`jane@example.com`,id:`email`},
      {label_text:`Phone Number*`,type:`text`,placeholder:`xxxx-xxxx-xxxx`,id:`number`},
    ]
  ]
  

}
