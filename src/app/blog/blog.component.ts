import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blogPosts } from '../../assets/constant-files/blog-post-data';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {
  blogPosts = blogPosts;
  postURL: any = '';
  postContent: any = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.postURL = this.route.snapshot.paramMap.get('url')?.trim();

    this.postContent = this.blogPosts.find((blog) =>
      blog.url.includes(this.postURL)
    );
  }
}
