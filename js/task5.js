const arr = [1, 2, 3, 4, 5];
let i=0
let sum=0;
let pow=0;
const arr2 =[]
for(;i<arr.length;i++){
    pow =arr[i]*arr[i];
    arr2.push(pow);
    console.log('pow',pow)
}
for(let j=0; j<arr2.length; j++){
    sum+=arr2[j];
    console.log('sum',sum);
}
