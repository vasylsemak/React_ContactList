import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const contacts = [
  {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
  {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
  {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
]
class Main extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts };
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
