import React,{Component} from 'react'
import http from './httpService1'
class AddCustomer extends Component{
    state={
        customer:{id:'',name:'',age:'',city:'',gender:'',payment:''},
        cities:['Noida','Delhi','Jaipur','Gurgaon'],
        genders:['Female','Male'],
        payments:['Credit Card','Debit Card','Wallet'],
        edit:false

    }
    async postData(url,js){
        
        let response=await http.post(url,js)
    }
    async putData(url,js){
       
        let response=await http.put(url,js)

    }
    

    async fetchData(){
       
        let {id}=this.props.match.params
        console.log(id)
        if(id){
            let response=await http.get(`/customers/${id}`)
            let {data}=response
            this.setState({customer:data,edit:true})

        }
        else{
           this.setState({customer:{id:'',name:'',age:'',city:'',gender:'',payment:''},
            edit:false
        
        })

        }
       

    }

    
    componentDidMount(){
        this.fetchData()
         
    }
    componentDidUpdate(prevprop,prevstate){
        if(prevprop!=this.props){
            this.fetchData()
        }

    }





    handleSubmit=()=>{
        let s1={...this.state}
        let {id}=this.props.match.params
        console.log(id)
        console.log(s1.customer)

        if(s1.edit){
            this.putData(`/customers/${id}`,s1.customer)
        }
        else{
            this.postData('/customers',s1.customer)

        }
        this.props.history.push('/customers')
        
       
    }

    handleChange=(e)=>{
        let s1={...this.state}
        let {currentTarget:input}=e
        s1.customer[input.name]=input.value;
        this.setState(s1)
    }
    makeRadio(arr,name,value){

        return(

        arr.map(elem=>(
            <div class="form-check">
            <input class="form-check-input" type="radio" name={name} value={elem} checked={elem==value} onChange={this.handleChange}/>
            <label class="form-check-label" for="flexRadioDefault1">
             {elem}
            </label>
            </div>

        ))
       
       
       )
    }

    

    render(){
        let {cities,payments,genders}=this.state
        let {id,name,age,city,gender,payment}=this.state.customer

        return(
            <React.Fragment>
               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Id</label>
               <input type="text" class="form-control"  placeholder="enter id" name='id' value={id} onChange={this.handleChange}/>
               </div>

               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Name</label>
               <input type="text" class="form-control"  placeholder="enter name"  name='name' value={name} onChange={this.handleChange}/>
               </div>

               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">age</label>
               <input type="Number" class="form-control"  placeholder="enter age" name='age' value={age} onChange={this.handleChange}/>
               </div>

               <select class="form-select" value={city} name='city' onChange={this.handleChange}>
                 <option value='' disabled>select cities</option>
                 {
                    cities.map(elem=>(
                        <option value={elem}>{elem}</option>
                    ))
                 }
                 
         
                
                </select>
                <label  class="form-label">Select Gender</label>
                {
                    this.makeRadio(genders,'gender',gender)
                }
                <label  class="form-label">Select Payment</label>
                {
                    this.makeRadio(payments,'payment',payment)
                }

               <button className='btn btn-primary' onClick={this.handleSubmit}>Submit</button>
    
            </React.Fragment>
        )
    }
}
export default AddCustomer