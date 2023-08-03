
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div id="Task"className='w-full'>
    <div className="container mx-auto h-auto  w-full">
<div className="row flex-nowrap h-100"style={{background:"#f8f8f8"}}>
  <div className=" col-8 col-md-3 h-100 z-1  sidebar"id="sidebar"style={{background:"white"}}>
    <div className="flex-wrap">
        <div className="d-flex justify-content-start align-items-center ">
   
<Link to="/"style={{color:"#27d7a1",textDecoration:"none",textTransform:"uppercase"}}>               
<h3 style={{fontWeight:"bold",padding:"15px"}}className='mx-auto'>Tasks</h3>
           
            </Link>
            <div className="close-btn d-md-none d-block ms-auto "><i className="fa-solid fa-xmark text-white fs-4"></i></div>

        </div>
    </div>
    <ul className="nav nav-pills flex-column  ">
        <li className="nav-item  ">
          <Link to="/AddTask"className='ms-3 p-2 text-dark text-decoration-none mx-auto'>Add New Task</Link>
           
        </li>
        <li className="nav-item mt-3 pb-3">
         <Link to="/TaskList"className='ms-3  p-2 text-dark text-decoration-none mx-auto'>Task List</Link>
           
        </li>

    </ul>
 
</div>

<div className="col-12 col-md-9  ">
<nav className="navbar navbar-expand-lg navbar-light bg-light d-block d-md-none d-flex justify-content-between">
<Link to="/"style={{color:"#27d7a1",textDecoration:"none",textTransform:"uppercase"}}>               
<h3 style={{fontWeight:"bold",padding:"15px"}}className='mx-auto'>Tasks</h3>
           
            </Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div >
    <ul className="  d-flex flex-row "style={{listStyle:"none"}}>
     
    <li className="nav-item  ">
          <Link to="/AddTask"className='ms-3 p-2 text-dark text-decoration-none mx-auto'>Add New Task</Link>
           
        </li>
        <li className="nav-item ">
         <Link to="/TaskList"className='ms-3  p-2 text-dark text-decoration-none mx-auto'>Task List</Link>
           
        </li>
    </ul>
  
  </div>
</nav>
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
