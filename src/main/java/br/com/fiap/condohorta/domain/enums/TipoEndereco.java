package br.com.fiap.condohorta.domain.enums;

public enum TipoEndereco {
	
	USUARIO(1, "Usuário"),
	CONDOMINIO(2, "Condomínio");
	
	private int cod;
	private String descricao;
	
	private TipoEndereco(int cod, String descricao) {
		this.cod = cod;
		this.descricao = descricao;
	}
	
	public int getCod() {
		return cod;
	}
	
	public String getDescricao () {
		return descricao;
	}
	
	public static TipoEndereco toEnum(Integer cod) {
		
		if (cod == null) {
			return null;
		}
		
		for (TipoEndereco x : TipoEndereco.values()) {
			if (cod.equals(x.getCod())) {
				return x;
			}
		}
		
		throw new IllegalArgumentException("Id inválido: " + cod);
	}

}
