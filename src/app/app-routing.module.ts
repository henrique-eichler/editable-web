import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: '/profiles', pathMatch: 'full' },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'profile/:id', component: ProfileDetailComponent },
  { path: 'messages', component: MessagesComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
