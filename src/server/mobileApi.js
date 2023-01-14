let  express=require('express')
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

const port=2410
app.listen(port,()=>console.log(`Node app is listinng${port}`))
let {data}=require('./mobilesData')
app.get('/mobiles',function(req,res){
    let {brand,ram,rom,color}=req.query
    let arr1=data;
    if(brand){
        arr1=data.filter(elem=>elem.brand==brand)
    }
    if(color){
        arr1=arr1.filter(elem=>elem.colors.find(val=>val==color))

    }
    if(ram){
        arr1=arr1.filter(elem=>elem.RAM.find(val=>val==ram))

    }
    if(rom){
        arr1=arr1.filter(elem=>elem.ROM.find(val=>val==rom))
    }
    res.send(arr1)

})
app.get('/mobiles/:name',function(req,res){
    let {name}=req.params
    
    let mobile=data.find(elem=>elem.name==name)
    mobile?res.send(mobile):res.status(404).send('mobile not found')

})
app.get('/mobiles/brand/:brandname',function(req,res){
    let {brandname}=req.params
    let arr=data
    arr=arr.filter(elem=>elem.brand==brandname)
    res.send(arr)
})
app.get('/mobiles/color/:colorname',function(req,res){
    let {colorname}=req.params
    let arr=data
    arr=arr.filter(elem=>elem.colors.find(val=>val==colorname))
    res.send(arr)
})
app.get('/mobiles/RAM/:ramname',function(req,res){
    let {ramname}=req.params
    let arr=data
    arr=arr.filter(elem=>elem.RAM.find(val=>val==ramname))
    res.send(arr)
})
app.get('/mobiles/ROM/:romname',function(req,res){
    let {romname}=req.params
    console.log(romname)
    let arr=data
    arr=arr.filter(elem=>elem.ROM.find(val=>val==romname))
    res.send(arr)
})

