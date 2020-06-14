import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboustUs';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Tourism from './pages/Tourism';

const AppRoute = ({ component: Component, layout: Layout, ...rest}) => (
  <Route 
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const MainLayout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)

function App() {
  return (
    <Router>
      <Switch>
        <AppRoute
          path="/"
          layout={MainLayout}
          component={Home}
          exact
        />
        <AppRoute
          path="/aboutus"
          layout={MainLayout}
          component={AboutUs}
          exact
        />
        <AppRoute
          path="/whyus"
          layout={MainLayout}
          component={WhyUs}
          exact
        />
        <AppRoute
          path="/contact"
          layout={MainLayout}
          component={Contact}
          exact
        />
         <AppRoute
          path="/tourism"
          layout={MainLayout}
          component={Tourism}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
