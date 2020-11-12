import React from 'react';

export default ({ contacts, getContact }) => (
  contacts.map(c => (
    <tr key={c.id} onClick={() => getContact(c.id)}>
      <td>{c.name}</td>
      <td>{c.phone}</td>
      <td>{c.email}</td>
    </tr>
  ))
);
