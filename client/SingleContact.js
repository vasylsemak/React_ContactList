import React from 'react';

export default (props) => (
  <div id='single-contact'>
    <img src={imageUrl} />
    <div id='contact-info'>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  </div>
);
