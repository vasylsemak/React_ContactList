import React from 'react';

export default ({ contacts }) => (
  contacts.map(c => (
    <tr key={c.id}>
      <td>{c.name}</td>
      <td>{c.phone}</td>
      <td>{c.email}</td>
    </tr>
  ))
);
