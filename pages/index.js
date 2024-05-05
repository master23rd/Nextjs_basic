import React, {useState, useEffect } from "react"
import Navbar from "@/components/Navbar"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"

//export default function Home() {
const Home = () => {
  
return (
  <>
    <Navbar />
    <ResourceHighlight /> 
    <Newsletter />
    <ResourceList />
    <Footer />
  </>
)
}

export default Home