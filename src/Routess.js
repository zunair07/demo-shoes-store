import React from 'react';
import {BrowserRouter as Router,Route, Link, Routes} from "react-router-dom";

import { Home, About, Product, ProductItem, NotFound } from './Components';
import Navbar from './Components/NavBar.jsx';

function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />}  />
              <Route exact path="/product" element={< Product/>}  />
              <Route path="/product/:id" element={<ProductItem />}  />
              <Route path="*" element={<NotFound />} />
              </Routes>
      </Router>
     
    </div>
  );
}

export default RouteConfig;
