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
  address1Value:string=''

  constructor(){}

  ngOnInit() {}

  //searchBy function for searchBy card on the left of the UI 
  searchBy(event:any,searchValueType:string){
    console.log('here',event.target.value);
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
    console.log('here-2',event.target.value);
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
