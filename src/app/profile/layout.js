import React from 'react';

import styles from '@/app//layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.innerLayout}>
     <div>
        Announcements: Tomorrow is a holiday!
      </div>
      <div>
        {children}
      </div>
    </div>)
}