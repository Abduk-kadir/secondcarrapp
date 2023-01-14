import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import http from './httpService1'
import queryString from 'query-string';
import CustomerLeftPanel from './customerLeftPanel';
class Customers extends Component{
    state={
        customers:[]
    }
    
    async fetchData(url){
        let qparams=queryString.parse(this.props.location.search)
        let searchstr=this.makesearchStr(qparams)
        searchstr= searchstr?`?${searchstr}`:searchstr
        let response=await http.get(url+searchstr)
        let {data}=response;
        this.setState({customers:data})

    }
    makesearchStr(js){
        let {city,gender,payment,sortBy}=js
        let searchstr=''
        searchstr=this.addSearchStr(searchstr,'city',city);
        searchstr+=this.addSearchStr(searchstr,'gender',gender);
        searchstr+=this.addSearchStr(searchstr,'payment',payment)
        searchstr+=this.addSearchStr(searchstr,'sortBy',sortBy)
        return searchstr
    }
    addSearchStr(str,name,value){

        return value?str?`&${name}=${value}`:`${name}=${value}`:''
    }

    handleOptionChange=(js)=>{
        let str=this.makesearchStr(js)
        this.callUrl('/customers',str)
    }
    callUrl=(url,str)=>{
        this.props.history.push(
            {
                pathname:url,
                search:str
            }
        )
    }




     componentDidMount(){

        this.fetchData('/customers')
    }
    componentDidUpdate(prevprop,prevstate){
        if(prevprop!=this.props){
            this.fetchData('/customers')
        }
    }


    handleDelete=(id)=>{
        this.props.history.push(`/delete customer/${id}`)
    }
    getdifferentValue(data,name){

        let val=data.reduce((acc,curr)=>acc.find(val=>val==curr[name])?acc:[curr[name],...acc],[])
        return val;
    }
    handleEdit(id){
        this.props.history.push(`/customers/${id}/edit`)

    }
    handleSort=(name)=>{
        let qparams=queryString.parse(this.props.location.search)
          qparams.sortBy=name
        
          
         let str=this.makesearchStr(qparams)
         this.callUrl('/customers',str)

    }
    
    render(){

        let {customers}=this.state
        let options={}
        options.cities=this.getdifferentValue(customers,'city')
        options.payments=this.getdifferentValue(customers,'payment')
        options.genders=this.getdifferentValue(customers,'gender')
        let qparams=queryString.parse(this.props.location.search)
       
        
        return(
            <div className='container'>
                <div className='row'>
                  <div className='col-3'>
                    <CustomerLeftPanel optionArr={options} qparams={qparams} onOptionChange={this.handleOptionChange}/>
                    </div>  
                  <div className='col-9'>
                      <div className='row border bg-primary text-white'>
                         <div className='col-1' >Id</div>
                         <div className='col-2' >Name</div>
                         <div className='col-1'  onClick={()=>this.handleSort('age')}>Age</div>
                         <div className='col-2' onClick={()=>this.handleSort('city')}>City</div>
                         <div className='col-2' >Gender </div>
                         <div className='col-2' onClick={()=>this.handleSort('payment')}>Payment</div>
                         <div className='col-1' ></div>
                         <div className='col-1' ></div>








                      </div>




                {
                    customers.map(elem=>(
                        <div className='row border'>
                            <div className='col-1'>{elem.id}</div>
                            <div className='col-2'>{elem.name}</div>   
                            <div className='col-1'>{elem.age}</div>   
                            <div className='col-2'>{elem.city}</div>   
                            <div className='col-2'>{elem.gender}</div> 
                            <div className='col-2'>{elem.payment}</div>  
                            <div className='col-1'>
                             <button className='btn btn-warning' onClick={()=>this.handleEdit(elem.id)}>Edit</button>   
                            </div> 
                            <div className='col-1'>
                                <button className='btn btn-danger' onClick={()=>this.handleDelete(elem.id)}>Delete</button>   
                            </div> 

                        </div>
                    ))
                }
                </div>
                </div>
            </div>
        )
    }
}
export default Customers