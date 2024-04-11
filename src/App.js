import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/main/layout";
import Contact from "./pages/contact";
import AboutUs from "./pages/About";
import Main from "./pages/main";
import Button from "./pages/products/button";
import All from "./pages/products/all";
import ProductDetails from "./pages/products/productDetails";
import Error from "./pages/error";
import { ToggleProvider } from "./context/ToggleContext";
import Acc from "./pages/products/acc";
import Goods from "./pages/products/goods";
import Buckle from "./pages/products/buckle";

function App() {
  return (
    <ToggleProvider>
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
              <Route
                path="contact"
                element={
                  <Layout>
                    <Contact />
                  </Layout>
                }
              />
              <Route
                path="about"
                element={
                  <Layout>
                    <AboutUs />
                  </Layout>
                }
              />
              <Route
                path="productDetails/:productTitle"
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
                path="buttons"
                element={
                  <Layout>
                    <Button />
                  </Layout>
                }
              />
              <Route
                path="buckles"
                element={
                  <Layout>
                    <Buckle />
                  </Layout>
                }
              />
              <Route
                path="accessories"
                element={
                  <Layout>
                    <Acc />
                  </Layout>
                }
              />
              <Route
                path="goods"
                element={
                  <Layout>
                    <Goods />
                  </Layout>
                }
              />
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ToggleProvider>
  );
}

export default App;
