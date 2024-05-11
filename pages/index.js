import React, {useState, useEffect } from "react"
import Layout from "@/components/Layout"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"
import { resources } from "@/api/data"

//export default function Home() {
const Home = () => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0,2)} /> 
      <Newsletter />
      <ResourceList resources={resources.slice(2)}/>
      {/* {JSON.stringify(resources)} */}
      <Footer />
    </Layout>
  )
}

export default Home