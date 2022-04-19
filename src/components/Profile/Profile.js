import React from "react";
import './Profile.scss';

export default function Profile(props) {
    return (
    <body>
      <div className="profile-wrapper">
            <div className="profile-card-wrapper">
                <div className="profile-card bg-blur">
                        <img src={props.avatar} alt="profile" />
                    <div className="profile-content">
                        <h1>{props.name}</h1>
                        <h2>Software Engineer</h2>
                        <p>Company: {props.company}</p>
                        <p>Favorite Food: Gummy Worms</p>
                    </div>
                </div>
            </div>
      </div>
      </body>
    );
  }