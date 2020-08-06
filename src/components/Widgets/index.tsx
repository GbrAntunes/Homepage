import React from 'react'

import { WiDayCloudy, WiDayLightning, WiDaySunny, WiNightRain } from 'react-icons/wi'
import { Clock, Date, Widget, ClockBox, WeatherBox } from './styles'

interface WidgetsProps {
  time: string
  date: string
  temperature: string
  weather: 'sunny' | 'cloudy' | 'rain' | 'lightning'
}

const DevArticle: React.FC<WidgetsProps> = ({ time, date, temperature, weather }) => {
  return (
    <Widget>
      <ClockBox>
        <Clock>{time}</Clock>
        <Date>{date}</Date>
      </ClockBox>

      <WeatherBox>
        { weather === 'sunny' && <WiDaySunny size={55} /> }
        { weather === 'cloudy' && <WiDayCloudy size={55} /> }
        { weather === 'rain' && <WiNightRain size={55} /> }
        { weather === 'lightning' && <WiDayLightning size={55} /> }
        
        <span>{temperature}°</span>
      </WeatherBox>
    </Widget>
  )
}

export default DevArticle