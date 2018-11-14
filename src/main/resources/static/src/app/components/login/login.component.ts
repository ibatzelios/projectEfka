import { Component, OnInit } from '@angular/core';
import { user } from '../../models/userModel';
import { Router} from '@angular/router';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user: user[] = [];
  constructor(private router: Router, private userService: UserService) { }

	login(loginForm){
	let newUser: user= {
      userName: loginForm.value.loginUsername,
      password: loginForm.value.loginPassword
    }
    
    console.log(newUser);
    this.userService.login(newUser).subscribe((data)=>{
      console.log("registered");

    },
    (error) => {
        console.log("error");
    });
    setTimeout(function() {
      loginForm.reset();
    }, 1000);
    
    this.router.navigate(['/userhomepage']);
	} 
  
  ngOnInit() {
  }

}
