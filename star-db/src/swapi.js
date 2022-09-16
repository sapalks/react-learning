import axios from 'axios'

class SwapiService {
    constructor() {
        this.api = axios.create({
            baseURL: 'https://swapi.dev/api'
        })
    }
}

export default SwapiService;