import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import {Choice, City} from './profile';

class CitiesResult {
  cities: City[];
}

class ChoicesResult {
  gender: Choice[];
  ethnicity: Choice[];
  religion: Choice[];
  figure: Choice[];
  marital_status: Choice[];
}

@Injectable()
export class ChoiceService {

  private baseUrl = 'http://localhost:8080/choices';

  cities: City[] = [];
  genders: Choice[] = [];
  ethnicities: Choice[] = [];
  religions: Choice[] = [];
  figures: Choice[] = [];
  status: Choice[] = [];

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getCities(text: string): City[] {
    text = text.toUpperCase();
    return this.cities.filter(city => city.city.toUpperCase().indexOf(text) === 0);
  }

  loadOptions(): void {
    this.http
      .get<ChoicesResult>(`${this.baseUrl}/options`)
      .pipe(
        tap(result => this.log(`loaded options`)),
        catchError(this.handleError('loadOptions', <ChoicesResult>{})))
      .subscribe(result => {
        this.genders = result.gender;
        this.ethnicities = result.ethnicity;
        this.religions = result.religion;
        this.figures = result.figure;
        this.status = result.marital_status;
      });
  }

  loadCities(): void {
    this.http
      .get<CitiesResult>(`${this.baseUrl}/cities`)
      .pipe(
        tap(result => this.log(`loaded ${result.cities.length} cities`)),
        catchError(this.handleError('loadCities', <CitiesResult>{})))
      .subscribe(result => {
        this.cities = result.cities;
      });
  }

  private log(message: string) {
    this.messageService.add('ChoiceService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
