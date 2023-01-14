import React,{Component} from "react";
class NewMatch extends Component{

    state={
        chooseTeam:{team1:'',team2:''}
    }
    handleChooseTeam=()=>
    {
        let s1=this.state
        !s1.chooseTeam.team1?alert('Choose team1')
        :!s1.chooseTeam.team2?alert('Choose team2')
        :s1.chooseTeam.team1==s1.chooseTeam.team2?alert('Choose different')
        :this.props.startMatch(s1.chooseTeam)

    }
    addTeam1=(elem)=>
    {
        let s1={...this.state}
        let {chooseTeam}=s1;
        let{team1,team2}=chooseTeam
        s1.chooseTeam.team1=elem
        this.setState(s1)
    }
    addTeam2=(elem)=>
    {
        let s1={...this.state}
        let {chooseTeam}=s1;
        let{team1,team2}=chooseTeam
        s1.chooseTeam.team2=elem
        this.setState(s1)
    }

    render()
    {
        let {chooseTeam}=this.state
        let {team1,team2}=chooseTeam
          return(
            <React.Fragment>
               
                <h4>{team1?"Team1 "+team1:' Choose Team1'}</h4>
                {
                    this.props.teams.map(elem=>(
                        <button className="btn btn-warning m-3" onClick={()=>this.addTeam1(elem)}>{elem}</button>
                    ))
                }
                <h4> {team2?'Team2 '+team2:' Choose Team2'}</h4>
                {
                    this.props.teams.map(elem=>(
                        <button className="btn btn-warning m-3" onClick={()=>this.addTeam2(elem)}>{elem}</button>
                    ))
                }
                <br/>
               <button className="btn btn-dark text-light btn-lg m-3" onClick={()=>this.handleChooseTeam()}>Start</button>
            </React.Fragment>
          )
    }

}
export default NewMatch