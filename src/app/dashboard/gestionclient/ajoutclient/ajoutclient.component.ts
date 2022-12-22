import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {

  client ={
    name:'',
    description:'',
    entreprise:'',
    titreprojet:''
  }

  selectphoto(e:any){
    this.image = e.target.files[0];
  }

  ajout(){
    let fd = new FormData();
    fd.append('name', this.client.name)
    fd.append('description', this.client.description)
    fd.append('entreprise', this.client.entreprise)
    fd.append('titreprojet', this.client.titreprojet)
    fd.append('image', this.image);

    this._client.create(fd)
    .subscribe(
      (res)=>{
        Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your client has been saved',
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

  image : any;


  constructor( private _client : ClientService, private router : Router) { }

  ngOnInit(): void {
  }

}
