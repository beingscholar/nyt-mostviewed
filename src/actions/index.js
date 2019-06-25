// import _ from 'lodash';
import NYTimes from '../apis/NYTimes';
import history from '../history';
import { FETCH_NEWS, SELECTED_NEWS } from './types';

export const fetchNews = () => async dispatch => {
  const response = await NYTimes.get('/all-sections/1.json');
  // console.log(response.data);
  dispatch({ type: FETCH_NEWS, payload: response.data });
  history.push('/');
};

export const fetchSelectedNews = url => async dispatch => {
  const response = await NYTimes.get('/all-sections/1.json');
  const news = response.data.results.filter(
    news => news.url.substring(news.url.lastIndexOf('/') + 1) === url
  );

  // console.log(news);

  dispatch({ type: SELECTED_NEWS, payload: news[0] });
};
