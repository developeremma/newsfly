import React from "react";

const Navbar = () => (
    <header>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="container">
                        
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="fa fa-bars fa-lg"></span>
                            </button>
                            <a className="navbar-brand" href="index.html">
                                <img src="assets/img/freeze/newsflyme.png" alt="" className="logo" />
                            </a>
                        </div> 

                    
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav navbar-right" id="weird">
                                <li><a href="#about">Trending</a>
                                </li>
                                <li><a href="#features">Your News</a>
                                </li>
                                <li><a href="#reviews">About Newsfly</a>
                                </li>
                                <li><a href="#support">support</a>
                                </li>
                            </ul>
                        </div>
                    
                    </div>
                
        </nav>

    </header>
);

export default Navbar

