import { HttpClientModule } from '@angular/common/http';
import { MoneyHttp } from './../seguranca/money-http';
import { MessageService } from 'primeng/components/common/messageservice';
import { RelatoriosService } from './../relatorios/relatorios.service';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { GrowlModule } from 'primeng/growl';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';


import { DashboardService } from './../dashboard/dashboard.service';
import { AuthService } from './../seguranca/auth.service';
import { ErrorHandlerService } from './error-handler.service';
import { PessoaService } from './../pessoas/pessoa.service';
import { LancamentoService } from './../lancamentos/lancamento.service';
import { CategoriaService } from './../categorias/categoria.service';
import { NavbarComponent } from './navbar/navbar.component';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada.component';
import { JwtHelperService } from '@auth0/angular-jwt';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule,

    GrowlModule,
    ConfirmDialogModule,
  ],
  exports: [
    NavbarComponent,
    GrowlModule,
    ConfirmDialogModule,
    NgxSpinnerModule
  ],
  providers: [
    LancamentoService,
    PessoaService,
    CategoriaService,
    ErrorHandlerService,
    NgxSpinnerService,
    AuthService,
    MoneyHttp,
    DashboardService,
    RelatoriosService,
    MessageService,

    ConfirmationService,
    JwtHelperService,
    Title,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
export class CoreModule { }
