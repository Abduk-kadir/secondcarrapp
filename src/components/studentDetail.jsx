import React,{Component} from 'react'
import http from './httpService'
import { Link } from 'react-router-dom'
class StudentDetail extends Component{

    state={
        student:{}
    }
    async componentDidMount(){
        let {id}=this.props.match.params
        let response=await http.get(`/svr/students/${id}`)
        let {data}=response;
        this.setState({student:data})

    }
    render(){
        let {student}=this.state
        return(
            <div className='container-fluid mt-1'>
                id:{student.id}<br/>
                name:{student.name}<br/>
                course:{student.course}<br/>
                grade:{student.grade}<br/>
                city:{student.city}<br/>
                <Link className='m-1' to={`/students/${student.id}/edit`}>edit</Link>
                <Link to={`/deleteStudent/${student.id}`}>Delete</Link>
            </div>
        )
    }

}

export default StudentDetail