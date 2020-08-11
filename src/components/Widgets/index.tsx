import React from 'react'

import { WiDayCloudy, WiWindy, WiDayRainMix, WiDayLightning, WiDaySunny, WiRainMix, WiSnow } from 'react-icons/wi'
import { Clock, Date, Widget, ClockBox, WeatherBox } from './styles'

interface WidgetsProps {
  time: string
  date: string
  temperature: number
  weather: 'Atmosphere' | 'Clear' | 'Clouds' | 'Snow' | 'Rain' | 'Drizzle' | 'Thunderstorm'
}

const DevArticle: React.FC<WidgetsProps> = ({ time, date, temperature, weather }) => {
  return (
    <Widget>
      <ClockBox>
        <Clock>{time}</Clock>
        <Date>{date}</Date>
      </ClockBox>

      <WeatherBox>
        { weather === 'Atmosphere' && <WiWindy size={55} /> }
        { weather === 'Clear' && <WiDaySunny size={55} /> }
        { weather === 'Clouds' && <WiDayCloudy size={55} /> }
        { weather === 'Snow' && <WiSnow size={55} /> }
        { weather === 'Rain' && <WiRainMix size={55} /> }
        { weather === 'Drizzle' && <WiDayRainMix size={55} /> }
        { weather === 'Thunderstorm' && <WiDayLightning size={55} /> }
        
        <span>{temperature}°</span>
      </WeatherBox>
    </Widget>
  )
}

export default DevArticle