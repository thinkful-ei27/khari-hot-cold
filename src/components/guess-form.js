import React from 'react';
import { connect } from 'react-redux'

import './guess-form.css';

import { makeGuess } from '../actions';

class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    if (this.props.makeGuess) {
      const value = this.input.value;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form 
      onSubmit={e => {
        e.preventDefault();
        console.log('the guess was fired', this.input.value);
        this.props.dispatch(makeGuess(this.input.value))}}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses
  }
};

export default connect(mapStateToProps)(GuessForm);
