import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-httpexample',
  templateUrl: './httpexample.component.html',
  styleUrls: ['./httpexample.component.css']
})
export class HttpexampleComponent implements OnInit {

  loading = false;
  constructor(private userService: UserserviceService) { }
  profile={};

  ngOnInit() {
  }

  getUserInfo(){
    console.log("Getting user information !");
    this.loading=true;
    this.profile={};
    this.userService.getUserInformation().subscribe(data => 
      {
        this.profile = data
        this.loading=false;
      });
  }
}
