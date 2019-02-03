import React, {Component} from 'react';

import {HomeComponent} from '../components/Journal/HomeComponent';
import Navigation from './Navigation';

class Home extends Component{
    render(){
        return(
            <>
                <Navigation />
                <HomeComponent />
            </>
        )
    }
}

export default Home;