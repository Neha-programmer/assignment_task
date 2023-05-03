import { Component, OnInit } from '@angular/core';

// defining the interface for the table elements 
export interface tableElements {
  firstName: string;
  lastName: number;
  chartNo: number;
  address1: string;
}

const TABLE_DATA: tableElements[] = [];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'chartNo', 'address1'];
  dataSource = TABLE_DATA;
  searchByTextValue:string='';
  firstNameValue:string='';
  lastNameValue:string='';
  chartNoValue:string='';
  address1Value:string='';
  inputValue: string = '';
  firstNameValueCheck:boolean=false;
  lastNameValueCheck:boolean=false;
  chartNoValueCheck:boolean=false;
  address1ValueCheck:boolean=false;
  result:any;

  constructor(){}

  ngOnInit() {}

  //searchBy function for searchBy card on the left of the UI 
  searchBy(event:any,searchValueType:string){
    if(searchValueType=='First Name'){
      this.searchByTextValue="\\" + event.target.value;
    }
    else if(searchValueType=='Last Name'){
      this.searchByTextValue=this.searchByTextValue + "@" + event.target.value;
    }
    else if(searchValueType=='Chart no'){
      this.searchByTextValue=this.searchByTextValue + '#' + event.target.value;
    }
    else{
      this.searchByTextValue=this.searchByTextValue + '$' + event.target.value;
    }
  }

  //search function for the serach card on the right of the UI 
  search(event:any){

    //for # input value 
    if(this.inputValue=='3'){
      this.firstNameValueCheck=false;
      this.lastNameValueCheck=false;
      this.chartNoValueCheck=true;
      this.address1ValueCheck=false;
    }

    // for @ input value 
    else if(this.inputValue=='2'){
      this.firstNameValueCheck=false;
      this.lastNameValueCheck=true;
      this.chartNoValueCheck=false;
      this.address1ValueCheck=false;
    }

    //for $ input value 
    else if(this.inputValue=='4'){
      this.firstNameValueCheck=false;
      this.lastNameValueCheck=false;
      this.chartNoValueCheck=false;
      this.address1ValueCheck=true;
    }

    //for \\ input value 
    else if(this.inputValue=='\u00DC'){
      this.firstNameValueCheck=true;
      this.lastNameValueCheck=false;
      this.chartNoValueCheck=false;
      this.address1ValueCheck=false;
    }

    // for backspace -> iorder to clear the value
    // else if(this.inputValue=='\u0008'){
    //   this.firstNameValueCheck=true;
    //   this.lastNameValueCheck=true;
    //   this.chartNoValueCheck=true;
    //   this.address1ValueCheck=true;
    // }

    // for getting first Name value 
    if(this.firstNameValueCheck){
      this.firstNameValue=event.target.value;
      const separatorIndex = this.firstNameValue.indexOf('\\');
      if (separatorIndex >= 0) {
        this.result = this.firstNameValue.substring(separatorIndex + 1);
      } else {
        this.result = '';
      }
      let finalResult=this.result.replace('\\', '');
      this.firstNameValue=finalResult;
    }

    // for getting last name value 
    if(this.lastNameValueCheck){
      this.lastNameValue=event.target.value;
      const separatorIndex = this.lastNameValue.indexOf('@');
      if (separatorIndex >= 0) {
        this.result = this.lastNameValue.substring(separatorIndex + 1);
      } else {
        this.result = '';
      }
      let finalResult=this.result.replace('@', '');
      this.lastNameValue=finalResult;
    }

    // for getting chart No value 
    if(this.chartNoValueCheck){
      this.chartNoValue=event.target.value;
      const separatorIndex = this.chartNoValue.indexOf('#');
      if (separatorIndex >= 0) {
        this.result = this.chartNoValue.substring(separatorIndex + 1);
      } else {
        this.result = '';
      }
      let finalResult=this.result.replace('#', '');
      this.chartNoValue=finalResult;
    }

    // for getting address1 value 
    if(this.address1ValueCheck){
      this.address1Value=event.target.value;
      const separatorIndex = this.address1Value.indexOf('$');
      if (separatorIndex >= 0) {
        this.result = this.address1Value.substring(separatorIndex + 1);
      } else {
        this.result = '';
      }
      let finalResult=this.result.replace('$', '');
      this.address1Value=finalResult;
    }
  }

  onKeydown(event: KeyboardEvent) {
    // Check if the pressed key is not a modifier key (e.g. Shift, Ctrl, Alt)
    if (!event.ctrlKey && !event.metaKey && !event.altKey) {
      // Get the pressed key code
      const keyCode = event.keyCode || event.which;
      // Get the pressed key character
      const keyChar = String.fromCharCode(keyCode);
      // Update the input value with the pressed key character
      this.inputValue = keyChar;
    }
  }

  // clear function in-order to clear the values whatever entered in the input field
  clearSearchInput(){
    this.searchByTextValue='';
    this.firstNameValue='';
    this.lastNameValue='';
    this.chartNoValue='';
    this.address1Value='';
  }
}
