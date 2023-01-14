let express=require('express')
let app=express()
//var port= process.env.PORT || 2410;
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
let {carMaster, cars}=require('./carData.js')
app.get('/cars',function(req,res){
    let {minprice,maxprice,fuel,type,sort}=req.query

    let arr1=[...cars]
    if(minprice){

        arr1=arr1.filter(elem=>elem.price>=minprice)

    }
    if(maxprice){
        arr1=arr1.filter(elem=>elem.price<=maxprice)

    }
    if(fuel){
        let newcartmaster=carMaster.reduce((acc,curr)=>curr.fuel==fuel?[curr.model,...acc]:acc,[])
        
         arr1=arr1.filter(elem=>newcartmaster.find(val=>val==elem.model))
        console.log(arr1)
        
    }
    if(type){
        let newcartmaster=carMaster.reduce((acc,curr)=>curr.type==type?[curr.model,...acc]:acc,[])
        arr1=arr1.filter(elem=>newcartmaster.find(val=>val==elem.model))

    }
    if(sort=='kms'){
        arr1.sort((elem1,elem2)=>elem1.kms-elem2.kms)
    }
    if(sort=='price'){
        arr1.sort((elem1,elem2)=>elem1.price-elem2.price)
    }
    if(sort=='year'){
        arr1.sort((elem1,elem2)=>elem1.year-elem2.year)
    }

    
    res.send(arr1)
})
app.get('/cars/:id',function(req,res){
    let {id}=req.params
    let car=cars.find(elem=>elem.id==id)
    if(car){
        res.send(car)
    }
    else[
        res.status(404).send('no car found')
    ]
})
app.post('/car',function(req,res){
    let {body}=req
    cars.push(body)
    res.send(body)
})

app.put('/car/:id',function(req,res){
    let {body}=req
    let {id}=req.params
    let index=cars.findIndex(elem=>elem.id==id)
    if(index>=0){
        cars[index]=body
        res.send(body)
    }
    else{
        res.status(404).send('no car is found for editing')

    }
})





app.delete('/cars/:id',function(req,res){
    let {id}=req.params
    let index=cars.findIndex(elem=>elem.id==id)
    if(index>=0){
        let car=cars.splice(index,1)
        res.send(car)
    }
    else{
        res.status(404).send('not found data for deleting')
    }
})