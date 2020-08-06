import styled from 'styled-components'

export const Widget = styled.section`
  display: flex;
  flex-direction: row;
`

export const ClockBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 20px;
`

export const WeatherBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 300;
  }
`

export const Clock = styled.h1`
  color: #fff;
  font-weight: 300;
  font-size: 64px;
  line-height: 65px;

  text-shadow: 0px 0px 40px rgba(255, 255, 255, 0.68), 0px 0px 10px rgba(255, 255, 255, 0.63);
`

export const Date = styled.span`
  font-size: 16px;
  font-weight: 300;
  color: #bbb;
`