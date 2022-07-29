import { NewsService } from './../../services/news.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/pages/home/home.component';
import { query } from '@angular/animations';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() info : Post;

  constructor(
    private readonly newsService: NewsService
  ) {
    this.info = {
      author: '',
      story_title: '',
      story_url: '',
      created_at: '',
      objectID: '',
      query: ''
    }
   }

  async ngOnInit(): Promise<void> {
    this.info['like'] = await this.verifyLike();
    console.log("info", this.info.like);
  }

  verifyLike() {
    return this.newsService.getLikeByPost(this.info.query, this.info.objectID);
  }

  changeLike() {
    if(this.info.like) {
      this.newsService.deleteLikeOnLocalStorage(this.info.query, this.info.objectID);
      this.info.like = !this.info.like;
      return;
    }
    this.newsService.setLikeOnLocalStorage(this.info.query,this.info.objectID, this.info);
    this.info.like = !this.info.like;
    return;
  }

}
