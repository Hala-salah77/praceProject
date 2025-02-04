import { Component ,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../sherd components/footer/footer.component';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './notfound.component.html',
  styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    window.scrollTo(0,89);
  }

}
