import {Component, OnInit} from "@angular/core";
import  { Storage} from "../storage";
import {StorageService} from "../storage.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
 export class DashboardComponent implements OnInit{
  storage: Storage[] = [];

  constructor(private storageService: storageService){}
  ngOnInit(){
    this.getStorages();
  }
  getStorages(): void{
    this.storageService.getStorages()
      .subscribe(storages => this.storages = storages.slice(1,))
  }
}
