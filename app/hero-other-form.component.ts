import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'hero-other-form',
  templateUrl: 'app/hero-other-form.component.html'
})
export class HeroOtherFormComponent implements OnInit {
  
  @Input() form: ControlGroup;
  otherGroup: ControlGroup;
  other: Control;
  
  constructor(private _fb: FormBuilder) {}
  
  ngOnInit() {
    this.other = this._fb.control('', Validators.required);
    this.otherGroup = this._fb.group({'other': this.other})
    this.form.addControl('otherGroup',this.otherGroup);
  }

}