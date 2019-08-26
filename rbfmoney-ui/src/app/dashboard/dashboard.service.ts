import { MoneyHttp } from './../seguranca/money-http';
import { Injectable } from '@angular/core';



import { environment } from 'environments/environment';
import * as moment from 'moment';

@Injectable()
export class DashboardService {

  lancamentoUrl: string;

  constructor(
    private http: MoneyHttp
  ) {
    this.lancamentoUrl = `${environment.apiUrl}/lancamentos`;
   }

  lancamentosPorCategoria(): Promise<Array<any>> {
    return this.http.get<Array<any>>(`${this.lancamentoUrl}/estatisticas/por-categoria`)
      .toPromise();
  }

  lancamentosPorDia(): Promise<Array<any>> {
    return this.http.get<Array<any>>(`${this.lancamentoUrl}/estatisticas/por-dia`)
      .toPromise()
      .then(response => {
        const dados = response;
        this.converterStringsParaDatas(dados);
        return dados;
      });
  }
  private converterStringsParaDatas(dados: Array<any>) {
    for (const dado of dados) {
      dado.dia = moment(dado.dia, 'YYYY-MM-DD').toDate();
    }
  }

}
