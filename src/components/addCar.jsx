import React,{Component} from 'react'
import http from './httpService1'


class AddCar extends Component{
    state={
        carMaster:[
            {model: "Swift Dzire VXi", make: "Maruti", fuel: "Diesel", 
             colors: ["White", "Silver Grey", "Metallic Blue", "Red"], type: "Sedan", transmission: "Manual"},
            {model: "Etios SMi", make: "Toyota", fuel: "Diesel",
             colors: ["White", "Steel Grey", "Black"], type: "Hatchback", transmission: "Manual"},
            {model: "City AXi", make: "Honda", fuel: "Petrol",
             colors: ["Silver Grey", "Metallic Blue", "Black"], type: "Sedan", transmission: "Automatic"},
            {model: "Swift DXi", make: "Maruti", fuel: "Diesel",
             colors: ["White", "Red", "Black"], type: "Hatchback", transmission: "Manual"},
            {model: "Etios VXi", make: "Toyota", fuel: "Diesel",
             colors: ["White", "Silver Grey", "Black"], type: "Sedan", transmission: "Manual"},
            {model: "City ZXi", make: "Honda", fuel: "Petrol",
             colors: ["Silver Grey", "Metallic Blue", "Red"], type: "Sedan", transmission: "Manual"}
           ],
           cardetail:{id:'',price:'',kms:'',year:'',model:'',color:''},
           edit:false

    }
   
    async fetchData(url){
        let {id}=this.props.match.params;
        if(id){
         let response=await http.get(`${url}/${id}`)
         let {data}=response
         this.setState({cardetail:data,edit:true})

        }
        else{
            this.setState({ cardetail:{id:'',price:'',milage:'',year:'',model:'',color:''},edit:false})
        }


        
    }
    
    componentDidMount(){
        this.fetchData('/cars')
    }
    async postData(url,js){
        
        let response=await http.post(url,js)
        this.props.history.push('/cars')
    }
    async putData(url,js){
       
        let response=await http.put(url,js)
        this.props.history.push('/cars')

    }
    
      handleSubmit=()=>{
        let s1={...this.state}
        let {id}=this.props.match.params
       

        if(s1.edit){
            this.putData(`/car/${id}`,s1.cardetail)
        }
        else{
            this.postData('/car',s1.cardetail)

        }
        
        
       
    }
    componentDidUpdate(prevprop,prevstate){
        if(prevprop!=this.props){
            this.fetchData()
        }

    }


   









    handleChange=(e)=>{
        let {currentTarget:input}=e
        let s1={...this.state}
        s1.cardetail[input.name]=input.value;
        this.setState(s1)

      }

makeDropdown(arr,name,value,label){
    return(
        <select className="form-select" name={name} value={value} onChange={this.handleChange}>
        <option value='' disabled>{label}</option>
        {
            arr.map(elem=>(
                <option value={elem}>{elem}</option>
        
            ))

        }
        
        </select>
    )
}




getdifferentValue(data,name){

    let val=data.reduce((acc,curr)=>acc.find(val=>val==curr[name])?acc:[curr[name],...acc],[])
    return val;
}

    render(){
        let {carMaster}=this.state;
        let {id,price,kms,year,model,color}=this.state.cardetail
        let modelarr=this.getdifferentValue(carMaster,'model')
        let js=carMaster.find(elem=>elem.model==model)
        let colorarr=model?js.colors:[]

        return(
            <div className='container'>
                <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Id</label>
               <input type="text" class="form-control"  placeholder="enter id" name='id' value={id} onChange={this.handleChange}/>
               </div>

               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Price</label>
               <input type="number" class="form-control"  placeholder="enter price" name='price' value={price} onChange={this.handleChange}/>
               </div>

               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Milage</label>
               <input type="number" class="form-control"  placeholder="enter milage" name='kms' value={kms} onChange={this.handleChange}/>
               </div>

               <div class="mb-3">
               <label for="exampleFormControlInput1" class="form-label">Year</label>
               <input type="number" class="form-control"  placeholder="enter year" name='year' value={year} onChange={this.handleChange}/>
               </div>
               <div className='row'>
                <div className='col-6'>
                {
                this.makeDropdown(modelarr,'model',model,'select model')
                }

                </div>
                <div className='col-6'>
                 {this.makeDropdown(colorarr,'color',color,'select color')  } 
                </div>
               </div>
               <div className='row mt-2'>
                 <div className='col-5'></div>
                 <div className='col-2'>
                  <button className='btn btn-primary ' onClick={this.handleSubmit}> Submit</button>

                 </div>
                 <div className='col-5'></div>
               </div>
              
            </div>
        )
    }

}
export default AddCar