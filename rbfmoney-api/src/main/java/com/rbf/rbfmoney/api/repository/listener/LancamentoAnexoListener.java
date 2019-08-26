package com.rbf.rbfmoney.api.repository.listener;

import javax.persistence.PostLoad;

import org.springframework.util.StringUtils;

import com.rbf.rbfmoney.api.RbfmoneyApiApplication;
import com.rbf.rbfmoney.api.model.Lancamento;
import com.rbf.rbfmoney.api.storage.S3;


public class LancamentoAnexoListener {
	
	@PostLoad
	public void postLoad(Lancamento lancamento) {
		
		if (StringUtils.hasText(lancamento.getAnexo())) {
			S3 s3 = RbfmoneyApiApplication.getBean(S3.class);
			lancamento.setUrlAnexo(s3.configurarUrl(lancamento.getAnexo()));
		}
		
	}

}
