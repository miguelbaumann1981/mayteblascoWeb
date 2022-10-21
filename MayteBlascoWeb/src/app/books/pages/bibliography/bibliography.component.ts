import { Component, OnInit } from '@angular/core';
import { booksInformation } from 'src/assets/data/books.data';
import { BookInfo } from '../../interfaces/book.interface';

@Component({
  selector: 'app-bibliography',
  templateUrl: './bibliography.component.html',
  styleUrls: ['./bibliography.component.scss']
})
export class BibliographyComponent implements OnInit {

  public booksInfo: BookInfo[] = booksInformation;

  constructor() { }

  ngOnInit(): void {
  }

}
