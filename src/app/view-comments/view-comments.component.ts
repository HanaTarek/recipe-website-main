import { Component , Input } from '@angular/core';
import { Comment } from '../constant/Comment.interface.js';

@Component({
  selector: 'app-view-comments',
  templateUrl: './view-comments.component.html',
  styleUrl: './view-comments.component.css'
})
export class ViewCommentsComponent {
  @Input()  Comment: Comment[] = [];

}
