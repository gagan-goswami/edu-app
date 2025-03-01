import React from "react";
import Layout from "../../Components/Layout";
import Hero from "./Hero";
import Function from "./Function";
import "../../Styles/Home.css";
import About from "./About";
import Counter from "./Counter";
import Courses from "./Courses";
import Campus from "./Campus";

function Home() {
  return (
    <>
      <Layout>
        {/* hero-section */}
        <Hero />
        {/* Function-section */}
        <Function />
        {/* about-section  */}
        <About />
        {/* contact-section */}
        <Counter />
        {/* Courses-section */}
        <Courses />
        {/* campus-section */}
        <Campus />
      </Layout>
    </>
  );
}

export default Home;
