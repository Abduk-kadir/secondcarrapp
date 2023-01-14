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
console.log('before fetching data')
let {data}=require('./productData.js')
console.log('after fetching data')

app.get('/products',function(req,res){
  
    let {category,maxprice,maxqty,minqty}=req.query
    let arr1=data
    if(category){
      arr1= arr1.filter(elem=>elem.category==category)
    }
    if(maxprice){
       arr1= arr1.filter(elem=>elem.price<=maxprice)
    }
    if(maxqty){
       arr1= arr1.filter(elem=>elem.quantity<=maxqty)

    } 
    if(minqty){
       arr1= arr1.filter(elem=>elem.quantity>=minqty)
    }
    console.log(arr1)
    res.send(arr1)
})
app.get('/products/:prod',function(req,res){
    let {prod}=req.params
    let product=data.find(elem=>elem.prod==prod)
     if(product){
        res.send(product)
    }
    else{
        res.status(404).send('product is not found')
    }

})
app.get('/products/category/:catName',function(req,res){
    let {catName}=req.params
    let fillarr=data.filter(elem=>elem.category==catName)
    res.send(fillarr)
})
app.get('/products/order/:sort',function(req,res){
    let {sort}=req.params
    console.log('amran')
    let data1=[...data]
    if(sort=='price'){
        data1.sort((elem1,elem2)=>elem1.price-elem2.price)
    }
    if(sort=='quantity'){
        data1.sort((elem1,elem2)=>elem1.quantity-elem2.quantity)
    }
    if(sort=='value'){
        data1.sort((elem1,elem2)=>(elem1.quantity*elem1.price)-(elem2.price*elem2.quantity))
    }
    res.send(data1)
})

app.post('/products',function(req,res){
    let {body}=req
    data.push(body)
    res.send(body)


})
app.put('/products/:prodname',function(req,res){

    let {prodname}=req.params
    let {body}=req
    let index=data.findIndex(elem=>elem.prod==prodname)
    console.log(prodname)
    console.log(index)
    console.log(body)
    if(index>=0){
        data[index]=body
        res.send(body)
    }
    else{
        res.status(404).send('no product found for editing')
    }
})
app.delete('/products/:prodname',function(req,res){
    let {prodname}=req.params
    let index=data.findIndex(elem=>elem.prod==prodname)
    if(index>=0){
       let prod= data.splice(index,1)
        
        res.send(prod)
    }
    else{
        res.status(404).send('no product found for deleting')
    }

})
