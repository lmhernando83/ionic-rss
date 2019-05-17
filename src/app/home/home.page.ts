import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';
import { Feed } from 'src/app/model/feed';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  feeds: Array<Feed>;
  constructor(private feedService:FeedService){}

  showFeeds(){
    this.feedService.getFeeds().subscribe(data => {
      return this.feeds = data;
    });
  }

  ngOnInit(){
    this.showFeeds();
  }
}

