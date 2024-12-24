import React from "react";
import Landing from "../components/landing";
import Highlight from "../components/UI/highlight";
import Featured from "../components/featured";
import Discounted from "../components/UI/discounted";

const Home = () => {
     return (
          <>
               <Landing />
               <Highlight />
               <Featured />
               <Discounted />
          </>
     )
}

export default Home