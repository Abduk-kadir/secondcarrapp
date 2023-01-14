import React,{Component} from 'react'
import PersonNav from './personNav'
import {Link,Route,Redirect,Switch} from 'react-router-dom'
import Persons from './persons'
import Person from './person'
import DeletePerson from './deltePerson'
import AddPerson from './addPeson'

   
class PersonMain extends Component{s
    
    
    render(){
        return(
         <React.Fragment>   
        <PersonNav/>
         <Switch>
           <Route path='/persons/:id/delete' component={DeletePerson}></Route>
           <Route path='/persons/:id/edit' component={AddPerson}></Route>
        
           <Route path='/persons/:id' component={Person}></Route>
           <Route path='/persons' component={Persons}></Route>
           <Route path='/addperson' component={AddPerson}></Route>
          
           
            </Switch>
         </React.Fragment>
        )

    }

}
export default PersonMain