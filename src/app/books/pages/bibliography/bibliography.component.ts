import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { booksInformation } from 'src/assets/data/books.data';
import { BookInfo } from '../../interfaces/book.interface';

@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.component.html',
  styleUrls: ['./bibliography.component.scss']
})
export class BibliographyComponent implements OnInit {

  public booksInfo: BookInfo[] = booksInformation;

  constructor( private route: Router ) { }

  ngOnInit(): void {
  }

 

  seeDetailBook(book: string) {
    this.route.navigate(['/books/bookDetail'], { 
      queryParams: { 
        id: book 
      }
    });
  }

}
