import React from 'react';
import '../Component/Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">

                <div className="sidebar-menu">
                    <ul>
                        <li>

                            <span className="dashboard"><Link to="/">DASHBOARD</Link></span>

                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar