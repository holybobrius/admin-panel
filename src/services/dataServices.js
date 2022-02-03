import axios from 'axios'
const baseUrl = 'https://alexeevv.ru/data.json'

const fetchData = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

export default { fetchData }