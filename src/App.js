import React, { useRef, useEffect } from "react";
import { useLocation, Switch, Route } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import ReactGA from "react-ga";
import CheckoutQuantity from "../src/components/checkoutQuantity";
import CheckoutForm from "../src/components/checkoutform/index";
import ContactUs from "../src/components/contactus/index";
// Layouts
import LayoutDefault from "./layouts/LayoutDefault";

// Views
import Home from "./views/Home";

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = (page) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add("is-loaded");
    childRef.current.init();
    // trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          {/* <Route path="contact-us"component={contactus}/> */}
          <Route path="/checkout" component={CheckoutQuantity} />
          <Route path="/checkoutform" component={CheckoutForm} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      )}
    />
  );
};

export default App;
