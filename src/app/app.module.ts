import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MessagesComponent } from './messages/messages.component';

import { ProfileService } from './profile.service';
import { ChoiceService } from './choice.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    ProfileDetailComponent,
    MessagesComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ProfileService,
    ChoiceService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
