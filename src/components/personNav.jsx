import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar10 from './navbar10'

class PersonNav extends Component{
    render(){
        return(<nav className="navbar navbar-expand-sm bg-body-tertiary navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">portal101</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/persons'>All Person</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/addperson'>Add person</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>)

    }
}
export  default PersonNav