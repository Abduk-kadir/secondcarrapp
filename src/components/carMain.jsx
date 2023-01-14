import React,{Component} from 'react'
import {Route,Switch} from 'react-router-dom'
import CarNavbar from './carNavbar'
import Cars from './cars'
import AddCar from './addCar'
import DeleteCustomer from './delteCustomer'

class CarMain extends Component{

  render(){
    return(
        <React.Fragment>
          <CarNavbar/>
        
          <Switch>
          <Route path={'/car/:id'} component={AddCar}></Route>
          <Route path={'/car'} component={AddCar}></Route>
        
          <Route path={`/cars/:id/delete`} component={DeleteCustomer}></Route>
          <Route path='/cars' component={Cars}></Route>
          </Switch>
        </React.Fragment>
       

    )
  }

    
}
export default CarMain