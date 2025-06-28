import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppContext from './components/context/appContext';
import Navbar from './components/Navbar';
import About from './About'
import Home from './Home';
import './App.css';
import Chef from './Chef';
import Menu from './Menu'
import Gallery from './Gallery'
import Reservation from './Reservation';
function App() {
  const context = useContext(AppContext);
  const { helloworld } = context;
  console.log(helloworld);
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f7f7f7" }}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
  <Route exact path="/chef" component={Chef} />
    <Route exact path="/menu" component={Menu} />
        <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/reservation" component={Reservation} />
      </Switch>
    </div>
  );
}
export default App;