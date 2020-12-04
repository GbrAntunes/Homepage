import React, { useState, useEffect } from 'react'
import { MdSearch } from 'react-icons/md'
import axios from 'axios'

import DevArticle from '../../components/DevArticle'
import Widgets from '../../components/Widgets'
import favoritesData from '../../database/favorites'
import getCurrentMonth from '../../utils/getCurrentMonth'
import getCurrentTime from '../../utils/getCurrentTime'

import { Container, GooglePanel, NewsPanel } from './styles'

interface GridItem {
  label: string
  link: string
  img: string
}

interface Article {
  title: string
  url: string
  user: {
    name: string
  }
}

interface Weather {
  temperature: number
  condition: 'Atmosphere' | 'Clear' | 'Clouds' | 'Snow' | 'Rain' | 'Drizzle' | 'Thunderstorm'
}

function Home() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [news, setNews] = useState<Article[]>([])
  const [weather, setWeather] = useState<Weather>({
    temperature: 0,
    condition: 'Clouds',
  })

  // News
  useEffect(() => {
    axios.get('https://dev.to/api/articles?top=1&per_page=4').then(response => {
      setNews(response.data)
    })
  }, [])

  // Clock and calendar
  useEffect(() => {
    
    setInterval(() => {
      setTime( getCurrentTime() )
    }, 1000);

    const formattedDate = getCurrentMonth()

    setDate(formattedDate)
  }, [time, date])

  // Weather
  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=manaus,br&appId=ca529b851babc01b64e7324e1be343eb')
      .then(response => {
        const { main, weather: apiWeather } = response.data

        setWeather({
          temperature: Math.round(main.temp - 273.15),
          condition: apiWeather[0].main,
        })
      })
  }, [])

  return (
    <Container>
      <NewsPanel id="news">
        <Widgets time={time} date={`Manaus, ${date}`} temperature={weather.temperature} weather={weather.condition} />

        News
        <div className="news-panel">
          {news.map((article: Article) => {
            return (
              <DevArticle key={article.title} title={article.title} author={article.user.name} url={article.url} />
            )
          })}
        </div>
      </NewsPanel>

      <GooglePanel id="google-panel">
        <h1 id="google">Google</h1>

        <form action="https://www.google.com/search" method="Get" >
          <div className="input-box">
            <MdSearch size={20} />
            <input type="text" name="q" placeholder="Pesquise no Google ou digite uma URL" autoFocus />
          </div>
        </form>

        <div className="favorites-grid">
          {favoritesData.values.map((favoriteItem) => {
            return (
              <a key={favoriteItem.label} href={favoriteItem.link}>
                <img src={favoriteItem.img} alt={favoriteItem.label} />
                <p>{favoriteItem.label}</p>
              </a>
            )
          })}
        </div>
      </GooglePanel>

    </Container>
  )
}

export default Home