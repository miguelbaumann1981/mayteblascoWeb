import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { booksInformation } from 'src/assets/data/books.data';
import { BookInfo } from '../../interfaces/book.interface';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  public idBook: string = '';
  public booksInfo: BookInfo[] = booksInformation;
  public bookDetail: any;

  constructor( private route: ActivatedRoute, private routing: Router ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(param => {
      console.log(param);
      this.idBook = param['id'];

      this.bookDetail = this.booksInfo.find(elem => elem.id === this.idBook);
      console.log(this.bookDetail);

    });

  }

  return() {
    this.routing.navigate(['/books/bibliography']);
  }



}
