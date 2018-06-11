import {Injectable} from '@angular/core';
import {MyLibService} from './my-lib.service';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(private mylib: MyLibService) {
    console.log('super');
    mylib.message();
  }
}
