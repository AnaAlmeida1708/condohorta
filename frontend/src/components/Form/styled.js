import styled from 'styled-components'

export const Group = styled.div`
  margin-bottom: 16px;
`

export const Label = styled.label`
  margin-bottom: 10px;
  display: ${({ hidden }) => (hidden ? 'none' : 'block')};
`

export const TextInput = styled.input`
  display: block;
  width: 100%;
  min-height: 48px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  color: var(--dark);
  border: 1px solid var(--gray);
  border-radius: 4px;
  box-shadow: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: var(--dark);
  }

  :-ms-input-placeholder {
    color: var(--dark);
  }
`

export const Feedback = styled.span`
  width: 100%;
  margin-top: 8px;
  font-size: 12px;
  color: red;
`
