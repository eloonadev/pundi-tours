import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboustUs';
import WhyUs from './pages/WhyUs';
import Gallery from './pages/Gallery';
import Tourism from './pages/Tourism';
import OtherService from './pages/OtherService';

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
          path="/gallery"
          layout={MainLayout}
          component={Gallery}
          exact
        />
         <AppRoute
          path="/tourism"
          layout={MainLayout}
          component={Tourism}
          exact
        />
         <AppRoute
          path="/other"
          layout={MainLayout}
          component={OtherService}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
