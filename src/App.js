import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Result from './components/Result';

export default class App extends Component {
  state = {
    term: '',
    imgs: [],
    page: ''
  }

  requestAPI = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=12345181-8c32532a40c8bb63db126ce43&q=${term}&per_page=30&page=${page}`;

    fetch(url)
        .then(resp => resp.json())
        .then(data => this.setState({ imgs: data.hits }))
  }

  dataSearch = term => {
    this.setState({
      term,
      page: 1
    }, () => {
      this.requestAPI();
    });
  }

  previousPage = () => {
    let page = this.state.page;

    if(page === 1) return null;

    page--; 
    
    this.setState({
      page
    }, () => {
      this.requestAPI();
      this.scroll();
    });      
  }

  nextPage = () => {
    let page = this.state.page;
    page++; 

    this.setState({
      page
    }, () => {
      this.requestAPI();
      this.scroll();
    });    
  }

  scroll = () => {
    const element = document.querySelector('#result');
    element.scrollIntoView('smooth', 'start');
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

        <div className="row justify-content-center">
          <Result
            imgs={ this.state.imgs }
            nextPage={ this.nextPage }
            previousPage={ this.previousPage }
          />
        </div>

      </div>
    )
  }
}
