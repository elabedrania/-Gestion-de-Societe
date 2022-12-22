import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent implements OnInit {

  departement:any;
  id:any;
  employee:any;

  image:any;

  selectImage(e:any){

    this.image = e.target.files[0];
  }

  constructor(private _dep:DepService 
    , private act :ActivatedRoute
    , private _emp:EmpService
    , private router :Router) { }

  ngOnInit(): void {

    this._dep.getAll()
    .subscribe(
      (res)=>{
        this.departement = res;
      },
      (err)=>{
        console.log(err);
        
      }
    )

    this.id = this.act.snapshot.paramMap.get('id');

    this._emp.getbyid(this.id)
    .subscribe(
      (res)=>{
        this.employee = res;
      },
      (err)=>{
        console.log(err);
        
      }
    )


  }

  update(){
    let fd = new FormData();
    fd.append('name', this.employee.name);
    fd.append('lastname', this.employee.lastname);
    fd.append('email', this.employee.email);
    fd.append('tel', this.employee.tel);
    fd.append('adresse', this.employee.adresse);
    fd.append('idDep', this.employee.idDep);

    if(this.image){
          fd.append('image', this.image);
          }
          else{
          fd.append('image', this.employee.image);
          }

          this._emp.update(this.id , fd)
          .subscribe(
            (res)=>{
              Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
              })

              this.router.navigate(['/dashboard/gestionemploye/list']);
            },
          (err)=>{
            console.log(err);
            
          }
          )

      
    
  }

}
