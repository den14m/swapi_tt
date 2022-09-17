export interface GetPersonsResponse {
  count: number;
  next: string;
  previous: string;
  results: Person[];
}

export class Person {
  public name: string = '';
  public birth_year: string = '';
  public eye_color: string = '';
  public gender: string = '';
  public hair_color: string = '';
  public height: string = '';
  public mass: string = '';
  public skin_color: string = '';
  public homeworld: string = '';
  public films: string[] = [];
  public species: string[] = [];
  public starships: string[] = [];
  public vehicles: string[] = [];
  public url: string = '';
  public created: string = '';
  public edited: string = '';
}

export class Planet {
  public climate: string = '';
  public created: string = '';
  public diameter: string = '';
  public edited: string = '';
  public gravity: string = '';
  public name: string = '';
  public orbital_period: string = '';
  public population: string = '';
  public rotation_period: string = '';
  public surface_water: string = '';
  public url: string = '';
  public terrain: string = '';
  public films: string[] = [];
  public residents: string[] = [];
}
