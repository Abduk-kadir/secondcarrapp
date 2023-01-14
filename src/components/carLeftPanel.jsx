import React,{Component} from 'react'
class CarLeftPanel extends Component{
    state={
        fuelArr:['Diesel','Petrol'],
        typeArr:['Hatchback','Sedan'],
        sortArr:['kms','price','year']
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
    handleChange=(e)=>{
        
        let {currentTarget:input}=e;
        let qparams={...this.props.qparams}
        qparams[input.name]=input.value;
        this.props.onOptionChange(qparams)


    }

    render(){
        let {fuelArr,typeArr,sortArr}=this.state
        let {fuel='',type='',sort=''}=this.props.qparams
        return (
            <div className='container mt-4 border'>
            <div className='row mb-3 bg-light'>
                <div className='col-12 border'><strong>Fuel</strong></div>
                
                {
                    this.makeRadio(fuelArr,'fuel',fuel)
                }
            </div>

            <div className='row mb-3 bg-light'>
            <div className='col-12 border'><strong>Type</strong></div>
           
             {
                this.makeRadio(typeArr,'type',type)
             }
              </div>
        
           <div className='row mb-3 bg-light'>
            <div className='col-12 border'><strong>Sort</strong></div>
            {
                this.makeRadio(sortArr,'sort',sort)
            }
           </div>
        </div>
        )
    }
}
export default CarLeftPanel