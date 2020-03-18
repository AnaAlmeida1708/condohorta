import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types'

import Condominium from '../../../components/Condominium'
import Container from '../../../components/Container'
import Panel from '../../../components/Panel'
import api from '../../../helpers/api'

const Show = ({ match }) => {
  const initialState = {
    data: {},
    loading: true
  }

  const [data, setData] = useState(initialState)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await api.get(`condominios/${match.params.id}`)
        setData(resp.data)
      } catch (error) {
        console.log('Falha ao carregar API.')
      }
    }

    fetchData()
  }, [match.params.id])

  return (
    <Container>
      <Panel
        title={data.loading ? 'Carregando...' : `Condomínio: ${data.nome}`}
      >
        {!data.loading && <Condominium item={data} />}
      </Panel>
    </Container>
  )
}

Show.propTypes = {
  match: PropTypes.object
}

export default Show
