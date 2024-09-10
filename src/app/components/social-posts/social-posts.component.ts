import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { PostFormComponent } from '../post-form/post-form.component';
import { SinglePostComponent } from '../single-post/single-post.component';

@Component({
  selector: 'app-social-posts',
  standalone: true,
  imports: [PostFormComponent,SinglePostComponent],
  templateUrl: './social-posts.component.html',
  styleUrl: './social-posts.component.css'
})
export class SocialPostsComponent {

  AllPosts: Post[] = [
{title: "Best Lab Ever", thought: "I absolutely despise this lab, its hard!😭" },
{title: "Justin is the Best", thought: "Justin is a demon created to torture us.👿" },
{title: "I love this class", thought: "I havent been able to sleep on time since joining this class 😪" },
{title: "I love Angular!", thought: "I hate angular more than java😡" },
{title: "This lab makes so much sense", thought: "I am so lost 😩" },]


OnSubmit(i:Post):void{
  this.AllPosts.push(i);
}




}
