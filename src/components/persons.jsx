import React,{Component} from "react";
import http from "./httpService";
import queryString from 'query-string'
import { Link } from "react-router-dom";
class Persons extends Component{
    state={

        data:{}
    }
    async fetchdata(){
        let qparams=queryString.parse(this.props.location.search)
        let {page=1}=qparams
        let response=await http.get(`/personapp/persons?page=${page}`)
        let {data}=response
        this.setState({data:data})

    }
     componentDidMount(){
        this.fetchdata()

    }
    componentDidUpdate(prevprops,prestate){
        
        if(prevprops!=this.props){
            this.fetchdata()
        }
        


    }
    handlePage=(incr)=>{
        let qparams=queryString.parse(this.props.location.search)
        console.log(qparams)
        let {page=1}=qparams
        page=+page
        page+=incr
        qparams.page=page;
        let searchstr=this.makeSearchStr(qparams)
        this.callUrl(`/persons`,searchstr)
        

    }
    callUrl(url,str){
        this.props.history.push({
            pathname:url,
            search:str
        })
    }
    makeSearchStr(js){
        let {page}=js
        let searchstr=''
        searchstr=this.addSearch(searchstr,'page',page)
        return searchstr
    }
    addSearch(str,name,value){

        return value?str?`&${name}=${value}`:`${name}=${value}`:''
    }

    render(){
        let {persons=[],startIndex,endIndex,numOfItems} =this.state.data
        return (
            <div className="container-fluid ">
                {startIndex +' to '+endIndex}
                {   
                   
                    persons.map(elem=>(
                        <div className="row">
                          <div className="col-2 border">
                            
                            
                            
                            <Link to={`/persons/${elem.id}`}> {elem.id}</Link>
                            </div>
                          <div className="col-3 border">{elem.name}</div>

                          <div className="col-2 border">{elem.age}</div>
                          <div className="col-3 border">{elem.city}</div>
                          
                          <div className="col-2 border">{elem.company}</div>


                        </div>
                    ))
                }
                <div className="row">
                    <div className="col-2">
                        {startIndex>1?<button className="btn btn-primary" onClick={()=>this.handlePage(-1)}>prev</button>:''}
                    </div>
                    <div className="col-8"></div>
                    <div className="col-2">

                    {endIndex<numOfItems?<button className="btn btn-primary" onClick={()=>this.handlePage(1)}>next</button>:''}
                    </div>
                </div>
            </div>
        )
    }
    
}
export default Persons