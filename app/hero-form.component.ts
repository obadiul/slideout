import {Component, OnInit} from 'angular2/core';
import {NgForm, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';
import {SlideOutComponentComponent} from 'app/slide-out-component.component';

@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  directives: [SlideOutComponentComponent],
})
export class HeroFormComponent implements OnInit {

   title = 'Slide out Component App';
  menuSt:boolean=true;
  formTitle = 'Contact';
  formData = {};
  response = {};

  toggleMenu(value) {
    this.menuSt = !this.menuSt;
    if(value) {
       this.formData = {};     
    }
  }
  

  saveData(formValue) {
    this.response = formValue;
    this.toggleMenu(false);
  }

}