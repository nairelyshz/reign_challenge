import axios,{  AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor() { 
  }

  getNews(selection: string, page = 0): Promise<AxiosResponse> {
    const url = `https://hn.algolia.com/api/v1/search_by_date?query=${selection}&page=${page}`;
    return axios.get(url)
  }
}
