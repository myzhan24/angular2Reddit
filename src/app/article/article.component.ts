import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
    class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  private votes: number;
  private title: string;
  private link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  ngOnInit() {
  }

  private voteUp(): void {
    this.votes++;
  }

  private voteDown(): void {
    this.votes--;
  }

}
