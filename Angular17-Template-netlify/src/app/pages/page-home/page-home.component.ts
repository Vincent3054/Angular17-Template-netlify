import { Component } from '@angular/core';
import { SplitmediaTextComponent } from './../../shared/compoents/splitmedia-text/splitmedia-text.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [SplitmediaTextComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {

}
