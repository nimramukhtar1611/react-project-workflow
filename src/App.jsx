import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContext from './components/context/appContext';
import Navbar from './components/Navbar';
import About from './About'
import Home from './Home';
import CreateAdmin from './Createadmin'
import Dashboard from './Dashboard';
import Admin from './Admin'
import './App.css';
function App() {
  const context = useContext(AppContext);
  const { helloworld } = context;
  console.log(helloworld);
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f7f7f7" }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
                <Route exact path="/Admin" component={Admin} />
                                <Route exact path="/CreateAdmin" component={CreateAdmin} />

                <Route exact path="/Dashboard" component={Dashboard} />


      </Switch>
    </div>
  );
}
export default App;