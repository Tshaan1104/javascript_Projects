// console.log("Shan");
// const  a='shaan';
// let b='Tiwari';
// console.log("welcome to the platform "+a+" "+b);
const personarray=[11,22,33,44,5,6,4,65,7,45,56,54,45,65,76,87,766,54,45,56,56];
let max=-1;
for(let i=0;i<personarray.length;i++){
    if (personarray[i]>max) max=personarray[i];
}
console.log("max "+max);