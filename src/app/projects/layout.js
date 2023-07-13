import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '@@/styles/globals.css';

export default function Layout({ children }) {



  return (

        <div class="screen-container">
            <h1 class="content">
                My Projects
            </h1>
            <ul>
                <li>KnowBetter App</li>
                <li>Climbing Buddy App</li>
                <li>Entity Relationships Trial App</li>
                <li><a href="https://apps.apple.com/us/app/envko/id1605823113" target="_blank">Envko iOS App</a></li>
            </ul>
        </div>
    );

}