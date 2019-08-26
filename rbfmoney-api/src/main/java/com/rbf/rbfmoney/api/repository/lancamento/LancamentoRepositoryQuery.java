package com.rbf.rbfmoney.api.repository.lancamento;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.rbf.rbfmoney.api.dto.LancamentoEstatisticaCategoria;
import com.rbf.rbfmoney.api.dto.LancamentoEstatisticaDia;
import com.rbf.rbfmoney.api.dto.LancamentoEstatisticaPessoa;
import com.rbf.rbfmoney.api.model.Lancamento;
import com.rbf.rbfmoney.api.repository.filter.LancamentoFilter;
import com.rbf.rbfmoney.api.repository.projection.ResumoLancamento;

public interface LancamentoRepositoryQuery {
	
	public List<LancamentoEstatisticaPessoa> porPessoa(LocalDate inicio, LocalDate fim); 
	public List<LancamentoEstatisticaDia> porDia(LocalDate mesReferencia);
	public List<LancamentoEstatisticaCategoria> porCategoria(LocalDate mesReferencia);
	
	public Page<Lancamento> filtrar(LancamentoFilter lancamentoFilter, Pageable pageable);
	public Page<ResumoLancamento> resumir(LancamentoFilter lancamentoFilter, Pageable pageable);
}
