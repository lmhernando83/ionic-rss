import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/service/feed.service';
import { Feed } from 'src/app/model/feed';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  feeds: Array<Feed>;
  searchTerm: string = "";
  constructor(private feedService:FeedService, private modalController: ModalController){}

  showFeeds(){
    this.feedService.getFeeds().subscribe(data => {
      return this.feeds = data;
    });
  }

  setFilteredItems() {
    this.feeds = this.feedService.filterItems(this.searchTerm);
  }

  async openModal(feed){
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        data: feed
      }
    });
    modal.present();
  }

  ngOnInit(){
    this.showFeeds();
    this.setFilteredItems();
  }
}

