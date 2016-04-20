import {Component} from 'angular2/core';
import {BookListItem} from '../book-list-item/book-list-item.component';
import {Book, Thumbnail} from '../domain/book';

@Component({
  selector: 'book-list',
  directives: [BookListItem],
  moduleId: module.id,
  templateUrl: 'book-list.component.html'
})
export class BookListComponent {
  books: Book[];

  constructor() {
    this.books = [
      new Book(
       '9783864903571',
       'Angular 2',
       ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode'],
       new Date(2016, 5, 26),
       'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen',
       5,
       [new Thumbnail('http://goo.gl/nDi0Fc','Buchcover')],
       'Dieses Buch vermittelt einen Schnelleinstieg in Angular 2...'
     ),
     new Book(
       '9783864901546',
       'AngularJS',
       ['Philipp Tarasiewicz', 'Robin Böhm'],
       new Date(2014, 5, 29),
       'Eine praktische Einführung',
       5,
       [new Thumbnail('https://goo.gl/Y5lFVE','Buchcover')],
       'Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...'
     )
    ]
  }
}
