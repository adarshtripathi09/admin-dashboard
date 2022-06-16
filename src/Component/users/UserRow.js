import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';

const UserRow = (props)=> {
    const data = props.data;
    const ele = props.ele;
    const setData = props.setData;
    const index = props.index;
    const [checked, setChecked] = useState(true);
    
    // console.log(ele.meta.status)
    const activeBtn = (e)=>{
       
        // setChecked(ele.meta.status === 'Active' ? setChecked(true) : setChecked(false))
        
    }

    // const deleteItem = (elm)=>{
    //     const deleteItem = data.filter((ele,i)=>{
    //         return elm !== i ; 
            
    //     })
    //     setData(deleteItem);
    //     // console.log(data)
    // }
    const editvalue =  (e)=>{
        
    }
    useEffect(()=>{
        ele.meta.status == 'Active' ? setChecked(true) : setChecked(false)
        
    },[])
   
    return (
        <>
            <tr>
                <td>{ele.first_name}</td>
                <td>{ele.last_name}</td>
                <td>{ele.email}</td>
                <td>{ele.meta.phone_number}</td>
                <td><Switch checked={checked} onChange={activeBtn} /></td>
                <td><Link id="edit" to={'/edit/' + ele.id} onClick={(index)=>editvalue()}>Edit</Link></td>
                <td><button id="btn" onClick="">delete</button></td>
            </tr>
        </>
    )
}

export default UserRow;