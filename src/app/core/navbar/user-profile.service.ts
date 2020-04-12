import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserProfile } from 'app/class';
import { fakeUserProfile } from './data';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor() { }

  getUserProfile(): Observable<UserProfile> {
    return of(fakeUserProfile);
  }
}
