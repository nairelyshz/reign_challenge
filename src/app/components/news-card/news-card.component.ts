import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  @Input() info : Post;

  constructor() {
    this.info = {
      author: '',
      comment_text: '',
      story_url: ''
    }
   }

  ngOnInit(): void {
  }

}
