import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatInfosComponent} from './matinfos/matinfos.component';
import {ShowMatinfosComponent} from './show-matinfos/show-matinfos.component';
import {AddMatinfosComponent} from './add-matinfos/add-matinfos.component';
import {EditMatinfosComponent} from './edit-matinfos/edit-matinfos.component';
import {AddEpicComponent} from './epic/add-epic/add-epic.component';

const routes: Routes = [ {
  path: 'matInfos',
  component: MatInfosComponent,
  data: { title: 'List of Material information' }
},
  {
    path: 'show-matInfo/:id',
    component: ShowMatinfosComponent,
    data: { title: 'Show Material Information' }
  },
  {
    path: 'add-epicInfo',
    component: AddEpicComponent,
    data: { title: 'Add Information' }
  },
  {
    path: 'add-matInfo',
    component: AddMatinfosComponent,
    data: { title: 'Add Information' }
  },
  {
    path: 'edit-matInfo/:id',
    component: EditMatinfosComponent,
    data: { title: 'Edit Information' }
  },

  { path: '',
    redirectTo: '/add-epicInfo',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
