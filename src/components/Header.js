import React, { Component } from 'react';

class Header extends Component {
  componentDidUpdate(prevProps, prevState) {
    // let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    // Generate light colors
    let randomColor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";

    if(prevProps.status !== this.props.status) {
      document.getElementById('rainbow').style.backgroundColor = randomColor;
    }
  };

  render() {
    return (
      <div>Header!</div>
    );
  };
}

export default Header;