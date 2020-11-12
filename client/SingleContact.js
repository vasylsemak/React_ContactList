import React from 'react';

export default ({ contact, resetState }) => (
  <div id='single-contact'>
    <img src={contact.imageUrl} />
    <div id='contact-info'>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
      <button onClick={resetState}>Return to contacts</button>
  </div>
);
