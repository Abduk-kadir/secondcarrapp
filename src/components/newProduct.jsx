import React,{Component} from 'react'
class NewProduct extends Component{
    state={
        product:this.props.product,
        error:{},
       // product:{code:"",price:'',brand:'',category: "",specialOffer:false, limitedStock:false, quantity:0} ,
        brands:["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys", "P&G", "Colgate", "Parachute", "Gillete", "Dove", "Levis", "Van Heusen", "Manyavaar", "Zara"] ,
        categories:['Food','Apparel','Personal Care'],
        foodArr:["Nestle", "Haldiram", "Pepsi", "Coca Cola", "Britannia", "Cadburys"],
        personalArr:[ "P&G", "Colgate", "Parachute", "Gillete", "Dove"],
        aprealArr:[ "Levis", "Van Heusen", "Manyavaar", "Zara"]
    }

    handleChange=(e)=>{
        let {currentTarget:input}=e;
        let s1={...this.state}
        input.type=='checkbox'?s1.product[input.name]=input.checked
        
        : s1.product[input.name]=input.value
        this.setState(s1)
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let error=this.makingError()
        if(this.isError(error)){
        this.props.onSubmit(this.state.product)
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
        let {code,price,brand,category,specialOffer, limitedStock, quantity}=this.state.product
        let error={};
        error.code=code?'':'code is manadotry'
        error.price=price?'':'price is manadotry'
        error.brand=brand?'':'brand is manadotry'
        error.category=category?'':'category is manadotry'
        return error
    }






    handleHome=()=>{
        console.log('arman')
        this.props.onChangeView()
    }


    render(){
        let {code,price,brand,category,specialOffer,limitedStock,quantity}=this.state.product
        let {brands,categories,foodArr,personalArr,aprealArr,error}=this.state;
        let arr=category?category=='Food'?foodArr:category=='Apparel'?aprealArr:personalArr:[]

        return(
            <div className='container'>
            <div className="mb-3">
            <label  className="form-label">Product Code</label>
            <input type="email" class="form-control" 
            name='code'
            value={code}
            onChange={this.handleChange}
            placeholder="enter code"/>
            </div>

            <label  className="form-label text-danger">{error.code}</label>

            <div className="mb-3">
            <label  className="form-label">Price</label>
            <input type="Number" class="form-control" 
            name='price'
            value={price}
            onChange={this.handleChange}
            placeholder="enter price"/>
            </div>
            <label  className="form-label text-danger">{error.price}</label>
            <br/>
            <label  className="form-label"><strong>Category</strong></label>
            <br/>
            {
                categories.map(elem=>(
                    <div className="form-check form-check-inline" key={elem}>
                    <input className="form-check-input" type="radio"
                    name='category'
                    value={elem}
                    checked={elem==category}
                    onChange={this.handleChange}
                    />
                    <label className="form-check-label" >
                     {elem}
                    </label>
                    </div>

                ))
            }
            <br/>
            <label  className="form-label text-danger">{error.category}</label>
            <select class="form-select" value={brand} name='brand' onChange={this.handleChange}>
            <option value=''>Select Brand</option>
            {arr.map(elem=>(
                <option value={elem}>{elem}</option>

            ))}      
           </select>
           <label  className="form-label text-danger">{error.brand}</label>

           <div className="form-check">
           <input className="form-check-input" type="checkbox"
            name='specialOffer'
            checked={specialOffer==true}
            onChange={this.handleChange}
           />
           <label className="form-check-label">
           Special Offer
           </label>
           </div>

          <div className="form-check">
           <input className="form-check-input" type="checkbox"
           name='limitedStock'
           checked={limitedStock==true}
           onChange={this.handleChange}
           />
           <label className="form-check-label">
           Limited Stock
           </label>
          </div>
            
        

           <button className='btn btn-primary m-2' onClick={this.handleSubmit}>{this.props.edit>-1?'Edit A Product':'Add Product'}</button>
           <button className='btn btn-primary' onClick={this.handleHome}>Go Back To Home Page</button>

            </div>

        )

    }

}
export default NewProduct