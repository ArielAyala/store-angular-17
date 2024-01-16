import { Component, Input, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = '';
  counter = signal(0);
  intervalRef: number | undefined;


  constructor() {
    console.log('contructor');
    //console.log('-'.repeat(10));

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);

    // this.intervalRef = window.setInterval(()=> {
    //   console.log('run interval');

    //   this.counter.update(previousState => previousState + 1);
    // }, 1000);
  }

  ngOnInit() {
    console.log('ngOnInit');
    //console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewinit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    window.clearInterval(this.intervalRef); // stop the interval
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }

}
