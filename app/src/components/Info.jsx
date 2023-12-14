import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      age: props.age,
      hairColor: props.hairColor,
    };
  }

  aumentar = () => {
    // Actualiza el estado incrementando la edad en 1
    this.setState((prevState) => ({
      age: prevState.age + 1,
    }));
  };

  render() {
    return (
      <>
        <h1>{this.state.lastName}, {this.state.firstName}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair color: {this.state.hairColor}</p>
        <button onClick={this.aumentar}>
          Birthday Button for {this.state.firstName} {this.state.lastName} 
        </button>
      </>
    );
  }
}

export default Info;
