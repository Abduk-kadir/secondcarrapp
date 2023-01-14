import React,{Component} from 'react'
import RightPanel from './rightPanel'
class Piza extends Component{
    state={
        arr:[
            {"id":"MIR101","image":"https://i.ibb.co/SR1Jzpv/mirinda.png","type":"Beverage","name":"Mirinda","desc":"Mirinda","veg":"Yes"},
{"id":"PEP001","image":"https://i.ibb.co/3vkKqsF/pepsiblack.png","type":"Beverage","name":"Pepsi Black Can","desc":"Pepsi Black Can","veg":"Yes"},
{"id":"LIT281","image":"https://i.ibb.co/27PvTng/lit.png","type":"Beverage","name":"Lipton IcedTea","desc":"Lipton Iced Tea","veg":"Yes"},
{"id":"PEP022","image":"https://i.ibb.co/1M9xDZB/pepsi-new20190312.png","type":"Beverage","name":"Pepsi New","desc":"Pepsi New","veg":"Yes"},
{"id":"BPCNV1","image":"https://i.ibb.co/R0VSJjq/Burger-Pizza-Non-Veg-nvg.png","type":"BurgerPizza","name":"Classic Non Veg","desc":"Oven-baked buns with cheese, peri-peri chicken, tomato &capsicum in creamy mayo","veg":"No"},
{"id":"BPCV03","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Classic Veg","desc":"Oven-baked buns with cheese, tomato &capsicum in creamy mayo","veg":"Yes"},
{"id":"BPPV04","image":"https://i.ibb.co/Xtx43fT/Burger-Pizza-Veg-423-X420-Pixel1.png","type":"Burger Pizza","name":"Premium Veg","desc":"Oven-baked buns with cheese, paneer,tomato, capsicum & red paprika in creamy mayo","veg":"Yes"},
{"id":"DIP033","image":"https://i.ibb.co/0mbBzsw/new-cheesy.png","type":"SideDish","name":"Cheesy Dip","desc":"An all-time favorite with your Garlic Breadsticks & Stuffed GarlicBread for a Cheesy indulgence","veg":"Yes",},
{"id":"DIP072","image":"https://i.ibb.co/fY52zBw/new-jalapeno.png","type":"SideDish","name":"Cheesy Jalapeno Dip","desc":"A spicy, tangy flavored cheese dip is a an absolutedelight with your favourite Garlic Breadsticks","veg":"Yes"},
{"id":"GAR952","image":"https://i.ibb.co/BNVmfY9/Garlic-bread.png","type":"SideDish","name":"Garlic Breadsticks","desc":"Baked to perfection. Your perfect pizza partner! Tastesbest with dip","veg":"Yes"},
{"id":"PARCH1","image":"https://i.ibb.co/prBs3NJ/Parcel-Nonveg.png","type":"SideDish","name":"Chicken Parcel","desc":"Snacky bites! Pizza rolls with chicken sausage & creamyharissa sauce","veg":"No"},
{"id":"PARVG7","image":"https://i.ibb.co/JHhrM7d/Parcel-Veg.png","type":"SideDish","name":"VegParcel","desc":"Snacky bites! Pizza rolls with paneer & creamy harissa sauce","veg":"Yes"},
{"id":"PATNV7","image":"https://i.ibb.co/0m89Jw9/White-Pasta-Nvg.png","type":"SideDish","name":"White Pasta Italiano Non-Veg","desc":"Creamy white pasta with pepper barbecuechicken","veg":"No"},
{"id":"PATVG4","image":"https://i.ibb.co/mv8RFbk/White-Pasta-Veg.png","type":"SideDish","name":"White Pasta Italiano Veg","desc":"Creamy white pasta with herb grilledmushrooms","veg":"Yes"},
{"id":"DES044","image":"https://i.ibb.co/gvpDKPv/Butterscotch.png","type":"Dessert","name":"Butterscotch Mousse Cake","desc":"Sweet temptation! Butterscotch flavored mousse","veg":"Yes"},
{"id":"DES028","image":"https://i.ibb.co/nm96NZW/ChocoLava.png","type":"Dessert","name":"Choco Lava Cake","desc":"Chocolate lovers delight! Indulgent,gooey molten lava inside chocolate cake","veg":"Yes"},
   
{"id":"PIZVDV","image":"https://i.ibb.co/F0H0SWG/deluxeveg.png","type":"Pizza","name":"DeluxeVeggie","desc":"Veg delight - onion, capsicum, grilled mushroom, corn & paneer","veg":"Yes"},
{"id":"PIZVFH","image":"https://i.ibb.co/4mHxB5x/farmhouse.png","type":"Pizza","name":"Farmhouse","desc":"Delightful combination of onion, capsicum, tomato & grilled mushroom","veg":"Yes"},
{"id":"PIZVIT","image":"https://i.ibb.co/sRH7Qzf/Indian-TandooriPaneer.png","type":"Pizza","name":"Indi Tandoori Paneer","desc":"It is hot. It is spicy. It is oh-soIndian. Tandoori paneer with capsicum, red paprika & mint mayo","veg":"Yes"},
{"id":"PIZVMG","image":"https://i.ibb.co/MGcHnDZ/mexgreen.png","type":"Pizza","name":"Mexican Green Wave","desc":"Mexican herbs sprinkled on onion, capsicum, tomato &jalapeno","veg":"Yes"},
{"id":"PIZVPP","image":"https://i.ibb.co/cb5vLX9/peppypaneer.png","type":"Pizza","name":"PeppyPaneer","desc":"Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika","veg":"Yes"},
{"id":"PIZVVE","image":"https://i.ibb.co/gTy5DTK/vegextra.png","type":"Pizza","name":"VegExtravaganza","desc":"Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno &extra cheese","veg":"Yes"},
{"id":"PIZNCP","image":"https://i.ibb.co/b5qBJ9d/cheesepepperoni.png","type":"Pizza","name":"Chicken Pepperoni","desc":"A classic American taste! Relish the delectable flavor of Chicken Pepperoni,topped with extra cheese","veg":"No"},
{"id":"PIZNCD","image":"https://i.ibb.co/GFtkbB1/ChickenDominator10.png","type":"Pizza","name":"Chicken Dominator","desc":"Loaded with double pepperbarbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers","veg":"No"},
{"id":"PIZNPB","image":"https://i.ibb.co/GxbtcLK/Pepper-Barbeque-OnionC.png","type":"Pizza","name":"Pepper Barbecue & Onion","desc":"A classic favourite with pepperbarbeque chicken & onion","veg":"No"},
{"id":"PIZNIC","image":"https://i.ibb.co/6Z5wBqr/Indian-Tandoori-ChickenTikka.png","type":"Pizza","name":"Indi Chicken Tikka","desc":"The wholesome flavour of tandoorimasala with Chicken tikka, onion, red paprika & mint mayo","veg":"No"}




],


sizes : ["Regular","Medium","Large"],
crusts :["New Hand Tossed","Wheat Thin Crust","Cheese Burst","Fresh Pan Pizza","Classic HandTossed"],
cartarr:[]
    }
handleAddCart(id){
    let s1={...this.state}
    let js=s1.arr.find(elem=>elem.id==id)
   
    let {size,crust}=js
    let {category,type}=this.props.match.params
    if(type=='Pizza'){
     if(!size){
        alert('choose size')
     }
     else if(!crust){
        alert('select crust')
     }
     else{
        let js=s1.arr.find(elem=>elem.id==id)
        s1.cartarr.push(js)
        js.disabled=true
        js.count=1
       
        this.setState(s1)
     }
   }
   else{
    let js=s1.arr.find(elem=>elem.id==id)
    s1.cartarr.push(js)
    js.count=1
   
    this.setState(s1)

   }
  
   
  
   
}


