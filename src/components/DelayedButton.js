// Code DelayedButton Component Here

import React from 'react'

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props)
  }

  clickHandler(event) {
    event.persist()
    setTimeout(this.props.onDelayedClick.bind(this, event), this.props.delay)
  }

  render() {
    return(
      <button onClick={this.clickHandler.bind(this)}>Delay</button>
    )
  }
}
