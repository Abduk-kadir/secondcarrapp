import React,{Component} from 'react';

import queryString from 'query-string';
import CarLeftPanel from './carLeftPanel';

import http from './httpService1'
class Cars extends Component{
    state={
        cars:[],

    }

    async fetchData(url){
        let qparams=queryString.parse(this.props.location.search)
        let searchstr=this.makesearchStr(qparams)
        searchstr= searchstr?`?${searchstr}`:searchstr
        let response=await http.get(url+searchstr)
        let {data}=response;
        this.setState({cars:data})

    }
    makesearchStr(js){
        let {minprice,maxprice,sort,fuel,type,}=js
        let searchstr=''
        searchstr=this.addSearchStr(searchstr,'minprice',minprice);
        searchstr+=this.addSearchStr(searchstr,'maxprice',maxprice);
        searchstr+=this.addSearchStr(searchstr,'fuel',fuel)
        searchstr+=this.addSearchStr(searchstr,'type',type)
        searchstr+=this.addSearchStr(searchstr,'sort',sort)
        

        return searchstr
    }

    addSearchStr(str,name,value){

        return value?str?`&${name}=${value}`:`${name}=${value}`:''
    }

    componentDidMount(){
        this.fetchData('/cars')
    }
    handleChange=(e)=>{
       
       let {currentTarget:input}=e
        
        let qparams=queryString.parse(this.props.location.search)
        qparams[input.name]=input.value
        let str=this.makesearchStr(qparams)
        this.callUrl('/cars',str)
       
    }
    handleOptionChange=(js)=>{
        let str=this.makesearchStr(js)
        this.callUrl('/cars',str)
    }
   
    callUrl=(url,str)=>{
        this.props.history.push(
            {
                pathname:url,
                search:str
            }
        )
    }
    componentDidUpdate(prevprop,prevstate){
        if(prevprop!=this.props){
            this.fetchData('/cars')
        }
    }
    handleDelete=(id)=>{
        let url=`/cars/${id}/delete`
        this.props.history.push(url)
    }
    handleEdit=(id)=>{
        
        this.props.history.push(`/car/${id}`)

    }









    render(){
        let {cars}=this.state
        let qparams=queryString.parse(this.props.location.search)
        let {minprice='',maxprice=''}=qparams
        return (
            <div className='contianer'>
                <div className='row'>
                    <div className='col-3'>
                        <CarLeftPanel qparams={qparams} onOptionChange={this.handleOptionChange}/>
                    </div>
               

                <div className='col-9'>
                    <div className='row '>
                        <div className='col-12 text-center'> <strong>All Car</strong></div>
                        <div className='col-4'>Price Range:</div>
                        <div className='col-4'>
                        <input type="number" class="form-control"  placeholder="Minpice"  name='minprice' value={minprice} onChange={this.handleChange}/>
                        </div>
                        <div className='col-4'>
                        <input type="number" class="form-control"  placeholder="Maxprice" name='maxprice'  value={maxprice} onChange={this.handleChange}/>
                        </div>
                    </div>
                   
                    
                    <div className='row'>
                        {
                            cars.map(elem=>(
                                <div className='col-3 bg-warning border'>
                                    <strong>{elem.model}</strong> <br/>
                                    Price:{elem.price}<br/>
                                    Color:{elem.color}<br/>
                                    Milage:{elem.kms}<br/>
                                    Manufactured in:{elem.year}
                                    <br/>
                                    <div className='row'>
                                     <div className='col-2'>
                                       
                                     <i class="fa-sharp fa-solid fa-pen" onClick={()=>this.handleEdit(elem.id)}></i>
                                    
                                    </div>   
                                     <div className='col-8'></div>   
                                     <div className='col-2'>
                                      
                                     <i class="fa-sharp fa-solid fa-trash" onClick={()=>this.handleDelete(elem.id)}></i>
                                     
                                     </div>   
                                    
                                   
                                    </div>
                                   

                            
                                </div>
                            ))
                        }
                        
                    </div>

                </div>


                </div>

            </div>
        )
    }
}
export default Cars