import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-epic',
  templateUrl: './add-epic.component.html',
  styleUrls: ['./add-epic.component.css']
})
export class AddEpicComponent implements OnInit {

  epicdiv: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }



  ngOnInit() {
    this.epicdiv = this.formBuilder.group ({
      epicID: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
      epicDesc: [null, [Validators.required, Validators.minLength(50), Validators.maxLength(2000)]],
      workorder: [null, [Validators.required]],
      dept: [null, [Validators.required]],
      epicCreate: [null]
    });
  }

  isFieldValid(field: string) {
    return !this.epicdiv.get(field).valid && this.epicdiv.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  getFieldErrorType(field: string) {
    return this.epicdiv.get(field).errors;
  }

  onSubmit(formData) {
  }

}
