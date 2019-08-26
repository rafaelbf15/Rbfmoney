package com.rbf.rbfmoney.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rbf.rbfmoney.api.model.Pessoa;
import com.rbf.rbfmoney.api.repository.pessoa.PessoaRepositoryQuery;

public interface PessoaRepository extends JpaRepository<Pessoa, Long>, PessoaRepositoryQuery {

}
