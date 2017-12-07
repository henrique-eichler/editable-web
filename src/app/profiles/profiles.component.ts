import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../profile.service';

import { Profile } from '../profile';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profiles: Profile[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService
      .findAll()
      .subscribe(profiles => this.profiles = profiles);
  }
}
