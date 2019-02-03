import React, { Component } from 'react'
import Navigation from './Navigation';
import NewReflectionComponent from '../components/Journal/NewReflectionComponent';

export default class NewReflection extends Component {
  render() {
    return (
      <>
        <Navigation />
        <NewReflectionComponent />
      </>
    )
  }
}
