import React, { Component } from "react";
import Trend from "./Trend"
import API from '../utils/API'

class Trends extends Component {
    state = {
        trends: []
    }

    componentWillMount() {
        console.log('oh hi')
        this.loadTrends();
        console.log('oh hi 1')

    }

    loadTrends = () => {
        API.getTrends()
          .then(res => {
            console.log('I am res', res)
            this.setState({ trends: res.data })
          })
          .catch(err => console.log(err));
      };

    render() {
        return (
            this.state.trends.map(trend => (
                <Trend key={trend._id}>
                    {trend.title}
                </Trend>
            ))
        )
    } 
}

export default Trends