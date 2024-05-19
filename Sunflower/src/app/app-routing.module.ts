import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { ProdutoDeleteComponent } from './delete/produto-delete/produto-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutoEditComponent } from './edit/produto-edit/produto-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { EquipeComponent } from './equipe/equipe.component';
import { InicioComponent } from './inicio/inicio.component';
import { PainelComponent } from './painel/painel.component';
import { ProdutoComponent } from './produto/produto.component';
import { SobreComponent } from './sobre/sobre.component';
import { AuthGuardService } from './service/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'categoria', component: CategoriaComponent, canActivate: [AuthGuardService] },
  { path: 'painel', component: PainelComponent, canActivate: [AuthGuardService] },
  { path: 'cadastro-produto', component: CadastroProdutoComponent, canActivate: [AuthGuardService] },
  { path: 'categoria-delete/:id', component: CategoriaDeleteComponent, canActivate: [AuthGuardService] },
  { path: 'categoria-edit/:id', component: CategoriaEditComponent, canActivate: [AuthGuardService]},
  { path: 'produto-delete/:id', component: ProdutoDeleteComponent, canActivate: [AuthGuardService] },
  { path: 'produto-edit/:id', component: ProdutoEditComponent, canActivate: [AuthGuardService] },
  {path: 'equipe', component: EquipeComponent},
  { path: 'carrinho/:id', component: CarrinhoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
