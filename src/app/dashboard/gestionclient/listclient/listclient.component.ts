import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.css']
})
export class ListclientComponent implements OnInit {

  clients :any;

  constructor( private _client: ClientService) { }

  ngOnInit(): void {

    this._client.getall()
    .subscribe(
      (res)=>{
        this.clients = res;
      },
      (err)=>{
        console.log(err);
      
      }
      )

  }

  delete(id:any){

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

    this._client.delete( id )
    .subscribe(
      (res)=>{
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your departement has been deleted',
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
