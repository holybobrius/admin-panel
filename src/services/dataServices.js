import axios from 'axios'
const baseUrl = 'https://alexeevv.ru/data.json'

const fetchData = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const postData = async data => {
    console.log(data)
    return await axios.post(baseUrl, data)
}

export default { fetchData, postData }