import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import { useHistory } from 'react-router-dom'

import { Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import * as Yup from 'yup'

import Button from '../../../components/Button'
import Container from '../../../components/Container'
import { Group, Input } from '../../../components/Form'
import Panel from '../../../components/Panel'
import api from '../../../helpers/api'

const validationSchema = Yup.object({
  nome: Yup.string().required('Campo obrigatório'),
  responsavel: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  telefone: Yup.string().required('Campo obrigatório'),
  endereco: Yup.object({
    logradouro: Yup.string().required('Campo obrigatório'),
    numero: Yup.string().required('Campo obrigatório'),
    complemento: Yup.string(),
    cep: Yup.string().required('Campo obrigatório'),
    bairro: Yup.string().required('Campo obrigatório'),
    cidade: Yup.string().required('Campo obrigatório'),
    uf: Yup.string().required('Campo obrigatório')
  })
})

const Edit = ({ match }) => {
  const history = useHistory()

  const initialState = {
    data: {
      nome: '',
      responsavel: '',
      email: '',
      telefone: '',
      endereco: {
        id: '',
        titulo: '',
        logradouro: '',
        numero: '',
        complemento: '',
        cep: '',
        bairro: '',
        cidade: '',
        uf: ''
      }
    },
    loading: true
  }

  const [data, setData] = useState(initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await api.get(`condominios/${match.params.id}`)

        setData({
          nome: resp.data.nome,
          responsavel: resp.data.responsavel,
          email: resp.data.email,
          telefone: resp.data.telefone,
          endereco: {
            id: resp.data.endereco.id,
            titulo: resp.data.endereco.titulo,
            logradouro: resp.data.endereco.logradouro,
            numero: resp.data.endereco.numero,
            complemento: resp.data.endereco.complemento || '',
            cep: resp.data.endereco.cep,
            bairro: resp.data.endereco.bairro,
            cidade: resp.data.endereco.cidade,
            uf: resp.data.endereco.uf
          }
        })
      } catch (error) {
        console.log('Falha ao carregar API.')
      }
    }

    fetchData()
  }, [match.params.id])

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await api.put(`condominios/${match.params.id}`, values)

      resetForm(initialState.data)
      setStatus({ success: true })

      history.goBack()
    } catch (error) {
      setStatus({ success: false })
      setSubmitting(false)
      setErrors({ submit: error.body })
    }
  }

  return (
    <Container>
      <Panel
        title={data.loading ? 'Carregando...' : `Condomínio: ${data.nome}`}
      >
        {!data.loading && (
          <Formik
            initialValues={data.loading ? data.data : data}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <Row>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Nome"
                        name="nome"
                        type="text"
                        placeholder="Nome"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Responsável"
                        name="responsavel"
                        type="text"
                        placeholder="Responsável"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="E-mail"
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Telefone"
                        name="telefone"
                        type="tel"
                        placeholder="Telefone"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Titulo"
                        name="endereco.titulo"
                        type="text"
                        placeholder="Titulo"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Logradouro"
                        name="endereco.logradouro"
                        type="text"
                        placeholder="Logradouro"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Número"
                        name="endereco.numero"
                        type="text"
                        placeholder="Número"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Complemento"
                        name="endereco.complemento"
                        type="text"
                        placeholder="Complemento"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="CEP"
                        name="endereco.cep"
                        type="text"
                        placeholder="CEP"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Bairro"
                        name="endereco.bairro"
                        type="text"
                        placeholder="Bairro"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Cidade"
                        name="endereco.cidade"
                        type="text"
                        placeholder="Cidade"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col sm={6} md={3} lg={3}>
                    <Group>
                      <Input
                        label="Estado"
                        name="endereco.uf"
                        type="text"
                        placeholder="Estado"
                        hiddenLabel
                      />
                    </Group>
                  </Col>
                  <Col md={12}>
                    <Button
                      type="submit"
                      label="Atualizar condomínio"
                      disabled={isSubmitting}
                    />
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        )}
      </Panel>
    </Container>
  )
}

Edit.propTypes = {
  match: PropTypes.object
}

export default Edit
