import { Component } from "react";

class Info extends Component{
    render(){
        const {firstName,lastName,age,hairColor}=this.props
        return(
            <>
            <h1>{lastName},{firstName}</h1>
            <p>Age:{age}</p>
            <p>Hair color:{hairColor}</p>
            </>
        );
    }
}
export default Info;