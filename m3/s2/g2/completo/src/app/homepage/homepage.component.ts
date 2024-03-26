import { Component, OnInit } from '@angular/core';
import { PostInterface } from 'src/interfaces/post.interface';
import { PostService } from '../post.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
editPost() {
throw new Error('Method not implemented.');
}
  posts: PostInterface[] = [];
  related: PostInterface[] = [];
  uniqueTags: string[] = [];
  selectedTag: string | null = null;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
    this.extractUniqueTags();
  }

  extractUniqueTags(): void {
    const allTags: string[] = this.posts.reduce((accumulator: string[], post: PostInterface) => {
      post.tags.forEach(tag => {
        if (!accumulator.includes(tag)) {
          accumulator.push(tag);
        }
      });
      return accumulator;
    }, []);
    this.uniqueTags = allTags;
  }

  filterPostsByTag(tag: string): void {
    if (this.selectedTag === tag) {
      this.selectedTag = null;
    } else {
      this.selectedTag = tag;
    }
  }

}
