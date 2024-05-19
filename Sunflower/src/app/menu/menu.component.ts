import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isAdmin: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.isAdm().subscribe(loggedIn => {
      this.isAdmin = loggedIn;

      console.log("Este log porra" + loggedIn);

    });
  }

  clickPainel() {
    if (environment.tipo == "adm") {
      this.router.navigate(["/painel"])
    } else {
      alert("Acesso negado!")
    }

  }

}