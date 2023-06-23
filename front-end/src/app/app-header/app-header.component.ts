import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  items: MenuItem[];
  activeItem: MenuItem = {};

  constructor(private router: Router) {
      this.items = [
          { label: 'Customer', icon: 'pi pi-fw pi-home', routerLink: '/customers' },
          { label: 'Products', icon: 'pi pi-fw pi-calendar', routerLink: '/products'  },
          { label: 'Category', icon: 'pi pi-fw pi-pencil', routerLink: '/category'  },
          { label: 'Orders', icon: 'pi pi-fw pi-file', routerLink: '/orders'  },
          { label: 'Quantity Discounts', icon: 'pi pi-fw pi-cog', routerLink: '/discounts'  }
      ];
  }

  ngOnInit(): void {
    
  }

  onActiveItemChange(event : any){
    this.activeItem = event;
    this.router.navigateByUrl(event.routerLink)
  }
  
}
