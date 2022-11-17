import axios from 'axios'

let base = 'api'

export default {
    getHelloMessage() { // Create method to get hello message
        return axios.get(base).then(response => { // Use Axios to retrieve api response
            return response.data // Return response data from api (hello message)
        })
    }
}