import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sherd components/footer/footer.component';
import { NgForOf } from '@angular/common';
import { FormComponent } from '../../sherd components/form/form.component';

@Component({
  selector: 'app-case-details',
  standalone: true,
  imports: [RouterLink,FooterComponent,NgForOf,FormComponent],
  templateUrl: './case-details.component.html',
  styleUrl: './case-details.component.scss'
})
export class CaseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {  
    window.scrollTo(0, 0);
  }
  service_timline=[
    [
      {span_text:`SERVICES`,li_class:``,span_class:`ul_head`},
      {span_text:`UI/UX`},
      {span_text:`E-Commerce`},
      {span_text:`Mobile Development`},
    ],
    [
      {span_text:`TIMELINE`,li_class:`mb-3`,span_class:`ul_head`},
      {span_text:`7 Months`},
    ],
  ]
  case_details:any=[
    [
      {h2_text:`The BRACE Solution`,src:`Pixel 7a (1).png`,p_text:`BRACE stepped in to provide iPharmacy with a robust set of digital solutions designed to elevate the customer experience while streamlining backend operations. Our team developed:`},
    ],
    [
      {h2_text:`Administration Portal`,src:`Rectangle 3 (1).png`,p_text:`A powerful backend system that allows iPharmacy to manage products, orders, and user data efficiently, ensuring smooth day-to-day operations.`},
      {h2_text:`Delivery Mobile App`,src:`Pixel 7a (3).png`,p_text:`A dedicated app for delivery personnel, ensuring quick and accurate dispatch and tracking of orders, improving the fulfillment process.`},
    ],
    [
      {h2_text:`End User Mobile App (iOS & Android)`,src:`Pixel 7a (2).png`,p_text:`A user-friendly mobile app that enables customers to browse, order, and track their medications and health products with ease, enhancing the overall experience.`},
      {h2_text:`Operations Dashboard`,src:`Pixel 7a (4).png`,p_text:`A comprehensive dashboard that provides insights into key operational metrics, helping iPharmacy monitor performance and optimize their services.`},
    ],
    [
      {src:`Pixel 7a (5).png`,h3_text:`Conclusion`,p_text:`BRACE's expertise in delivering robust digital solutions has transformed the way iPharmacy operates, enhancing customer experience and enabling efficient operations.`}
    ],
  ]

}
