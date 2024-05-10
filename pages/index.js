import React, {useState, useEffect } from "react"
import Layout from "@/components/Layout"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"

//export default function Home() {
const Home = () => {
  return (
    <Layout>
      <ResourceHighlight /> 
      <Newsletter />
      <ResourceList />
      <Footer />
    </Layout>
  )
}

export default Home