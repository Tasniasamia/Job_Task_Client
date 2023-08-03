import React, { useEffect, useRef, useState } from 'react';
import useTasks from '../Hooks/useTasks';
import Swal from 'sweetalert2';

const Task_List = () => {
    // const[status,setStatus]=useState(null)
const[InputValue,setInputValue]=useState("");
  // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const inputValue = inputRef.current.value;
//     setStatus(inputValue);
//     console.log('Input value:', inputValue);
//   };

    //getTask
    const[Task,setTask]=useState([]);
    useEffect(()=>{
        fetch('https://my-first-task-server.vercel.app/TasksCollection')
        .then(res=>res.json())
        .then(data=>{setTask(data);
        
            if(data.error){
                Swal.fire({
                    icon: 'error',
                    title: `${data.message}`,
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        
        })
   
    },[])
    //deleteValue
    const deleltetask=(id)=>{
        const taskall=Task.filter(index=>index._id!==id);
        setTask(taskall);
        fetch(`https://my-first-task-server.vercel.app/Taskdelete/${id}`,{
            method:"DELETE",
            headers:{
                "content-type": `application/json`            }
        }).then(res=>res.json())
        .then(data=>{console.log(data);
        if(data.deletedCount>0){
  
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Deleted',
                showConfirmButton: false,
                timer: 1500
              })
        }
        if(data.error){
            Swal.fire({
                icon: 'error',
                title: `${data.message}`,
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
    
    })
      
    }
   //Update Status
const updateStatus=(id)=>{
    fetch(`https://my-first-task-server.vercel.app/StatusUpdate/${id}`,{
        method:"PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({status:InputValue})
    }).then(res=>res.json())
    .then(data=>{console.log(data);
        if(data.modifiedCount>0){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Successfully Updated',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    if(data.error){
        Swal.fire({
            icon: 'error',
            title: `${data.message}`,
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    }) 
}
    return (
        <div className="table-responsive">
            <table className="table caption-top">
  <caption className='text-center'>List of Tasks</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Status Update</th>

      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>

    {
        Task.map((index,data)=><tr key={index._id}>


      <th scope="row">{data+1}</th>
      <td>{index.title}</td>
      <td>{index.decription}</td>
      <td >
      <textarea id="w3review" name="w3review" rows="1" cols="8"defaultValue={index.status} onChange={(e) => setInputValue(e.target.value)}>

</textarea>
      
      </td>
      <td onClick={()=>updateStatus(index._id)}>  <button  className="btn "style={{background:"rgba(0, 100, 80)",color:"white"}}>Update </button></td>

      <td>  <button onClick={()=>{deleltetask(index._id)}} className="btn "style={{background:"rgba(0, 100, 80)",color:"white"}}>Delete</button></td>


        </tr>)
    }
    {/* <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr> */}
    {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</table>
        </div>
    );
};

export default Task_List;