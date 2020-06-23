import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './utils/colorHelpers';
import PaletteList from './components/PaletteList';

class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <PaletteList palettes={seedColors} />}
          />
          <Route
            exact
            path='/palette/:id'
            render={(routeProps) => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
              />
            )}
          />
          <Route
            exact
            path='/palette/:id/:color'
            render={(routeProps) => (
              <SingleColorPalette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id)
                )}
                color={routeProps.match.params.color}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
