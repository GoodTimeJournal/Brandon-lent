import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReflectionFormOne from '../components/Main/ReflectionFormOne';
import ReflectionFormTwo from '../components/Main/ReflectionFormTwo';
import ReflectionFormThree from '../components/Main/ReflectionFormThree';
import ReflectionFormSubmit from '../components/Main/ReflectionFormSubmit';
import '../styles/ReflectionForm.scss';

import { addReflection } from '../store/actions/reflection';

class ReflectionFormView extends Component {
  state = {
    page: 1,
    reflection: {
      q1: '',
      q2: '',
      q3: '',
      summary: ''
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      reflection: { ...this.state.reflection, [e.target.name]: e.target.value }
    });
  };

  nextStep = e => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  previousStep = e => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page - 1 }));
  };

  addReflection = e => {
    e.preventDefault();
    this.props.addReflection(this.state.reflection);
    this.props.history.push('/');
  };

  render() {
    switch (this.state.page) {
      case 1:
        return (
          <ReflectionFormOne
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            q1={this.state.reflection.q1}
          />
        );
      case 2:
        return (
          <ReflectionFormTwo
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            q2={this.state.reflection.q2}
          />
        );
      case 3:
        return (
          <ReflectionFormThree
            handleChange={this.handleChange}
            q3={this.state.reflection.q3}
            nextStep={this.nextStep}
            previousStep={this.previousStep}
          />
        );
      case 4:
        return (
          <ReflectionFormSubmit
            handleChange={this.handleChange}
            addReflection={this.addReflection}
            summary={this.state.reflection.summary}
            previousStep={this.previousStep}
          />
        );
    }
  }
}

// const mapStateToProps = state => {
//   // need state to props?
// };

export default connect(
  null,
  { addReflection }
)(ReflectionFormView);
