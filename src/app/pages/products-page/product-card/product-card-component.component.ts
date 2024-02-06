import { CommonModule, SlicePipe } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card-component',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponentComponent {

  @Input()
  product!: any;

}
