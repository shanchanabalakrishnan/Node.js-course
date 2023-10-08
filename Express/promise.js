//How to produce a promise

let myPromise = new Promise(function(resolve, reject){
    let a = 4
    let b = 5
    setTimeout(()=>{

   
    if(a===b){
        resolve('The Result are equal ')
    }else{
        reject('The result was not equal')
    }

}, 2000)

})
//pending state
//console.log(myPromise);

//fullfilledstate
myPromise.then(function(result){
console.log(result);
})

//REjected state
myPromise.catch(function(failedResult){
    console.log(failedResult);
})