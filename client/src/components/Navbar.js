import React from "react";

const Navbar = () => (
    <header>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        
                        <div className="navbar-header" id="svgWrap">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="fa fa-bars fa-lg"></span>
                            </button>
                            {/* <a className="navbar-brand" href="/"></a> */}

                                <svg viewBox="0 0 960 300">
                                    <symbol id="s-text">
                                        <text textAnchor="middle" x="50%" y="80%">Newsfly</text>
                                    </symbol>

                                    <g className = "g-ants">
                                        <use xlinkHref="#s-text" className="text-copy"/>
                                        <use xlinkHref="#s-text" className="text-copy"/>
                                        <use xlinkHref="#s-text" className="text-copy"/>
                                        <use xlinkHref="#s-text" className="text-copy"/>
                                        <use xlinkHref="#s-text" className="text-copy"/>
                                    </g>
                                </svg>
                        </div> 

                    
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav navbar-right" id="weird">
                                <li><a href="#about">Trending</a>
                                </li>
                                <li><a href="#features">Your News</a>
                                </li>
                                <li><a href="/login">Login</a>
                                </li>
                                <li><a href="/register">Register</a>
                                </li>
                                <li><a href="/logout">logout</a>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                
        </nav>

    </header>
);

export default Navbar

