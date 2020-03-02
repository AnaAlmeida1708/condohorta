package br.com.fiap.condohorta;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import br.com.fiap.condohorta.domain.Condominio;
import br.com.fiap.condohorta.domain.Endereco;
import br.com.fiap.condohorta.repositories.CondominioRepository;
import br.com.fiap.condohorta.repositories.EnderecoRepository;

@SpringBootApplication
public class CondohortaApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CondohortaApplication.class, args);
	}
	
	@Autowired
	CondominioRepository condominioRepository;
	
	@Autowired
	EnderecoRepository enderecoRepository;

	@Override
	public void run(String... args) throws Exception {
		
		Condominio condo = new Condominio(null, "Bananeira", "Bananinha", "banana@gmail.com", "1137845896", true);
		
		Endereco e1 = new Endereco(null, "principal", "Rua da horta", "345", "05587253", "Bloco 2", "Bananais", "SP", "São Paulo","-3.84036", "-32.4113 3°", null, condo);
		e1.setCondominio(condo);
		
		condominioRepository.saveAll(Arrays.asList(condo));
		enderecoRepository.saveAll(Arrays.asList(e1));
	}
	
}
