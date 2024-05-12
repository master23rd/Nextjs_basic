import React, {useState, useEffect } from "react"
import Layout from "@/components/Layout"
import ResourceHighlight from "@/components/ResourceHighlight"
import Newsletter from "@/components/Newsletter"
import ResourceList from "@/components/ResourceList"
import Footer from "@/components/Footer"
import resources from "./api/resources"
// import { resources } from "@/api/data"

//export default function Home() {
const Home = ({resources}) => {
  // debugger
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

//server side props (called every time visit page)
//funciton executed on the server
export async function getServerSideProps() {
  const resData = await fetch("http://localhost:3000/api/resources")
  const data = await resData.json()

  return {
    props : {
      resources : data
    }
  }
}

//static props (only called on build time - called only once)
// export async function getStaticProps() {
//   //resources static props - return promise
//   const resData = await fetch("http://localhost:3000/api/resources")
//   const data = await resData.json()
//   return {
//     props: {
//       resources : data
//       // myData1 :[1,2,3],
//       // myData2 :["a", "b", "c"]
//     }
//   }
// }

export default Home