package br.com.fiap.condohorta.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import br.com.fiap.condohorta.domain.Condominio;
import br.com.fiap.condohorta.domain.Endereco;
import br.com.fiap.condohorta.domain.dto.CondominioDTO;
import br.com.fiap.condohorta.domain.dto.NovoCondominioDTO;
import br.com.fiap.condohorta.services.CondominioService;
import br.com.fiap.condohorta.services.EnderecoService;

@RestController
@CrossOrigin
@RequestMapping(value="/api/condominios")
public class CondominioResource {

	@Autowired
	private CondominioService service;
	
	@Autowired
	private EnderecoService endService;

	
	@RequestMapping(value="{id}",method=RequestMethod.GET)
	public ResponseEntity<Condominio> find(@PathVariable Integer id) {
		Condominio obj = service.find(id);
		return ResponseEntity.ok().body(obj);

	}

	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Void> insert (@Valid @RequestBody NovoCondominioDTO objDto){
		Condominio obj = service.fromDTO(objDto);
		obj = service.insert(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}").buildAndExpand(obj.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
	
	@Transactional
	@RequestMapping(value="{id}",method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@Valid @RequestBody CondominioDTO objDto, @PathVariable Integer id){
		Condominio obj = service.fromDTO(objDto);
		obj.setId(id);
		obj = service.update(obj);
		Endereco end = endService.fromDTOEndereco(objDto.getEndereco());
		end.setId(end.getId());
		end = endService.update(end);
		return ResponseEntity.noContent().build();
	}

	@RequestMapping(value="{id}",method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Integer id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<CondominioDTO>> findAll(){
		List<Condominio> list = service.findAll();
		List<CondominioDTO> listDto = list.stream().map(obj -> new CondominioDTO(obj)).collect(Collectors.toList());
		return ResponseEntity.ok().body(listDto);
	}

}
