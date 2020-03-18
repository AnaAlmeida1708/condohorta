import React from 'react'

import { useField } from 'formik'
import PropTypes from 'prop-types'

import Feedback from './feedback'
import Label from './label'
import * as S from './styled'

const Input = ({ className, label, hasIcon, hiddenLabel, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <Label label={label} hidden={hiddenLabel} {...props} />
      <S.TextInput
        className={className}
        hasIcon={!!hasIcon}
        {...field}
        {...props}
      />
      <Feedback meta={meta} />
    </>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  hasIcon: PropTypes.string,
  hiddenLabel: PropTypes.bool
}

export default Input
