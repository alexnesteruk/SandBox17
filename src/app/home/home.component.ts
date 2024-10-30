import { Component, OnInit } from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {GithubService} from "../service/github.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    HttpClientModule
  ],
  providers: [GithubService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  year: number = new Date().getFullYear();
  fileContent=  '';

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getFile();
  }

  getFile() {
    const fileUrl = 'https://raw.githubusercontent.com/alexnesteruk/App_Portfolio/master/test-config.json';
    this.githubService.getFileContent(fileUrl).subscribe({
    next:(data) => {
        this.fileContent = data;
        console.log('File content:', this.fileContent);
      },
      error:(error) => {
        console.error('Error fetching file:', error);
      }
    });
  }



}
