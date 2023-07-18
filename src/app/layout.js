"use client"
import 'bootstrap/dist/css/bootstrap.css';
import '@@/styles/Navbar-Right-Links-Dark-icons.css';
import React from 'react';
import { useEffect } from 'react';
import Head from 'next/head'

import Script from 'next/script';


export default function Layout({ children }) {

  useEffect(() => {
require("bootstrap/dist/js/bootstrap");

  }, []);
  


  return (
    <>
      <Script src="https://platform.linkedin.com/badges/js/profile.js"></Script>
    <html lang="en">
      
      <head>
        <title>Blakes Next.js</title>
      </head>
      <body>
        <div>
        {/* <div className={styles.header}>
          <div>
            <h1 style={{ marginTop: 0 }}>From layout</h1>
          </div>
          <div>
            <Link href="/profile/teacher">navigate to teacher profile</Link>
          </div>
          <div>
            <Link href="/profile/student">navigate to student profile</Link>
          </div>
        </div> */}
        <header style={{zIndex:99, position:"fixed", top: 0, overflow:"hidden", width:"100%"}}>
          <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
            <div className="container">
              <a className="navbar-brand d-flex align-items-center" href="/">
                {/* <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                    <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                    <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                  </svg>
                </span> */}
                <span>About Blake Stauffer</span>
              </a>
              <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-5">
                <span className="visually-hidden">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navcol-5">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item"><a class="nav-link" href="/projects">Projects</a></li>
                  <li className="nav-item"><a class="nav-link"  href="/about">Experience</a></li>
                  <li className="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>

        </header>

        <div style={{marginTop: "71px"}}>
          {children}
        </div>
        </div>
        
      </body>
    </html>
    </>
    )
}