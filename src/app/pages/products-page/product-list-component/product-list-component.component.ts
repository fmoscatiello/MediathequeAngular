import { Component, Input } from '@angular/core';
import { ProductCardComponentComponent } from "../product-card/product-card-component.component";

@Component({
    selector: 'app-product-list-component',
    standalone: true,
    templateUrl: './product-list-component.component.html',
    styleUrl: './product-list-component.component.css',
    imports: [ProductCardComponentComponent]
})
export class ProductListComponentComponent {

@Input()
products: any[] = [];

}
