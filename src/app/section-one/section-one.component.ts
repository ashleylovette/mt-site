import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.scss']
})
export class SectionOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    const section = document.getElementById('section-three');
    if(section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }
}
