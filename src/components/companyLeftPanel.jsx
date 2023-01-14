import React,{Component} from 'react'
class CompanyLeftPanel extends Component{
     state={
       // js:{designation:'',department:[]}

    }
    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let jsn={...this.props.js}
       
        input.type=='checkbox'?jsn[input.name]=this.UpdateCb(jsn[input.name],input.value,input.checked): jsn[input.name]=input.value
        this.props.onOptionChange(jsn)
    }


    UpdateCb(str,value,checked){


       let  arr=str?str.split(','):[]
        if(checked){
        arr.push(value)
   
        }
        else{
            let index=arr.findIndex(elem=>elem==value)
            arr.splice(index,1)
        }
      
        return arr.join(',')
      
    
  }


    render(){
        
        let {alloption,js}=this.props
        let {designation='',department}=js
        department=department?department.split(','):[]
       
        let {deptarr,desarr}=alloption
       


        return(
           <div className='row'>
            <div className='col-12'>
                <strong>Designation</strong>
                {
                desarr.map(elem=>(
                    <div className="form-check" key={elem}>
                    <input className="form-check-input" type="radio"
                      name='designation'
                      value={elem} 
                      checked={elem==designation}
                      onChange={this.handleChange}
                      
                      
                      />
                    <label className="form-check-label" >
                      {
                        elem
                      }
                    </label>
                    </div>
                ))
                }
            </div>

            <div className='col-12'>
                <strong>Department</strong>
                {
                    deptarr.map(elem=>(
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox"
                        name='department'
                        value={elem}
                        checked={department.findIndex(val=>val==elem)>=0}
                        onChange={this.handleChange}
                        
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          {elem}
                        </label>
                      </div>   

                    ))
                }


            </div>



           </div>



        )
    }
}
export default CompanyLeftPanel