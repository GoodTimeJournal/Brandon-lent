import React, { Component } from 'react'
import NewJournalComponent from '../components/Journal/NewJournalComponent';
import Navigation from './Navigation'

export default class NewJournal extends Component {
  render() {
    return (
        <>
            <Navigation />
            <NewJournalComponent />
        </>
    )
  }
}
