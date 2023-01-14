import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class CarNavbar extends Component{
    render(){
        return(<nav className="navbar navbar-expand-sm bg-body-tertiary bg-danger text-white ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/cars">Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/car'>New Car</Link>
        </li>
       
        
      </ul>
    </div>
  </div>
</nav>)

    }
}
export  default CarNavbar