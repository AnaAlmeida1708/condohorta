import styled from 'styled-components'

import media from '../../helpers/media'

export const ContainerWrapper = styled.div`
  position: relative;
  max-width: 1100px;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  padding-right: 30px;
  padding-left: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  flex-direction: ${({ direction }) => direction || 'column'};
  ${media.lessThan('large')`
    width: 90%;
  `}
  ${media.lessThan('medium')`
    width: 100%;
  `}
`
