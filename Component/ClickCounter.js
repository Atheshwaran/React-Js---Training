import React, { Component } from 'react'
import Hoc from './Hoc'

class ClickCounter extends Component {

  render() {
    const { count, incrementCount } = this.props
		return <button onClick={incrementCount}>{this.props.name } Clicked {count} times</button>
	}
}

ClickCounter.defaultProps = {count: 0}

ClickCounter.propTypes = { incrementCount : PropTypes.func.isRequired}

export default Hoc(ClickCounter, 2)