import React,{Component} from "react";
import { Switch,Route,Redirect } from "react-router-dom";
import Customers from "./customers";
import AddCustomer from "./addCustomer";
import CustomerNavbar from "./customerNavbar";
import DeleteCustomer from "./delteCustomer";
class CustomersMain extends Component{
    

    render(){
        return(
            <React.Fragment>
                <CustomerNavbar/>
                <Switch>
                    <Route path={'/customers/:id/edit'} component={AddCustomer}></Route>
                    <Route path={'/customers'} component={Customers}></Route>

                    <Route path={'/add customer'} component={AddCustomer}></Route>

                    <Route path={'/delete customer/:id'} component={DeleteCustomer}></Route>
                  
                    <Redirect from='/' to='/customers'></Redirect>
                </Switch>
            </React.Fragment>
        )

    }
}
export default CustomersMain
