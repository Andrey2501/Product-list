import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IProduct } from '../../store/shared/interfaces/product.interface';
import { LoadProducts } from '../../store/product/product.action';
import { selectProductsState, selectTotalCountProductsState } from '../../store/product/product.selector';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  private readonly LIMIT_OF_PRODUCTS_PER_PAGE = 10;
  public page = 1;
  public products$: Observable<IProduct[]>;
  public totalCountProducts$: Observable<number>;


  constructor(private readonly store: Store) {
    this.products$ = this.store.select(selectProductsState);
    this.totalCountProducts$ = this.store.select(selectTotalCountProductsState);
  }

  ngOnInit(): void {
    this.store.dispatch(LoadProducts({props: this.page}));
  }

  getCountPages(countProducts: number): number {
    return Math.ceil(countProducts / this.LIMIT_OF_PRODUCTS_PER_PAGE);
  }

  nextPage(): void {
      this.page++;
      this.store.dispatch(LoadProducts({props: this.page}));
  }

  prevPage(): void {
      this.page--;
      this.store.dispatch(LoadProducts({props: this.page}));
  }

  checkNextPage(totalCountProducts: number): boolean {
    const currentTotalProducts = this.page * this.LIMIT_OF_PRODUCTS_PER_PAGE;

    return totalCountProducts <= currentTotalProducts;
  }
}
