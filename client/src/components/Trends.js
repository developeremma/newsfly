import React from "react";
import Trend from "./Trend"

const Trends = props => (
    <section id="about">
                <div className="container">
                    
                    <div className="section-heading scrollpoint sp-effect3">
                        <h1>Trending in {props.currentCity.name}</h1>
                            <div>
                                {props.cityTrends.map(trend => (
                                    <Trend 
                                        key={trend._id}
                                        trendTitle={trend.title}
                                        handleTrendOnClick={props.handleTrendOnClick}
                                    >
                                        {trend.title}
                                    </Trend>
                                ))} 
                            </div>
                        <div className="divider"></div>
                    </div>

                </div>
    </section>
)
            
     
export default Trends