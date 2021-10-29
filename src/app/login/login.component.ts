import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rol:number=1;
  
  constructor(private router:Router) { }
  ngOnInit(): void { }
  
  redireccion(){
    if(this.rol===1){
      this.router.navigate(['cliente']);
    }else{
      if(this.rol===2){
        this.router.navigate(['funcionario']);
      }else{
        if(this.rol===3){
          this.router.navigate(['bodega'])
        }else{
          this.router.navigate(['supervisor']);
        }
      }  
    }
  }
}
