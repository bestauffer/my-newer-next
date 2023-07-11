import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '@/app//layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className={styles.header}>
          <div>
            <h1 style={{ marginTop: 0 }}>From layout</h1>
          </div>
          <div>
            <Link href="/profile/teacher">navigate to teacher profile</Link>
          </div>
          <div>
            <Link href="/profile/student">navigate to student profile</Link>
          </div>
        </div>
        <div>
          {children}
        </div>
      </body>
    </html>)
}