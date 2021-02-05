import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  template: '<p>comp4 works!</p>',
  styles: ['p {color: red;}']
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
