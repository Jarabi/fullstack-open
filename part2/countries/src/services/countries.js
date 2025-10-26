import axios from 'axios'

const getAll = () => {
    const request = axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
    return request.then(res => res.data)
}

export default {getAll}