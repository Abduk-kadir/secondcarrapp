import React from "react";
import http from "./httpService";
class StudentDelete extends React.Component{
    state={

    }
    async componentDidMount(){
        let {id}=this.props.match.params
        let response =await http.delstudent(`/svr/students/${id}`)
        this.props.history.push('/students')

    }
    render(){
        return ''
    }
}

export default StudentDelete