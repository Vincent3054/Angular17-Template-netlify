import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { BreadcrumbComponent } from '../../main/breadcrumb/breadcrumb.component';

@Component({
  selector: 'layout-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FooterComponent,HeaderComponent,BreadcrumbComponent],
  templateUrl: './layout-card.component.html',
  styles: [],
})
export class LayoutCardComponent {}
