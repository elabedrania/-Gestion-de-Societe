import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:3000/admin/';
  constructor( private http : HttpClient, private router: Router) { }

  createaccount(admin : any){
    return this.http.post(this.url+'register' , admin);
  }

  login(admin : any){
    return this.http.post(this.url + 'login' , admin);
  }

  isLoggedIn(){
    let token = localStorage.getItem('token');
  
    if(token){
      return true;
      }
      else{
        return false;
      }
    }


    logout(){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }


    getDataFromToken(){

      let token = localStorage.getItem('token');
      
      if(token){
        //conversion token mel msh mafhoum lel mafhoum xD (yaany déchiffrement en securité)
        let data =JSON.parse(window.atob( token.split('.')[1]));
        console.log(data);
        return data ;
        
        
      }
    }
}
