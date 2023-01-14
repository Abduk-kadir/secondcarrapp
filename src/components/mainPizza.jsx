import React,{Component} from 'react'
import PizaNavbar from './pizaNavbar'
import Piza from './piza'
import { Switch,Route,Redirect } from 'react-router-dom'
class MainPizza extends Component{

    render(){
        return (
            <React.Fragment>
             <PizaNavbar/>
              <Switch>
                <Route path={'/items/:type/:category'} component={Piza}></Route>
                <Route path={'/items/:type'} component={Piza} ></Route>
                <Route path={'/Others Items'} component={Piza} ></Route>
              </Switch>


            </React.Fragment>
            
        )
    }
}
export default MainPizza