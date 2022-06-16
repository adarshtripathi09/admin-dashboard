import React,{useState} from 'react';
import '../Component/Header.css';
import TextField from '@mui/material/TextField';



const Header = (props) => {
   

    
    return (
        <>
            <header>
                <h2 className="heading" id="dashboard">
                    Dashboard
                </h2>
                <label htmlFor="nav-toggle">
                    <span className="fa fa-bars"></span>
                </label>
                {/* <div>
                <CircularProgress disableShrink />
                </div> */}
                

            </header>
        </>
    )
}

export default Header;