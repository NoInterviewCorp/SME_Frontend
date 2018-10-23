import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css']
})
export class QuestionformComponent implements OnInit {
  @Input() id : number;
  @Output() noError = new EventEmitter();
  question = new FormControl('', [Validators.required]);
  options: FormControl[] = [
    new FormControl('',[Validators.required]),
    new FormControl('',[Validators.required]),
    new FormControl('',[Validators.required]),
    new FormControl('',[Validators.required])
  ];
  resourcelink = new FormControl('', [Validators.required]);
  bloomlevel = new FormControl('', [Validators.required]);
  isValidArray : boolean[] = new Array(7).fill(false);
  form: FormGroup;
  items = [
    {key: 'item1'},
    {key: 'item2'},
    {key: 'item3'},
    {key: 'item4'},
  ];
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // create checkbox group
    let checkboxGroup = new FormArray(this.items.map(item => new FormGroup({
      id: new FormControl(item.key),
     // text: new FormControl(item.text),
      checkbox: new FormControl(false)
    })));

    // create a hidden reuired formControl to keep status of checkbox group
    let hiddenControl = new FormControl(this.mapItems(checkboxGroup.value), Validators.required);
    // update checkbox group's value to hidden formcontrol
    checkboxGroup.valueChanges.subscribe((v) => {
      hiddenControl.setValue(this.mapItems(v));
    });

    this.form = new FormGroup({
      items: checkboxGroup,
      selectedItems: hiddenControl
    });
  }

  mapItems(items) {
    let selectedItems = items.filter((item) => item.checkbox).map((item) => item.text);
    //this.selectedITEMS = selectedItems;
    return selectedItems.length ? selectedItems : null;
  }

  getErrorMessage() {
    this.noError.emit({MemberId:this.id,HasError:false});
    this.isValidArray[0] = false;
    return this.question.hasError('required') ? 'You must enter a value' : '';
  }

  getValidMessage(index:number) {
    this.isValidArray[index] = true;
    let areAllValid = true;
    // this.isValidArray.forEach(isValidItem => areAllValid = (areAllValid && isValidItem));
    for(let i =0;i < this.isValidArray.length;i++){
      areAllValid = (areAllValid && this.isValidArray[i]);
    }
    this.noError.emit({MemberId:this.id,HasError:areAllValid});
  }

  getErrorMessage1(index:number) {
    this.noError.emit({MemberId:this.id,HasError:false});
    this.isValidArray[index+1] = false;
    return this.options[index].hasError('required') ? 'You must enter a value' : '';
  }


 
  getErrorMessage5() {
    this.noError.emit({MemberId:this.id,HasError:false});
    this.isValidArray[5] = false;
    return this.resourcelink.hasError('required') ? 'You must enter a value' : '';
  }



  getErrorMessage6() {
    this.noError.emit({MemberId:this.id,HasError:false});
    this.isValidArray[6] = false;
    return this.bloomlevel.hasError('required') ? 'You must enter a value' : '';
  }


}