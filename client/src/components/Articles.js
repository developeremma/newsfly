import React from "react";
import Article from './Article'


const Articles = props => (
    <div className="articles">
        {props.articles.map(article => (
            <Article 
                key={article.publishedAt}
                url={article.url}
                title={article.title}
                description={article.description}
            />
        ))} 
    </div>
)


export default Articles
                    