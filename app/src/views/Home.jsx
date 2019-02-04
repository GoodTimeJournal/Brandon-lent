import React, {Component} from 'react';

import {HomeComponent} from '../components/Journal/HomeComponent';
import Navigation from './Navigation';

import Login from '../views/Login';
import NewJournal from '../views/NewJournal';
import NewReflection from '../views/NewReflection';
import Journals from '../views/Journals';
import Reflections from '../views/Reflections';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            views: {
                Login: 'Login',
                Home: 'Home',
                Journals: 'Journals',
                Reflections: 'Reflections',
                NewJournal: 'NewJournal',
                NewReflection: 'NewReflection'
            },
            newView: 'Home'
        }
    }
    //This function will take in the state views object and render the string based on whats passed in.
    setView = (e, GoToView) => {
        e.preventDefault();
        this.setState({newView: GoToView})
    }


    render(){
        return(
            <>
                <Navigation />
                <button onClick={(e) => this.setView(e, this.state.views.Home.toUpperCase())}>Go To Home</button>
                <button onClick={(e) => this.setView(e, this.state.views.Journals)}>Go To Journals</button>
                <button>Go To Reflections</button>
                <button>Go To Home</button>
                <button>Go To Home</button>
                <Home />
            </>
        )
    }
}

export default Home;