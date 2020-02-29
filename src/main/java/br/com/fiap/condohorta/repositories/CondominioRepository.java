package br.com.fiap.condohorta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.fiap.condohorta.domain.Condominio;

@Repository
public interface CondominioRepository extends JpaRepository<Condominio, Integer>{
	
}