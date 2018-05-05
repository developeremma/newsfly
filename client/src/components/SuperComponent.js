import React, {Component} from 'react';

import Trends from './Trends'
import Articles from './Articles'
//import MapWithAMarker from './components/Map'
import API from '../utils/API'
import ParentMap from './ParentMap'


class SuperComponent extends Component {
  state = {
    cities: [], 
    city_trends: [],
    current_city: {},
    news: []
    //city_tags:[]
}

componentWillMount() {
  this.loadCities();

}

loadCities = () => {
  API.getCities()
    .then(res => {
      this.setState({ cities: res.data })
    })
    .catch(err => console.log(err));
};


handleCircleOnClick = (index) => {
  API.getTrends(index).then(res => {
    this.setState({ city_trends: res.data })
  })
  .catch(err => console.log(err));

  API.getCity(index).then(res => {
    this.setState({ current_city: res.data })
  })
  .catch(err => console.log(err));

}

handleTrendOnClick = (trend) => {
  console.log("trend clicked ", trend)
  API.getNews(trend).then(res => {
    console.log("res.data ", res.data)
    this.setState({news: res.data.articles})
  })
}

// transformCitiesForTags = () => {
//   let tagCities = []
//   this.state.city_trends.forEach(trend => {
//     let count = 0
//     if (trend.tweet_volume < 1000000) {
//       count = trend.tweet_volume / 10000

//     } else {
//       count = trend.tweet_volume / 100000
//     }
      
//     tagCities.push({ value: trend.title, count: count })
    
//   })

//   this.setState({ city_tags: tagCities })
// }


  render() {
    return (
      <div>
        <ParentMap 
          cities={this.state.cities}
          handleCircleOnClick={this.handleCircleOnClick}
        />
        <Trends 
          currentCity={this.state.current_city}
          cityTrends={this.state.city_trends}
          handleTrendOnClick={this.handleTrendOnClick}
        />
        <Articles 
          articles={this.state.news}
        />
      </div>
    )
  }
}

export default SuperComponent;
