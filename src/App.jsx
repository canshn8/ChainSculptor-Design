import React, { useEffect } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import JobApplicationPage from "./pages/JobApplicationPage";
import PageTransition from "./components/PageTransition";
import CardDetails from "./components/CardDetails";

const AppRoutes = () => {



  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <PageTransition><About /></PageTransition> },
    { path: "/jobapplication", element: <PageTransition><JobApplicationPage /></PageTransition> },
    { path: "/cardDt/:id", element: <PageTransition><CardDetails /></PageTransition> },
  ]);

  return routes;
};

const App = () => {
  return (
    
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>

  );
};

export default App;