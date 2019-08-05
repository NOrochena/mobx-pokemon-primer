import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PokemonsView from './views/PokemonsView'
import PokemonsClone from './views/PokemonsCloneView'

class App extends React.Component {

  render() {
    return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/clone/">Pokemons Clone</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={PokemonsView} />
        <Route path="/clone" exact component={PokemonsClone} />
      </div>
    </Router>
    )
  }
}

export default App
