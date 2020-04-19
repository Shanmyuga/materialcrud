import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { MaterialApiService } from '../materialapi.service';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray, Form} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {MyErrorStateMatcher} from '../add-matinfos/add-matinfos.component';

@Component({
  selector: 'app-edit-matinfos',
  templateUrl: './edit-matinfos.component.html',
  styleUrls: ['./edit-matinfos.component.css']
})
export class EditMatinfosComponent implements OnInit {
  materialInfoForm: FormGroup;
  id = '';
  numberOfSpecs = 0;
  submitted = false;
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private route: ActivatedRoute, private api: MaterialApiService, private formBuilder: FormBuilder) { }
  get f() { return this.materialInfoForm.controls; }
  get t() { return this.f.additionalInfo as FormArray; }

  ngOnInit(): void {

    this.materialInfoForm = this.formBuilder.group({
      _id: ['', Validators.required],
      newOrEdit: 'Edit',
      numberOfSpecs: ['', Validators.required],
      materialCatType : ['', Validators.required],
      materialCatDept:  ['', Validators.required],
      materialCatId: ['', Validators.required],
      additionalInfo: new FormArray([])
    });

    this.getMatInfo(this.route.snapshot.params.id);
  }


  getMatInfo(id: any) {
    this.api.getMaterial(id).subscribe((data: any) => {
      this.id = data._id;
      this.numberOfSpecs = data.numberOfSpecs;

      if (this.t.length < this.numberOfSpecs) {
        for (let i = this.t.length; i < this.numberOfSpecs; i++) {
          this.t.push(this.formBuilder.group({
            _id: '',
            label: ['', Validators.required],
            datatype: ['', Validators.required],
            dropValues : [''],
            mandatory : ['', Validators.required]
          }));
        }
      } else {
        for (let i = this.t.length; i >= this.numberOfSpecs; i--) {
          this.t.removeAt(i);
        }
      }

      this.materialInfoForm.setValue({
        _id : data._id,
        newOrEdit : 'Edit',
        numberOfSpecs: data.numberOfSpecs,
        materialCatType: data.materialCatType,
        materialCatDept: data.materialCatDept,
        materialCatId: data.materialCatId,
        additionalInfo : data.additionalInfo
      });


    });

  }

  onChangeSpecs(e) {
    console.log(e.target.value);
    const numberOfSpecs = e.target.value || 0;
    if (this.t.length < numberOfSpecs) {
      for (let i = this.t.length; i < numberOfSpecs; i++) {
        this.t.push(this.formBuilder.group({
          _id: '',
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

  onFormSubmit() {
    this.isLoadingResults = true;
    const obj = JSON.parse(JSON.stringify(this.materialInfoForm.value, null, 4));
    console.log(obj);
    for ( let i = obj.additionalInfo.length - 1; i >= 0 ; i--) {
      const dropValues =  obj.additionalInfo[i].dropValues.toString();
      if (obj.additionalInfo[i]._id  === '') {
            delete obj.additionalInfo[i]._id;
      }
      const nameArr = dropValues.split(',');
      obj.additionalInfo[i].dropValues = nameArr;

    }

    if (obj.newOrEdit === 'Edit') {
      delete obj.newOrEdit;
      this.api.updateMaterialInfo(this.id, obj)
        .subscribe((res: any) => {
            const id = res._id;
            this.isLoadingResults = false;
            this.router.navigate(['/show-matInfo', id]);
          }, (err: any) => {
            console.log(err);
            this.isLoadingResults = false;
          }
        );
    }
    if (obj.newOrEdit === 'New') {
      delete obj.newOrEdit;
      delete obj._id;

      for ( let i = obj.additionalInfo.length - 1; i >= 0 ; i--) {
        const dropValues =  obj.additionalInfo[i].dropValues.toString();
        delete obj.additionalInfo[i]._id;
      }
      this.api.addMaterialInfo(obj)
        .subscribe((res: any) => {
          const id = res._id;
          this.isLoadingResults = false;
          this.router.navigate(['/show-matInfo', id]);
        }, (err: any) => {
          console.log(err);
          this.isLoadingResults = false;
        });

    }
  }

}
