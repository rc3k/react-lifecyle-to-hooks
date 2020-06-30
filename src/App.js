import React from 'react';
import ComponentDidMountWebAPIHook from './components/ComponentDidMountWebAPIHook';
import ComponentDidUpdateWebAPIHook from './components/ComponentDidUpdateWebAPIHook';
import ComponentShouldUpdateMemoised from './components/ComponentShouldUpdateMemoised';

function App() {
  return (
    <div className="App">
      <ComponentDidMountWebAPIHook />
      <ComponentDidUpdateWebAPIHook />
      <ComponentShouldUpdateMemoised />
    </div>
  );
}

export default App;