  makeDropdown(arr,name,value='',label,id,dis){
    return(
     <select class="form-select" name={name} value={value} onChange={this.handleChange}  id={id}  disabled={dis}>
      <option value=''>{label}</option>
      {
        arr.map(elem=>(
            <option value={elem}>{elem}</option>
        ))
      }
     
    </select>
    )
  }
  handleChange=(e)=>{
    let s1={...this.state}
    
    let {currentTarget:input}=e;
    let js=s1.arr.find(elem=>elem.id==input.id)
    
    js[input.name]=input.value
    
    
   
   
    this.setState(s1)
    

    
    
  }
  handleIncrement=(incr,id)=>{
     let s1={...this.state}
    let js=s1.cartarr.find(elem=>elem.id==id)
    js.count+=incr
    if(js.count==0){
      let index=s1.cartarr.findIndex(elem=>elem.id==id)
      if(js.size)js.size=''
      if(js.crust)js.crust=''
      js.disabled=false;
     
      s1.cartarr.splice(index,1)

    }
    this.setState(s1)
  }  

    render(){
        let {arr}=this.state
        let {category,type}=this.props.match.params
        let {sizes,crusts,isdisable,cartarr}=this.state
       

        arr=type?category?arr.filter(elem=>elem.type==type&&elem.veg==category):arr.filter(elem=>elem.type==type):arr.filter(elem=>elem.type!='Pizza'&&elem.type!=='SideDish')
       
      
       return(
           <div className='container'>
              <div className='row text-center'>
                  <div className='col-8'>
                   <div className='row'>
                     {arr.map((elem,index)=>
                       
                    
                        <div className='col-6'>
                          {
                            console.log(elem.size,elem.crust)
                          }
                            <div className='row'>
                            <div className='col-12'><img src={elem.image} className='img-fluid'></img></div>
                            <div className='col-12'><strong>{elem.name}</strong></div>
                            <div className='col-12'>{elem.desc}</div>
                            <div className='col-6'>{type=='Pizza'?this.makeDropdown(sizes,'size',elem.size,'select size',elem.id,elem.disabled):''}</div>
                            <div className='col-6'>{type=='Pizza'?this.makeDropdown(crusts,'crust',elem.crust,'select crust',elem.id,elem.disabled):''}</div>
                           </div>
                           <div className='row'>
                              
                              <div className='col-3'></div>
                              <div className='col-auto'>
                                {
                                  elem.count>0?(
                                    <React.Fragment>
                                    <button className='btn btn-danger btn-sm' onClick={()=>this.handleIncrement(-1,elem.id)}>-</button>
                                    <button className='btn btn-light btn-sm border' disabled={true}>{elem.count}</button>
               
                                    <button className='btn btn-success btn-sm' onClick={()=>this.handleIncrement(1,elem.id)}>+</button>
                                    </React.Fragment>
                                  ):
                                  <button className='btn btn-primary' onClick={()=>this.handleAddCart(elem.id)}>Add to Cart</button>

                                }
                               
                              </div>
                              <div className='col-3'></div>
                            </div>



                        </div>
                     )}
                   </div>
                    
                  </div>

                  <div className='col-4'>
                    <RightPanel cartarr={cartarr} onIncrement={this.handleIncrement}/>
                  </div>
              </div>
           </div>
       )
    }
}
export default Piza