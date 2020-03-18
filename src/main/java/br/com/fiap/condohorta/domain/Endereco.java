package br.com.fiap.condohorta.domain;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.com.fiap.condohorta.domain.enums.TipoEndereco;

@Entity
@Table(name = "CH_ENDERECOS")
public class Endereco implements Serializable{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE)
	@Column(name = "id_endereco")
	private Integer id;
	private String titulo;
	private String logradouro;
	private String numero;
	private String cep;
	private String complemento;
	private String bairro;
	private String uf;
	private String cidade;
	private String latitude;
	private String longitude;
	private Integer tipo;
	@JsonIgnore
	private Integer idCondominio;

	@JsonIgnore
	@OneToOne
	@JoinColumn(name="condominio_id")
	private Condominio condominio;

	//id usuario - comentei o campo pois será ajustado em relação futura

	public Endereco() {
	}

	public Endereco(Integer id, String titulo, String logradouro, String numero, String cep, String complemento, String bairro,
			String uf, String cidade, String latitude, String longitude, TipoEndereco tipo,
			Condominio condominio) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.logradouro = logradouro;
		this.numero = numero;
		this.cep = cep;
		this.complemento = complemento;
		this.bairro = bairro;
		this.uf = uf;
		this.cidade = cidade;
		this.latitude = latitude;
		this.longitude = longitude;
		this.tipo = ((tipo==null) ? null : tipo.getCod());
		this.condominio = condominio;
	}

	public Endereco(Integer id, String titulo, String logradouro, String numero, String cep, String complemento, String bairro,
			String uf, String cidade) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.logradouro = logradouro;
		this.numero = numero;
		this.cep = cep;
		this.complemento = complemento;
		this.bairro = bairro;
		this.uf = uf;
		this.cidade = cidade;
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

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public Condominio getCondominio() {
		return condominio;
	}

	public void setCondominio(Condominio condominio) {
		this.condominio = condominio;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public TipoEndereco getTipo() {
		return TipoEndereco.toEnum(tipo);
	}

	public void setTipo(TipoEndereco tipo) {
		this.tipo = tipo.getCod();
	}

	@Override
	public String toString() {
		return "Endereco [" + (id != null ? "id=" + id + ", " : "") + (titulo != null ? "titulo=" + titulo + ", " : "")
				+ (logradouro != null ? "logradouro=" + logradouro + ", " : "")
				+ (numero != null ? "numero=" + numero + ", " : "") + (cep != null ? "cep=" + cep + ", " : "")
				+ (complemento != null ? "complemento=" + complemento + ", " : "")
				+ (bairro != null ? "bairro=" + bairro + ", " : "") + (uf != null ? "uf=" + uf + ", " : "")
				+ (cidade != null ? "cidade=" + cidade + ", " : "")
				+ (latitude != null ? "latitude=" + latitude + ", " : "")
				+ (longitude != null ? "longitude=" + longitude + ", " : "")
				+ (tipo != null ? "tipo=" + tipo + ", " : "") + (condominio != null ? "condominio=" + condominio : "")
				+ "]";
	}
}
