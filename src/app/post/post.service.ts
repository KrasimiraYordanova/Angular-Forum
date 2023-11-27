import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  loadPosts(limit?: number) {
    return this.httpClient.get(`${apiURL}/posts${limit ? `?limit=${limit}` : ``}`);
  }
}
