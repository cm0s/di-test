import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuperService} from './super.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [SuperService]
})
export class SuperModule {
  constructor() {

  }
}
