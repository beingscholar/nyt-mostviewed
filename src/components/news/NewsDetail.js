import React from 'react';
import { connect } from 'react-redux';
import { fetchSelectedNews } from '../../actions';

class NewsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.newsRef = React.createRef();
  }

  componentDidMount() {
    const { url } = this.props.match.params;
    // console.log(this.newsRef.current);
    this.props.fetchSelectedNews(url);
  }

  renderMedia(media) {
    const images = Object.values(media);

    return images.map(image => (
      <div style={{ textAlign: 'center' }} className="ui image" key={1}>
        <img
          className="ui large middle aligned image"
          src={image['media-metadata'][0].url}
          alt={image.caption}
        />
      </div>
    ));
  }

  render() {
    // console.log(this.props.news);

    if (!this.props.news) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui massive loader" />
        </div>
      );
    }

    const { news } = this.props;

    return (
      <div className="ui placeholder segment">
        {this.renderMedia({ ...news.media })}

        <div className="ui stacked segment">
          <h4 className="ui header">{news.title}</h4>
          <p className="description">{news.abstract}</p>
          <div style={{ color: '#767676', fontSize: '13px', float: 'right' }}>
            - {news.byline}
            <p style={{ display: 'inline-flex', marginLeft: '15px' }}>
              <i className="icon calendar alternate outline" />
              {news.published_date}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { news: state.news.selectedNews };
};

export default connect(
  mapStateToProps,
  { fetchSelectedNews }
)(NewsDetail);
