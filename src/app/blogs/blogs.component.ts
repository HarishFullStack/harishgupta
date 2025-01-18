import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { blogPosts } from '../../assets/constant-files/blog-post-data';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogs = blogPosts;

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url.split('/').length > 2) {
      const blogPost = this.blogs.find(
        (blog) => blog.url === this.router.url.split('/')[2]
      );
      if (blogPost) {
        this.navigateToBlogPost(new Event('navigate'), blogPost.url);
      } else {
        this.router.navigate(['/blogs']);
      }
    }
  }

  navigateToBlogPost(event: Event, url: string) {
    event.preventDefault();
    this.router.navigate(['/blogs', url.trim().toLowerCase()]);
  }
}
