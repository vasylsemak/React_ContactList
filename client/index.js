import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ContactList from './ContactList';
import SingleContact from './SingleContact';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      singleContact: {}
    }
    this.getSingleContact = this.getSingleContact.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/contacts');
      this.setState(() => ({ contacts: data }));
    } catch (error) {
      console.log('Can not get contacts from db, in ComponentDidMount');
    }
  }

  async getSingleContact(contactId) {
    try {
      const { data } = await axios.get(`/api/contacts/${contactId}`);
      this.setState(() => ({ singleContact: data }));
    } catch (error) {
      console.log('Can not get single contact from db');
    }
  }

  resetState() {
    this.setState(() => ({ singleContact: {} }));
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
          {this.state.singleContact.id ? (
            <SingleContact
              contact={this.state.singleContact}
              resetState={this.resetState}
             />
          ) : (
            <ContactList
              contacts={this.state.contacts}
              getContact={this.getSingleContact}
            />
          )}
        </div>
      </div>
    )
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
