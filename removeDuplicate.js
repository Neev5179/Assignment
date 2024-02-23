// let arry=[5,10,15,5,41,32];
let arry=['Mango',"Orange","papaya","Mango"]
let result=[];  
let dup=true;
console.log("array is",arry);

for(let i=0;i<arry.length;i++){
    if(result.includes(arry[i])!==dup){
    result.push(arry[i])
    }
}
console.log(typeof(result));
console.log("removerd dupicate array is",result);


//  using the spread operator second Way of remove the duplicate in array

let ary =['pink','red','yellow','orange','pink','red'];
console.log("original array",ary);
let removeDup=[...new Set(ary)];
console.log("Remove Duplicate in array",removeDup);

//Useing array iteration methods
let array = [1, 2, 3, 4, 2, 5, 6, 1];
console.log("array of original filter",array);
let resultArray=array.filter((val,index,data)=>{
return data.indexOf(val)==index;
})

console.log("Using Filter:", resultArray);
