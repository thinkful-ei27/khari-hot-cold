import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';


export default class Game extends React.Component{
  
    // // We typically wouldn't touch the DOM directly like this in React
    // // but this is the best way to update the title of the page,
    // // which is good for giving screen-reader users
    // // instant information about the app.
    // document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';
  render(){
    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection/>
          <StatusSection/>
          <InfoSection />
        </main>
      </div>
    );
  }
}

