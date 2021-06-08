import React from 'react';
import HeaderContainer from './components/Header/Header';
import MyMapContainer from './components/MyMap/MyMap';




class App extends React.Component {
  render() {
    return <div>
    <HeaderContainer />
    <MyMapContainer />
  </div>
  }
}

export default App;
