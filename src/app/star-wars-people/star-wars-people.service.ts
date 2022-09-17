import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetPersonsResponse, Person, Planet } from './star-wars-people.models';

const BASE_URL: string = 'https://swapi.dev/api/people/';

@Injectable()
export class StarWarsPeopleService {
  constructor(private http: HttpClient) {}

  public getPersons(): Observable<GetPersonsResponse> {
    return this.http.get(`${BASE_URL}`) as Observable<GetPersonsResponse>;
  }

  public getDetailByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }
}
