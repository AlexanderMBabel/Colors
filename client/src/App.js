import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import seedColors from './seedColors';
import { generatePalette } from './utils/colorHelpers';
import PaletteList from './components/PaletteList';
import NewPaletteForm from './components/NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
    this.state = {
      palettes: savedPalettes || seedColors,
    };
  }
  findPalette(id) {
    return seedColors.find((palette) => palette.id === id);
  }
  savePalette = (palette) => {
    this.setState(
      (prevState) => ({
        palettes: [...prevState.palettes, palette],
      }),
      this.syncLocalStorage
    );
  };
  getPaletteNames = () => {
    return this.state.palettes.map((palette) => palette.paletteName);
  };
  syncLocalStorage = () => {
    window.localStorage.setItem(
      'palettes',
      JSON.stringify(this.state.palettes)
    );
  };
  removePalettes = (id) => {
    let palettes = [...this.state.palettes];
    let index = palettes.findIndex((p) => p.id === id);
    palettes.splice(index, 1);
    this.setState(
      {
        palettes,
      },
      this.syncLocalStorage
    );
  };
  render() {
    return (
      <div className='App'>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition classNames='fade' timeout={500} key={location.key}>
                <Switch location={location}>
                  <Route
                    exact
                    path='/new'
                    render={() => (
                      <div className='page'>
                        <NewPaletteForm
                          savePalette={this.savePalette}
                          paletteNames={this.getPaletteNames()}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path='/'
                    render={() => (
                      <div className='page'>
                        <PaletteList
                          palettes={this.state.palettes}
                          removePalettes={this.removePalettes}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path='/palette/:id'
                    render={(routeProps) => (
                      <div className='page'>
                        <Palette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                        />
                      </div>
                    )}
                  />
                  <Route
                    exact
                    path='/palette/:id/:color'
                    render={(routeProps) => (
                      <div className='page'>
                        <SingleColorPalette
                          palette={generatePalette(
                            this.findPalette(routeProps.match.params.id)
                          )}
                          color={routeProps.match.params.color}
                          history={routeProps.history}
                        />
                      </div>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
