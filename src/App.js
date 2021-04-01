import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutUs from './components/AboutUs';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import { useEffect } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import ECommerce from './components/packages/ECommerce';
import Business from './components/packages/Business';
import WebHosting from './components/packages/WebHosting';
import Token from './components/Main/Token';
import Registration from './components/Main/Registration';
import Login from './components/Main/Login';

function App() {

  useEffect(() => {
  Aos.init({duration:1000});
  }, []);

  return (
    <Router>
        <NavBar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactPage} />
        <Route path="/ecommerce" component={ECommerce} />
        <Route path="/business" component={Business} />
        <Route path="/web-hosting" component={WebHosting} />
        <Route path="/token" component={Token} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />

      </Switch>
      <Footer />
    </Router>
    
  )
}

export default App;
