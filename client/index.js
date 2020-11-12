import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ContactList from './ContactList';

class Main extends Component {
  constructor() {
    super();
    this.state = { contacts: [], singleContact: {} };
    this.getSingleContact = this.getSingleContact.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/contacts');
      this.setState(() => ({ contacts: data }))
    } catch (error) {
      console.log('Can not get contacts from db, in ComponentDidMount');
    }
  }

  async getSingleContact(contactId) {
    try {
      const { data } = await axios.get(`/api/contacts/${contactId}`)
      console.log('---->', data);
      this.setState({ singleContact: data });
    } catch (error) {
      console.log('Can not get single contact from db');
    }
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          <ContactList
            contacts={this.state.contacts}
            getContact={this.getSingleContact}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
