import React,{Component} from 'react'
class RightPanel extends Component{

    handleincrement=(incr,id)=>{
        this.props.onIncrement(incr,id)
    }

 
    
 render(){
    let {cartarr}=this.props
    return(
        <div className='container border'>
            {cartarr.length==0?<h4>Cart is Empty</h4>:<h4>Cart</h4>}
            {
                cartarr.map(elem=>(
                   <div className='row border'>
                    <div className='col-6'>
                        <img src={elem.image} className='img-fluid'/>
                    </div>
                    <div className='col-6'>
                     <strong>{elem.name}</strong>
                     <br/>
                     {elem.desc}
                     <br/>
                     {elem.size}
                      {elem.size&&elem.crust?'|':''}
                     {elem.crust}<br/>
                     <button className='btn btn-danger btn-sm' onClick={()=>this.handleincrement(-1,elem.id)}>-</button>
                     <button className='btn btn-light btn-sm border' disabled={true}>{elem.count}</button>

                     <button className='btn btn-success btn-sm' onClick={()=>this.handleincrement(1,elem.id)}>+</button>


                    </div>
                      
                   </div> 
                ))
            }
        </div>
    )
 }

}
export default RightPanel