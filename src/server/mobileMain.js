
let {mobiles,brands,getMobileByModel,getMobileById}=require('./mobile.js')
let {orders}=require('./sales.js')
let js=getMobileById(4)

console.log(orders)

let totalorder=orders.reduce((acc,curr)=>js.id==curr.mobileId?acc+curr.quantity:acc,0)
console.log('total order is',totalorder)


