import React from "react";

import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import HomeTabs from "../components/HomeTabs";

const Home = ()=>{
    return (
        <>
        <Carousel/>
        <HomeTabs/>
        </>
    );
}

export default Home