

import Hero from "./hero";
import Card from "./card";
import Running from "./running";
import Gear from "./gear";
import Stan from "./stan";
import Essentials from "../app/essentials";
import Header from "../app/header";

import Footer from "./footer"



export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
<Header/>
      <Hero/>
      <Card/>
      <Running/>
       <Gear/>
      <Stan/>
       <Essentials/>
<Footer/>
    </main>
  );
}