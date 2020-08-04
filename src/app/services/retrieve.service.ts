import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../entities/product';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})


export class RetrieveService {
  prod : Product;
  queryStr:string = "";
  header:HttpHeaders;
  

  constructor(private http: HttpClient) { 
  }

  getProductsByCode(code:number) : Observable<Product[]> {
    return this.getObservableProductsByCode(code);
  }

  getProductsByDescr(descr:string) : Observable<Product[]> {
    return this.getObservableProductsByDescription(descr);
  }
/*
  getProductsByCode(code: number) : Array<Product> {
   this.getObservableProductsByCode(code).subscribe(
   (res) => {
     this.response = res;
     
    },(error) => {
      console.log("error", error);
    }
    )
    this.prod = new Product(1, "BRAND", 
    "desc","http://www.lider.cl",
      123, 50, 246);
  this.response.push(this.prod);
    return this.response;
  }
*/
/*
  getProductsByDescription(description: string) : Array<Product> {
   this.getObservableProductsByDescription(description).subscribe(
   (res) => {
      res.forEach(item => {
        this.response.push(item);
      })
    },(error) => {
      console.log("error", error);
    }
    
    )
    return this.response;
  }
  */
  getObservableProductsByCode(code: number) : Observable<Product[]> {
    return this.http.get<Product[]>(environment.back+'/search/products?code='+code);
  }

  getObservableProductsByDescription(description: string): Observable<Product[]>{
    return this.http.get<Product[]>(environment.back+'/search/products?descr='+description);
  }
}
