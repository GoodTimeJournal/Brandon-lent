import React, { Component } from 'react'

import Navigation from './Navigation';
import JournalComponent from '../components/Journal/JournalComponent'

export default class Journals extends Component {
  render() {
    return(
        <>
            <Navigation />
            <JournalComponent />
        </>
    ) 
  }
}
