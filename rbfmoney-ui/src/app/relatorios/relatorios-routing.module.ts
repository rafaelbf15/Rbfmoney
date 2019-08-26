import { AuthGuard } from 'app/seguranca/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';

const routes: Routes = [
  {
    path: '',
    component: RelatorioLancamentosComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_PESQUISAR_LANCAMENTO'] }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
