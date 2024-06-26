import React, {useState, useEffect } from "react"
import Layout from "@/components/Layout"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"

//export default function Home() {
const Home = ({resources}) => {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0,2)} /> 
      <Newsletter />
      <ResourceList resources={resources.slice(2)}/>
      <Footer />
    </Layout>
  )
}

//server side props (called every time visit page)
//funciton executed on the server
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()
  console.log(data);
  return {
    props : {
      resources : data
    }
  }
}

export default Home