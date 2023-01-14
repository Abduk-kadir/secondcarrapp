import React,{Component} from 'react'
import { Link } from 'react-router-dom'
class StudentNav extends Component{
    

    render(){

       let arr=['JS','React','Node','Angular'] 

        return(

            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">StudentPortal</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/students">Students</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/students/add">Add Student</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Course
          </a>
          <ul className="dropdown-menu">
           {
            arr.map(elem=>(
                <Link className="dropdown-item" to={`/students/course/${elem}`} ><li>{elem}</li></Link>
            ))

           }
            
          </ul>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
        )

    }
}
export default StudentNav