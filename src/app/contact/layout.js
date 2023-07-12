import React from 'react';

import styles from '@@/app/layout.module.css';

export default function Layout({ children }) {
  return (
    <div>
     <h1>
        Contact Me
      </h1>
      <div>
        {children}
      </div>
    </div>)
}