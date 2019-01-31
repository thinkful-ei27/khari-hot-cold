import React from 'react';
import { connect } from 'react-redux';

import Feedback from './feedback';
import GuessForm from './guess-form';


function GuessSection(props) {
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback />
      <GuessForm />
    </section>
  );
}

const mapStateToProps = state => {
  return {
    guesses: state.guesses,
    feedback: state.feedback,

  }
};

export default connect(mapStateToProps)(GuessSection)