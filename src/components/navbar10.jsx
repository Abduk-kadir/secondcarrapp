import React,{Component} from 'react'
class Navbar10 extends Component{

    render(){
         let {items,value,quantity}=this.props
        
        return(
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark container">
     <div className="container-fluid">
    <a class="navbar-brand" href="#">ProdStoreSys</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Products
          <span class="badge text-bg-primary">{items}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Quantity
          <span class="badge text-bg-primary">{quantity}</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Value
          <span class="badge text-bg-primary">{value}</span>
          </a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
        )

    }
}
export default Navbar10