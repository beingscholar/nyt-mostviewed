import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews } from '../../actions';

class NewsList extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }

  renderList(results) {
    const maxLength = 140;
    // console.log(results);
    return results.map(news => (
      <Link
        to={`/news/${news.url
          .substring(news.url.lastIndexOf('/') + 1)
          .replace(/\.[^/.]+$/, '')}`}
        className="item"
        key={news.id}>
        <div className="right floated content">
          <i
            className="middle aligned icon chevron right"
            style={{ color: '#767676' }}
          />
        </div>
        <img
          className="ui middle aligned avatar image"
          src={news.media[0]['media-metadata'][0].url}
          alt={news.media[0].caption}
        />
        <div className="content">
          <div className="header">
            {news.title.substring(0, maxLength) + '...'}
          </div>
          <div
            className="description"
            style={{ color: '#767676', fontSize: '12px' }}>
            {news.byline}
            <div className="right floated content">
              <i className="icon calendar alternate outline" />
              {news.published_date}
            </div>
          </div>
        </div>
      </Link>
    ));
  }

  render() {
    const { status, results } = this.props.news;
    // console.log(results);
    return (
      <div className="ui relaxed divided list">
        {status === 'OK' && results !== null ? (
          this.renderList(results)
        ) : (
          <div className="ui active inverted dimmer">
            <div className="ui massive loader" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news
  };
};

export default connect(
  mapStateToProps,
  { fetchNews }
)(NewsList);
