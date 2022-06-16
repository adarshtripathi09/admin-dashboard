import React, { useEffect, useState } from 'react';
import '../Component/Edit.css';
import Header from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from '../axoios/axios';
import {Link} from 'react-router-dom';
import Switch from '@mui/material/Switch';


const Edit = (props) => {
  const { idd } = useParams();
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState();
 

  // form submit handler
  // const status = ()=>{
  //   checked ? setChecked(true) : setChecked(false)
  // }
  const updateUserForm = (e) => {
    
    e.preventDefault();
    // setCurrentData({...currentData, [e.target.name] : e.target.value});
    // console.log(currentUser)
    axios.post('/users/'+idd,  currentUser).then((response) => {
      setCurrentUser(response.data);
      // setLoading(false)
      
    })

  }

  const userData = () => {

    axios.get('/users/' + idd+'?context=edit').then((response) => {
      
      setCurrentUser(response.data);
      setLoading(false)
      console.log(currentUser)
    })
    
  }

  useEffect(() => {
    userData()

  }, [idd])
  return (
    <>
      <input type="checkbox" id="nav-toggle" />


      <div className="main-wrapper">
        <div className="main-content">
          <Header />
          <main>
            <Sidebar />
            {
              loading ? <CircularProgress disableShrink /> :



                <div className="update_user">
                  <form className="row g-3 needs-validation" noValidate onSubmit={updateUserForm}>
                    <div className="col-md-4">
                      <label htmlFor="validationCustom01" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="validationCustom01"
                        value={currentUser.first_name}
                        onChange={(e)=>{ 
                          let temp = Object.assign({}, currentUser);  
                          console.log(temp)
                          temp.first_name = e.target.value;    
                          setCurrentUser(temp);
                        }}
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
                        name="lname"
                        value={currentUser.last_name}
                        onChange={(e)=>{ 
                          let temp = Object.assign({}, currentUser);  
                          temp.last_name = e.target.value;    
                          setCurrentUser(temp );
                        }}
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
                          name="email"
                          aria-describedby="inputGroupPrepend"
                          value={currentUser.email}
                          onChange={(e)=>{ 
                            let temp = Object.assign({}, currentUser);  
                            temp.email = e.target.value;    
                            setCurrentUser(temp);
                          }}
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
                        id="validationCustom03"
                        name="phone"
                        value ={currentUser.meta.phone_number}
                        onChange={(e)=>{ 
                          let temp = Object.assign({}, currentUser);  
                          temp.phone = e.target.value;    
                          setCurrentUser(temp);
                        }}
                        required
                        
                      />
                    </div>
                    <div className="col-md-3 status">
                      <label htmlFor="validationCustom04" className="form-label status_label">
                        Status
                      </label>
                      <Switch checked={currentUser.meta.status == "Active" ? true : false} onChange="" />
                      <div className="invalid-feedback">Please select a valid state.</div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit" >
                        Update
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

export default Edit;