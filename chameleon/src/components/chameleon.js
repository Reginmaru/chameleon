import React, { Component } from 'react'


class Chameleon extends Component {
    constructor(props){
        super(props)
        this.state = {colour :"I am a chameleon"}

    }
    green = () =>{
        const newColour = <div style={{ color: 'green' }}>I am a big chameleon</div>
        this.setState({colour: newColour})
    }
    blue = () =>{
        const newColour = <div style={{ color: 'blue' }}>I am a big chameleon</div>
        this.setState({colour: newColour})
    }
    yellow = () =>{
        const newColour = <div style={{ color: 'yellow' }}>I am a big chameleon</div>
        this.setState({colour: newColour})
    }
    render(){
        return(
            
            <div>
                {this.state.colour}
        <button onClick={this.green}style={{ color: 'green' }}>green</button>
        <button onClick={this.blue}style={{ color: 'blue' }}>blue</button>
        <button onClick={this.yellow}style={{ color: 'yellow' }}>yellow</button>
        

            </div>
        )
    }

}
export default Chameleon