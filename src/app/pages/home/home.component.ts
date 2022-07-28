import { NewsService } from './../../services/news.service';
import { Component, OnInit } from '@angular/core';
export interface Post {
  author: string;
  comment_text: string;
  story_url: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];
  constructor(
    private readonly newsService: NewsService
  ) {
   }

  ngOnInit(): void {
    this.newsService.getNews('angular').then(posts => {
      console.log(posts.data)
      this.posts = posts.data.hits;
    });
  }

}
