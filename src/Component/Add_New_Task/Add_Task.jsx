import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Add_Task = () => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {console.log(data);
    
    const dataall={
        title:data.title,
        decription:data.descript,
        status:data.status
    }
    console.log(dataall);
   
    fetch('http://localhost:6030/Tasks',{
        method:"POST",
        headers:{
            "content-type": `application/json`
          },
      
        body:JSON.stringify(dataall)
      }).then(res=>res.json())
      .then((data)=>{
        console.log(data);
        if(data.insertedId){
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Task has been added into Database',
                showConfirmButton: false,
                timer: 1500
              })
        }
      })
      .catch((error) => {
       alert(error.message);
        console.error('Error:', error.message);})
    
    }
    return (
        <div className='m-2 w-full h-full '>
            <h2 className='text-uppercase text-center my-3'>Add New Task</h2>
           <form  onSubmit={handleSubmit(onSubmit)}>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" className="form-control" id="title"name="title" aria-describedby="title" {...register("title", { required: true })}/>
    {errors.title && <span>This field is required</span>} 
  </div>
  <div className="mb-3">
    <label className="form-label">Description </label>
    <input type="text" className="form-control" id="descript"name="descript" {...register("descript", { required: true })}/>
    {errors.descript && <span>This field is required</span>} 
  </div>
  <div className="mb-3">
    <label className="form-label">Status </label>
    <input type="text" className="form-control" id="status"name="status" {...register("status", { required: true })}/>
    {errors.status && <span>This field is required</span>} 

  </div>
  <div className='text-end pb-3'>
  <button type="submit" className="btn "style={{background:"rgba(0, 100, 80)",color:"white"}}>Add Task</button></div>
</form>
        </div>
    );
};

export default Add_Task;