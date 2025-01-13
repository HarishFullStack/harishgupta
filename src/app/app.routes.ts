import { Routes } from '@angular/router';
import { BlogsComponent } from './blogs/blogs.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'blogs', component: BlogsComponent },
];
