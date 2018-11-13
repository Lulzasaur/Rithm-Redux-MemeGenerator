import React, {Component} from 'react'
import {connect} from 'react-redux'


class Meme extends Component{
    constructor(props){
        super(props)
        this.delete = this.delete.bind(this)
    }
    delete() {
        this.props.dispatch({ type: "DELETE", id: this.props.id}); 
    }

    render(){
        return (
            <div>
                <p>{this.props.topText}</p>
               <img src={this.props.imgUrl} />
               <p>{this.props.bottomText}</p>
               <button onClick={this.delete}>Delete Meme</button>
            </div>
        )
    }
}

export default connect()(Meme)