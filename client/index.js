import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = { contacts: [] };
  }

  async componentDidMount() {
    const { data } = await axios.get('/api/contacts');
    console.log('======>', data);
    this.setState(() => ({ contacts: data }))
  }

  render() {
    return (
      <div id="main">
        <div id="navbar">
          <div>Contact List</div>
        </div>
        <div id="container">
            {
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                  </tr>
                  {
                    this.state.contacts.map(c => (
                      <tr key={c.id}>
                        <td>{c.name}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            }
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
