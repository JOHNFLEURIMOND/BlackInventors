import React, { Component } from 'react';
import { Animated } from 'react-animated-css';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div class="container">
                <div class="row mr-5">
                    <div class="col-sm-2" />
                    <div class="col-sm-10">
                    <Animated
                      animationInDelay={100}
                      animationIn='fadeIn'
                      animationOut='fadeOut'
                      isVisible>
                <div className="jumbotron align-center">
                            <h1 className="display-5 text-center">Black Inventors</h1>
                            <p className="lead text-center">
                                This Is An Application That Shows Famous Black Inventors
                                History.
                            </p>
                            <p className="text-center">
                                Higher Order Functions Like Reduce To Show Long Inventors
                                Lived, Map The Inventors Alphabetically By First & Last
                                Name, As Well Filter The Inventors From Oldest To
                                Youngest.
                            </p>
                            <p className="lead text-center">
                                <a
                                    className="btn btn-primary btn-sm"
                                    href="https://github.com/JOHNFLEURIMOND/BlackInventors"
                                    role="button"
                                >
                                    Learn More
                                </a>
                            </p>
                        </div>
                    </Animated>
            
                    </div>
                    <div class="col-sm-2" />
                </div>
            </div>
        );
    }
}
