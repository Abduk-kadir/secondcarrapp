import React,{Component} from 'react'
import http from './httpService'
class DeletePerson extends Component{
    state={

    }
    async componentDidMount(){
     let {id}=this.props.match.params
     let response =await http.deleteApi(`/personapp/persons/${id}`)
     this.props.history.push('/persons')

    }

    render(){
        return ''
    }
}
export default DeletePerson