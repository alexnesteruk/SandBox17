import {Component, OnInit} from '@angular/core';
import {AboutComponent} from "../about/about.component";
import {GithubService} from "../service/github.service";
import {HttpClientModule} from "@angular/common/http";
import {TeeTimesComponent} from "../tee-times/tee-times.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutComponent,
    HttpClientModule,
    TeeTimesComponent,
    RouterLink
  ],
  providers: [GithubService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  year: number = new Date().getFullYear();
  fileContent = '';
  readonly fileUrl = 'https://raw.githubusercontent.com/alexnesteruk/App_Portfolio/master/test-config.json';

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getFile();
  }

  getFile() {
    //const fileUrl = 'https://raw.githubusercontent.com/alexnesteruk/App_Portfolio/master/test-config.json';
    this.githubService.getFileContent(this.fileUrl).subscribe({
      next: (data) => {
        this.fileContent = data;
        console.log('File content:', this.fileContent);
      },
      error: (error) => {
        console.error('Error fetching file:', error);
      }
    });
  }


}
