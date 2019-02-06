import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route} from 'react-router'

import Home from './Home/Home'
import ValidateCNPJ from './ValidateCNPJ/ValidateCNPJ';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Home} />
          <Route path="/cnpj" component={ValidateCNPJ} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;

