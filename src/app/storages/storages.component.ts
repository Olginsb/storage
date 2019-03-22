import { Component, OnInit } from '@angular/core';
import { Storage} from "../storage";

@Component({
  selector: 'app-storages',
  templateUrl: './storages.component.html',
  styleUrls: ['./storages.component.css']
})
export class StoragesComponent implements OnInit {

  storage: Storage[] = [];
  constructor() { }

  ngOnInit() {

  }

}
