import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  @Input() showClasses:any;
  constructor() { }

  ngOnInit() {
  }

}
