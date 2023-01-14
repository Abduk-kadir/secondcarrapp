import React ,{Component} from 'react'
import { Link } from 'react-router-dom'
import http from './httpService'
class Person extends Component{
    state={
        person:{}
    }
    async fetchdata(){
        let {id}=this.props.match.params
        console.log('id is',id)
        let response=await http.get(`/personapp/persons/${id}`)
        let {data}=response
        this.setState({person:data})

    }
    componentDidMount(){
        this.fetchdata()
    }

    render(){
        let {person}=this.state
        return(
         <React.Fragment>
            id:{person.id}<br/>
            Name:{person.name}<br/>
            city:{person.city}<br/>
            company:{person.company}<br/>
            Age:{person.age}<br/>
            <Link to={`/persons/${person.id}/delete`}>Delete</Link>
            <br/>
            <Link to={`/persons/${person.id}/edit`}>edit</Link>
         </React.Fragment>


        )
    }
}
export default Person