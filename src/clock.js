import React from 'react'


class Clock extends React.Component{
	//should always pass props when calling the super constructor in a component class
	constructor(props){//it will call the constructor function on the base React.Component
		super(props) // call functions on a parent's object
		this.state={ //props make sure super has access to same arguments as the overwriting constructor
			 time:new Date().toLocaleString()
		}
		this.updateClock=this.updateClock.bind(this)
	}
	//componentDidMount() is part of react life hook which is trigger when a component
	// output is first inserted into DOM and when it's removed from DOM it will trigger one
	//called componentWillunmount
	//here every second new time is re-render which called setStatet
	componentDidMount(){
		this.intervalID=setInterval(
			this.updateClock,
			1000
		)
	}
	componentWillUnmount(){
		clearInterval(this.intervalID)
	}
	updateClock(){
		this.setState({
			time:new Date().toLocaleString()
		})
	}
	render(){
		return(
			<p>The time is {this.state.time}</p>
		)
	}
}
export default Clock