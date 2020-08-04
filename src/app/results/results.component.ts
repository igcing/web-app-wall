import { Component, OnInit, OnChanges, SimpleChanges, Input} from '@angular/core';
import {Product} from '../entities/product'
import { RetrieveService } from '../services/retrieve.service';
import { PageEvent } from '@angular/material/paginator';
import { stringify } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit,OnChanges {

  @Input() querySearch: string;
  productos: Product[]; 

  constructor(private retrieveService : RetrieveService) { }

  ngOnInit(): void {
    this.productos = [];
  }

  code : string ;
  ngOnChanges(changes: SimpleChanges): void {
    const pattern = /[0-9\+\-\ ]/;
    console.log(changes);
    console.log("largo de palabra: " +this.querySearch.length);
    if(this.querySearch.length >=3){
      if(pattern.test(this.querySearch)){
        this.getProductsbyCode(parseInt(this.querySearch));
      } else {
        this.getProductsbyDescr(this.querySearch);
      }
    }
  }
  getProductsbyCode(code:number) : void{
    this.retrieveService.getProductsByCode(code).subscribe( prods => this.productos = prods);
  }

  getProductsbyDescr(descr:string) : void{
    this.retrieveService.getProductsByDescr(descr).subscribe( prods => this.productos = prods);
  }
  
  /*paginacion*/
  length = 10;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  limitMax = 9999;
  limitSup = 0;
  limitInf = 0;
  limitMin = 0;
  /* ------ */

  pageChangeEvent(event){
    console.log("event: {} " , event);
    //console.log("productos: {} " , this.productos.length);
    console.log("paginas: {} " , this.length);
    /*this.limitMax = this.productos.length;
    this.limitInf = (event.pageIndex+event.pageSize);
    this.limitSup = event.pageIndex+event.pageSize;
    
    if(this.limitMax <= this.limitSup){
      this.productos = this.productos.slice(event.pageIndex*event.pageSize, this.limitMax)
    } else {
      this.productos.slice(event.pageIndex*event.pageSize, this.limitSup)
    }
    this.productos = this.productos.slice(event.pageIndex*event.pageSize, event.pageIndex+event.pageSize)
    */
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    console.log("setPageSizeOptions");
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }



}
