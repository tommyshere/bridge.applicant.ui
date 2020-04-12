import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserProfileService } from '../user-profile.service';
import { Subscription } from 'rxjs';
import { UserProfile } from 'app/class';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy {
  private _rx: Subscription;
  public userProfile: UserProfile;

  constructor(
    private userProfileService: UserProfileService,
  ) { }

  ngOnInit(): void {
    this._rx = this.userProfileService.getUserProfile().subscribe(data => {
      this.userProfile = data;
    });
  }

  ngOnDestroy(): void {
    this._rx.unsubscribe();
  }

}
