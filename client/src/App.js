import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './utils/colorHelpers';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/palette/:id' />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[0])} /> */}
      </div>
    );
  }
}

export default App;
