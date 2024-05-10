import React, {useState, useEffect } from "react"

function CompA(props) {
  useEffect(() => {
    console.log('use Effect called on child');
  }, [props.myProp])

  return (
  <div>
    <h1> CompA </h1>
    <div>my prop1 : {props.myProp}</div>
    <div>my prop2 : {props.myProp2}</div>
    <div>my prop3 : {props.myProp3.toString()}</div>
    <div>my prop4 : {<props.myProp4 />}</div>
  </div>)
}

//functional component
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
  
  changeState(incrementor) {
    console.log(incrementor);
    this.setState({
      value: incrementor
    })
  }

  render() {
    console.log('re-executed');
    const {value} = this.state
    const {myProp, myProp2: MyProp2, myProp3 : NewComponentA, myProp4: FuncComp} = this.props
    return (
      <>
        <h1>CompC</h1>
        current value : <h1>{ value}</h1>
        <button onClick={() => this.changeState(value +1)}>+</button>
        <button onClick={() => this.changeState(value -1)}>-</button>
        <h2>{this.props.myProp}</h2>
        <h2>{myProp}</h2>
        <MyProp2 />
        <NewComponentA 
          myProp={value}
          myProp2={"custom props"}
          myProp3={true}
          myProp4={() => <div>My New Jsx</div>}
        />
        <FuncComp/>
      </>
    )
  }
}

//React JSX - CreateElement (class component)
class CompD extends React.Component {
  state = {
    myValue : 10
  }
  render() {
    return React.createElement("h1", null, "Hello Component D")
  }
}

function MyComponent() {
  return <h1>My Component</h1>
}

//export default function Home() {
const Home = () => {
  const [value, setValue] = useState(10)
  const [otherValue, setOtherValue] = useState(5)

  useEffect(() => {
    console.log('use effect is called because first time running & change state');
  },[otherValue]) 

  //console.log("I am called initialy and when state is changed");

  return (
  <>
    value : <h1>{ value}</h1>
    <button onClick={() => setValue(value +1)}>+</button>
    <button onClick={() => setValue(value -1)}>-</button>

    otherValue : <h1>{ otherValue}</h1>
    <button onClick={() => setOtherValue(otherValue +1)}>+</button>
    <button onClick={() => setOtherValue(otherValue -1)}>-</button>

    {/* <CompA 
      myProp={value}
      myProp2={"custom props"}
      myProp3={true}
      myProp4={() => <div>My New Jsx</div>}
    /> */}
    <CompC 
      myProp={value} 
      myProp2={MyComponent} 
      myProp3={CompA}
      myProp4={() => 
        <CompA 
        myProp={value}
        myProp2={"custom props"}
        myProp3={true}
        myProp4={() => <div>My New Jsx</div>}/>
      }
    /> 
    {/* <CompD /> */}
  </>)
}

export default Home