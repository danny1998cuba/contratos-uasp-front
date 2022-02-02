import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() text: string = "Default Title";

  firstLetter = ''
  title = ''

  constructor() { }

  ngOnInit(): void {
    this.firstLetter = this.text.charAt(0);
    this.title = this.text.substring(1) 
  }

}
