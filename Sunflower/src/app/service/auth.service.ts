import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private admin = new BehaviorSubject<boolean>(this.userIsAdm());

  constructor(
    private http: HttpClient
  ) { }

  isAdm() {
    return this.admin.asObservable();
  }

  userIsAdm() {
    console.log("this.userIsAdm" + environment.tipo);
    
    if (environment.tipo == "adm") {
      return true
    }
    return false
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("http://localhost:8080/usuario/logar", usuarioLogin).pipe(
      map(response => {
        try {
          let teste = this.userIsAdm();
          this.admin.next(teste);
          return response;
        } catch (error) {
          throw new Error('Token inválido');
        }
      })
    );
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>("http://localhost:8080/usuario/cadastrar", usuario);
  }

  logado() {
    let ok: boolean = false;
    if (environment.token != "") {
      ok = true;
    }
    return ok;
  }

}
