import React,{Component} from 'react'
import http from './httpService'
import {Link} from 'react-router-dom'
class Students extends Component{
    state={

        data:[]

    }


  async fetchdata(url){

    let {category}=this.props.match.params
    console.log(category)
    
      let  response =  category?await http.get(`${url}/course/${category}`):await http.get(url)
      let {data}=response
      this.setState({data:data})


  }''

    componentDidMount(){
        this.fetchdata('/svr/students')

    }
    componentDidUpdate(preprops,prestate){

        if(preprops!=this.props){
            this.fetchdata('/svr/students')
        }

    }
    handleDelete=(id)=>{
        this.props.history.push(`deletestudent/${id}`)
    }
    handleEdit=(id)=>{
        this.props.history.push(`/students/${id}/edit`)
    }

    render(){
        let {data}=this.state

        return(
            <div className='container mt-1'>
                <h4>Welcome to Student Page</h4>
                {data.map(elem=>(
                    <div className='row '>
                      <div className='col-1 border'>
                        
                       <Link to={`students/${elem.id}`}> {elem.id}</Link>
                        
                        </div> 
                      <div className='col-2 border'>{elem.name}</div> 
                      <div className='col-2 border'>{elem.course}</div> 
                      <div className='col-1 border'>{elem.grade}</div> 
                      <div className='col-2 border'>{elem.city}</div> 
                      <div className='col-2 border'>
                       <button className='btn btn-danger btn-sm'  onClick={()=>this.handleDelete(elem.id)}>Delete</button>
                      </div>
                      <div className='col-2 border'>
                       <button className='btn btn-warning btn-sm'  onClick={()=>this.handleEdit(elem.id)}>Edit</button>
                      </div>
                     


                    </div>
                ))}
            </div>
        )
    }
}
export default Students