import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './utils/colorHelpers';
import PaletteList from './components/PaletteList';
import NewPaletteForm from './components/NewPaletteForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors,
    };
  }
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  savePalette = (palette) => {
    this.setState((prevState) => ({
      palettes: [...prevState.palettes, palette],
    }));
  };
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/new'
            render={() => <NewPaletteForm savePalette={this.savePalette} />}
          />
          <Route
            exact
            path='/'
            render={() => <PaletteList palettes={this.state.palettes} />}
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
                history={routeProps.history}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
