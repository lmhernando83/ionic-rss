import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../model/feed';
import { environment } from 'src/environments/environment';

const API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feeds: Array<Feed>;

  constructor (private httpClient: HttpClient){}

  getFeeds() {
    this.httpClient.get(`${API}`)
      .toPromise()
      .then((feeds: Array<Feed>) => {
        this.feeds = feeds;
        return feeds;
      });
  }
}
