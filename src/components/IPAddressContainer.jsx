import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {TweenLite} from 'gsap';
import './IP.scss';

export class IPAddressContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      sub_msg_display: 'none',
      ip_address: "..hold on.. getting ip address.."
    }
    this.processRequest = this.processRequest.bind(this)
  }

  componentDidMount(){
    console.log('component mounted')
    $.ajax({
      type: 'get',
      url: this.props.url,
      success: data=>{
        this.processRequest(data)
      },
      error: (xhr, options, err)=>{
        console.log(err)
      }
    })
  }

  processRequest(data){
    TweenLite.from(this._ptag, 1, {
      x: -40,
      alpha: 0,
      ease: Power1.easeOut
    });
    this.setState({
      sub_msg_display: 'block',
      ip_address: data
    })
  }

  render(){
    let sub_msg = {
      display: this.state.sub_msg_display
    }
    return(
      <>
        <h1>{this.state.ip_address}</h1>
        <p ref={elt=>{ this._ptag = elt }} style={sub_msg}>This is your ip address.... probably >:D</p>
      </>
    )
  }

}
