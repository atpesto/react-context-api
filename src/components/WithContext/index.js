import React, { Component } from 'react';

// first make a new Context
const MyContext = React.createContext();

// Then create a Provider component
class MyProvider extends Component {
  render() {
    return (
      <MyContext.Provider value={this.props.person}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}


const Family = () => (
  <Person />
);

const Person = () => (
  <div>
    <MyContext.Consumer>
      {
        (context) => (
          <p>Finally, I'm {context.name}!</p>
        )
      }
    </MyContext.Consumer>

  </div>
);


class MainComponent extends Component {
  state = {
    name: 'Nikhil',
    age: 21,
  }

  render() {
    return (
      <MyProvider person={this.state}>
        <div>
          <p>I'm the man</p>
          <Family />
        </div>
      </MyProvider>
    )
  }
}

export default MainComponent;

