import React from 'react';
import ContactRow from './ContactRow';

export default ({ contacts }) => (
  <table>
    <tbody>
      <tr>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
      </tr>
      <ContactRow contacts={contacts} />
    </tbody>
  </table>
);
