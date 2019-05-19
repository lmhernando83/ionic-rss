import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../model/feed';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/Operators';

const API = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  feeds: Array<Feed>;

  constructor (private httpClient: HttpClient){}

  getFeeds(): any {
    return this.httpClient.get(`${API}`)
    .pipe(
      map((data: any) => {
        return this.feeds = data.page.items;
      })
    )
  }

  filterItems(searchTerm) {
    return this.feeds.filter(feed => {
      return feed.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
