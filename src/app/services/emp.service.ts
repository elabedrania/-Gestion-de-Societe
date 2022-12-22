import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  url = 'http://127.0.0.1:3000/employe/';


  constructor(private http: HttpClient) { }

  creat(emp:any){
    return this.http.post(this.url + 'ajout' , emp);
  }

  getall(){
    return this.http.get( this.url + 'all' );
  }

  getbyid(id:any){
    return this.http.get( this.url + 'getById/' + id );
  }

  delete( id:any ){
    return this.http.delete( this.url + 'delete/' + id );
  }
  update(id:any , emp :any){
    return this.http.put( this.url + 'update/'+ id ,emp );
  }

}
