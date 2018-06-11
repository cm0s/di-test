import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() {
  }

  public message(): void {
    console.log('message');
  }
}
