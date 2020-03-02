package br.com.fiap.condohorta.services;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.com.fiap.condohorta.domain.Condominio;
import br.com.fiap.condohorta.domain.dto.CondominioDTO;
import br.com.fiap.condohorta.domain.dto.NovoCondominioDTO;
import br.com.fiap.condohorta.domain.enums.TipoEndereco;
import br.com.fiap.condohorta.repositories.CondominioRepository;
import br.com.fiap.condohorta.repositories.EnderecoRepository;
import br.com.fiap.condohorta.services.exceptions.DataIntegrityException;
import br.com.fiap.condohorta.services.exceptions.ObjectNotFoundException;

@Service
public class CondominioService {

	@Autowired
	CondominioRepository repo;

	@Autowired
	EnderecoRepository endRepo;

	public Condominio find(Integer id) {
		Optional<Condominio> obj = repo.findById(id);
		return obj.orElseThrow(()-> new ObjectNotFoundException(
				"Objeto não encontrado Id: " + id + ", Tipo: " + Condominio.class.getName()));
	}

	@Transactional
	public Condominio insert(Condominio obj) {
		obj.setId(null);
		obj = repo.save(obj);
		endRepo.save(obj.getEndereco());
		return obj;
	}

	public Condominio update(Condominio obj) {
		Condominio newObj = find(obj.getId());
		updateData(newObj, obj);
		return repo.save(newObj);
	}

	public void delete(Integer id) {
		find(id);
		try {
			repo.deleteById(id);
		} catch (DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não é possível excluir por que há pedidos relacionados");
		}

	}

	public List<Condominio> findAll(){
		return repo.findAll();
	}

	private void updateData(Condominio newObj, Condominio obj) {
		newObj.setNome(obj.getNome());
		newObj.setEmail(obj.getEmail());
	}

	public Condominio fromDTO(CondominioDTO objDto) {
		return new Condominio(objDto.getId(), objDto.getNome(), objDto.getResponsavel(), objDto.getEmail(), objDto.getTelefone(), null);
	}
	
	public Condominio fromDTO(NovoCondominioDTO objDto) {
		Condominio condo = new Condominio(null, objDto.getNome(), objDto.getResponsavel(), objDto.getEmail(), objDto.getTelefone(), null);
		br.com.fiap.condohorta.domain.Endereco end = new br.com.fiap.condohorta.domain.Endereco(null, objDto.getTitulo(), objDto.getLogradouro(), 
				objDto.getNumero(), objDto.getCep(), objDto.getComplemento(), objDto.getBairro(), objDto.getUf(), objDto.getCidade(), objDto.getLatitude(), 
				objDto.getLongitude(), TipoEndereco.CONDOMINIO, condo);
		condo.setEndereco(end);
	return condo;
	}

}
