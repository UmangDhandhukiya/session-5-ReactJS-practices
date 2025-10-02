import React, { useState } from "react";
import Home from "./pages/Home";
import Card from "./components/Card";
import { students } from "./utillity/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Layout from "./components/Layout";

const App = () => {
  //use this state in another component pass as props (state Lifting)
  const [count, setcount] = useState(0);

  return (
    // fragment <> </>
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={<Home stat={count} setState={setcount} />}
            />
            <Route
              path="/team"
              element={<Card data={students} stat={count} />}
            />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
