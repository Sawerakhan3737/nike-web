

import Hero from "./hero";
import Shoes from "./shoes";
import Running from "./running";
import Gear from "./gear";
import Main from "./main";
import Essentials from "../app/essentials";
import Header from "../app/header";

import Footer from "./footer"



export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
<Header/>
      <Hero/>
      <Shoes/>
      <Running/>
       <Gear/>
      <Main/>
       <Essentials/>
<Footer/>
    </main>
  );
}