import { Component, Input, Output, } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-single-post',
  standalone: true,
  imports: [],
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.css'
})
export class SinglePostComponent {
  @Input() sPost: Post = {} as Post;

  @Output() oPost: Post = {} as Post;

}
