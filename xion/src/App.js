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


function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path="/" 
          element={
          <Layout>
          <Main/>
          </Layout>}
          />
          <Route path="contact" element={<Contact/>}/>
          <Route path= "location" element={<Location/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
