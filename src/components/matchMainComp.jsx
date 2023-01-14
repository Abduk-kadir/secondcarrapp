import React,{Component} from "react";
import NewMatch from "./newMatch";
import WelcomeMatch from "./welcomeMatch";
class MatchMainComp extends Component{
    state={
        teams:['France','England','Brajil','Germeny','Argentina'],
        allMatches:[],
        pointsTable:[
            {team:'France',played:0,won:0,lost:0,drown:0,goalsFor:0,goalsAgain:0,points:0},
            {team:'England',played:0,won:0,lost:0,drown:0,goalsFor:0,goalsAgain:0,points:0},
            {team:'Brajil',played:0,won:0,lost:0,drown:0,goalsFor:0,goalsAgain:0,points:0},
            {team:'Germeny',played:0,won:0,lost:0,drown:0,goalsFor:0,goalsAgain:0,points:0},
            {team:'Argentina',played:0,won:0,lost:0,drown:0,goalsFor:0,goalsAgain:0,points:0}
        ],
        view:0,
        selectedTeam:{},
        selectedTeamScore:{}
    }
    newMatch=()=>
    {
       let s1={...this.state}
       s1.view=1;
       this.setState(s1)
    }
    allMatches=()=>
    {
       let s1={...this.state}
       s1.view=3;
       this.setState(s1)
    }
    pointsTable=()=>{
      let s1={...this.state}
       s1.view=4;
       this.setState(s1)

    }
    startMatch=(selteam)=>{
          
       let s1={...this.state}
       s1.view=2;
       s1.selectedTeam=selteam
       this.setState(s1)
    }
    matchOver=(scoreSelTeam)=>{
        let s1={...this.state}
        s1.selectedTeamScore=scoreSelTeam;
        let js={team1:s1.selectedTeam.team1,team2:s1.selectedTeam.team2,team1Score:s1.selectedTeamScore.scoreTeam1,team2Score:s1.selectedTeamScore.scoreteam2}
        s1.allMatches.push(js)


        let {team1,team2}=s1.selectedTeam
        let t1=s1.pointsTable.find(elem=>elem.team==team1)
         t1.played+=1
         let t2=s1.pointsTable.find(elem=>elem.team==team2)
         t2.played+=1

         let {scoreTeam1,scoreteam2}=s1.selectedTeamScore
         console.log(scoreTeam1,scoreteam2)
         if(scoreTeam1>scoreteam2){
           t1.won+=1;
           t2.lost+=1

           t1.goalsFor+=scoreTeam1
           t1.goalsAgain+=scoreteam2
           t2.goalsAgain+=scoreTeam1
           t2.goalsFor+=scoreteam2

           t1.points+=3
         }
         else if(scoreTeam1<scoreteam2){
          t2.won+=1
          t1.lost+=1

          
          t1.goalsFor+=scoreTeam1
          t1.goalsAgain+=scoreteam2
          t2.goalsAgain+=scoreTeam1
          t2.goalsFor+=scoreteam2

          t2.points+=3


         }
         else{
          t1.drown+=1
          t2.drown+=1


          t1.goalsFor+=scoreTeam1
          t1.goalsAgain+=scoreteam2
          t2.goalsAgain+=scoreTeam1
          t2.goalsFor+=scoreteam2

          t1.points+=1
          t2.points+=1

         }
        
         




       
        s1.view=0;
        this.setState(s1)
    }

