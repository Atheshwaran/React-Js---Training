import React from 'react';
import PropTypes from 'prop-types';

const Hoc = (WrappedComponent, incrementNumber) => {

	class Counter extends React.Component {
		constructor(props) {
			super(props)

			this.state = { count: 0 }
		}

		incrementCount = () => {
			this.setState( prevState => {
				return { count: prevState.count + incrementNumber }
			})
		}

		render() {
			console.log('HOC', this.props.name)
			return (
				<WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props.name} />
			)
		}
	}
	return Counter
}

Hoc.defaultProps = { name: "Athesh" };

Hoc.propTypes = {
    name: PropTypes.string.isRequired
}

export default Hoc;