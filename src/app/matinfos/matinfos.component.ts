import { Component, OnInit } from '@angular/core';
import {MaterialApiService} from '../materialapi.service';
import { MaterialInfo } from '../materialinfo';
@Component({
  selector: 'app-matinfos',
  templateUrl: './matInfos.component.html',
  styleUrls: ['./matInfos.component.css']
})
export class MatInfosComponent implements OnInit {

  displayedColumns: string[] = ['materialCatType', 'materialCatDept'];
  data: MaterialInfo[] = [];
  isLoadingResults = true;
  constructor(private api: MaterialApiService) { }

  ngOnInit(): void {

    this.api.getMaterials()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
