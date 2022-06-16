import React, { useState, useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import '../Component/User.css';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import UserRow from '../Component/users/UserRow';
import TextField from '@mui/material/TextField';


const User = (props) => {
    const data = props.data;
    const [search, setSearch] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const searchVal = (e) => {
        setSearch(e.target.value);
        // console.log(Object.values(data))
        if (search !== '') {
            const filterVal = data.filter((ele) => {

                return ele.first_name.toLowerCase().includes(search.toLowerCase());
            })
            console.log(filterVal)
            setFilteredResults(filterVal);

        } else {
            setFilteredResults(data);
        }
        console.log(filteredResults);

    }
    const myData = filteredResults;
    myData.sort((a, b) => a.first_name.localeCompare(b.first_name));

    useEffect(() => {
        setFilteredResults(data);
    }, [data])

    return (

        <>


            <div className="recent-grid">
                <TextField id="outlined-basic" label="Search User" onChange={searchVal} value={search} />
                <div className="projects">
                    <div className="card">

                        <div className="card-header">
                            <h3 className="heading">Recent Projects</h3>

                        </div>


                        <div className="card-body">
                            <div className="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>First Name</td>
                                            <td>Last name</td>
                                            <td>Email</td>
                                            <td>Contact</td>
                                            <td >Status</td>
                                            <td >Edit</td>
                                            <td >delete</td>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            myData.length > 0 ? myData.map((ele, index) => {

                                                return (
                                                    <>
                                                        <UserRow ele={ele} index={index} data={data} setData={props.setData} />

                                                    </>
                                                )

                                            }) :
                                          
                                            data.map((ele, index) => {

                                                return (
                                                    <>
                                                        <UserRow ele={ele} index={index} data={data} setData={props.setData} />

                                                    </>
                                                )

                                            })

                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>


    )
}

export default User