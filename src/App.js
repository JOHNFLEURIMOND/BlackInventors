import React, { Component } from 'react';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App container'>
        <nav class='navbar navbar-expand-lg navbar-dark bg-primary'>
          <a
            class='navbar-brand'
            href='https://github.com/JOHNFLEURIMOND/BlackInventors'>
            Array Of Black Inventors
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon' />
          </button>

          <div class='collapse navbar-collapse' id='navbarColor01'>
            <ul class='navbar-nav mr-auto'>
              <li class='nav-item active'>
                <a class='nav-link' href='/'>
                  Home <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='https://github.com/JOHNFLEURIMOND'>
                  Github
                </a>
              </li>
              <li class='nav-item'>
                <a
                  class='nav-link'
                  href='https://www.linkedin.com/in/john-fleurimond/'>
                  LinkedIn
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='https://twitter.com/fleurimond_john'>
                  Twitter
                </a>
              </li>
            </ul>
            <form class='form-inline my-2 my-lg-0'>
              <input
                class='form-control mr-sm-2'
                type='text'
                placeholder='Or Google It'
              />
              <button
                class='btn btn-secondary btn-sm my-2 my-sm-0 '
                type='submit'>
                Search
              </button>
            </form>
          </div>
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
