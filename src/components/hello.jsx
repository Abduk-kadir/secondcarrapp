import React,{Component} from 'react'
function Hello(props){
    let {lectures}=props
    return (
        <div >
            {
                lectures.map(elem=>(
                    <h5>
                        {elem.name} likes={elem.Likes}
                        <button className='btn btn-primary' onClick={()=>props.onIncrement(elem.name)}>incr</button>
                    </h5> 
                ))
            }
        </div>
    )
}
export default Hello