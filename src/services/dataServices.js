import axios from 'axios'
const baseUrl = 'https://alexeevv.ru/data.json'

export const fetchData = () => {
    return axios.get(baseUrl).then(r => r.data);
}

export const postData = data => {
    return axios.post(baseUrl, data)
}