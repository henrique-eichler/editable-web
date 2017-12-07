import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProfileService }  from '../profile.service';
import { ChoiceService } from '../choice.service';

import { Profile, City } from '../profile';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profile: Profile;
  cities: City[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private profileService: ProfileService,
    public choiceService: ChoiceService
  ) {}

  ngOnInit() {
    this.loadProfile();
    this.choiceService.loadCities();
    this.choiceService.loadOptions();
  }

  private setProfile(profile: Profile): void {
    this.profile = profile;
    this.profile.location = profile.location ? profile.location : <City>{city: '', lat: 0, lon: 0};
  }

  loadProfile(): void {
    const idParam: string = this.route.snapshot.paramMap.get('id');
    if (idParam === 'new') {
      this.setProfile(<Profile>{});

    } else {
      const id: number = +this.route.snapshot.paramMap.get('id');
      this.profileService
        .findById(id)
        .subscribe(profile => this.setProfile(profile));
    }
  }

  save(): void {
    console.log(this.profile);
    this.profileService
      .save(this.profile)
      .subscribe(profile => {
        this.profile = profile;
        alert('Profile saved.');
      });
  }

  back(): void {
    this.location.back();
  }

  delete(): void {
    this.profileService
      .delete(this.profile)
      .subscribe(() => {
        this.back();
        alert('Profile deleted.');
      });
  }

  loadCities(text: string): void {
    this.cities = this.choiceService.getCities(text);
  }

  setCity(city: City): void {
    this.profile.location = city;
  }
}
