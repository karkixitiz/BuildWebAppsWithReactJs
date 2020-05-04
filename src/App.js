// import React from 'react';
// import Clock from './clock'
// // import MyComponent from './MyComponent'
// import ColoredBlock from './ColoredBlock'

// class App extends React.Component {
// 	render(){
//   return (
//     <div className="App">
//       <h3> Learnig React</h3>
// 	   <h4>{this.props.name}</h4>
// 	   <Clock /><br/>
// 	   {/* <MyComponent/> */}
// 	   <ColoredBlock/>
//     </div>
//   );
// }
// }


import React from 'react';
import Products from './Products.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header"><h1>My React App</h1></header>
        <section>
          <Products ></Products>
        </section>
      </div>
    );
  }
} 

export default App;

