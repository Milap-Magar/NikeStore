import React from "react";
import { Hero, Sales, Navbar, Cart, Footer } from "./components";
import { heroapi, popularsales, toprateslaes } from "./data/data";

const App = () => {
  return (
    <>
      <Navbar />
      <Cart />
      <main className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales endpoint={popularsales} ifThere />
        <Sales endpoint={toprateslaes} />
      </main>
      <Footer />
    </>
  );
};

export default App;
