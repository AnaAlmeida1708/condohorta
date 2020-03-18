import React from 'react'

import PropTypes from 'prop-types'

import * as S from './styled'

const Group = ({ className, children }) => (
  <S.Group className={className}>{children}</S.Group>
)

Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Group
