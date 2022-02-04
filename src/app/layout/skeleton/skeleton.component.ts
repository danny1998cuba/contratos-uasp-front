import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.css']
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    var modal = document.querySelector('.modal');
    modal?.classList.add('active')
  }

}
