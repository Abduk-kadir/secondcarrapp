import React,{Component} from 'react'
import CompanyNav from './companyNavbar'
import {Route,Switch,Redirect} from 'react-router-dom'
import Emps from './emps'
class CompanyMain extends Component{

    
    


    render(){
        return(
            <div className='container-fluid'>
                <CompanyNav/>
                <Switch>
                <Route path={'/emps/:category'} component={Emps}></Route>
                <Route path={'/emps'} component={Emps}></Route>
                <Redirect from='/' to='/emps'></Redirect>
                  
                </Switch>
            </div>

        )
    }
}
export default CompanyMain