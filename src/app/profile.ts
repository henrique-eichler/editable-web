export class Profile {
  id: number;
  displayName: string;
  realName: string;
  profilePicture: any;
  birthday: number;
  gender: string;
  ethnicity: string;
  religion: string;
  height: number;
  figure: string;
  maritalStatus: string;
  occupation: string;
  aboutMe: string;
  location: City;
}

export class City {
  city: string;
  lat: number;
  lon: number;
}

export class Choice {
  id: string;
  name: string;
}
