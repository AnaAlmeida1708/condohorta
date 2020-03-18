import React from 'react'
import { Row, Col } from 'react-awesome-styled-grid'
import { useHistory } from 'react-router-dom'

import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import Button from '../../../components/Button'
import Container from '../../../components/Container'
import { Group, Input } from '../../../components/Form'
import Panel from '../../../components/Panel'
import api from '../../../helpers/api'

const initialValues = {
  nome: '',
  responsavel: '',
  email: '',
  telefone: '',
  titulo: '',
  logradouro: '',
  numero: '',
  complemento: '',
  cep: '',
  bairro: '',
  cidade: '',
  uf: ''
}

const validationSchema = Yup.object({
  nome: Yup.string().required('Campo obrigatório'),
  responsavel: Yup.string().required('Campo obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Campo obrigatório'),
  telefone: Yup.string().required('Campo obrigatório'),
  logradouro: Yup.string().required('Campo obrigatório'),
  numero: Yup.string().required('Campo obrigatório'),
  complemento: Yup.string(),
  cep: Yup.string().required('Campo obrigatório'),
  bairro: Yup.string().required('Campo obrigatório'),
  cidade: Yup.string().required('Campo obrigatório'),
  uf: Yup.string().required('Campo obrigatório')
})

const Main = () => {
  const history = useHistory()

  const onSubmit = async (
    values,
    { setSubmitting, setErrors, setStatus, resetForm }
  ) => {
    try {
      await api.post('condominios', values)

      resetForm(initialValues)
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
      <Panel title="Adicionar Condomínio">
        <Formik
          initialValues={initialValues}
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
                      name="titulo"
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
                      name="logradouro"
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
                      name="numero"
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
                      name="complemento"
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
                      name="cep"
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
                      name="bairro"
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
                      name="cidade"
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
                      name="uf"
                      type="text"
                      placeholder="Estado"
                      hiddenLabel
                    />
                  </Group>
                </Col>
                <Col md={12}>
                  <Button
                    type="submit"
                    label="Adicionar condomínio"
                    disabled={isSubmitting}
                  />
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Panel>
    </Container>
  )
}

export default Main
