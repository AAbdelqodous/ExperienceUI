import { Component, OnInit } from '@angular/core';
// PrimeNG Modules
import { MegaMenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [ MenubarModule, MegaMenuModule ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  items: MegaMenuItem[] = [];

    ngOnInit() {
      this.items = [
            {
              label: 'Products', icon: 'pi pi-fw pi-tags',
              items: [
                [
                  {
                    label: 'Places',
                    items: [
                      { label: 'Places', routerLink: '/places' },
                      { label: 'New Place', routerLink: '/new-place' },
                      { label: 'Place Details', routerLink: '/place-details' }
                    ]
                  },
                  {
                    label: 'Edit',
                    items: [{ label: 'Update Product' }, { label: 'Manage Products' }]
                  }
                ],
                [
                  {
                    label: 'Sales',
                    items: [{ label: 'View Sales' }, { label: 'Manage Sales' }]
                  },
                  {
                    label: 'Inventory',
                    items: [{ label: 'View Inventory' }, { label: 'Manage Inventory' }]
                  }
                ]
              ]
            },
            {
              label: 'Customers', icon: 'pi pi-fw pi-users',
              items: [
                [
                  {
                    label: 'New',
                    items: [{ label: 'Add Customer' }, { label: 'Delete Customer' }]
                  },
                  {
                    label: 'Edit',
                    items: [{ label: 'Update Customer' }, { label: 'Manage Customers' }]
                  }
                ],
                [
                  {
                    label: 'Support',
                    items: [{ label: 'Customer Support' }, { label: 'Technical Support' }]
                  },
                  {
                    label: 'Feedback',
                    items: [{ label: 'Customer Feedback' }]
                  }
                ]
              ]
            }
          ];
    }
}
