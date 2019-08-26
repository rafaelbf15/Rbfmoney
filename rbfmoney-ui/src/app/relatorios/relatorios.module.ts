import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';
import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RelatoriosRoutingModule,

    SharedModule,
    CalendarModule,
    ButtonModule

  ],
  declarations: [RelatorioLancamentosComponent]
})
export class RelatoriosModule { }
