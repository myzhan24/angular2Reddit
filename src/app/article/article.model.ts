/**
 * Created by mzhan on 5/2/2017.
 */
export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  public voteUp(): void {
    this.votes++;
  }

  public voteDown(): void {
    this.votes--;
  }

  public domain(): string {
    try {
      return this.link.split('//')[1].split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
