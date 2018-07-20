import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleSidenav() {
    const main = document.getElementById('main');
    const nav = document.getElementById('sidenav');
    const navWidth = nav.getBoundingClientRect().width;
    const leftMargin = window.getComputedStyle(nav).marginLeft;
    if (leftMargin === `-${navWidth}px`) {
      nav.style.marginLeft = '0px';
      main.style.width = `calc(100% - ${navWidth}px)`;
    } else {
      nav.style.marginLeft = `-${navWidth}px`;
      main.style.width = '100%';
    }
  }
}
