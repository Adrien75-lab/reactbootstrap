import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/swiper-bundle.css';
import 'glightbox/dist/css/glightbox.min.css';
import '../assets/css/style.css';
import '../assets/js/main';
import Header from './Header';
import HomePage from './HomePage';
import ServicesPage from './ServicesPage'
import PortfolioPage from './PortfolioPage'
import ContactPage from './ContactPage'
import Footer from './Footer';
import Details from './Article';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/contact" component={ContactPage} /> 
            <Route path="/portfolio" component={PortfolioPage} /> 
            <Route path="/services" component={ServicesPage} />
            <Route path="/article/:id" component={Details} />
            <Route path="/" component={HomePage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App