import styled from 'styled-components'

export const ArticleBox = styled.section`
  padding: 10px;
  border: solid 1px white;
  font-family: Poppins;
  
  &:not-first-child {
    margin-bottom: 10px;
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`

export const Author = styled.small`
  font-size: 12px;
`