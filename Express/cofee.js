function placeOrder(drink){
    return new Promise (function (resolve, reject){
if(drink==='coffee'){
    resolve('Order for coffee is received')
}else{
    reject('Other order rejected')
}
    })
}

function processOrder(order){
return new Promise(function(resolve){
    console.log('orderPlaced');
    resolve(`${order} is served`);
    return orderIsProcessed
})
}


//Solution with promise

// placeOrder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
// }).then(function(processedOrder){
//     console.log(processedOrder);
// }).catch(function(err){
//     console.log(err);
// })

//Async Await = keywords
async function serverOrder(){
    let orderPlaced = await placeOrder('coffee')
    console.log(orderPlaced);
    let processedOrder = await processOrder(orderPlaced)
    console.log(processedOrder);
}

serverOrder();












