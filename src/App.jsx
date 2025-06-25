import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import AppContext from './components/context/appContext';
import { Switch, Route,Link } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  const context = useContext(AppContext)
  const { helloworld } = context
  console.log(helloworld);

  return (
    <>

      <div className="d-flex py-3 justify-content-center">

       <Link to="/"> <div className="btn btn-outline-primary px-2 mx-2">Home</div></Link>
       <Link to="/about"> <div className="btn btn-outline-primary px-2 mx-2">About</div></Link>
       <Link to="/users"> <div className="btn btn-outline-primary px-2 mx-2">Users</div></Link>
      </div>
      <div>


        <Switch>

          <Route path="/" exact>
            <h1 className="text-center">Home Component</h1>
          </Route>
          <Route path="/about" exact>
            <h1 className="text-center">About Component</h1>
          </Route>
          <Route path="/users" exact>
            <h1 className="text-center">Users Component</h1>
          </Route>
        </Switch>
      </div>

    </>

  );
}

export default App;
