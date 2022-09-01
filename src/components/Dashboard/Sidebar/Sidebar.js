import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee, faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGripHorizontal, faCalendar, faUsers, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className='sidebar de-flex flex-column justify-content-between'>
            <ul className='list-unstyled'>
                <li>
                    <Link to="/doctors/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /><span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctors/appointment" className="text-white">

                        <FontAwesomeIcon icon={faCalendar} /><span >Appointment</span>

                    </Link>
                </li>
                <li>
                    <Link to="/doctors/patients" className="text-white">

                        <FontAwesomeIcon icon={faUsers} /><span >Patients</span>

                    </Link>
                </li>
                <li>
                    <Link to="/doctors/prescriptions" className="text-white">

                        <FontAwesomeIcon icon={faFileAlt} /><span >Prescriptions</span>

                    </Link>
                </li>
                <li>
                    <Link to="/doctors/setting" className="text-white">

                        <FontAwesomeIcon icon={faCog} /><span>Setting</span>

                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faSignOutAlt} /><span >Log out</span>


                </Link>
            </div>
        </div>
    );
};

export default Sidebar;