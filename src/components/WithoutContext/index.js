import React, { Component } from 'react';

const Family = (props) => (
  <Person {...props} />
);

const Person = ({ person }) => (
  <div>Finally, I'm {person.name}!</div>
);


class MainComponent extends Component {
  state = {
    name: 'Nikhil',
    age: 21,
  }

  render() {
    return (
      <div>
        <p>I'm the man</p>
        <Family person={this.state} />
      </div>
    )
  }
}

export default MainComponent;

