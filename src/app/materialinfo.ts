import {AdditionalInfo} from './additionalinfo';

export class MaterialInfo {

  // tslint:disable-next-line:variable-name
  _id: string;
   seqMaterialInfoId: number;
   materialCatType: string;
   materialCatDept: string;
   materialCatId: number;
   updatedAt: Date;
   insertedBy: string;
   updatedBy: string;
   additionalInfo: [AdditionalInfo];
}
