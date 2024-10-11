import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  irNoRegistrado() {
    this.router.navigate(['/no-registrado']);
  }

  irRegistrado(){
    this.router.navigate(['/registrado'])
  }

  irAdmin(){
    this.router.navigate(['/admin'])
  }

  irRegistro(){
    this.router.navigate(['/registro'])
  }

  ngOnInit() {
  }

}
