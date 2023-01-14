import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Navbar10 from './navbar10'

class PizaNavbar extends Component{
    render(){
        return(

            <nav className="navbar navbar-expand-sm bg-body-tertiary ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">MyFabPizza</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/items/Pizza/Yes">Veg Piza</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/items/Pizza/No">Non-Veg Piza</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/items/SideDish">Side Dishes</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Others Items">Others items</Link>
        </li>
       
       
      </ul>
      
    </div>
  </div>
</nav>
        )
      

    }
}
export  default PizaNavbar