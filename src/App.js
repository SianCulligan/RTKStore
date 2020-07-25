import React from "react";
import { Container } from "@material-ui/core";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import HomePage from "./Components/HomePage.js";
import rtkStore from "./rtk-store/index.js";
import Header from "./Components/Header";
import ProductDetails from "./Components/ProductDetails";
import ShoppingCart from "./Components/ShoppingCart";
import Footer from "./Components/Footer";
import "./styles.scss";

function App() {
  return (
    <Provider store={rtkStore}>
      <div className="App">
        <BrowserRouter>
          <Container maxWidth="xl" />
          <Header />
          <Container />

          <Container maxWidth="l" />
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart" component={ShoppingCart} />
          <Container />

          <Container maxWidth="xl" />
          <Footer />
          <Container />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
