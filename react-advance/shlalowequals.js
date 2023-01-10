const arr1 = [1,2,3,4];
const arr2 = [1,2,3,4]
// this will giv e false bcz these are not shallow equals each other bcz these both are share diffrent addres in the memory

console.log(arr1 ===arr2);


// shallow copy eg :
const personA = [1,2,3,5 ,[12,3]];
const personB = personA
console.log(personA ===personB); // these two share same reffrencek