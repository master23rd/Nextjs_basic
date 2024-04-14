import React from "react"

function CompA() {
  return (
  <div>
    <h1> CompA </h1>
    <ArrowFunction />
    <CompB />
  </div>)

    // return (
    //   React.createElement("div", null, 
    //     React.createElement("h1", null, "CompA"),
    //     React.createElement("p",null, "HelloCompA"),
    //     React.createElement(CompB)
    //   ))
}

function CompB() {
  return <h1> CompB </h1>
}

class CompC extends React.Component {
  render() {
    return (
      <h1>CompC</h1>
    )
  }
}

//React JSX - CreateElement
class CompD extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello Component D")
  }
}

const ArrowFunction = () => {
  return (
    <>
      <h1>Halo Arrow Function</h1>
      <p>Testing ArrowFunction</p>
    </>
  )
}

//export default function Home() {
const Home = () => {
  return (
  <>
    <h1>Hello World</h1>
    <CompA />
    <CompC />
    <CompD />
  </>)
}

export default Home