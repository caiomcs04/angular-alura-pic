import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  @Input() url:any;

  descriptio="lobo"

  constructor() { }

  ngOnInit(): void {
  }

}
