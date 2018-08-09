import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})
export class WildComponent implements OnInit {

  constructor(
    private _appService: AppService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}
