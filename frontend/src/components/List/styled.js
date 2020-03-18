import styled from 'styled-components'

export const ListWrapper = styled.ul``

export const ListItem = styled.li`
  width: 100%;
  border: 1px solid var(--gray);
  padding: 24px;
  margin-bottom: 32px;
  border-radius: 4px;

  &:last-of-type {
    margin-bottom: 0;
  }
`

export const ListName = styled.h3`
  margin-bottom: 8px;
`

export const ListResponsible = styled.p``

export const ListEmail = styled.p``

export const ListPhone = styled.p``

export const ListActions = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;

  button {
    width: calc(33.333333% - 16px);
  }
`
