import React,{Component} from 'react'
import http from './httpService1'
class DeleteCustomer extends Component{



    async componentDidMount(){

        let {id}=this.props.match.params;

        let response=await http.deleteCust(`/cars/${id}`)
        this.props.history.push('/cars')

     }

    render(){
        return ''
    }

}
export default  DeleteCustomer