import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route}  
from 'react-router-dom'
import Header from './Componnent/Header';
import Add from './Componnent/Add'
import Watched from './Componnent/Watched'
import Watchlist from './Componnent/Watchlist'
import {GlobalProvider} from './Context/GlobalState'
function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header></Header>
      <switch>
        <Route exact path='/'>
            <Watchlist></Watchlist>
        </Route>
        <Route  path='/watched'>
           <Watched></Watched>
        </Route>
        <Route path="/add">
         <Add></Add>
        </Route>
      </switch>
    </Router>
    </GlobalProvider>
  )
}

export default App;
