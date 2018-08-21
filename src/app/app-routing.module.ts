import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookSearchComponent } from './book-search/book-search.component';

const routes: Routes = [
    { path:  '', redirectTo:  'books', pathMatch:  'full' },
    {
        path:  'books',
        component:  BookListComponent
    },
    {
        path:  'create-book',
        component:  BookCreateComponent
    },
    {
        path:  'search-book',
        component:  BookSearchComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
    
}