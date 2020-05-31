import React from 'react';
import Statistics from './components/Statistics';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Inicio from './components/Inicio';
import IpsSaved from './components/IpsSaved';
import CountryInfo from './components/CountryInfo';
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

  return (
    // el provider lo usamos para que los componentes (como Pokemones)
    // interpreten el store y demas logica de redux
    <Provider store = {store}>


      <Router>
            <div className="container mt-5">
            
              <div className="btn-group">
                <Link to="/" className="btn btn-dark">
                  Inicio
                </Link>
              </div>

              <div className="btn-group">
                <Link to="/statistics" className="btn btn-dark">
                  Statistics
                </Link>
              </div>

              <div className="btn-group">
                <Link to="/countryinfo" className="btn btn-dark">
                  country-Info
                </Link>
              </div>
              <div className="btn-group">
                <Link to="/ips/saved" className="btn btn-dark">
                  ips-saved
                </Link>
              </div>



              <hr />
              <Switch>

                <Route path="/ips/saved">
                  <IpsSaved />
                </Route>

                <Route path="/statistics">
                  <Statistics />
                </Route>

                <Route path="/countryinfo">
                  <CountryInfo />
                </Route>

                <Route path="/">
                  <Inicio />
                </Route>
              </Switch>
            </div>
          </Router>


    </Provider>
  );
}

export default App;
