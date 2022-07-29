import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
export interface Post {
  author: string;
  story_title: string;
  story_url: string;
  created_at: string;
  objectID: string;
  like?: boolean;
  query: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  selectionNews: string = "";
  notEmptyPost = true;
  notscrolly = true;
  page = 0;
  showLoader = false;
  currentTab = 0;
  constructor(
    private readonly newsService: NewsService
  ) {
   }

  async ngOnInit(): Promise<void> {
    this.selectionNews = await this.newsService.getSelectedFilter();
    if (this.selectionNews !== "") {
      this.loadPosts();
    }
  }

  loadPosts() {
    this.newsService.getNews(this.selectionNews,this.page).then(posts => {
      this.showLoader = false;
      this.posts = this.posts.concat(posts.data.hits);
      this.posts.map((post) => post['query']= this.selectionNews)
      this.notscrolly = true;
    });
  }

  onScroll() {
    if (this.notscrolly && this.notEmptyPost) {
      this.showLoader = true;
      this.notscrolly = false;
      this.page += 1;
      setTimeout(() => {
        this.loadPosts();
      }, 3000)
     }
  }

  onChangeSelection() {
    this.posts = [];
    this.page = 0;
    this.newsService.selectedFilter(this.selectionNews);
    if(this.currentTab === 0){
      this.showLoader = true;
     
      setTimeout(() => {
        this.loadPosts();
      }, 3000)
    } else {
      this.loadFavNews();
    }
    
  }

  async changeTab(tab: number) {
    this.posts = [];
    this.currentTab = tab;
    if(tab === 1) {
      this.loadFavNews();
    } else {
      this.loadPosts();
    }
  }

  async loadFavNews() {
    this.posts = [];
    const favs = await this.newsService.getFavs(this.selectionNews);
    for(let key of Object.keys(favs)) {
      this.posts.push(favs[key]);
    }
  }

}
