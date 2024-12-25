import React from "react";
import Landing from "../components/landing";
import Highlights from "../components/highlight";
import Featured from "../components/featured";
import Discounted from "../components/UI/discounted";

const Home = () => {
     return (
          <>
               <Landing />
               <Highlights />
               <Featured />
               <Discounted />
          </>
     )
}

export default Home