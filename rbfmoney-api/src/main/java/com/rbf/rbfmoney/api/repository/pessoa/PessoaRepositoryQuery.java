package com.rbf.rbfmoney.api.repository.pessoa;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.rbf.rbfmoney.api.model.Pessoa;
import com.rbf.rbfmoney.api.repository.filter.PessoaFilter;

public interface PessoaRepositoryQuery {
	
	public Page<Pessoa> filtrar(PessoaFilter PessoaFilter, Pageable pageable);

}
