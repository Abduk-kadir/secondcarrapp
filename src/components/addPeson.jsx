import React,{Component} from 'react'
import http from './httpService'
class AddPerson extends Component{
    state={
        person:{name:'',age:'',city:'',company:''},
        cityarr:['London','Paris','New Delhi','Bangalore'],
        companyarr:['Apple','Google','Microsoft','Tesla','Facebook','Amazon'],
        edit:false
 
     }
     async postdata(url,obj){
       let response=await http.post(url,obj)
       this.props.history.push('/persons')

     }
     
     async putdata(url,obj){
       
        let resonse=await http.put(url,obj)
        this.props.history.push('/persons')
       
     }
     
     handleChange=(e)=>{
        let {currentTarget:input}=e
        let s1={...this.state}
        s1.person[input.name]=input.value
        this.setState(s1)
     }
     handleSubmit=()=>{
        let {person,edit}=this.state
        let {id}=this.props.match.params
        edit?this.putdata(`/personapp/persons/${id}`,person) :this.postdata('/personapp/persons',person)
       
       
     }

      async fetchdata(){
        let {id}=this.props.match.params
        if(id){
         let response=await http.get(`/personapp/persons/${id}`)
         let {data}=response
         this.setState({person:data,edit:true})
        }
        else{
          this.setState({ person:{name:'',age:'',city:'',company:''},edit:false})

        }
       

    }
    componentDidMount(){
      console.log('mount')
       this.fetchdata()   
        
    }
    componentDidUpdate(prevprop,prevstate){
      if(prevprop!=this.props)
      {
        this.fetchdata()
      }
    }
    



    render(){
        let {name,age,city,company}=this.state.person
        console.log(city)
        console.log('render')
        let {companyarr,cityarr}=this.state
        return(
            <React.Fragment>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Name</label>
            <input type="text" className="form-control" name='name' value={name}  onChange={this.handleChange}/>
            </div>
            <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Age</label>
            <input type="text" className="form-control" name='age' value={age}  onChange={this.handleChange}/>
            </div>
            <select class="form-select" name='city' value={city} onChange={this.handleChange}>
              <option value=''>Select City</option>
               {
                 cityarr.map(elem=>(
                    <option value={elem}>{elem}</option>
  
                 ))
               }
            </select>
            <br/>
            <select class="form-select" name='company' value={company} onChange={this.handleChange}>
              <option value=''>Select Company</option>
               {
                 companyarr.map(elem=>(
                    <option value={elem}>{elem}</option>
  
                 ))
               }
            </select>
            <button className='btn btn-primary' onClick={this.handleSubmit}>submit</button>

            </React.Fragment>
        )
    }
}
export default AddPerson