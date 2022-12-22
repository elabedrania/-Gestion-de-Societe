import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepService } from 'src/app/services/dep.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutdep',
  templateUrl: './ajoutdep.component.html',
  styleUrls: ['./ajoutdep.component.css']
})
export class AjoutdepComponent implements OnInit {
departement = {
  name: '',
  description : '',
  etage: 0,
  salle: 0
}

ajout(){
  this._dep.createDep( this.departement)
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
}
  constructor( private _dep: DepService , private router: Router) { }

  ngOnInit(): void {
  }

}
