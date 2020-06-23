import React from 'react';
import Palette from './components/Palette';
import seedColors from './seedColors';
import { generatePalette } from './utils/colorHelpers';

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className='App'>
      <Palette palette={generatePalette(seedColors[1])} />
    </div>
  );
}

export default App;
