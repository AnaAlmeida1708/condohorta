import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
`

export const HeaderNav = styled.nav``

export const HeaderMenu = styled.ul`
  display: flex;
`

export const HeaderMenuItem = styled.li`
  &:not(:first-of-type) {
    margin-left: 12px;
  }

  &:not(:last-of-type) {
    margin-right: 12px;
  }
`

export const HeaderMenuLink = styled(NavLink)`
  color: var(--light);
  font-weight: 700;

  &.active,
  &:hover {
    color: var(--primary);
  }
`
