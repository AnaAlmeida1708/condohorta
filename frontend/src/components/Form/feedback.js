import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Feedback = ({ meta }) => (
  <>
    {meta.touched && meta.error ? <S.Feedback>{meta.error}</S.Feedback> : null}
  </>
)

Feedback.propTypes = {
  meta: PropTypes.object.isRequired
}

export default Feedback
