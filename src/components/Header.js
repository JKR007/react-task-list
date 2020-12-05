import React from 'react';

const Header = () => {
  const headerStyles = {
    padding: "10px 0",
    lineHeight: "2em",
  };

  return (
    <header style={ headerStyles }>
      <h1 style={ { fontSize: '40px', marginBottom: '15px', textAlign: 'center' } }>Simple Tasklist App!</h1>
      <p style={ { fontSize: '15px' } } >Please add task-list item(s) through the input filed.</p>
    </header>
  );
};

export default Header;