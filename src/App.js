import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Result from './components/Result';

export default class App extends Component {
  state = {
    term: '',
    imgs: []
  }

  requestAPI = () => {
    const term = this.state.term;
    const url = `https://pixabay.com/api/?key=12345181-8c32532a40c8bb63db126ce43&q=${term}&per_page=30`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({ imgs: data.hits }))
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
        <div className="jumbotron">
          <Header/> 
          <Searcher
            dataSearch={ this.dataSearch }
          />
        </div>

        <div className="row">
          <Result
            imgs={ this.state.imgs }
          />
        </div>

      </div>
    )
  }
}
