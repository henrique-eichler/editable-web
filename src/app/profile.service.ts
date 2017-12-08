import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';

import { Profile } from './profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProfileService {

  private baseUrl = 'http://localhost:8080/profiles';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  findAll(): Observable<Profile[]> {
    return this.http
      .get<Profile[]>(`${this.baseUrl}/`)
      .pipe(
        tap(profiles => this.log(`loaded ${profiles.length} profiles`)),
        catchError(this.handleError('findAll', [])));
  }

  findById(id: number): Observable<Profile> {
    return this.http
      .get<Profile>(`${this.baseUrl}/${id}`)
      .pipe(
        tap(profile => this.log(`loaded profile with id ${profile.id}`)),
        catchError(this.handleError(`findById(${id})`, <Profile> {})));
  }

  save(profile: Profile): Observable<Profile> {
    return this.http
      .post<Profile>(`${this.baseUrl}/`, profile, httpOptions)
      .pipe(
        tap(profile => this.log(`saved profile with id ${profile.id}`)),
        catchError(this.handleError<Profile>('save', <Profile> {})));
  }

  delete(profile: Profile): Observable<any> {
    return this.http
      .delete<any>(`${this.baseUrl}/${profile.id}`)
      .pipe(
        tap(() => this.log(`deleted profile with id ${profile.id}`)),
        catchError(this.handleError(`delete(${profile.id})`)));
  }

  private log(message: string) {
    this.messageService.add('ProfileService: ' + message);
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
