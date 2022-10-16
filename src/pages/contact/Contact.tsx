import React from 'react';
import './Contact.scss';

interface contactProps {
  show?: boolean;
}

function Contact({ show }: contactProps) {
  return (
    <>
      {show && (
        <div className="contact-container">
          <h1>Contact</h1>
        </div>
      )}
    </>
  );
}

export default Contact;
