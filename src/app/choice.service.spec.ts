import {async, inject, TestBed} from '@angular/core/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {ChoiceService} from './choice.service';
import {MessageService} from './message.service';
import {of} from 'rxjs/observable/of';

describe('ChoiceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ChoiceService, HttpClient, MessageService]
    });
  });

  it('should be created', inject([ChoiceService], (service: ChoiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should loadCities cities when loadCities called', inject([ChoiceService, HttpClient], (service: ChoiceService, httpClient: HttpClient) => {
    expect(service.cities.length).toBe(0);

    const spy = spyOn(httpClient, 'get').and.returnValue(of({cities: [{city: 'A'}, {city: 'AA'}]}));

    service.loadCities();

    expect(spy.calls.count()).toBe(1, 'one call');
    expect(service.cities.length).toBe(2, 'one city');
    expect(service.cities[0].city).toBe('A', 'first city name equals to A');
    expect(service.cities[1].city).toBe('AA', 'first city name equals to A');
  }));
});
