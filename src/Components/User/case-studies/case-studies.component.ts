import { Component , OnInit} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sherd components/footer/footer.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [RouterLink,FooterComponent,NgForOf],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.scss'
})
export class CaseStudiesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  big_logo=[
    {src:`image B.png`,alt_text:`character image`,li_class:`ch_1`},
    {src:`image R.png`,alt_text:`character image`,li_class:`ch_2`},
    {src:`image A.png`,alt_text:`character image`,li_class:`ch_3`},
    {src:`image C.png`,alt_text:`character image`,li_class:`ch_4`},
    {src:`image E.png`,alt_text:`character image`,li_class:`ch_5`},
    {src:`image O.png`,alt_text:`character image`,li_class:`ch_6`},
  ]
  cases_items=[
    {h3_text:`Life Hospital`,button_text:`View Case Study`,src:`Rectangle 3.png`,p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`,div_class:`position-relative`},
    {h3_text:`Makani App`,button_text:`View Case Study`,src:`Rectangle 3 (1).png`,p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`},
    {h3_text:`iPharmacy App`,button_text:`View Case Study`,src:`Rectangle 3 (2).png`,p_text:`Pioneering eCommerce platform tailored to meet the unique needs of the pharmaceutical industry in Egypt`},
    {h3_text:`Medjol Web/App`,button_text:`View Case Study`,src:`Rectangle 3 (3).png`,p_text:`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's`},
  ]
}
