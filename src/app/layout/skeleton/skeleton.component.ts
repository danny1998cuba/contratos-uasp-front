import { Component, OnInit } from '@angular/core';
import { CARDS_INFO } from 'src/app/data/constants';
import { ICardData } from 'src/app/data/interfaces';
import { ModalComponent } from 'src/app/shared/components';

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
