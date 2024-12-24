//array
const myarr = [0,1,2,3]
const myheroes = ["khushi","mymom"]
const arr2 = new Array(1,2 ,3,4)
console.log(arr2[1])


//array methods 

// myarr.push(6)
// myarr.pop()
myarr.unshift(9)
console.log(myarr);

// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);