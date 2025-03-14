// console.log("My testing")
// const promises= new Promise(function(resolve,reject){

// })
/*

//first Question in Mantel
let area= (h,w) => h*w;
let hand=area(20,30)
console.log(`the area of my rectangle is = ${area(20,30)}`);
*/
//check if it is odd or even

/*
//Second Question in mental

function prodIdFunc(productIds) {
    // console.log( ...new Set(productIds));
    return [...new Set(productIds)];
}

const productIds = [101, 202, 303, 101, 404, 202, 505];
const uniqueProductIDs = prodIdFunc(productIds);

console.log(uniqueProductIDs); 
// END 
*/

class Products{
    constructor(name,price){
    this.name = name;
    this.price = price;
    }

    getDetails() {
        return `The product name is [ ${this.name} ], and name is [ ${this.price}]`;
    }
    
}

const myProd=new Products("Laptop Lenovo",15000000);


console.log(myProd.getDetails());

