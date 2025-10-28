import axios from 'axios'

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather'

const getWeatherInfo = (name, countryCode) => {
    const params = `?q=${name},${countryCode}&units=metric&exclude=minutely,hourly,daily&APPID=${API_KEY}`
    const request = axios.get(`${BASE_URL}${params}`)
    return request.then(response => response.data)
}

export default {getWeatherInfo}