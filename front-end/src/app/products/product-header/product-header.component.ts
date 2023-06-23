import { Component, Output, EventEmitter } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-product-header',
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.css']
})
export class ProductHeaderComponent {
  items: MenuItem[];
  activeItem: MenuItem ;

  @Output() outputEvent = new EventEmitter<string>();

  constructor() {
    this.items = [
        { label: 'All', icon: 'pi pi-fw pi-home' },
        { label: 'Featured', icon: 'pi pi-fw pi-calendar' },
        { label: 'Out of stock', icon: 'pi pi-fw pi-pencil' },
        { label: 'Visible', icon: 'pi pi-fw pi-file'},
        { label: 'Not Visible', icon: 'pi pi-fw pi-cog'  }
    ];
    this.activeItem = this.items[0]
  }

  onActiveItemChange(event : any){
    this.activeItem = event;
    console.log(event)
    this.outputEvent.emit(event.label)
    // this.router.navigateByUrl(event.routerLink)
  }

}
