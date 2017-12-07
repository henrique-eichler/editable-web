import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProfilesComponent} from './profiles/profiles.component';
import {ProfileDetailComponent} from './profile-detail/profile-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      declarations: [AppComponent,
        ProfilesComponent,
        ProfileDetailComponent,
        MessagesComponent],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]

    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Editable Web App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-brand').textContent).toContain('Editable Web App');
  }));
});
