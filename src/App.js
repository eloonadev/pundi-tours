import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutUs from './pages/AboustUs';
import WhyUs from './pages/WhyUs';
import Gallery from './pages/Gallery';
import Tourism from './pages/Tourism';
import Mice from './sections/OtherService/Mice';
import Ticket from './sections/OtherService/Ticket';
import Hotel from './sections/OtherService/Hotel';
import Transportation from './sections/OtherService/Transportation';
import Payment from './sections/OtherService/Payment';
import Domestic from './sections/Tourism/Domestic';
import International from './sections/Tourism/International';
import Special from './sections/Tourism/Special';

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
          path="/other/mice"
          layout={MainLayout}
          component={Mice}
          exact
        />
        <AppRoute
          path="/other/ticket"
          layout={MainLayout}
          component={Ticket}
          exact
        />
        <AppRoute
          path="/other/hotel"
          layout={MainLayout}
          component={Hotel}
          exact
        />
        <AppRoute
          path="/other/transportation"
          layout={MainLayout}
          component={Transportation}
          exact
        />
        <AppRoute
          path="/other/payment"
          layout={MainLayout}
          component={Payment}
          exact
        />
        <AppRoute
          path="/tourism/tour-indonesia"
          layout={MainLayout}
          component={Domestic}
          exact
        />
        <AppRoute
          path="/tourism/tour-international"
          layout={MainLayout}
          component={International}
          exact
        />
        <AppRoute
          path="/tourism/special-tour"
          layout={MainLayout}
          component={Special}
          exact
        />
      </Switch>
    </Router>
  );
}

export default App;
