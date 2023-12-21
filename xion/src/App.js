import './App.css';
import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/main/layout";
import Contact from "./pages/contact";
import Location from "./pages/location";
import Main from "./pages/main";
import Button from "./pages/products/button";
import Tote from "./pages/products/tote";
import All from "./pages/products/all";
import ProductDetails from "./pages/products/productDetails";
import Error from "./pages/error";
import KBrochure from './pages/kBrochure';

function App() {
  return (
    <div className="app-container">
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Main />
              </Layout>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="location" element={<Location />} />
          <Route
            path="productDetails/:productId"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          />
          <Route
            path="all"
            element={
              <Layout>
                <All />
              </Layout>
            }
          />
          <Route
            path="button"
            element={
              <Layout>
                <Button />
              </Layout>
            }
          />
          <Route
            path="tote"
            element={
              <Layout>
                <Tote />
              </Layout>
            }
          />
          <Route path="*" element={<Error />} />
          <Route
            path="brochure"
            element={
              <Layout>
                <KBrochure/>
              </Layout>
            }
          />
        </Routes>
      </Suspense>
    </Router>
    </div>
  );
}

export default App;
