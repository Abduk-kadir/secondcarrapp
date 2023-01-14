
let express=require('express')
let app=express()
app.use(express.json())
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*")
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"

    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With ,Content-Type, Accept"

    );
    next();

   
});

const port=2410
app.listen(port,()=>console.log(`Node app is listinng${port}`))

let {data}=require('./customerData')
app.get('/customers',function(req,res){
    let {city,gender,payment,sortBy}=req.query
    let arr1=[...data]
    console.log(arr1)
    if(city){
        arr1=arr1.filter(elem=>elem.city==city)
    }
    if(gender){
        arr1=arr1.filter(elem=>elem.gender==gender)
    }
    if(payment){
        arr1=arr1.filter(elem=>elem.payment==payment)
    }
    if(sortBy=='city')
    {
        arr1.sort((elem1,elem2)=>elem1.city.localeCompare(elem2.city))
    }
    if(sortBy=='payment')
    {
        arr1.sort((elem1,elem2)=>elem1.payment.localeCompare(elem2.payment))
    }
    if(sortBy=='age')
    {
        arr1.sort((elem1,elem2)=>elem1.age-elem2.age)
    }

    res.send(arr1)
})

app.get('/customers/:id',function(req,res){
    let {id}=req.params

    let customer=data.find(elem=>elem.id==id)
    if(customer){
        res.send(customer)
    }
    else{
        res.status(404).send('no student is found')
    }

  
})


app.post('/customers',function(req,res){
    let {body}=req;
     console.log('arman')
     console.log(body)
    data.push(body)
   res.send(body)

})
app.put('/customers/:id',function(req,res){
    let {id}=req.params;
    let {body}=req
    let index=data.findIndex(elem=>elem.id==id)
    if(index>=0){
      data[index]=body;
      res.send(body)

    }
    else{
        res.status(404).send('no customer found')
    }

})
app.delete('/customers/:id',function(req,res){
    let {id}=req.params
    let index=data.findIndex(elem=>elem.id==id)
    if(index>=0){
        let cutsomer=data.splice(index,1)
        res.send(cutsomer)
    }
    else{
        res.status(404).send('customer not found')
    }

})


