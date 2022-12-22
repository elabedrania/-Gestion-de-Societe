import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _auth: AuthService) { }

  mydata : any;
  ngOnInit(): void {
   this.mydata = this._auth.getDataFromToken();
   console.log(this.mydata);
   
  }

}
