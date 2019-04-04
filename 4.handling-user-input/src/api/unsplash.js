//custom client
import Axios from 'axios';


export default Axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID cb4d9d2e86fcea0c3186e428f095859e5e24afeb680450e5b322eb681fe9ecfb'
  }
});
