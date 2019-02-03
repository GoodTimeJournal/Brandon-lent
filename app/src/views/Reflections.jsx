import React, { Component } from 'react'
import Navigation from './Navigation';
import ReflectionComponent from '../components/Journal/ReflectionComponent';

export default class Reflections extends Component {
  render() {
    return (
      <>
       <Navigation />
       <ReflectionComponent /> 
      </>
    )
  }
}
