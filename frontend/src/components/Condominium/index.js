import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Condominium = ({ item }) => {
  return (
    <S.CondominiumWrapper>
      <S.CondominiumResponsible>
        <b>Responsável:</b> {item.responsavel}
      </S.CondominiumResponsible>
      <S.CondominiumEmail>
        <b>E-mail:</b> {item.email}
      </S.CondominiumEmail>
      <S.CondominiumPhone>
        <b>Telefone:</b> {item.telefone}
      </S.CondominiumPhone>
    </S.CondominiumWrapper>
  )
}

Condominium.propTypes = {
  item: PropTypes.object
}

export default Condominium
