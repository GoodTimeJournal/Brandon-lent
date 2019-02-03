import React, { Component } from 'react'
import NewJournalComponent from '../components/Journal/NewJournalComponent';


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
