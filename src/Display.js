import React, {Component} from 'react'
import {connect} from 'react-redux'
import Meme from './Meme'

class Display extends Component{

    render(){
        let memes = []
        for (let key in this.props.memes) {
            memes.push(<Meme imgUrl={this.props.memes[key].imgUrl} topText={this.props.memes[key].topText} bottomText={this.props.memes[key].bottomText} id={key} />)
        }
        return (
            <div>
               {memes}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps ran; redux state:", state);
    return { memes: state };
  }
  
  const connectedComponent = connect(mapStateToProps);
  
  export default connectedComponent(Display)