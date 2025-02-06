import React, { useState, useEffect } from 'react';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import JobList from "../components/JobList";
import Search from "../components/SearchFilter";

const Home = () => {


  return (
    <>
      <div className="relative">
        <div className="flex flex-col items-center justify-center mt-12">
          <div className="p-4 text-white">
            <Search />
            <JobList />
          </div>
        </div>
      </div>
    </>

  );
};

export default Home;