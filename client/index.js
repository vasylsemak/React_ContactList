import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ContactList from './ContactList';

class Main extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/contacts');
    this.setState(() => ({ contacts: data }))
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          <ContactList contacts={this.state.contacts} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
