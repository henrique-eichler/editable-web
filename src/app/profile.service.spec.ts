import {inject, TestBed} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MessageService} from './message.service';
import {Profile} from './profile';
import {of} from "rxjs/observable/of";

describe('ProfileService', () => {

  const profileMock1: Profile = <Profile>{id: 1, displayName: 'Henrique'};
  const profileMock2: Profile = <Profile>{id: 2, displayName: 'Anne'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProfileService, HttpClient, MessageService]
    });
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));

  it('should load profiles when findAll', inject([ProfileService, HttpClient], (service: ProfileService, httpClient: HttpClient) => {
    const spy = spyOn(httpClient, 'get').and.returnValue(of([profileMock1, profileMock2]));

    service.findAll().subscribe(profiles => {
      expect(profiles.length).toBe(2, 'tro profiles');
      expect(profiles[0].id).toBe(profileMock1.id, 'first id');
      expect(profiles[1].id).toBe(profileMock2.id, 'second id');
    });

    expect(spy.calls.count()).toBe(1, 'one call');
  }));

  it('should load one profile when findById', inject([ProfileService, HttpClient], (service: ProfileService, httpClient: HttpClient) => {
    const spy = spyOn(httpClient, 'get').and.returnValue(of(profileMock1));

    service.findById(profileMock1.id).subscribe(profile => {
      expect(profile).toBeTruthy()
      expect(profile.id).toBe(profileMock1.id);
    });

    expect(spy.calls.count()).toBe(1, 'one call');
  }));

});
