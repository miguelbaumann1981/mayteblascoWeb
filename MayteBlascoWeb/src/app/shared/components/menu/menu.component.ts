import { Component, OnInit } from '@angular/core';
import { ItemMenu } from '../../interfaces/menu.interface';
import { menuNav } from 'src/assets/data/menu.data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public menuNavigation: ItemMenu[] = menuNav;
  public active: string = '';

  constructor( ) { }

  ngOnInit(): void {
  }

}
