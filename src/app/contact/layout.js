import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Layout({ children }) {



  return (
    <div >
      {/* <h1>
        Contact Me
      </h1> */}
      <div>
        {children}
      </div>
    </div>)
}