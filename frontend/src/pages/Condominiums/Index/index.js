import React, { useState, useEffect } from 'react'

import Container from '../../../components/Container'
import List from '../../../components/List'
import Panel from '../../../components/Panel'
import api from '../../../helpers/api'

const Main = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await api.get('condominios')

        setData(resp.data)
      } catch (error) {
        console.log('Falha ao carregar API.')
      }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Panel title="Condomínios">
        {data.length > 0 ? (
          <List data={data} setData={setData} />
        ) : (
          <p>Nenhum condomínio cadastrado.</p>
        )}
      </Panel>
    </Container>
  )
}

export default Main
