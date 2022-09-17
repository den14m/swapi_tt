import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarWarsPeopleService } from '../star-wars-people.service';
import { Person, Planet } from '../star-wars-people.models';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

const URL_KEY = 'url';

@Component({
  selector: 'app-star-wars-people-detail',
  templateUrl: './star-wars-people-detail.component.html',
  styleUrls: ['./star-wars-people-detail.component.scss'],
})
export class StarWarsPeopleDetailComponent implements OnInit {
  public person: Person = new Person();
  public planet: Planet = new Planet();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly service: StarWarsPeopleService
  ) {}

  public ngOnInit(): void {
    const url = this.route.snapshot.paramMap.get(URL_KEY);
    if (url) {
      this.service
        .getDetailByUrl(url)
        .pipe(
          switchMap((person: Person) => {
            this.person = person;
            return this.service.getDetailByUrl(person.homeworld);
          }),
          catchError((err) => {
            console.error(err);
            this.handleBack();
            return of(err);
          })
        )
        .subscribe((homeworld: Planet) => {
          this.planet = homeworld;
        });
    }
  }

  public handleBack(): void {
    this.router.navigate(['./']).then();
  }
}
