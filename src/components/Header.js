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
    const headerStyles = {
      padding: "10px 0",
      lineHeight: "2em",
    };
  
    return (
      <header style={ headerStyles }>
        <h1 style={ { fontSize: '40px', marginBottom: '15px', textAlign: 'center' } } id='rainbow'>Simple Tasklist App!</h1>
        <p style={ { fontSize: '15px' } } >Please add task-list item(s) through the input filed.</p>
      </header>
    );
  };
}

export default Header;