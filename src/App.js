import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Header from './components/Header';

export default class App extends Component {
  state = {
    term: ''
  }

  requestAPI = () => {

  }

  dataSearch = term => {
    this.setState({
      term
    }, () => {
      this.requestAPI();
    });
  }

  render() {
    return (
      <div className="app container">
        <Header/>

        <Searcher
          dataSearch={ this.dataSearch }
        />

      </div>
    )
  }
}
