import axios,{  AxiosResponse } from 'axios';
import { Injectable } from '@angular/core';
import { Post } from '../pages/home/home.component';

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

  async getFavs(query: string) {
    const favs = await localStorage.getItem(query);
    if (favs) return JSON.parse(favs);
    return favs;
  }
  async setLikeOnLocalStorage(query: string, key: string, value: Post) {
    let favs = await this.getFavs(query) as any;
    if (favs){
      favs[key] = value;
    } else {
      favs = {};
      favs[key] = value;
    }
    localStorage.setItem(query, JSON.stringify(favs));
  }

  async deleteLikeOnLocalStorage(query: string, key: string) {
    let favs = await this.getFavs(query) as any;
    if (favs && favs[key]) {
      delete favs[key];
    }
    localStorage.setItem(query, favs);
  }

  async getLikeByPost(query:string, key: string) {
    let favs = await this.getFavs(query) as any;
    if (favs && favs[key]) {
      return true;
    }
    return false;
  }

  selectedFilter(filter: string) {
    localStorage.setItem("filter", filter);
  }

  async getSelectedFilter() {
    const filter = await localStorage.getItem("filter")
    return filter ? filter : '';
  }
}
