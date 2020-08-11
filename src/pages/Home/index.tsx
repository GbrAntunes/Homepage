import React, { useState, useEffect } from 'react'
import { MdSearch } from 'react-icons/md'
import axios from 'axios'
import { parseISO, format, formatRelative } from 'date-fns';

import DevArticle from '../../components/DevArticle'
import Widgets from '../../components/Widgets'
// import data from '../../database/favorites_data.json'

import youtube from '../../assets/youtube.svg'
import dribbble from '../../assets/dribbble.svg'
import pinterest from '../../assets/pinterest.svg'
import notion from '../../assets/notion.svg'
import github from '../../assets/github.svg'
import gmail from '../../assets/gmail.svg'
import dev from '../../assets/dev.svg'
import figma from '../../assets/figma.svg'

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

  }, [news])

  // Clock and calendar
  useEffect(() => {
    const date = new Date()

    setInterval(() => {
      const h = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); // 0 - 23
      const m = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(); // 0 - 59

      setTime(`
        ${h}:${m}
      `)
    }, 1000);

    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    const today = parseISO(`${yyyy}-${mm}-${dd}`);

    const formattedDate = format(
      today,
      "MMMM dd'"
    );

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
          <a href="https://www.youtube.com">
            <img src={youtube} alt="Youtube" />
            <p>Youtube</p>
          </a>
          <a href="https://www.dribbble.com">
            <img src={dribbble} alt="dribbble" />
            <p>Dribbble</p>
          </a>
          <a href="https://www.pinterest.com">
            <img src={pinterest} alt="pinterest" />
            <p>Pinterest</p>
          </a>
          <a href="https://www.notion.com">
            <img src={notion} alt="notion" />
            <p>Notion</p>
          </a>
          <a href="https://www.github.com">
            <img src={github} alt="github" />
            <p>Github</p>
          </a>
          <a href="https://www.gmail.com">
            <img src={gmail} alt="gmail" />
            <p>Gmail</p>
          </a>
          <a href="https://www.dev.to">
            <img src={dev} alt="dev" />
            <p>Dev</p>
          </a>
          <a href="https://www.figma.com">
            <img src={figma} alt="figma" />
            <p>Figma</p>
          </a>
        </div>
      </GooglePanel>

    </Container>
  )
}

export default Home