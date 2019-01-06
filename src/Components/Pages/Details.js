import React, { Component } from 'react'

class Details extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    )
  }
}

export default Details;