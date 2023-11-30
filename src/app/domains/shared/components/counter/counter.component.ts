import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required:true}) duration = 0;
  @Input({required:true}) message = '';


  constructor() {
    console.log('contructor');
    console.log('-'.repeat(10));

  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }

}
