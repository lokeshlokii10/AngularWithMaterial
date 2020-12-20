import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DataValuesComponent } from '../data-values/data-values.component';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  panelOpenState = false;
  formGroup: FormGroup;
  data: any= '';
  filterArray: any = [];
  favouritesArray = new Array;
  addedArray: any = new Array;


  name: any;
  badge: any;

  dataArray : any = [
    {
      name:'aka2534ssh',
      badge:'defined'
    },
    {
      name:'133akassh',
      badge:'defined'
    },
    {
      name:'133akasdfvsdssh',
      badge:'defined'
    },
    {
      name:'133azdvckassh',
      badge:'inProgress'
    },
  ];

  constructor(private fb: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.dataArray.slice())
      );
  }

  addData(): void {
    const dialogRef = this.dialog.open(DataValuesComponent, {
      width: '400px', disableClose: true, autoFocus: true,
      data: {name: this.name, badge: this.badge}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined){
        this.addedArray = result;
        alert('The dialog was closed');
      } else {
        alert('Data Added Successfully');
        this.getAddArray(result);
      }
    });
  }

  getAddArray(result){
    let addedArray = new Array;
    addedArray = result;
    this.dataArray.push(addedArray);

  }

  addFavoutires(data,i) {
    this.dataArray.forEach( (item, index) => {
      if(item.name === data.name) this.dataArray.splice(index,1);
    });
    return this.favouritesArray.push(data);
  }

  removeFavoutires(data,i) {
    this.favouritesArray.forEach( (item, index) => {
      if(item.name === data.name) this.favouritesArray.splice(index,1);
    });
    return this.dataArray.push(data);
  }

  private _filter(value: string){
    return this.dataArray.filter(option => option.name.toLowerCase().includes(value.toLowerCase()));
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.filterArray.push(event.option.value);
    this.myControl.setValue(null);
  }

  displayFn(selectedoption){
    return selectedoption ? selectedoption.address : undefined;
   }

}
