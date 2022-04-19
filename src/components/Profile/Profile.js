import React from "react";
import './Profile.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Profile(props) {
    return (
    <body>
      <div className="profile-wrapper bg-blur">
            <div className="profile-card-wrapper">
                <div className="profile-card">
                    
                        <img src={props.avatar} alt="profile" />
                    
                    <div className="profile-content">
                        <h1 class="text-gradient">{props.name}</h1>
                        <h2>Software Engineer</h2>
                        <div className="button-wrapper">
                        <Link className='learn-button' to="/experience">Learn More
                        <FontAwesomeIcon className="icon" icon={faArrowRight} />
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
      </div>
      </body>
    );
  }