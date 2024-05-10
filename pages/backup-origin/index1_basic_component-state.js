import React, {useState} from "react"

function CompA(props) {
//  function CompA({myProp}){}
  return (
  <div>
    <h1> CompA </h1>
    <div>my prop1 : {props.myProp}</div>
    <div>my prop2 : {props.myProp2}</div>
    <div>my prop3 : {props.myProp3.toString()}</div>
    <div>my prop4 : {<props.myProp4 />}</div>
    {/* <ArrowFunction /> */}
    {/* <CompB /> */}
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

//class component
class CompC extends React.Component {

  //define state using constructor
  constructor(){
    super()
    this.state = {
      value : 1000
    }
  }


  //define directly
  // state = {
  //   value : 1000
  // }

  changeState(incrementor) {
    console.log(incrementor);
    this.setState({
      value: incrementor
    })
  }

  render() {
    console.log('re-executed');
    const {value} = this.state
    return (
      <>
      <h1>CompC</h1>
      current value : <h1>{ value}</h1>
      <button onClick={() => this.changeState(value +1)}>+</button>
      <button onClick={() => this.changeState(value -1)}>-</button>
      </>
    )
  }
}

//React JSX - CreateElement
class CompD extends React.Component {
  state = {
    myValue : 10
  }
  render() {
    return React.createElement("h1", null, "Hello Component D")
  }
}

// const ArrowFunction = () => {
//   return (
//     <>
//       <h1>Halo Arrow Function</h1>
//       <p>Testing ArrowFunction</p>
//     </>
//   )
// }

//simpler typing
const ArrowFunction = _ => 
<div>
  <h1>I am arrow function</h1>
</div>



//export default function Home() {
//state
const Home = () => {
  //[stateValue, mutatestate]
  const [value, setValue] = useState(10)
  //const valueState = useState()
  // const value = valueState[0]
  // const setValue = valueState[1]

  console.log("I am called initialy and when state is changed");

  // //function
  // const incrementValue = () => {
  //   setValue(value+1)
  //   //debugger
  //   console.log(value);
  // }

  // const decrementValue = () => {
  //   setValue(value-1)
  // }

  // const changeValue = (incremantor) => {
  //   setValue(value + incremantor)
  // }

  return (
  <>
  value : <h1>{ value}</h1>
    {/* <h1>Hello World</h1> */}
    {/* <button onClick={changeValue(+1)}>+</button> */}
    <button onClick={() => setValue(value +1)}>+</button>
    <button onClick={() => setValue(value -1)}>-</button>
    <CompA 
      myProp={value}
      myProp2={"custom props"}
      myProp3={true}
      myProp4={() => <div>My New Jsx</div>}
    />
    {/* <CompC />  */}
    {/* <CompD /> */}
  </>)
}

export default Home