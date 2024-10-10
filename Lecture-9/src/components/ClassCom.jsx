import React, {Component} from "react";


class ClassCom extends Component{
  constructor(){
    super()

    this.state = {
      num : 7,
      num2 : 893
    }
  }
  render(){
    console.log(this.props.name)
    return(
      <div>
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