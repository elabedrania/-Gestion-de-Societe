import { Component, OnInit } from '@angular/core';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdep',
  templateUrl: './listdep.component.html',
  styleUrls: ['./listdep.component.css']
})
export class ListdepComponent implements OnInit {
  departement : any;
  constructor(private _dep: DepService) { }

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

  delete(id : any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._dep.deleteDep(id)
          .subscribe(
            (res)=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your departement has been removed',
                showConfirmButton: false,
                timer: 1500
              })

              this.ngOnInit();


            },
            (err)=>{
              console.log(err);
              
            }
          )
      }
    })
  }

}
