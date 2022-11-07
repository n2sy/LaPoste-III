import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() msgToParent = new EventEmitter();
  @Input() cl = 'yellow';
  constructor() {}

  ngOnInit(): void {}

  sendMsg() {
    this.msgToParent.emit('Message de la part du fils');
  }
}
