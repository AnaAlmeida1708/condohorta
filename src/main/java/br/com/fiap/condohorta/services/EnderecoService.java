package br.com.fiap.condohorta.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import br.com.fiap.condohorta.domain.Endereco;
import br.com.fiap.condohorta.domain.dto.EnderecoDTO;
import br.com.fiap.condohorta.repositories.EnderecoRepository;
import br.com.fiap.condohorta.services.exceptions.DataIntegrityException;
import br.com.fiap.condohorta.services.exceptions.ObjectNotFoundException;

@Service
public class EnderecoService {
	
	@Autowired
	EnderecoRepository repo;
	
	
	public Endereco find(Integer id) {
		Optional<Endereco> obj = repo.findById(id);
		return obj.orElseThrow(()-> new ObjectNotFoundException(
				"Objeto não encontrado Id: " + id + ", Tipo: " + Endereco.class.getName()));
	}
	

	public Endereco insert(Endereco obj) {
		obj.setId(null);
		return repo.save(obj);
	}
	
	public Endereco update(Endereco obj) {
		Endereco newObj = find(obj.getId());
		updateDataEndereco(newObj, obj);
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
	
	public List<Endereco> findAll(){
		return repo.findAll();
	}
	
	private void updateDataEndereco(Endereco newObj, Endereco obj) {
		newObj.setLogradouro(obj.getLogradouro());
		newObj.setNumero(obj.getNumero());
		newObj.setBairro(obj.getBairro());
		newObj.setCep(obj.getCep());
		newObj.setCidade(obj.getCidade());
		newObj.setComplemento(obj.getComplemento());
		newObj.setUf(obj.getUf());
		newObj.setTitulo(obj.getTitulo());
	}
	
	public Endereco fromDTOEndereco(EnderecoDTO objDto) {
		return new br.com.fiap.condohorta.domain.Endereco(objDto.getId(), objDto.getTitulo(), objDto.getLogradouro(), 
				objDto.getNumero(), objDto.getCep(), objDto.getComplemento(), objDto.getBairro(), 
				objDto.getUf(), objDto.getCidade());
	}
}
