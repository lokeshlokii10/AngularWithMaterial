import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssignmentComponent } from '../assignment/assignment.component';

export interface DialogData {
  name: any;
  badge: any;
}

@Component({
  selector: 'app-data-values',
  templateUrl: './data-values.component.html',
  styleUrls: ['./data-values.component.scss']
})
export class DataValuesComponent implements OnInit {

  defaultSelections: any[];
  name: any;
  badge: any;

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<AssignmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
     }

  ngOnInit(): void {
    this.defaultSelections = ['defined', 'inProgress'];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
