import React,{Component} from 'react'
import http from './httpService'
class AddStudent extends Component{
    state={
        student:{name:'',course:'',grade:'',city:''},
        carr:['Node','React','Angular','JS'],
        garr:['A','B','C','D'],
        cityarr:['London','Paris','Mumbai','Tokyo'],
        edit:false
    }
    handleChange=(e)=>{
        let s1={...this.state}
        let {currentTarget:input}=e
        s1.student[input.name]=input.value
        this.setState(s1)
    }
    

    makedropdown(arr,name,value,label,l){
        return(
            <React.Fragment>
            <label className='form-label'>{l}</label>
            <select class="form-select mb-2" value={value} name={name} onChange={this.handleChange}>
            <option value=''>{label}</option>
             {arr.map(elem=>(
               <option value={elem}>{elem}</option>
              
             ))}
            </select>
            </React.Fragment>
        )

    }
     async fetchdata(url){
        let {id}=this.props.match.params
        if(id){
        let response=await http.get(`/svr/students/${id}`)
        let {data}=response;
        this.setState({student:data,edit:true})
        }
        else{
            this.setState({student:{name:'',course:'',grade:'',city:''},edit:false})
        }
     }
     componentDidMount(){
        this.fetchdata()

     }
     componentDidUpdate(prevprops,prevstate){
        if(prevprops!=this.props){
            this.fetchdata()
        }
        
     }
     async putdata(url,obj){
        let response=await http.put(url,obj)
        this.props.history.push('/students')
     }
     async postdata(url,obj){
        let response=await http.post(url,obj)
        this.props.history.push('/students')
     }

     handleSubmit=()=>{
        let s1={...this.state}
        let {student,edit}=s1
        let {id}=this.props.match.params
        edit?this.putdata(`/svr/students/${id}`,s1.student):this.postdata('/svr/students',student)
        

     }


    render(){
        let {name,course,grade,city}=this.state.student
        let {carr,cityarr,garr}=this.state


        return(
            <div className='container'>
                <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="enter Name"
                 name='name'
                 value={name}
                 onChange={this.handleChange}
                />
                </div>
                {
                   this.makedropdown(carr,'course',course,'select course','course')
                }
                {
                    this.makedropdown(garr,'grade',grade,'select grade','grade')
                }
                {
                    this.makedropdown(cityarr,'city',city,'select city','city')
                }
                

                <button className='btn btn-primary' onClick={this.handleSubmit}>submit</button>

               






                </div>
        )
    }
}
export default AddStudent