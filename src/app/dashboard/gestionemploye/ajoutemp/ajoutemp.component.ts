import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutemp',
  templateUrl: './ajoutemp.component.html',
  styleUrls: ['./ajoutemp.component.css']
})
export class AjoutempComponent implements OnInit {


  departement:any;

  employee = {
    name:'',
    email:'',
    adresse:'',
    idDep:'',
    tel:''
  }

  image:any;

  selectphoto(e:any){
    this.image = e.target.files[0];

  }

  ajout(){
      let fd = new FormData();
    fd.append('name', this.employee.name);
    fd.append('email', this.employee.email);
    fd.append('tel', this.employee.tel);
    fd.append('adresse', this.employee.adresse);
    fd.append('idDep', this.employee.idDep);
    fd.append('image', this.image);

    this._emp.creat( fd )
    .subscribe(
      (res)=>{
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your client has been saved',
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

  constructor(private _dep: DepService, private _emp: EmpService, private router : Router) { }

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

  }

}
