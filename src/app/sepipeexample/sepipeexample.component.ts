import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sepipeexample',
  templateUrl: './sepipeexample.component.html',
  styleUrls: ['./sepipeexample.component.css']
})
export class SepipeexampleComponent implements OnInit {

  pipeStr ='Store Enabler';

  listofOS =['Linux','Android','iOS','Windows'];

  constructor() { }

  ngOnInit() {
  }

}
