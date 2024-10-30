import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getFileContent(url: string) {
    return this.http.get(url, { responseType: 'text' });
  }
}
