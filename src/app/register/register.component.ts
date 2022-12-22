import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  admin={
    fullname:'',
    password:'',
    email:''
  }

  register(){

    this._auth.createaccount(this.admin)
    .subscribe(
      {
        next:(res)=>{
          Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            
      this.router.navigate(['/login']);
        },

        error:(res)=>{
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'email already exist!',
            })
        },


      }
      
    )
  }

  constructor(private _auth : AuthService, private router: Router) { }

  ngOnInit(): void {
  }

}
