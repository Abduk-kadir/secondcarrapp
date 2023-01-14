const { response } = require('express')
let express=require('express')
let app=express()
app.use(express.json())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET POST OPTIONS PUT PATCH HEAD DELETE"

    )
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With ,Content-Type, Accept"

    )
    next()
   
})
let {data}=require('./studentData')
const port=2410
app.listen(port,()=>console.log(`Node app is listinng${port}`))
app.get('/svr/test',function(req,res){
    res.send('test response')
})

app.get('/svr/students',function(req,res){
   let { course,grade,sort}=req.query
  
    let coursearr=course?course.split(','):[]
    
   
    arr=coursearr.length>0 ?data.filter(elem=>coursearr.find(val=>val==elem.course)):data
    
    if(grade){
       arr= arr.filter(elem=>elem.grade==grade)
    }
    if(sort=='name'){
        arr.sort((elem1,elem2)=>elem1.name.localeCompare(elem2.name))
    }
    if(sort=='course'){
        arr.sort((elem1,elem2)=>elem1.course.localeCompare(elem2.course))
    }
    res.send(arr)
})
app.get('/svr/students/:id',function(req,res){
    let id=req.params.id
    let student=data.find(elem=>elem.id==id)
    if(student){
    res.send(student)
    }
    else{
        res.status(404).send('student not  found')
    }
   
})
app.get('/svr/students/course/:name',function(req,res){

    let {name}=req.params
    let  students=data.filter(elem=>elem.course==name)
    res.send(students)
})
app.post('/svr/students',function(req,res){
    let {body}=req
    let maxid=data.reduce((acc,curr)=>curr.id>acc?curr.id:acc,0)
    let newmaxid=maxid+1
    let newbody={id:newmaxid,...body}
    data.push(newbody)
    res.send(newbody)
})
app.put('/svr/students/:id',function(req,res){
    let {id}=req.params;
    let {body}=req
    let index=data.findIndex(elem=>elem.id==id);
    if(index>=0){
        console.log('index is',index)
       id=+id 
     let newstudnet={id:id,...body}
     data[index]=newstudnet;
     res.send(newstudnet)
    }
    else{
        res.status(404).send('no student found for editing')
    }
})

app.delete('/svr/students/:id',function(req,res){
    let {id}=req.params;
    let index=data.findIndex(elem=>elem.id==id)
    if(index>=0){
       let student= data.splice(index,1)
       res.send(student)
    }
    else{
        res.status(404).send('no student found for deleting')

    } 
    
})