package br.com.fiap.condohorta.domain.dto;

import java.io.Serializable;

import javax.validation.constraints.NotEmpty;

import br.com.fiap.condohorta.domain.Endereco;

public class EnderecoDTO implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Integer id;
	@NotEmpty(message="Preenchimento obrigatório")
	private String titulo;
	@NotEmpty(message="Preenchimento obrigatório")
	private String logradouro;
	@NotEmpty(message="Preenchimento obrigatório")
	private String numero;
	@NotEmpty(message="Preenchimento obrigatório")
	private String cep;
	private String complemento;
	private String bairro;
	@NotEmpty(message="Preenchimento obrigatório")
	private String uf;
	@NotEmpty(message="Preenchimento obrigatório")
	private String cidade;
//	private String latitude;
//	private String longitude;
	
	public EnderecoDTO(){
	}
	
	public EnderecoDTO(Endereco end) {
		titulo = end.getTitulo();
		logradouro = end.getLogradouro();
		numero = end.getNumero();
		cep = end.getCep();
		complemento = end.getComplemento();
		bairro = end.getComplemento();
		uf = end.getUf();
		cidade = end.getCidade();
//		latitude = end.getLatitude();
//		longitude = end.getLongitude();
	}


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

//	public String getLatitude() {
//		return latitude;
//	}
//
//	public void setLatitude(String latitude) {
//		this.latitude = latitude;
//	}
//
//	public String getLongitude() {
//		return longitude;
//	}
//
//	public void setLongitude(String longitude) {
//		this.longitude = longitude;
//	}


}
