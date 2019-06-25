import axios from 'axios';

const KEY = '39yfUJRgOvd5PLgYfwqfSFAbTHtUC1xB';

export default axios.create({
  baseURL: 'https://api.nytimes.com/svc/mostpopular/v2/mostviewed',
  params: {
    'api-key': KEY
  }
});
