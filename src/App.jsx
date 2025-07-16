// App.jsx
import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CheckoutPage from './CheckoutPage';
import About from './About';
import ProductDetail from './ProductDetail';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Admin from './Admin';
import Createcategory from './Createcategory';
import Viewcategory from './Viewcategory';
import Createproduct from './Createproduct';
import CategoryPage from './CategoryPage';
import ViewProduct from './ViewProduct';
import './App.css';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  // Simulate loading (e.g., fetching initial data)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  const hideNavbar = [
    "/admin",
    "/dashboard",
    "/createcategory",
    "/viewcategory",
    "/createproduct",
    "/viewproduct"
  ].some((path) => location.pathname.toLowerCase().startsWith(path));

  if (loading) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f6f7fa",
        }}
      >
        <div
          style={{
            color: "#E1AD01",
            fontWeight: "bold",
            letterSpacing: "3px",
            fontSize: "clamp(2.5rem, 8vw, 5rem)",
            fontFamily: "'Playfair Display', serif",
            textAlign: "center",
            textShadow: "2px 2px 5px rgba(0,0,0,0.6)",
          }}
        >
          AURUM...
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", backgroundColor: "#f7f7f7" }}>
      {!hideNavbar && <Navbar />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/category/:title" component={CategoryPage} />
        <Route exact path="/product/:id" component={ProductDetail} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/createcategory" component={Createcategory} />
        <Route exact path="/viewcategory" component={Viewcategory} />
        <Route exact path="/createproduct" component={Createproduct} />
        <Route exact path="/viewproduct" component={ViewProduct} />
      </Switch>
    </div>
  );
}

export default App;
