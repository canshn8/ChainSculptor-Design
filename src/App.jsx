import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import PageTransition from "./components/PageTransition";

// Lazy Loading ile sayfaları dinamik yükleyelim
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const JobApplicationPage = lazy(() => import("./pages/JobApplicationPage"));
const Account = lazy(() => import("./pages/Account"));
const EmployerProfile = lazy(() => import("./pages/EmployerProfile"));
const FreelancerProfile = lazy(() => import("./pages/FreelancerProfile"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./components/Dashboard"));

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
    { path: "/about", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><About /></PageTransition></Suspense> },
    { path: "/jobapplication", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><JobApplicationPage /></PageTransition></Suspense> },
    { path: "/account", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><Account /></PageTransition></Suspense> },
    { path: "/employer", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><EmployerProfile /></PageTransition></Suspense> },
    { path: "/freelancer", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><FreelancerProfile /></PageTransition></Suspense> },
    { path: "/dash", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><Dashboard /></PageTransition></Suspense> },
    { path: "/contact", element: <Suspense fallback={<div>Loading...</div>}><PageTransition><Contact /></PageTransition></Suspense> },
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
