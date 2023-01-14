import React,{Component} from 'react'
import Navbar10 from './navbar10'

import NewProduct from './newProduct'
import RecieveStock from './recieveStock'
class Ass7Task1Main extends Component{
   state={
    Products :[
        {code: "PEP1253", price: 20, brand: "Pepsi", category: "Food",specialOffer: false, limitedStock: false, quantity: 25}, 
        {code: "MAGG021", price: 25, brand: "Nestle", category: "Food",specialOffer: true, limitedStock: true, quantity: 10},
        {code: "LEV501", price: 1000, brand: "Levis", category: "Apparel",specialOffer: true, limitedStock: true, quantity: 3},
        {code: "CLG281", price: 60, brand: "Colgate", category: "Personal Care",specialOffer: true, limitedStock: true, quantity: 5 },
        {code: "MAGG451", price: 25, brand: "Nestle", category: "Food",specialOffer: true, limitedStock: true, quantity: 0},
        {code: "PAR250", price: 40, brand: "Parachute", category: "Personal Care",specialOffer: true, limitedStock: true, quantity: 5} ] ,
        view:0,
        editindex:-1
   }
   handleEdit=(index)=>{
     let s1={...this.state}
     s1.editindex=index;
     s1.view=1
     this.setState(s1)
   }
   handleAdd=()=>{
    let s1={...this.state}
    s1.view=1;
    s1.editindex=-1
    this.setState(s1)
   }
   handleRecieve=()=>{
    let s1={...this.state}
    s1.view=2;
    this.setState(s1)

   }
   handleHomePage=()=>{
    let s1={...this.state}
    s1.view=0;
    this.setState(s1)

   }
   handleAddProduct=(js)=>{
    let s1={...this.state}
    s1.editindex>-1?s1.Products[s1.editindex]=js:s1.Products.push(js)
    s1.view=0;
    this.setState(s1)
   }
   handleStock=(js)=>{
    let s1={...this.state}
    let f=s1.Products.find(elem=>elem.code==js.code)
    console.log(f.quantity)
    console.log(js.quantity)
    f.quantity+= +js.quantity
    s1.view=0;
    this.setState(s1)
   }
   makeProducts=(p)=>{

    return(
        <div className='container '>
            <div className='row text-center'>
                {
                    p.map((elem,index)=>(
                       <div className='col-3 border bg-light'>
                         Code:{elem.code}
                         <br/>
                         Brand:{elem.brand}
                         <br/>
                         Category:{elem.category}
                         <br/>
                         Price:{elem.price}
                         <br/>
                         Quantity:{elem.quantity}
                         <br/>
                         Spicial Offer:{elem.specialOffer?'Yes':'NO'}
                         <br/>
                         Limited Stock:{elem.limitedStock?'Yes':'No'}
                         <br/>
                         <button className='btn btn-warning btn-sm' onClick={()=>this.handleEdit(index)}>Edit details</button>
                         
                        
                       </div> 
                    ))
                }
            </div>
            <button className="btn btn-primary m-2" onClick={this.handleAdd}>Add New Product</button>
        
            <button className="btn btn-primary" onClick={this.handleRecieve}>Recieve Stocks</button>

        </div>
    )

   }
   getdifferentvalue=(arr,name)=>{

    return arr.reduce((acc,curr)=>acc.find(elem=>elem==curr[name])?acc:[...acc,curr[name]],[])
   }

   render(){
    let {Products,view,editindex}=this.state
    let codearr=this.getdifferentvalue(Products,'code')
    let  product=editindex >-1 ?Products[editindex] :{code:"",price:'',brand:'',category: "",specialOffer:false, limitedStock:false, quantity:0};
    let items=Products.length;
    let quantity=Products.reduce((acc,curr)=>{
       return +curr.quantity+acc
    },0)
    let value=Products.reduce((acc,curr)=>+curr.quantity* +curr.price+acc,0)

    return (
        <React.Fragment>
        <Navbar10 items={items} quantity={quantity} value={value}/>
        {
        view==0?this.makeProducts(Products)
        :view==1?<NewProduct product={product} onSubmit={this.handleAddProduct} onChangeView={this.handleHomePage} edit={editindex}/>
        :<RecieveStock arr={codearr}  onChangeView={this.handleHomePage} onStock={this.handleStock}/>
        }
        </React.Fragment>

    )
   }

}
export default Ass7Task1Main