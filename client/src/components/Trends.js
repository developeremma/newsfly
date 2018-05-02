import React, { Component } from "react";
import Trend from "./Trend"
import API from '../utils/API'

class Trends extends Component {
    state = {
        trends: []
    }

    componentWillMount() {
        this.loadTrends();

    }

    loadTrends = () => {
        API.getTrends()
          .then(res => {
            this.setState({ trends: res.data })
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
            <section id="about">
                <div className="container">
                    
                    <div className="section-heading scrollpoint sp-effect3">
                        <h1>Trending #</h1>
                            <div>
                                {this.state.trends.map(trend => (
                                    <Trend key={trend._id}>
                                        {trend.title}
                                    </Trend>
                                ))} 
                            </div>
                        <div className="divider"></div>
                        <p>News Topics Around the World</p>
                    </div>

                    <div className="articles">
                    </div>
                </div>
            </section>
        )
    } 
}

export default Trends