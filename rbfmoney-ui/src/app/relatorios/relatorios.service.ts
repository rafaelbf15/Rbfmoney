import { HttpParams } from '@angular/common/http';
import { MoneyHttp } from './../seguranca/money-http';
import { Injectable } from '@angular/core';
import { ResponseContentType, URLSearchParams} from '@angular/http';

import { environment } from './../../environments/environment';
import * as moment from 'moment';

@Injectable()
export class RelatoriosService {

  lancamentosUrl: string;

  constructor(
    private http: MoneyHttp
  ) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`
   }

  relatorioLancamentosPorPessoa(inicio: Date, fim: Date) {
    let params = new HttpParams();

    params = params.set('inicio', moment(inicio).format('YYYY-MM-DD'));
    params = params.set('fim', moment(fim).format('YYYY-MM-DD'));

    return this.http.get(`${this.lancamentosUrl}/relatorios/por-pessoa`,
    {params, responseType: 'blob'})
      .toPromise();
  }

}
