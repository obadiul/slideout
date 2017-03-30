import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'app-slide-out-component',
  templateUrl: 'app/slide-out-component.component.html'
})
export class SlideOutComponentComponent implements OnInit {

  constructor() { }

    @Input()
    public title;
    
    @Input()
    public formData;

	@Output()
    public submitData = new EventEmitter();

  ngOnInit() {
 
  }

  saveDataObject() {
  	this.submitData.emit(this.formData);
  }

}
