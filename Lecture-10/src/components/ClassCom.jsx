import React, {Component} from "react";


class ClassCom extends Component{
  constructor(){
    super()

    this.state = {
      num : 7,
      num2 : 893
    };

    // this.timer = setInterval(() => {
    //   console.log("hello")
    // }, 1000)


    console.log("constructor")
  }

  async fetchData(){
    //fetching
    console.log("data fetching starts....")
  }

  componentDidMount(){
    // async function fetchData(){
    //   //fetching
    //   console.log("data fetching starts....")
    // }

    this.fetchData()
  }

  componentDidUpdate(prevProps,prevState){
    // console.log(prevProps,prevState);
    console.log("component update")
    if(prevState.num !== this.state.num){
      this.fetchData
    }
  }

  componentWillUnmount(){
    // clearInterval(this.timer)
    console.log("component will unmount")
  }
  render(){
    console.log("render")

    // fetchData();


    console.log(this.props.name)
    return(
      <div>
        <p>{console.log("dom rendered")}</p>
        <h1>{this.props.name}</h1>
        <h1>Class Component</h1>
        <button onClick={() => {
          this.setState({
            num : this.state.num + 1
          })
        }}>increment</button>
        <p>{this.state.num}</p>
      </div>
    )
  }
}

export default ClassCom