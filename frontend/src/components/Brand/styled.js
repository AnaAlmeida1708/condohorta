import { Link } from 'react-router-dom'

import styled from 'styled-components'

import brand from '../../images/brand.svg'

export const BrandWrapper = styled.div`
  width: 150px;
  height: 132px;
`

export const BrandLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;
`

export const BrandLogo = styled.h1`
  text-indent: -99999px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-image: url("${brand}");
`
