import React, { Component } from 'react';
import Searcher from './components/Searcher';
import Header from './components/Header';
import Result from './components/Result';
import './spinner.css';

export default class App extends Component {
  state = {
    term: '',
    imgs: [],
    page: '',
    loading: false
  }

  requestAPI = async () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=12345181-8c32532a40c8bb63db126ce43&q=${term}&per_page=30&page=${page}`;

    await fetch(url)
          .then(resp => {
            this.setState({ loading: true })
            return resp.json()
          })
          .then(data => {
            setTimeout(() => {
              this.setState({ 
                imgs: data.hits,
                loading: false
              });
            }, 2000);
          })
          .catch(err => console.error(err));
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
    const loading = this.state.loading;
    let result;

    if (loading) {
      result = <div class="sk-cube-grid">
                <div class="sk-cube sk-cube1"></div>
                <div class="sk-cube sk-cube2"></div>
                <div class="sk-cube sk-cube3"></div>
                <div class="sk-cube sk-cube4"></div>
                <div class="sk-cube sk-cube5"></div>
                <div class="sk-cube sk-cube6"></div>
                <div class="sk-cube sk-cube7"></div>
                <div class="sk-cube sk-cube8"></div>
                <div class="sk-cube sk-cube9"></div>
              </div>;
    } else {
      result = <Result
                imgs={ this.state.imgs }
                nextPage={ this.nextPage }
                previousPage={ this.previousPage }
              />;
    }

    return (
      <div className="app container">
        <div className="jumbotron">
          <Header/> 
          <Searcher
            dataSearch={ this.dataSearch }
          />
        </div>

        <div className="row justify-content-center">
          { result }
        </div>

      </div>
    )
  }
}
