import { Component } from '@angular/core';
import { SplitmediaTextComponent } from './../../shared/compoents/splitmedia-text/splitmedia-text.component';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [SplitmediaTextComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
}
