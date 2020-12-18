import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddProduct } from '../../store/product/product.action';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewProductComponent implements OnInit {
  public productForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly store: Store) { }

  ngOnInit(): void {
    this.initProductForm();
  }

  initProductForm(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: [''],
      price: [0],
    });
  }

  submit(): void {
    if (this.productForm.invalid) {
      return;
    }

    this.store.dispatch(AddProduct({
      ...this.productForm.value
    }));
  }
}
