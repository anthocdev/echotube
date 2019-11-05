import React from 'react';
import logo from './logo.svg';
import Header from './modules/Header'
import {Alert} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render () {


    return (
      <div>
        <Header/>
      </div>
    );
  }
}

export default App;
