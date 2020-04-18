import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MaterialApiService} from '../materialapi.service';
import {MaterialInfo} from '../materialinfo';

@Component({
  selector: 'app-show-matinfos',
  templateUrl: './show-matinfos.component.html',
  styleUrls: ['./show-matinfos.component.css']
})
export class ShowMatinfosComponent implements OnInit {
  displayedColumns: string[] = ['label', 'datatype', 'mandatory', 'dropValues'];
  constructor(private route: ActivatedRoute, private api: MaterialApiService, private router: Router) {
  }

  materialInfo: MaterialInfo = {
    _id: '',
    seqMaterialInfoId: 0,
    materialCatType: '',
    materialCatDept: '',
    materialCatId: 0,
    insertedBy: '',
    updatedBy: '',
    updatedAt: null,
    additionalInfo: [{label: '', datatype: '', mandatory: '', dropValues: null}]
  };

  isLoadingResults = true;

  ngOnInit(): void {
    this.getMaterialDetails(this.route.snapshot.params.id);
  }

  getMaterialDetails(id: any) {
    this.api.getMaterial(id)
      .subscribe((data: any) => {
        this.materialInfo = data;
        console.log(this.materialInfo);
        this.isLoadingResults = false;
      });
  }

  deleteMaterialInfo(id: any) {
    this.isLoadingResults = true;
    this.api.deleteMaterialInfo(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/matInfos']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
}
