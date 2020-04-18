import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialApiService } from '../materialapi.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray, Form} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-matinfos',
  templateUrl: './add-matinfos.component.html',
  styleUrls: ['./add-matinfos.component.css']
})
export class AddMatinfosComponent implements OnInit {


  materialInfoForm: FormGroup;

  submitted = false;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  constructor(private router: Router, private api: MaterialApiService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.materialInfoForm = this.formBuilder.group({

      numberOfSpecs: ['', Validators.required],
      materialCatType : ['', Validators.required],
      materialCatDept:  ['', Validators.required],
      materialCatId: ['', Validators.required],
      additionalInfo: new FormArray([])
    });
  }

  get f() { return this.materialInfoForm.controls; }
  get t() { return this.f.additionalInfo as FormArray; }

  onChangeSpecs(e) {
    console.log(e.target.value);
    const numberOfSpecs = e.target.value || 0;
    if (this.t.length < numberOfSpecs) {
      for (let i = this.t.length; i < numberOfSpecs; i++) {
        this.t.push(this.formBuilder.group({
          label: ['', Validators.required],
          datatype: ['', Validators.required],
          dropValues : [''],
          mandatory : ['', Validators.required]
        }));
      }
    } else {
      for (let i = this.t.length; i >= numberOfSpecs; i--) {
        this.t.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.materialInfoForm.invalid) {
      return;
    }
    console.log(this.f.numberOfSpecs.value);
    const obj = JSON.parse(JSON.stringify(this.materialInfoForm.value, null, 4));
    for ( let i = obj.additionalInfo.length - 1; i >= 0 ; i--) {
        const dropValues =  obj.additionalInfo[i].dropValues;
        const nameArr = dropValues.split(',');
        obj.additionalInfo[i].dropValues = nameArr;

    }
    this.isLoadingResults = true;
    this.api.addMaterialInfo(obj)
      .subscribe((res: any) => {
        const id = res._id;
        this.isLoadingResults = false;
        this.router.navigate(['/show-matInfo', id]);
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
// display form values on success


  }

}
