import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  id :any;
  client :any;
  newImage :any;

  selectimage(e:any){
    this.newImage = e.target.files[0];
  }

  constructor( private act: ActivatedRoute, private _client: ClientService, private router: Router) { }

  ngOnInit(): void {

    this.id = this.act.snapshot.paramMap.get('id');

    this._client.getbyid(this.id)
    .subscribe(
      (res)=>{
        this.client = res;
        console.log(this.client);
        
      },
      (err)=>{
        console.log(err);
        
      }
    )

  }

  update(){

    let fd = new FormData();
    fd.append('name', this.client.name)
    fd.append('description', this.client.description)
    fd.append('entreprise', this.client.entreprise)
    fd.append('titreprojet', this.client.titreprojet)

    if( this.newImage){
      fd.append('image',this.newImage);
    }
    else{
      fd.append('image',this.client.image);
    }

    this._client.update(this.id ,fd)
    .subscribe(
      (res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/dashboard/gestionclient/list']);
      },
      (err)=>{
        console.log(err);
        
      }
    )
  }


}
