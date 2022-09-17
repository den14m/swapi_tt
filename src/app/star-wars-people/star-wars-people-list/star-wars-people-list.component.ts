import { Component, OnInit } from '@angular/core';
import { StarWarsPeopleService } from '../star-wars-people.service';
import { Person } from '../star-wars-people.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-star-wars-people-list',
  templateUrl: './star-wars-people-list.component.html',
  styleUrls: ['./star-wars-people-list.component.scss'],
})
export class StarWarsPeopleListComponent implements OnInit {
  public people: Person[] = [];
  private nextPageUrl: string = '';

  constructor(
    private readonly service: StarWarsPeopleService,
    private readonly router: Router
  ) {}

  public ngOnInit(): void {
    this.getPersons();
  }

  public onScroll(): void {
    if (this.nextPageUrl) {
      this.service.getDetailByUrl(this.nextPageUrl).subscribe((res) => {
        this.people.push(...res.results);
        this.nextPageUrl = res.next;
      });
    }
  }

  public handleSeeDetails(url: string): void {
    this.router.navigate(['/details', { url }]).then();
  }

  private getPersons(): void {
    this.service.getPersons().subscribe((res) => {
      this.people = res.results;
      this.nextPageUrl = res.next;
    });
  }
}
