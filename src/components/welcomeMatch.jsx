import React,{Component} from "react";
class WelcomeMatch extends Component{
    state={
        scoreTeam1:0,
        scoreteam2:0
   }
   addScore=(team)=>
   {
        let s1={...this.state}
        team=='team1'?s1.scoreTeam1+=1:s1.scoreteam2+=1
        this.setState(s1)
   }
   handleMachOver=()=>{
     let s1={...this.state}
     this.props.matchOver(s1)

   }

    render(){
       

        return(
        <React.Fragment>
             
              <h1 className="text-start">WelCome to an exciting match</h1>
            
            <div className="row">
                <div className="col-3">
                    <h4>{this.props.selectedTeam.team1}</h4>
                    <button className="btn btn-warning" onClick={()=>this.addScore('team1')}>Goal Scored</button>
                </div>
                <div className="col-3"><h4>{this.state.scoreTeam1+'-'+this.state.scoreteam2}</h4></div>
                <div className="col-3">
                    <h4>{this.props.selectedTeam.team2}</h4>
                    <button className="btn btn-warning" onClick={()=>this.addScore('team2')}>Goal Scored</button>
                </div>

            </div>
            <div className="row">
                <div className="col-3">
                    
                </div>
                <div className="col-3"><button className="btn btn-warning" onClick={()=>this.handleMachOver()}>Match Over</button></div>
                <div className="col-3">
                    
                </div>

            </div>


        </React.Fragment>

        )
    }

}
export default WelcomeMatch