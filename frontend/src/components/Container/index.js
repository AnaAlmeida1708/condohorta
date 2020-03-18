import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Container = ({
  className,
  children,
  align,
  justify,
  direction,
  width,
  height
}) => (
  <S.ContainerWrapper
    className={className}
    justify={justify}
    align={align}
    direction={direction}
    width={width}
    height={height}
  >
    {children}
  </S.ContainerWrapper>
)

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
  justify: PropTypes.string,
  direction: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

export default Container
