import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../../models/post';
import { FormsModule } from '@angular/forms';
import { SinglePostComponent } from '../single-post/single-post.component';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [FormsModule, SinglePostComponent],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  @Output() PostCreated = new EventEmitter<Post>();
  formPost: Post = {} as Post;
  display:boolean = false;

    emitCreated():void{
    let newPost: Post = {...this.formPost};
    this.PostCreated.emit(newPost);
    this.formPost = {} as Post;
  }

toggleDisplay(){
  this.display = !this.display;
}



}
