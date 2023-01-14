import React,{Component} from 'react'
import Hello from './hello'
import Bye from './bye'
class ClassCompMain extends Component{

    state={
        lectures:[
            {name:'lecture1 :itroduction to react',Likes:0},
            {name:'lecture2 :state and props',Likes:0},
            {name:'lecture3:react life cycle',Likes:0},
            {name:'lecture4:functional component',Likes:0},
            

            

        ]
    }
    handleLike=(name)=>{
        let s1={...this.state}
       let js= s1.lectures.find(elem=>elem.name==name)
       js.Likes++;
       this.setState(s1)
    }
    
    render(){
        let {lectures}=this.state
        return (
            <div className='container'>
                <Hello lectures={lectures} onIncrement={this.handleLike}/>
               
            </div>
        )
    }
}
export default ClassCompMain