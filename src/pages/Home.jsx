import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Newsletter from "../components/NewsLetter";
const Home = () => {
    return(
        <>
        <Navbar />
        <Header/>    
        <BlogList />     
        <Newsletter/>
        </>
     
    )
  }
  
  export default Home
