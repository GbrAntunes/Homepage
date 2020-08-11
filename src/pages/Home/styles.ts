import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  width: 90%;
  max-width: 1050px;
`

export const NewsPanel = styled.section`

  .news-panel > section:not(:last-child) {
    margin-bottom: 5px;
  }
`

export const GooglePanel = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-left: 50px;

  #google {
    font-size: 96px;
    line-height: 96px;
    margin-bottom: 50px;
    color: #fff;
  }

  .input-box {
    width: 502px;
    border-radius: 20px;
    background: #fff;
    
    display: flex;
    align-items: center;
    padding: 5px;

    svg {
      margin: 0px 10px;
    }
  }

  input[type="text"] {
    border: 0 solid;
    background: transparent;
    outline: none;
    width: 100%;
    font-size: 14px;
  }

  .favorites-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;

    margin: 64px 0;

    a {
      text-decoration: none;
      color: #bbb;

      display: flex;
      flex-direction: column;
      align-items: center;
      
      img {
        margin-bottom: 10px;
        max-height: 35px;
      }
    }

    &::nth-child(0) {grid-area: 1 / 1 / 3 / 5;}
    &::nth-child(1) {grid-area: 1 / 2 / 2 / 3;}
    &::nth-child(2) {grid-area: 1 / 3 / 2 / 4;}
    &::nth-child(3) {grid-area: 1 / 4 / 2 / 5;}
    &::nth-child(4) {grid-area: 2 / 1 / 3 / 2;}
    &::nth-child(5) {grid-area: 2 / 2 / 3 / 3;}
    &::nth-child(6) {grid-area: 2 / 3 / 3 / 4;}
    &::nth-child(7) {grid-area: 2 / 4 / 3 / 5;}
  }
`