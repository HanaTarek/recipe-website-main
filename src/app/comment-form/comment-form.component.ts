import { Component } from '@angular/core';
import { Comment } from '../constant/Comment.interface.js';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentFormComponent {

  Comment: Comment[] = [];

  AddCommentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.AddCommentForm = this.formBuilder.group({
      name: ['', Validators.required],
      commentDescription: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rate: [0, Validators.required] // Initialize with a default value
    });
  }

  submit() {
    if (this.AddCommentForm.valid) {
      const formValue = this.AddCommentForm.value;

      const newComment: Comment = {
        id: this.Comment.length + 1,
        name: formValue.name,
        comment: formValue.commentDescription,
        email: formValue.email,
        rate: formValue.rate
      };

      this.Comment.push(newComment);

      // Reset form after submission
      this.AddCommentForm.reset();
    }
  }

  // Convenience getter for easy access to form fields
  get formControls() {
    return this.AddCommentForm.controls;
  }

  
}
