// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props)
  }

  getCoordinates(event) {
    //console.log(event)
    const cX = event.clientX
    const cY = event.clientY
    this.props.onReceiveCoordinates([cX, cY])
  }

  render() {
    return(
      <button onClick={this.getCoordinates.bind(this)}>Coordinates</button>
    )
  }
}
