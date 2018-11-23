import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sub: any;
  successMessage: any;
  failedMessage: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(params['message'] == 'Registration Successful'){
        this.successMessage = params['message']; 
      } else {
        this.failedMessage = params['message'];
      }
      
   });
  }

}
