import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin={
    email:'',
    password:''
  }
  token:any;

  login(){
    this._auth.login(this.admin)
    .subscribe(
      {
      next:(res)=>{
        this.token=res;
        localStorage.setItem('token', this.token.mytoken);

        this.router.navigate(['/dashboard']);
          },

        error:(res)=>{
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'email or password invalid',
            })
        },
      }
    )
  }

  constructor( private _auth : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
