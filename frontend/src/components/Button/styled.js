import styled from 'styled-components'

const APPEARANCES = {
  PRIMARY: 'primary',
  DANGER: 'danger'
}

export const ButtonWrapper = styled.button`
  border: 1px solid transparent;
  color: var(--light);
  box-shadow: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 16px;
  white-space: nowrap;
  display: inline-block;
  border-radius: 4px;

  &:hover {
    opacity: 0.8;
  }

  /* Appearances */
  ${(props) => {
    const { appearance } = props

    if (APPEARANCES.PRIMARY === appearance) {
      return `
        background-color: var(--primary);
        border-color: var(--primary);
        border-color: var(--primary);
        color: var(--light);

        &:hover {
          color: var(--light);
          border-color: var(--primary);
          background-color: var(--primary);
        }
      `
    }
    if (APPEARANCES.DANGER === appearance) {
      return `
        background-color: var(--danger);
        border-color: var(--danger);
        border-color: var(--danger);
        color: var(--light);

        &:hover {
          color: var(--light);
          border-color: var(--danger);
          background-color: var(--danger);
        }
      `
    }
  }}
`
