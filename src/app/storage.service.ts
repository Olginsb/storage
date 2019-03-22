import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Injectable} from "@angular/core";


@Injectable()
export class StorageService {

  private storagesUrl = 'http://localhost:3000/storages';

  constructor(
    private httpClient: HttpClient
  ) {}

  getStorages(): Observable<any> {
    return this.httpClient.get(this.storagesUrl);
  }
}
