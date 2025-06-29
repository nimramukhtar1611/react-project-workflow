import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContext from './components/context/appContext';
import Navbar from './components/Navbar';
import About from './About'
import Home from './Home';
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

      </Switch>
    </div>
  );
}
export default App;