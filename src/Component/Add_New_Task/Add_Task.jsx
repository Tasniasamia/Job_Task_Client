import React from 'react';

const Add_Task = () => {
    return (
        <div className='m-5'>
            <h2 className='text-uppercase text-center my-3'>Add New Task</h2>
           <form>
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Description </label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Status </label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className='text-end'>
  <button type="submit" className="btn "style={{background:"rgba(0, 100, 80)",color:"white"}}>Add Task</button></div>
</form>
        </div>
    );
};

export default Add_Task;