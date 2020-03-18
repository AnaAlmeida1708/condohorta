import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Label = ({ id, name, label, hidden }) => {
  return (
    <S.Label htmlFor={id || name} hidden={hidden}>
      {label}
    </S.Label>
  )
}

Label.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  hidden: PropTypes.bool
}

export default Label
