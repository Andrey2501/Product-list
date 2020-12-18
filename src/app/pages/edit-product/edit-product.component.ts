import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getProductById } from '../../store/product/product.selector';
import { Store } from '@ngrx/store';
import { IProduct } from '../../store/shared/interfaces/product.interface';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RemoveProduct, UpdateProduct } from '../../store/product/product.action';

@UntilDestroy()
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProductComponent implements OnInit {
  public productForm: FormGroup;
  public product: IProduct;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly store: Store,
              private readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const productId = +this.activatedRoute.snapshot.paramMap.get('id');

    this.setProduct(productId);

    this.initProductForm();
  }

  setProduct(productId: number): void {
    this.store.select(getProductById(productId))
      .pipe(untilDestroyed(this))
      .subscribe(product => this.product = product);
  }

  initProductForm(): void {
    this.productForm = this.formBuilder.group({
      name: [this.product.name, Validators.required],
      category: [this.product.category],
      price: [this.product.price],
    });
  }

  submit(): void {
    this.store.dispatch(UpdateProduct({
      ...this.product,
      ...this.productForm.value
    }));
  }

  remove(event: any): void {
    event.preventDefault();
    this.store.dispatch(RemoveProduct({
      props: this.product.id
    }));
  }

}
