import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Button = ({ label, appearance, ...props }) => (
  <S.ButtonWrapper title={label} {...props} appearance={appearance}>
    {label}
  </S.ButtonWrapper>
)

Button.defaultProps = {
  appearance: 'primary'
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  appearance: PropTypes.string
}

export default Button
