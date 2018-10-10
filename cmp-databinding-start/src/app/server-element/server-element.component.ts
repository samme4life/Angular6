import {
  Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native
})
export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked{

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('header element value is : '+ this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('header element value is : '+ this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }

}
