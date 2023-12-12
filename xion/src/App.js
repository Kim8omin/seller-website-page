import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";
import Layout from "./components/main/layout";
import Contact from "./pages/contact";
import Location from "./pages/location";
import Main from "./pages/main";
import Button from "./pages/products/button";
import Tote from "./pages/products/tote";
import All from "./pages/products/all";

function App() {
  return (
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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
