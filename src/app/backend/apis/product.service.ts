import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../store/shared/interfaces/product.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  public getProducts(page: number): Observable<HttpResponse<IProduct[]>> {
    return this.http.get<IProduct[]>(`${environment.baseUrl}/products`, {
      observe: 'response',
      params: {
        _page: page.toString()
      }
    });
  }

  public getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.baseUrl}/products/${productId}`);
  }

  public addProduct(product: IProduct): Observable<any> {
    return this.http.post(`${environment.baseUrl}/products`, product);
  }

  public updateProduct(product: Partial<IProduct>): Observable<any> {
    return this.http.patch(`${environment.baseUrl}/products/${product.id}`, product);
  }

  public removeProduct(productId: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/products/${productId}`);
  }
}
