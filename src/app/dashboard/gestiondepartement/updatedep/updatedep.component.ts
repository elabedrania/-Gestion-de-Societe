import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatedep',
  templateUrl: './updatedep.component.html',
  styleUrls: ['./updatedep.component.css']
})
export class UpdatedepComponent implements OnInit {
  id : any;
  departement : any;


  constructor(private act : ActivatedRoute, private _dep : DepService, private router: Router) { }

  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this._dep.getbyid(this.id)
    .subscribe(
      (res)=>{

        this.departement= res;
        console.log(this.departement);
        
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }

  update(){


    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this._dep.update(this.id, this.departement)
          .subscribe(
            (res)=>{
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your departement has been saved',
                showConfirmButton: false,
                timer: 1500
              })

              this.router.navigate(['/dashboard/gestiondepartement/list']);
            },
            (err)=>{
              console.log(err);
              
            }
          )
        
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
