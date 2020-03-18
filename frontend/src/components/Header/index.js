import React from 'react'

import Brand from '../Brand'
import Container from '../Container'
import * as S from './styled'

const Header = () => (
  <S.HeaderWrapper>
    <Container justify="space-between" direction="row" align="center">
      <Brand />
      <S.HeaderNav>
        <S.HeaderMenu>
          <S.HeaderMenuItem>
            <S.HeaderMenuLink
              to="/"
              exact
              title="Condomínios"
              activeClassName="active"
            >
              Condomínios
            </S.HeaderMenuLink>
          </S.HeaderMenuItem>
          <S.HeaderMenuItem>
            <S.HeaderMenuLink
              to="/condominios/adicionar"
              title="Novo condomínio"
              activeClassName="active"
            >
              Novo condomínio
            </S.HeaderMenuLink>
          </S.HeaderMenuItem>
        </S.HeaderMenu>
      </S.HeaderNav>
    </Container>
  </S.HeaderWrapper>
)

export default Header
