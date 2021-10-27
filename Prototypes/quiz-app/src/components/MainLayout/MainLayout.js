import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainLayout extends Component {
  render() {
    const styles = {
      header: {
        width: '100%',
        height: '3em',
        backgroundColor: '#6495ED',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '1em',
        fontSize: '20px',
        fontWeight: 'bold',
        boxSizing: 'border-box',
      },
    };
    return (
      <div>
        <header style={styles.header}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Quiz App</Link>
        </header>
        {this.props.children}
      </div>
    );
  }
}
