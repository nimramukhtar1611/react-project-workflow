// App.jsx
import React, { useContext,  useState  } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import AppContext from './components/context/appContext';
import Navbar from './components/Navbar';
import About from './About';
import Home from './Home';
import Dashboard from './Dashboard';
import Admin from './Admin';
import Createcategory from './Createcategory';
import Viewcategory from './Viewcategory';
import Footeredit from './components/Footeredit';
import Footer from './components/Footer';
import Createproduct from './Createproduct'
import CategoryPage from './CategoryPage';
import ViewProduct from './ViewProduct'
import './App.css';

function App() {
  const context = useContext(AppContext);
  const { helloworld } = context;
  console.log(helloworld);
  const location = useLocation();
  const hideNavbar = ["/admin", "/dashboard", "/createcategory", "/viewcategory","/createproduct","/viewproduct"].some((path) =>
    location.pathname.toLowerCase().startsWith(path)
  );

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f7f7f7" }}>
      {!hideNavbar && <Navbar />}
     <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Admin" component={Admin} />
        <Route path="/category/:title" component={CategoryPage } />
        <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/CreateCategory" component={Createcategory} />
                                <Route exact path="/ViewCategory" component={Viewcategory} />
       <Route exact path="/Createproduct" component={Createproduct} />
       <Route exact path="/Viewproduct" component={ViewProduct} />



      </Switch>
    </div>
  );
}

export default App;