    handleSort(index){
      let s1={...this.state}
      console.log(index)
       switch(index){
         case 0:
          s1.pointsTable.sort((elem1,elem2)=>elem1.team.localeCompare(elem2.team))
          break;
          case 1:s1.pointsTable.sort((elem1,elem2)=>elem1.played-elem2.played)
          break;

          case 2:s1.pointsTable.sort((elem1,elem2)=>elem1.won-elem2.won)
          break;

          case 3:s1.pointsTable.sort((elem1,elem2)=>elem1.lost-elem2.lost)
          break;
          case 4:s1.pointsTable.sort((elem1,elem2)=>elem1.drown-elem2.drown)
          break;
          case 5:s1.pointsTable.sort((elem1,elem2)=>elem1.goalsFor-elem2.goalsFor)
          break;
          case 6:s1.pointsTable.sort((elem1,elem2)=>elem1.goalsAgain-elem2.goalsAgain)
          break;
          case 7:s1.pointsTable.sort((elem1,elem2)=>elem1.points-elem2.points)
          break;
       }
       this.setState(s1)

    }






    render()
    {
        let {teams,view,allMatches,pointsTable}=this.state
        return(
         <React.Fragment>
             
            <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid bg-danger">
              <a className="navbar-brand" href="#">Football Tournament</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link ">Number of matches<span class="badge text-bg-primary">{this.state.allMatches.length}</span></a>
                  </li>
                </ul>
               
              </div>
            </div>
          </nav>
          <div className="container-fluid text-center">
          {
          view==2?'':( 
           <React.Fragment> 
          <button className="btn btn-primary m-2" onClick={()=>this.allMatches()}>All Matches</button>
          <button className="btn btn-primary m-2" onClick={()=>this.pointsTable()}>Points Table</button>
          <button className="btn btn-primary m-2" onClick={()=>this.newMatch()}>New Match</button>
          </React.Fragment> 
          )
         }
          {

           view==1? <NewMatch teams={teams} startMatch={this.startMatch}/>:
           view==2? <WelcomeMatch selectedTeam={this.state.selectedTeam} matchOver={this.matchOver} />:
           view==3?allMatches.length==0?<h4>There are no Matches played</h4>:(
            <React.Fragment>
             <div className="row bg-dark text-white">
               <div className="col-3">Team1</div> 
               <div className="col-3">Team2</div> 
               <div className="col-3">Score</div> 
               <div className="col-3">Result</div> 
                
             </div>   
            { allMatches.map(elem=>(
                  <div className="row">
                  <div className="col-3">{elem.team1}</div> 
                  <div className="col-3">{elem.team2}</div> 
                  <div className="col-3">{elem.team1Score+'-'+elem.team2Score}</div> 
                  <div className="col-3">{elem.team1Score>elem.team2Score?elem.team1+' won':elem.team1Score==elem.team2Score?'Match Tie': elem.team2+' won'}</div> 
                   
                </div>  
             ))}
            
             </React.Fragment>

           ):view==4?(
              
            <React.Fragment>
            <div className="row bg-dark text-white">
              <div className="col-2" onClick={()=>this.handleSort(0)}>Team</div> 
              <div className="col-2"  onClick={()=>this.handleSort(1)}>Played</div> 
              <div className="col-2"  onClick={()=>this.handleSort(2)}>Won</div> 
              <div className="col-1"  onClick={()=>this.handleSort(3)}>Lost</div> 
              <div className="col-1"  onClick={()=>this.handleSort(4)}>Drawn</div> 
              <div className="col-1"  onClick={()=>this.handleSort(5)}>Goals For</div>
              <div className="col-2"  onClick={()=>this.handleSort(6)}>Goals Against</div>
              <div className="col-1"  onClick={()=>this.handleSort(7)}>points</div>
               
            </div>   
           { pointsTable.map(elem=>(
                 <div className="row">
                 <div className="col-2">{elem.team}</div> 
                 <div className="col-2">{elem.played}</div> 
                 <div className="col-2">{elem.won}</div> 
                 <div className="col-1">{elem.lost}</div>
                 <div className="col-1">{elem.drown}</div> 
                 <div className="col-1">{elem.goalsFor}</div>
                 <div className="col-2">{elem.goalsAgain}</div>
                 <div className="col-1">{elem.points}</div>


                  
               </div>  
            ))}
           
            </React.Fragment>


           ):''



          }
          </div>
          </React.Fragment>






        )
    }
}
export default MatchMainComp