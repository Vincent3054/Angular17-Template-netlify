import { Routes } from '@angular/router';
import { LayoutCardComponent } from './layouts/main/layout-card/layout-card.component';
import { STATIC_ROUTES } from './core/guards/routes.constant';
import { BREADCRUMB } from './layouts/main/breadcrumb/breadcrumb.constant';

export const routes: Routes = [
  {
    path: '',
    component: LayoutCardComponent,
    children: [
      /**首頁 */
      {
        path: STATIC_ROUTES.HOME,
        loadComponent: () =>
          import('./pages/page-home/page-home.component').then(
            (c) => c.PageHomeComponent
          ),
        data: {
          breadcrumb: BREADCRUMB.HOME,
        },
      },
      {
        path: STATIC_ROUTES.Order,
        loadComponent: () =>
          import('./pages/order/order.component').then(
            (c) => c.OrderComponent
          ),
        // data: {
        //   breadcrumb: BREADCRUMB.HOME,
        // },
      },
    ]
  }
];
