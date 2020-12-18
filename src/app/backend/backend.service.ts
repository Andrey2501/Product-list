import { Injectable } from '@angular/core';
import { ProductService } from './apis/product.service';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(public readonly productService: ProductService) { }
}
