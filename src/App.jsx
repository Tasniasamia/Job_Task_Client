
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div id="Task"className='m'>
    <div className="container mx-auto bg-primary  w-50"style={{height:"500px"}}>
<div className="row flex-nowrap "style={{height:"500px"}}>
  <div className=" col-8 col-md-3 h-100  sidebar"id="sidebar"style={{background:"rgba(10,10,43,.75)"}}>
    <div className="flex-wrap">
        <div className="d-flex justify-content-between align-items-center ">
            <a href="{% url 'home' %}"className="text-decoration-none  align-items-center  d-none d-md-flex">
                {/* <img src="https://i.postimg.cc/g0Nc5hFy/logo.png"stalt="logo"/><span className="d-none d-md-block fs-4  d-sm-inline text-white">NANOVISION</span> */}
           
            </a>
            <div className="close-btn d-md-none d-block ms-auto py-3"><i className="fa-solid fa-xmark text-white fs-4"></i></div>

        </div>
    </div>
    <ul className="nav nav-pills flex-column mt-4 ">
        <li className="nav-item dropdown ">
          <Link to="/AddTask"className='text-white text-decoration-none mx-auto'>Add New Task</Link>
           
        </li>
        <li className="nav-item">
         <Link to="/TaskList"className='text-white text-decoration-none mx-auto'>Task List</Link>
           
        </li>

    </ul>
 
</div>

<div className="col-12 col-md-9  ">
  <div className="contents w-full">
  <Outlet></Outlet>
  
  </div>

  </div>
</div>
</div>

</div>
  )
}

export default App
