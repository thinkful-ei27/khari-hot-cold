import { RESET_GAME, MAKE_GUESS} from '../actions';

const initialState = {
    guesses: [],
      feedback: 'Make your guess!',
      auralStatus: '',
      correctAnswer: Math.floor(Math.random() * 100) + 1
};

function getFeedback(guess, correctAnswer){
    if (isNaN(guess)) {
        return 'Please enter a valid number';
    }
    
    const difference = Math.abs(guess - correctAnswer);

    if (difference >= 50) {
      return 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      return 'You\'re Cold...';
    } else if (difference >= 10) {
      return 'You\'re Warm.';
    } else if (difference >= 1) {
      return 'You\'re Hot!';
    } else {
      return 'You got it!';
    }
}

function getAuralStatus(guesses, feedback){
    // If there's not exactly 1 guess, we want to
    // pluralize the nouns in this aural update.
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    }


    return auralStatus;
}



export const hotColdReducer = (state=initialState, action) =>{
    switch(action.type){
        case RESET_GAME:
            return initialState;
        case MAKE_GUESS:
            return{
                ...state,
                guesses: [...state.guesses, action.guess],
                feedback: getFeedback(action.guess, state.correctAnswer),
                auralStatus: getAuralStatus(state.guesses, state.feedback)
            }
        default: return state;
    }

    // if(action.type === RESET_GAME){
    //     return initialState;
    // }
    // else if(action.type === MAKE_GUESS){
    //     return{
    //         ...state,
    //         guesses: [...state.guesses, action.guess],
    //         feedback: getFeedback(action.guess, state.correctAnswer),
    //         auralStatus: getAuralStatus(state.guesses, state.feedback)
    //     }
    // }
    
}
