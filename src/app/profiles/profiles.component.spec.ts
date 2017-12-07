import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ProfileService} from '../profile.service';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {ProfilesComponent} from '../profiles/profiles.component';
import {MessagesComponent} from '../messages/messages.component';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from '../message.service';
import {ChoiceService} from '../choice.service';
import {ProfileDetailComponent} from '../profile-detail/profile-detail.component';

describe('ProfilesComponent', () => {
  let component: ProfilesComponent;
  let fixture: ComponentFixture<ProfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, AppRoutingModule ],
      declarations: [ProfileDetailComponent, ProfilesComponent, MessagesComponent],
      providers: [ProfileService, MessageService, ChoiceService, {provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
