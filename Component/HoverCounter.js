import React, { Component } from 'react'
import Hoc from './Hoc'

class HoverCounter extends Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

HoverCounter.defaultProps = {count: 0}

HoverCounter.propTypes = { incrementCount : PropTypes.func.isRequired}

export default Hoc(HoverCounter, 5)