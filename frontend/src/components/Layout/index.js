import React from 'react'

import PropTypes from 'prop-types'

import GlobalStyles from '../../style'
import Header from '../Header'
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <S.LayoutWrapper>{children}</S.LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
