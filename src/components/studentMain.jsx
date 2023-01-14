import React,{Component} from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import StudentNav from './studentNav'
import Students from './students'
import AddStudent from './addStudent'
import StudentDetail from './studentDetail'
import StudentDelete from './studentDelete'
class StudentMain extends Component{


    render(){
        return(
            <React.Fragment>
            <StudentNav/>
            <Switch>
              <Route path='/students/course/:category' component={Students}></Route>  
              <Route path='/students/:id/edit' component={AddStudent}></Route>
              <Route path='/students/add' component={AddStudent}></Route>
              <Route path='/students/:id' component={StudentDetail}></Route>
              
              <Route path='/deletestudent/:id' component={StudentDelete}></Route>
              <Route path='/students' component={Students}></Route>  
               
              <Redirect form='/' to='/students'></Redirect>




            </Switch>
            </React.Fragment>

        )

    }
}
export default StudentMain