import React from 'react'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import api from '../../helpers/api'
import Button from '../Button'
import * as S from './styled'

const List = ({ data, setData }) => {
  const history = useHistory()

  const handleClick = (to) => {
    history.push(to)
  }

  const deleteItem = async (id) => {
    const formData = new FormData()

    formData.append('id', id)

    try {
      await api.delete(`condominios/${id}`, formData)
      setData(data.filter((item) => item.id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <S.ListWrapper>
      {data.map((item, i) => (
        <S.ListItem key={item.id}>
          <S.ListName>{item.nome}</S.ListName>
          <S.ListResponsible>{item.responsavel}</S.ListResponsible>
          <S.ListEmail>{item.email}</S.ListEmail>
          <S.ListPhone>{item.telefone}</S.ListPhone>
          <S.ListActions>
            <Button
              onClick={() => handleClick(`/condominios/${item.id}`)}
              label="Detalhes"
            />
            <Button
              onClick={() => handleClick(`/condominios/editar/${item.id}`)}
              label="Editar"
            />
            <Button
              appearance="danger"
              onClick={() => deleteItem(item.id)}
              label="Excluir"
            />
          </S.ListActions>
        </S.ListItem>
      ))}
    </S.ListWrapper>
  )
}

List.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func
}

export default List
