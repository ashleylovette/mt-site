import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll(el: string) {
    const section = document.getElementById(el);
    if(section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }

}
