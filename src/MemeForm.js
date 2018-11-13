import React, {Component} from 'react'
import {connect} from 'react-redux'
import uuid from 'uuid/v4'


class MemeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: '',
      topText: '',
      bottomText: ''
    }
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(evt)   { 
    evt.preventDefault();
    this.props.dispatch({ type: "CREATE", newMeme: {"topText": this.state.topText, "bottomText": this.state.bottomText, "imgUrl": this.state.imgUrl, "id": uuid()
  }}); 
    this.setState({imgUrl: '',
    topText: '',
    bottomText: ''})
  }

  handleChange(evt) {
    this.setState({[evt.target.name]: evt.target.value })    
  }

  render(){
    console.log("render ran; props", this.props);
    return <div>
       <form onSubmit={this.add}>
        <label htmlFor="topText">Top text</label>
        <input name="topText" onChange={this.handleChange} value={this.state.topText}/>
        <label htmlFor="bottomText">Bottom text</label>
        <input name="bottomText" onChange={this.handleChange} value={this.state.bottomText}/>
        <label htmlFor="imgUrl">Image url</label>
        <input name="imgUrl" onChange={this.handleChange} value={this.state.imgUrl}/>
        <button> Submit </button>
       </form>
      </div>;
  }
}

export default connect()(MemeForm)