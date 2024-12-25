import React from "react";
import Landing from "../components/landing";
import Highlights from "../components/highlight";
import Featured from "../components/featured";
import Discounted from "../components/UI/discounted";
import Explore from "../components/UI/explore";

const Home = () => {
     return (
          <>
               <Landing />
               <Highlights />
               <Featured />
               <Discounted />
               <Explore />
          </>
     )
}

export default Home