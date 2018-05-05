import React from "react";
import { TagCloud } from "react-tagcloud";


const Trend = props => (
        <div className="trend" onClick={() => props.handleTrendOnClick(props.trendTitle)}> {props.children} </div>
)

export default Trend