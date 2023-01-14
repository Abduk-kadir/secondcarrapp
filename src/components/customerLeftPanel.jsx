import React,{Component} from 'react'
class CustomerLeftPanel extends Component{
    state={
        optionArr:{
            cities:['Gurgaon','Noida','Delhi','Jaipur'],
            genders:['Male','Female'],
            payments:['Credit Card','Debit Card','Wallet']

        }

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
        let optionArr=this.state.optionArr
        let {city,payment,gender}=this.props.qparams
        let{cities,payments,genders}=optionArr
        return(
            <React.Fragment>
             <label for="exampleFormControlInput1" class="form-label">
                <strong>Choose City</strong>
                
            </label>
             {
                this.makeRadio(cities,'city',city)
             }
              <label for="exampleFormControlInput1" class="form-label"><strong>Choose Gender</strong>
                </label>
             {
                this.makeRadio(genders,'gender',gender)
             }
              <label for="exampleFormControlInput1" class="form-label"><strong>Choose Payment</strong>
                </label>
             {
                this.makeRadio(payments,'payment',payment)
             }
            </React.Fragment>
        )

    }
}
export default CustomerLeftPanel