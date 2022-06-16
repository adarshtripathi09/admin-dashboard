import React, { useState, useEffect } from 'react';
import axiosget from '../axoios/axios';
import Header from './Header';
import Sidebar from './Sidebar';
import User from './User';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import { elementAcceptingRef } from '@mui/utils';
import Pagination from '../Component/Pagination';



const Dashboard = () => {
    const [data, setData] = useState([]);
    const [Pending, setPending] = useState(0);
    const [loading, setLoading] = useState(false)
    const [userCount , setUsetCount] = useState(0);


    const userData = () => {

        axiosget.get('/users?page=1&per_page=10&order=desc&orderby=id&roles=subscriber&context=edit',).then((response) => {
            console.log(response.data);
            setData(response.data);
            setLoading(true)
            
        })
        axiosget.get('/users',).then((response) => {
            console.log(response.data);
            setUsetCount(response.data.length);
            console.log(userCount)            
        })
    }
    
    
    const pendingUser = () => {
        const userPending = data.filter((elm) => {

            return elm.meta.status == "Pending"
        });
        setPending(userPending.length);
        console.log(Pending);
    }
    useEffect(() => {
        userData()

    }, [])

    useEffect(() => {
        pendingUser()
    }, [data])

    return (
        <>

            <input type="checkbox" id="nav-toggle" />


            <div className="main-wrapper">
                <div className="main-content">
                    <Header />
                    <main>
                        <Sidebar />
                        {loading ?

                            <div className="cards">
                                <div className="card-single">
                                    <div>
                                        <h2 id="customer">Clients</h2>
                                        <span className='client_detail'>{data.length}</span>
                                    </div>
                                    <div>
                                        <span className="fa fa-users"></span>
                                    </div>
                                </div>
                                <div className="card-single">
                                    <div>
                                        <h2 id="project">Pending</h2>
                                        <span className='client_detail'>{Pending}</span>
                                    </div>
                                    <div>
                                        <span className="fa fa-clipboard"></span>
                                    </div>
                                </div>
                                {/* Add User */}

                                <div className="card-single">
                                    <div>
                                        <h2 id="project">Add User</h2>
                                        <span className='client_detail'> <Button variant="outlined" color="primary">
                                            <Link to={'/adduser'}>Add User</Link>
                                        </Button></span>
                                    </div>
                                    <div>
                                        <span className="fa fa-plus"></span>
                                    </div>
                                </div>

                                {/* ------Finish Add User */}


                                {/* Trash-User */}

                                <div className="card-single">
                                    <div>
                                        <h2 id="project">Trash</h2>
                                        <span className='client_detail'> <Button variant="outlined" color="error">
                                            <Link to={'/trash'}>Trash</Link>
                                        </Button></span>
                                    </div>
                                    <div>
                                        <span className="fa fa-trash"></span>
                                    </div>
                                </div>

                                {/* ------Finish div finish */}

                            </div>
                            : <Box sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Box>}
                        <User data={data} setData={setData} />

                        <Pagination />
                    </main>
                   
                </div>

            </div>




        </>
    )
}
export default Dashboard