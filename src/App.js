
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './componentes/header/Header';
import ContenedorCategorias from './contenedor/ContenedorCategorias';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <ContenedorCategorias />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
