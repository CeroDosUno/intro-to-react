import axios from 'axios';
const KEY = 'AIzaSyB6VSz9nAgSA7ujcW3CSHOr8b4wKqKG-jg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    maxResults:5,
    key: KEY,
  }
});
