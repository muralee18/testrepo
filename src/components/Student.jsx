import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useRef } from 'react';
function Student(props) {

    const[studentlist,setlist]=useState([])
    let nameref=useRef()
    let depref=useRef()

    let getData=()=>{
      axios.get("http://localhost:3000/getdetails").
      then((res)=>{setlist(res.data)}).
      catch((err)=>{console.log("Error in retriving")})

    }
    let postData=()=>{
        let data={
            name:nameref.current.value,
            dep:depref.current.value
        }
        axios.post("http://localhost:3000/addstudent",data).
        then((res)=>{console.log(res); alert("Data posted!!")}).
        catch((err)=>{alert("error in posting!!")})
    }

    let studentitems=studentlist.map((s)=><button>{s.name}</button>)
    return (
        <div>
            <h2>Student list</h2>
            <button 
            onClick={getData}>Get data</button>
             {studentitems}
             <p>
                <input 
                type="text" 
                placeholder='name' 
                ref={nameref}/></p>
             <p><input 
             type="text" 
             placeholder='Department'
              ref={depref}/></p>

             <button 
             onClick={postData}>
                Post data
            </button>
        </div>  
    );
}
export default Student;