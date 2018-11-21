import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

 @Input()  title: string;
  @Input()   content: string;
  @Input()  loveIts: number;
  @Input()  created_at: Date;
  @Input() i: number;
  constructor() { }

  ngOnInit() {
  }
getPosOrNrg()
{
  if( this.loveIts >= 0) {
    return 'green';
  } else  {
    return 'red';
  }
}
  addPlus() {
    this.loveIts++;
  }
  addMoin()
  {
    this.loveIts--;
  }
}
