import React from 'react'

class MyComponent extends React.Component{
	constructor(props){
	super(props)
	this.state={
		foo:'click me'
	}
	this.handleClick=this.handleClick.bind(this)
	}
	 handleClick(){
		this.setState({
			foo:'bar'
		})
		console.log('clock')
	}
 
	render(){
		return(
			<button onClick={this.handleClick}>{this.state.foo}</button>
		)
	}
}

export default MyComponent