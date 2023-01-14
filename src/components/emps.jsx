import React,{Component} from 'react'
import queryString from 'query-string';
import CompanyLeftPanel from './companyLeftPanel';
class Emps extends Component{
    state={
        
        employees:[{
            name: "Amit Kumar",
            department: "Finance",
            designation: "Manager",
            salary: 24000,
            email: "amit.kumar@company.com",
            mobile: "9898346473",
            location: "New Delhi"
            },
           
           {
            name: "Preeti Sharma",
            department: "Technology",
            designation: "Manager",
            salary: 28500,
            email: "preeti.sharma@company.com",
            mobile: "9898236541",
            location: "New Delhi"
            },
           
           {
            name: "Vishal Verma",
            department: "Operations",
            designation: "Manager",
            salary: 22100,
            email: "vishal.verma@company.com",
            mobile: "9910346632",
            location: "New Delhi"
            },
           
           {
            name: "Charu Kumari",
            department: "HR",
            designation: "Manager",
            salary: 23500,
            email: "charu.kumari@company.com",
            mobile: "7023734553",
            location: "New Delhi"
            },
           
           {
            name: "Puneet Gupta",
            department: "Finance",
            designation: "Trainee",
            salary: 14450,
            email: "puneet.gupta@company.com",
            mobile: "8836436731",
            location: "Noida"
            },
           
           {
            name: "Namita Singh",
            department: "Technology",
            designation: "Trainee",
            salary: 14590,
            email: "namita.singh@company.com",
            mobile: "9801228812",
            location: "Noida"
            },
            {name: "Samit Bansal",
            department: "Operations",
            designation: "Trainee",
            salary: 13900,
            email: "samit.bansal@company.com",
            mobile: "7003551118",
            location: "Noida"
            },
           
           {
            name: "Priya Talwar",
            department: "HR",
            designation: "Trainee",
            salary: 14450,
            email: "priya.talwar@company.com",
            mobile: "814452341",
            location: "Noida"
            },
           
           {
            name: "Shivam Singh",
            department: "Finance",
            designation: "Trainee",
            salary: 15100,
            email: "shivam.singh@company.com",
            mobile: "7173958440",
            location: "Noida"
            },
           
           {
            name: "Shelja Prasad",
            department: "Technology",
            designation: "Trainee",
            salary: 15500,
            email: "shelja.prasad@company.com",
            mobile: "9898346473",
            location: "Noida"
            },
           
           {
            name: "Mithali Dutt",
            department: "Finance",
            designation: "President",
            salary: 68200,
            email: "mithali.dutt@company.com",
            mobile: "98100346731",
            location: "New Delhi"
            },
           
           {
            name: "Pradeep Kumar",
            department: "Technology",
            designation: "President",
            salary: 84900,
            email: "pradeep.kumar@company.com",
            mobile: "98254634121",
            location: "New Delhi"
            },
           
           {
            name: "Amit Singh",
            department: "Operations",
            designation: "President",
            salary: 71250,
            email: "amit.singh@company.com",
         mobile: "98145537842",
         location: "New Delhi"
         },
         {
         name: "Garima Rai",
         department: "HR",
         designation: "President",
         salary: 69200,
         email: "garima.rai@company.com",
         mobile: "998107654387",
         location: "New Delhi"
         }
        ]
    }
    handleNext=(incr)=>{

       
        let {category}=this.props.match.params
        let url=category?`/emps/${category}`:`/emps`
        
        let qparams=queryString.parse(this.props.location.search)
        let {page=1}=qparams
        qparams.page=+page+incr

        let searchstr=this.makeSearchStr(qparams)
       
       
        this.callUrl(url,searchstr)
        

    }
     callUrl=(url,str)=>{
        this.props.history.push(
            {
                pathname:url,
                search:str
            }
        )
     }

    makeSearchStr=(js)=>{
       
        let {page,designation,department}=js
        let searchstr=''
         searchstr=this.addSearchStr(searchstr,page,'page')
         searchstr+=this.addSearchStr(searchstr,designation,'designation')
         searchstr+=this.addSearchStr(searchstr,department,'department')

        return searchstr

    }
    addSearchStr=(str,value,name)=>{
        

        return value?str?`&${name}=${value}`:`${name}=${value}`:''


    }
     getDifferentValue=(arr,name)=>{
      
          
           let val= arr.reduce((acc,curr)=>{
                if(acc.find(elem=>elem==curr[name]))
                {
                    return acc;
                }
                else{
                    return [...acc,curr[name]]
                }
            },[])
            return val
    

     }
     handleOptionChange=(js)=>{
        js.page=''
       let searchstr= this.makeSearchStr(js)
       
       
       let {category}=this.props.match.params
       let url=category?`/emps/${category}`:`/emps`
       this.callUrl(url,searchstr)

     }
     filterparams=(arr,js)=>{
        let {department}=js
        arr=this.filterparam(arr,department,'department')
        return arr

     }

     filterparam(arr,value,name){
       
        if(!value){
            return arr;
        }
        let valuesarr=value.split(',');
        let arr1=arr.filter((a1)=>valuesarr.find((val)=>val==a1[name]))
        return arr1;


     }
   


    render(){
        let {employees}=this.state
        let des=this.getDifferentValue(employees,'designation')
       
        let dept=this.getDifferentValue(employees,'department')
       
       
        let alloption={desarr:des,deptarr:dept}

        let {category}=this.props.match.params
        let qparams=queryString.parse(this.props.location.search)
        let {designation,department}=qparams

        let {page=1}=qparams
        let startindex= +page-1;
        let endindex= +page
        employees= category?employees.filter(elem=>elem.location==category):employees

        employees=designation?employees.filter(elem=>elem.designation==designation):employees
        employees= this.filterparams(employees, qparams)


       let  newemparr=employees.filter((elem,index)=>index>=startindex&&index<=endindex)
        return(
            <div className='container'>
               
              <div className='row'>
                <div className='col-3'>
                    <CompanyLeftPanel alloption={alloption} js={qparams} onOptionChange={this.handleOptionChange}/>
                </div>
                <div className='col-9'>
                
                <h4 className='text-center'>Welcome to Employee Portal</h4>
                <div className='row mb-4'>
                    <strong className='ps-0'>You have choosen</strong>
                    Location:{category?category:'All'}<br/>
                    Department:{department?department :'All'}<br/>
                    Designation:{designation?designation:'All'}
                </div>

                The Number of Employee matching the option :{employees.length} <br/>
                    <div className='row'>
                       
                        {
                            newemparr.map(elem=>(
                                <div className='col-6 border'>
                                    Name:{elem.name}
                                    <br/>
                                    Department:{elem.department}
                                    <br/>
                                    Designation:{elem.designation}
                                    <br/>
                                    Salary:{elem.salary}
                                    <br/>
                                    Location:{elem.location}
                                    <br/>
                                    Email:{elem.email}
                                    <br/>
                                </div>
                            ))
                        }
                    </div>
                    <div className='row'>
                        <div className='col-2'>
                        {startindex>=1?<button className='btn btn-primary' onClick={()=>this.handleNext(-1)}>Previos</button>:''}
                        </div>
                        <div className='col-8'></div>
                        <div className='col-2'>
                         {endindex<employees.length-1? <button className='btn btn-primary' onClick={()=>this.handleNext(1)}>Next</button>:''}  
                        </div>
                    </div>




                </div>
              </div>
            </div>
        )
    }


}
export default Emps