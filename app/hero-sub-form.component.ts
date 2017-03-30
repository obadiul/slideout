import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core';
import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

@Component({
  selector: 'hero-sub-form',
  templateUrl: 'app/hero-sub-form.component.html'
})
export class HeroSubFormComponent implements OnInit {
  
  @Input() form: ControlGroup;
  nameGroup: ControlGroup;
  name: Control;
  
  constructor(private _fb: FormBuilder) {}
  
  ngOnInit() {
    this.name = this._fb.control('', Validators.required);
    this.nameGroup = this._fb.group({'name': this.name})
    this.form.addControl('nameGroup',this.nameGroup);
  }

}