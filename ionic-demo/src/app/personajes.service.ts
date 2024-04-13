import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

export interface Result {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  },

  results: Personaje[]

}

export interface Personaje {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private readonly http = inject(HttpClient);

  constructor() { }

 fnCargar(pagina: number = 1) {
    return this.http.get<Result>(
      'https://rickandmortyapi.com/api/character'
      ).pipe(
        map( ( res: Result) => res.results ) );
  }
}
