import React, { Component } from 'react'
import Hoc from './Hoc'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

export default Hoc(ClickCounter, 2)