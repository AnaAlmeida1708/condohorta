import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Panel = ({ children, title }) => (
  <S.PanelWrapper>
    <S.PanelHeading>
      <S.PanelTitle>{title}</S.PanelTitle>
    </S.PanelHeading>
    {children}
  </S.PanelWrapper>
)

Panel.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Panel
