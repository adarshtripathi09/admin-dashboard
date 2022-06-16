import axios from '../axoios/axios';
import React, { useState } from 'react';
import '../Component/Edit.css';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import { useNavigate } from 'react-router-dom';

const Adduser = () => {
    const navigate  = useNavigate();
    const [addData, setAddData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        username : '',
        password : '',
        phone_number: '' 
    });

    const [errors, setErrors] = useState({});

    const data = (e) => {

        setAddData({ ...addData, [e.target.name]: e.target.value })
        setErrors({})
    }
    // const metaData = (e) => {
    //     if (e.target.name == 'phone_number'){
    //         setAddData({...addData , [meta.phone_number] : e.target.value })
    //     }
    // }
    const modifyData = {
        first_name : addData.first_name,
        last_name : addData.last_name,
        email : addData.email,
        username : addData.username,
        password : addData.password,
        meta : {
            phone_number : addData.phone_number
        }
    }

    console.log(modifyData)

    const formData = (e) => {
        e.preventDefault();

        axios.post('/users', modifyData)
        .then(function (response) {
            console.log(response);
            navigate('/');

        })
        .catch(function (error) {
            console.log(error);
            setErrors(error);
        });
    }

    return (
        <>
            <div className="main-wrapper">
                <div className="main-content">
                    <Header />
                    <main>
                        <Sidebar />

                        {


                            <div className="update_user">
                                <h2>Add User</h2>
                                { (errors.response) ? <p>{errors.response.data.message}</p> : <></> }
                                <form className="row g-3 needs-validation" noValidate onSubmit={formData}>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom01" className="form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="first_name"
                                            id="validationCustom01"
                                            onChange={data}
                                            value={addData.first_name}
                                            required
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom02" className="form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="validationCustom02"
                                            name="last_name"
                                            onChange={data}
                                            value={addData.last_name}

                                            required
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom01" className="form-label">
                                        username
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            id="validationCustom01"
                                            onChange={data}
                                            value={addData.username}
                                            required
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustom01" className="form-label">
                                        password
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="password"
                                            id="validationCustom01"
                                            onChange={data}
                                            value={addData.password}
                                            required
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <label htmlFor="validationCustomUsername" className="form-label">
                                            Email Address
                                        </label>
                                        <div className="input-group has-validation">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="validationCustomUsername"
                                                value={addData.email}
                                                onChange={data}
                                                name="email"
                                                aria-describedby="inputGroupPrepend"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="validationCustom03" className="form-label">
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={data}
                                            value={addData.phone_number}
                                            id="validationCustom03"
                                            name="phone_number"


                                            required

                                        />
                                    </div>
                                    <div className="col-md-3">
                                        <label htmlFor="validationCustom04" className="form-label">
                                            Status
                                        </label>
                                        <select className="form-select" id="validationCustom04" required>
                                            <option selected disabled value="">
                                                Choose...
                                            </option>
                                            <option>Active</option>
                                            <option>Pending</option>
                                        </select>
                                        <div className="invalid-feedback">Please select a valid state.</div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">
                                            Add User
                                        </button>
                                    </div>
                                </form>
                            </div>
                        }
                    </main>
                </div>
            </div>

        </>
    )
}

export default Adduser;