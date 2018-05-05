import React from "react";
import { TagCloud } from "react-tagcloud";


const Article = props => (
        <div className="article">
            <div className="title"> <a href={props.url} target="_blank">{props.title} </a> </div>
            <div className="description"> {props.description} </div>
        </div>
)

export default Article