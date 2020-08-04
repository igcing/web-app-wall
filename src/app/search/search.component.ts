import { Component, OnInit } from '@angular/core';
import { RetrieveService } from '../services/retrieve.service';
import { Observable } from 'rxjs';
import { Product } from '../entities/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  querySearch : any;
  constructor(private retrieveService: RetrieveService) { }

  ngOnInit(): void {
    this.querySearch = "";
  }

  onKey(event: any) { // with type info
    this.querySearch = event.target.value;
  }

}
