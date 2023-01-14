import React,{Component} from 'react'
class RecieveStock extends Component{
    state={
        js:{code:'',quantity:'',year:'',month:'',date:''},
        montharr:["January","February","March","April","May","June","July","August","September","October","November","December"],
        error:{}
    }
    handleChange=(e)=>{
        let s1={...this.state}
        let {currentTarget:input}=e
        s1.js[input.name]=input.value;
        this.setState(s1)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let error=this.makingError()
        if(this.isError(error)){
        this.props.onStock(this.state.js)
        }
        else{
            let s1={...this.state}
            s1.error=error
            this.setState(s1)
        }
    }

    isError(error){
     
      let keys=Object.keys(error)
      console.log(error)
      console.log(keys)
      let count=keys.reduce((acc,curr)=>error[curr]?acc+1:acc,0)
      
      return count==0
    }

    makingError(){
        let {code,quantity,year,month,date}=this.state.js
        let error={};
        error.code=code?'':'code is manadotry'
        error.quantity=quantity?'':'stock is manadotry'
        
       
        return error
    }
    makeDropdown=(arr,name,value,label)=>
    {
         return (
            <select class="form-select" name={name} value={value} onChange={this.handleChange}>
              <option value=''>{label}</option>
              {
                arr.map(elem=>(
                    <option value={elem}>{elem}</option>
                ))
              }
             
             
            </select>
         )
    }
    makeYear(start){
        let arr=[]
        for(let i=start;i<=2025;i++)
        {
            arr.push(i)
        }
        return arr
    }
    makeDate(start){
        let arr=[]
        let end=+this.state.js.year%4==0&&this.state.js.month=='February'?28
        :this.state.js.month=='February'?29:31
        for(let i=start;i<=end;i++)
        {
            arr.push(i)
        }
        return arr
        

    }

    handleHome=()=>{
        console.log('arman')
        this.props.onChangeView()
    }
    render(){
        let {arr}=this.props
        let {code,quantity,year,month,date}=this.state.js
        let {montharr,error}=this.state
        let yeararr=this.makeYear(1998)
        let datearr=year&&month?this.makeDate(1):[]
        
        return(
            <div className='container'>
             <h4>Select Product whose stock has been Recieved</h4>

            <select class="form-select" value={code} name='code' onChange={this.handleChange}>
            <option value=''>Select Code</option>
            {arr.map(elem=>(
                <option value={elem}>{elem}</option>

            ))}      
           </select>
           <label className='form-label text-danger'>{error.code}</label><br/>
           <label className='form-label'>Stocked Recieved</label>
           <input type='number' className='form-control' name='quantity' value={quantity} 
           onChange={this.handleChange}
           />
            <label className='form-label text-danger'>{error.quantity}</label>
           <div className='row'>
             <div className='col-4'>{this.makeDropdown(yeararr,'year',year,'select year')}</div>
             <div className='col-4'>{this.makeDropdown(montharr,'month',month,'select month')}</div>
             <div className='col-4'>
             {this.makeDropdown(datearr,'date',date,'select date')}
             </div>
             <label className='form-label text-danger'>{error.date}</label>


           </div>
           <button className='btn btn-primary m-1' onClick={this.handleSubmit}>Submit</button>
           <button className='btn btn-primary' onClick={this.handleHome}>Go To Home Page</button>

            </div>
        )
    }
}
export default RecieveStock