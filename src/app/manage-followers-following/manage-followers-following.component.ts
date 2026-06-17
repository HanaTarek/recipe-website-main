import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-followers-following',
  templateUrl: './manage-followers-following.component.html',
  styleUrl: './manage-followers-following.component.css'
})
export class ManageFollowersFollowingComponent {

  isFollowing = false;

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
  }

}
