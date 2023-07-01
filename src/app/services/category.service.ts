import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Category} from "../models/category";
import {CategoriesResponse} from "../models/categories-response";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<CategoriesResponse>("https://opentdb.com/api_category.php")
      .pipe(map((response)=>{return response.trivia_categories}));
  }
}
